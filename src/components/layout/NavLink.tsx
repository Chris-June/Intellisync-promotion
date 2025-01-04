import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  tooltip?: string;
}

export function NavLink({ href, children, tooltip }: NavLinkProps) {
  return (
    <div className="relative group">
      <a
        href={href}
        className="text-gray-100 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50"
      >
        {children}
      </a>
      {tooltip && (
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-700">
          {tooltip}
        </div>
      )}
    </div>
  );
}