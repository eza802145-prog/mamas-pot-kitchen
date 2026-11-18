import { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, MessageCircle, Send } from 'lucide-react';
import { getWhatsAppUrl } from '../data/business';

interface ContactFormProps {
  initialItem?: string;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  preferredDate: string;
  guestCount: string;
  interestedIn: string;
  message: string;
}

const SERVICE_OPTIONS = [
  'Home-Cooked Meals Order',
  'Small Chops Tray / Platter',
  'Birthday Catering',
  'Wedding & Event Catering',
  'Corporate / Office Meals',
  'Family Food Package',
  'General Food Enquiry',
];

function validatePhone(value: string): boolean {
  const digits = value.replace(/[\s\-()+]/g, '');
  return digits.length >= 7 && digits.length <= 15 && /^\d+$/.test(digits);
}

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function inferServiceFromItem(item: string): string {
  const lower = item.toLowerCase();
  if (lower.includes('small chops')) return 'Small Chops Tray / Platter';
  if (lower.includes('birthday')) return 'Birthday Catering';
  if (lower.includes('wedding')) return 'Wedding & Event Catering';
  if (lower.includes('corporate') || lower.includes('office')) return 'Corporate / Office Meals';
  if (lower.includes('family')) return 'Family Food Package';
  if (lower.includes('catering')) return 'Wedding & Event Catering';
  return '';
}

