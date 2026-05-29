'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

interface Publication {
  id: string;
  title: string;
  type: string;
  date: string;
  topic: string;
  language: string;
}

interface MediaItem {
  id: string;
  title: string;
  type: string;
  language: string;
}

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [publications, setPublications] = useState<Publication[]>([]);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const [pubsRes, mediaRes, inquiriesRes] = await Promise.all([
        fetch('/api/publications'),
        fetch('/api/media'),
        fetch('/api/inquiries'),
      ]);

      if (pubsRes.ok) setPublications(await pubsRes.json());
      if (mediaRes.ok) setMedia(await mediaRes.json());
      if (inquiriesRes.ok) setInquiries(await inquiriesRes.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('publications')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'publications'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Publications ({publications.length})
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'media'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Media ({media.length})
            </button>
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'inquiries'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Contact Inquiries ({inquiries.length})
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="mt-6">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading...</p>
            </div>
          ) : (
            <>
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Total Publications
                      </dt>
                      <dd className="mt-1 text-3xl font-extrabold text-gray-900">
                        {publications.length}
                      </dd>
                    </div>
                  </div>
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Total Media Items
                      </dt>
                      <dd className="mt-1 text-3xl font-extrabold text-gray-900">
                        {media.length}
                      </dd>
                    </div>
                  </div>
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Contact Inquiries
                      </dt>
                      <dd className="mt-1 text-3xl font-extrabold text-gray-900">
                        {inquiries.length}
                      </dd>
                    </div>
                  </div>
                </div>
              )}

              {/* Publications Tab */}
              {activeTab === 'publications' && (
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {publications.map((pub) => (
                      <li key={pub.id} className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {pub.title}
                            </p>
                            <p className="text-sm text-gray-500">
                              {pub.type} • {pub.date} • {pub.language}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Media Tab */}
              {activeTab === 'media' && (
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {media.map((item) => (
                      <li key={item.id} className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {item.title}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.type} • {item.language}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Inquiries Tab */}
              {activeTab === 'inquiries' && (
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {inquiries.map((inquiry) => (
                      <li key={inquiry.id} className="px-4 py-4 sm:px-6">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {inquiry.name} ({inquiry.email})
                          </p>
                          <p className="mt-1 text-sm text-gray-600">
                            {inquiry.message}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            {new Date(inquiry.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
