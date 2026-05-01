const API = import.meta.env.VITE_API_URL || '/api';

function headers(token?: string | null) {
  const h: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) h['Authorization'] = `Bearer ${token}`;
  return h;
}

export const api = {
  // Auth
  login: (email: string, password: string) =>
    fetch(`${API}/auth/login`, { method: 'POST', headers: headers(), body: JSON.stringify({ email, password }) }).then(r => {
      if (!r.ok) throw new Error('Login failed');
      return r.json();
    }),

  // Destinations  
  getDestinations: () => fetch(`${API}/destinations`).then(r => r.json()),
  createDestination: (data: any, token: string) =>
    fetch(`${API}/destinations`, { method: 'POST', headers: headers(token), body: JSON.stringify(data) }).then(r => r.json()),
  updateDestination: (id: string, data: any, token: string) =>
    fetch(`${API}/destinations/${id}`, { method: 'PUT', headers: headers(token), body: JSON.stringify(data) }).then(r => r.json()),
  deleteDestination: (id: string, token: string) =>
    fetch(`${API}/destinations/${id}`, { method: 'DELETE', headers: headers(token) }).then(r => r.json()),

  // Page Content
  getContent: (page: string) => fetch(`${API}/content/${page}`).then(r => r.json()),
  updateContent: (page: string, data: any, token: string) =>
    fetch(`${API}/content/${page}`, { method: 'PUT', headers: headers(token), body: JSON.stringify(data) }).then(r => r.json()),

  // Upload
  upload: (file: File, folder: string, token: string) => {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('folder', folder);
    return fetch(`${API}/upload`, { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: fd }).then(r => r.json());
  },
};
