import { json, createCookieSessionStorage } from '@remix-run/node';

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
    sameSite: 'lax',
    secrets: [process.env.SESSION_SECRET || 'dev-secret'],
    secure: process.env.NODE_ENV === 'production',
  },
});

export async function action({ request }) {
  const formData = await request.formData();
  const theme = formData.get('theme');

  const session = await sessionStorage.getSession(
    request.headers.get('Cookie')
  );

  session.set('theme', theme);

  return json(
    { status: 'success' },
    {
      headers: {
        'Set-Cookie': await sessionStorage.commitSession(session),
      },
    }
  );
}
