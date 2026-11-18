import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/business';

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'forest';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppButton({
  label = 'Order on WhatsApp',
  message,
  variant = 'primary',
  size = 'md',
  className = '',
  showIcon = true,
}: WhatsAppButtonProps) {
  const variantClasses = {
    primary:
      'bg-[#C66B45] text-[#FFF8EF] hover:bg-[#AE5733] focus-visible:ring-[#C66B45]',
    forest:
      'bg-[#173F35] text-[#FFF8EF] hover:bg-[#102D26] focus-visible:ring-[#173F35]',
    secondary:
      'bg-[#FFF8EF] text-[#173F35] border border-[#173F35]/20 hover:bg-[#F7EFE3] focus-visible:ring-[#173F35]',
    outline:
      'border border-[#C6A15B] text-[#FFF8EF] hover:bg-[#C6A15B]/15 focus-visible:ring-[#C6A15B]',
  }[variant];

  const sizeClasses = {
    sm: 'px-3.5 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-sm sm:text-base',
  }[size];

  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses} ${sizeClasses} ${className}`}
    >
      {showIcon && <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />}
      <span>{label}</span>
    </a>
  );
}
