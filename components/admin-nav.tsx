'use client';

import Link from 'next/link';

interface AdminNavProps {
  active: string;
}

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/publications', label: 'Publications' },
  { href: '/admin/media', label: 'Media' },
  { href: '/admin/contacts', label: 'Contacts' },
  { href: '/admin/users', label: 'Users' },
];

export default function AdminNav({ active }: AdminNavProps) {
  return (
    <nav className="mb-6 flex flex-wrap gap-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            active === item.href
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