export function ContactForm({ initialItem = '' }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: inferServiceFromItem(initialItem),
    preferredDate: '',
    guestCount: '',
    interestedIn: initialItem,
    message: '',
  });

  useEffect(() => {
    if (initialItem) {
      setForm((prev) => ({
        ...prev,
        interestedIn: initialItem,
        serviceRequired: prev.serviceRequired || inferServiceFromItem(initialItem),
      }));
    }
  }, [initialItem]);

  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateAll = (): boolean => {
    const errors: Partial<Record<keyof FormState, string>> = {};

    if (form.fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name.';
    }
    if (!validatePhone(form.phone.trim())) {
      errors.phone = 'Please enter a valid phone or WhatsApp number (e.g. 08060677222).';
    }
    if (form.email.trim() && !validateEmail(form.email.trim())) {
      errors.email = 'Please enter a valid email address or leave it blank.';
    }
    if (!form.serviceRequired.trim()) {
      errors.serviceRequired = 'Please select the service you need.';
    }
    if (form.message.trim().length < 5) {
      errors.message = 'Please add a short message about your order or enquiry.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      "Hello Mama's Pot Kitchen, I would like to make an enquiry:",
      form.fullName ? `Name: ${form.fullName.trim()}` : null,
      form.phone ? `Phone: ${form.phone.trim()}` : null,
      form.serviceRequired ? `Service: ${form.serviceRequired}` : null,
      form.interestedIn ? `Food / Package: ${form.interestedIn.trim()}` : null,
      form.preferredDate ? `Preferred Date: ${form.preferredDate}` : null,
      form.guestCount ? `Estimated Guests: ${form.guestCount}` : null,
      form.message ? `Details: ${form.message.trim()}` : null,
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    if (!validateAll()) {
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          serviceRequired: form.serviceRequired,
          preferredDate: form.preferredDate,
          guestCount: form.guestCount.trim(),
          interestedIn: form.interestedIn.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.fieldErrors && typeof data.fieldErrors === 'object') {
          setFieldErrors(data.fieldErrors);
        }
        setServerError(
          data.error ||
            'Unable to submit right now. You can send your enquiry directly on WhatsApp below.'
        );
        setStatus('error');
        return;
      }

      setReferenceId(data.referenceId || '');
      setStatus('success');
    } catch {
      setServerError(
        'Could not reach the server. Please use the WhatsApp Enquiry Fallback button below to send your details directly.'
      );
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-[#173F35]/20 bg-white p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#173F35]" aria-hidden="true" />
          <div>
            <h3 className="font-serif text-2xl font-semibold text-[#173F35]">
              Enquiry Received
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#252525]/80">
              Thank you, <span className="font-semibold">{form.fullName}</span>. Your order
              enquiry has been saved
              {referenceId ? (
                <>
                  {' '}
                  under reference{' '}
                  <span className="font-semibold text-[#173F35] tabular-nums">{referenceId}</span>
                </>
              ) : null}
              . We will respond using your phone number ({form.phone}).
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-[#173F35]/10 pt-5 sm:flex-row">
          <a
            href={getWhatsAppUrl(buildWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C66B45] px-5 py-2.5 text-sm font-semibold text-[#FFF8EF] transition-colors hover:bg-[#AE5733]"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Also Send on WhatsApp for Faster Reply</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setReferenceId('');
              setForm({
                fullName: '',
                phone: '',
                email: '',
                serviceRequired: '',
                preferredDate: '',
                guestCount: '',
                interestedIn: '',
                message: '',
              });
            }}
            className="inline-flex items-center justify-center rounded-lg border border-[#173F35]/20 px-5 py-2.5 text-sm font-medium text-[#173F35] hover:bg-[#F7EFE3]"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-[#173F35]/12 bg-white p-6 sm:p-8"
    >
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-semibold text-[#173F35] sm:text-3xl">
          Send an Order or Catering Enquiry
        </h2>
        <p className="mt-1.5 text-sm text-[#252525]/75">
          Share what you would like to order or the details of your upcoming event.
        </p>
      </div>

      {status === 'error' && serverError && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-lg border border-[#C66B45]/40 bg-[#C66B45]/10 p-4 text-sm text-[#252525]"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#C66B45]" aria-hidden="true" />
          <div className="space-y-2">
            <p className="font-medium text-[#173F35]">{serverError}</p>
            <a
              href={getWhatsAppUrl(buildWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#C66B45] underline underline-offset-4 hover:text-[#AE5733]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Open Prefilled WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-[#173F35]"
          >
            Full Name <span className="text-[#C66B45]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            placeholder="e.g. Chinedu Okafor"
            className="mt-1.5 w-full rounded-lg border border-[#173F35]/20 bg-[#FFF8EF]/50 px-3.5 py-2.5 text-sm text-[#252525] placeholder:text-[#252525]/45 focus:border-[#173F35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173F35]/20"
          />
          {fieldErrors.fullName && (
            <p className="mt-1 text-xs font-medium text-[#C66B45]">{fieldErrors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[#173F35]"
          >
            Phone / WhatsApp Number <span className="text-[#C66B45]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="e.g. 08060677222"
            className="mt-1.5 w-full rounded-lg border border-[#173F35]/20 bg-[#FFF8EF]/50 px-3.5 py-2.5 text-sm text-[#252525] tabular-nums placeholder:text-[#252525]/45 focus:border-[#173F35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173F35]/20"
          />
          {fieldErrors.phone && (
            <p className="mt-1 text-xs font-medium text-[#C66B45]">{fieldErrors.phone}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#173F35]"
          >
            Email Address <span className="text-xs font-normal text-[#252525]/60">(Optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-lg border border-[#173F35]/20 bg-[#FFF8EF]/50 px-3.5 py-2.5 text-sm text-[#252525] placeholder:text-[#252525]/45 focus:border-[#173F35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173F35]/20"
          />
          {fieldErrors.email && (
            <p className="mt-1 text-xs font-medium text-[#C66B45]">{fieldErrors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="serviceRequired"
            className="block text-sm font-medium text-[#173F35]"
          >
            Service Required <span className="text-[#C66B45]">*</span>
          </label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            required
            value={form.serviceRequired}
            onChange={(e) => updateField('serviceRequired', e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-[#173F35]/20 bg-[#FFF8EF]/50 px-3.5 py-2.5 text-sm text-[#252525] focus:border-[#173F35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173F35]/20"
          >
            <option value="">Select a service...</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldErrors.serviceRequired && (
            <p className="mt-1 text-xs font-medium text-[#C66B45]">
              {fieldErrors.serviceRequired}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="preferredDate"
            className="block text-sm font-medium text-[#173F35]"
          >
            Preferred Event / Delivery Date
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={(e) => updateField('preferredDate', e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-[#173F35]/20 bg-[#FFF8EF]/50 px-3.5 py-2.5 text-sm text-[#252525] tabular-nums focus:border-[#173F35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173F35]/20"
          />
        </div>

        <div>
          <label
            htmlFor="guestCount"
            className="block text-sm font-medium text-[#173F35]"
          >
            Number of Guests
          </label>
          <input
            id="guestCount"
            name="guestCount"
            type="number"
            min="1"
            value={form.guestCount}
            onChange={(e) => updateField('guestCount', e.target.value)}
            placeholder="e.g. 50"
            className="mt-1.5 w-full rounded-lg border border-[#173F35]/20 bg-[#FFF8EF]/50 px-3.5 py-2.5 text-sm text-[#252525] tabular-nums placeholder:text-[#252525]/45 focus:border-[#173F35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173F35]/20"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="interestedIn"
            className="block text-sm font-medium text-[#173F35]"
          >
            Food or Package Interested In
          </label>
          <input
            id="interestedIn"
            name="interestedIn"
            type="text"
            value={form.interestedIn}
            onChange={(e) => updateField('interestedIn', e.target.value)}
            placeholder="e.g. Jollof Rice, Small Chops Platter, Birthday Catering Package"
            className="mt-1.5 w-full rounded-lg border border-[#173F35]/20 bg-[#FFF8EF]/50 px-3.5 py-2.5 text-sm text-[#252525] placeholder:text-[#252525]/45 focus:border-[#173F35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173F35]/20"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#173F35]"
          >
            Additional Message <span className="text-[#C66B45]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={form.message}
            onChange={(e) => updateField('message', e.target.value)}
            placeholder="Tell us about your preferred dishes, portion sizes, delivery area in Lagos, or event notes..."
            className="mt-1.5 w-full rounded-lg border border-[#173F35]/20 bg-[#FFF8EF]/50 px-3.5 py-2.5 text-sm text-[#252525] placeholder:text-[#252525]/45 focus:border-[#173F35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173F35]/20"
          />
          {fieldErrors.message && (
            <p className="mt-1 text-xs font-medium text-[#C66B45]">{fieldErrors.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#173F35] px-6 py-2.5 text-sm font-semibold text-[#FFF8EF] transition-colors hover:bg-[#102D26] disabled:cursor-not-allowed disabled:opacity-65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Sending Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>Submit Enquiry</span>
            </>
          )}
        </button>

        <a
          href={getWhatsAppUrl(buildWhatsAppMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#C66B45] px-5 py-2.5 text-sm font-semibold text-[#C66B45] transition-colors hover:bg-[#C66B45]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C66B45]"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Send via WhatsApp Instead</span>
        </a>
      </div>
    </form>
  );
}
