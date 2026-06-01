'use client';

import { useEffect, useState } from 'react';
import AdminNav from '@/components/admin-nav';

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  organization?: string;
  interest?: string;
  message: string;
  locale: string;
  createdAt: string;
}

export default function AdminContacts() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchInquiries();
  }, []);

  async function fetchInquiries() {
    try {
      const response = await fetch('/api/admin/contacts');
      if (!response.ok) {
        throw new Error('Failed to load contact inquiries');
      }
      setInquiries(await response.json());
    } catch (err) {
      console.error(err);
      setError('Unable to load contact inquiries.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
      <AdminNav active="/admin/contacts" />
      <div className="max-w-7xl mx-auto space-y-6">
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900">Contact Inquiries</h2>
          <p className="mt-1 text-sm text-gray-600">Review inbound public inquiries submitted through the site.</p>
        </section>

        <section className="bg-white shadow rounded-lg p-6">
          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
          {loading ? (
            <p className="text-sm text-gray-500">Loading inquiries...</p>
          ) : (
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <ul className="divide-y divide-gray-200 bg-white">
                {inquiries.map((inquiry) => (
                  <li key={inquiry.id} className="px-4 py-4 sm:px-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-900">
                        <span>{inquiry.name}</span>
                        <span className="text-gray-500">({inquiry.email})</span>
                        <span className="text-gray-400">•</span>
                        <span>{new Date(inquiry.createdAt).toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-600">{inquiry.message}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
