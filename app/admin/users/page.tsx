'use client';

import { useEffect, useState } from 'react';
import AdminNav from '@/components/admin-nav';

interface AdminUser {
  id: string;
  email: string;
  role: string;
  createdAt: string;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch('/api/admin/users');
      if (!response.ok) {
        throw new Error('Failed to load users');
      }
      setUsers(await response.json());
    } catch (err) {
      console.error(err);
      setError('Unable to load users.');
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create user');
      }

      setForm({ email: '', password: '' });
      await fetchUsers();
    } catch (err) {
      console.error(err);
      setError((err as Error).message || 'Failed to add user.');
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
      <AdminNav active="/admin/users" />
      <div className="max-w-7xl mx-auto space-y-6">
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900">Admin Users</h2>
          <p className="mt-1 text-sm text-gray-600">Create and review admin user accounts.</p>
        </section>

        <section className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">Add Admin User</h3>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-gray-700">Password</span>
              <input
                type="password"
                value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Add User
              </button>
            </div>
          </form>
        </section>

        <section className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">Existing Users</h3>
          {loading ? (
            <p className="mt-4 text-sm text-gray-500">Loading users...</p>
          ) : (
            <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-4 py-3 text-sm text-gray-900">{user.email}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{user.role}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{new Date(user.createdAt).toLocaleDateString()}</td>
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
