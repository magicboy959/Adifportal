'use client';

import { useEffect, useState } from 'react';
import AdminNav from '@/components/admin-nav';

interface Publication {
  id: string;
  title: string;
  type: string;
  date: string;
  topic: string;
  excerpt: string;
  language: string;
}

export default function AdminPublications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    title: '',
    type: '',
    date: '',
    topic: '',
    excerpt: '',
    language: 'en',
  });

  useEffect(() => {
    fetchPublications();
  }, []);

  async function fetchPublications() {
    try {
      const response = await fetch('/api/admin/publications');
      if (!response.ok) {
        throw new Error('Failed to load publications');
      }
      setPublications(await response.json());
    } catch (err) {
      console.error(err);
      setError('Unable to load publications.');
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/admin/publications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create publication');
      }

      setForm({ title: '', type: '', date: '', topic: '', excerpt: '', language: 'en' });
      await fetchPublications();
    } catch (err) {
      console.error(err);
      setError((err as Error).message || 'Failed to add publication.');
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
      <AdminNav active="/admin/publications" />
      <div className="max-w-7xl mx-auto space-y-6">
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900">Publications</h2>
          <p className="mt-1 text-sm text-gray-600">Manage publication entries stored in the database.</p>
        </section>

        <section className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">Add Publication</h3>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Title</span>
              <input
                value={form.title}
                onChange={(event) => setForm({ ...form, title: event.target.value })}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Type</span>
              <input
                value={form.type}
                onChange={(event) => setForm({ ...form, type: event.target.value })}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Date</span>
              <input
                type="date"
                value={form.date}
                onChange={(event) => setForm({ ...form, date: event.target.value })}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Language</span>
              <select
                value={form.language}
                onChange={(event) => setForm({ ...form, language: event.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-gray-700">Topic</span>
              <input
                value={form.topic}
                onChange={(event) => setForm({ ...form, topic: event.target.value })}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-gray-700">Excerpt</span>
              <textarea
                value={form.excerpt}
                onChange={(event) => setForm({ ...form, excerpt: event.target.value })}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Add Publication
              </button>
            </div>
          </form>
        </section>

        <section className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">Publication List</h3>
          {loading ? (
            <p className="mt-4 text-sm text-gray-500">Loading publications...</p>
          ) : (
            <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {publications.map((publication) => (
                    <tr key={publication.id}>
                      <td className="px-4 py-3 text-sm text-gray-900">{publication.title}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{publication.type}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{publication.date}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{publication.language}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
