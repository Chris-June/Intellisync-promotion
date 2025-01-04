import React, { useEffect } from 'react';
import { X, Mail } from 'lucide-react';
import { BorderTrail } from '@/components/core/border-trail';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  onContactUs?: () => void;
  onContactClick?: () => void;
}

export function Modal({ isOpen, onClose, children, title, onContactUs, onContactClick }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999]" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl rounded-2xl bg-gray-800 border border-gray-700 shadow-xl z-[10000] overflow-hidden">
          <BorderTrail 
            className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 opacity-50"
            size={120}
          />
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <div className="flex items-center space-x-2">
              {onContactUs && (
                <button
                  onClick={onContactUs}
                  className="rounded-lg px-3 py-1.5 text-emerald-400 border border-emerald-400 hover:bg-emerald-400/10 transition-colors mr-2"
                >
                  Contact Us
                </button>
              )}
              {onContactClick && (
                <button
                  onClick={onContactClick}
                  className="rounded-lg p-1.5 text-emerald-400 hover:bg-gray-700 hover:text-emerald-300 transition-colors mr-2"
                >
                  <Mail className="h-5 w-5" />
                </button>
              )}
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}