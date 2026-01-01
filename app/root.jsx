import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useFetcher,
  useNavigation,
  useRouteError,
} from '@remix-run/react';

import { json, createCookieSessionStorage } from '@remix-run/node';
import { ThemeProvider, themeStyles } from '~/components/theme-provider';
import { Error } from '~/layouts/error';
import { Navbar } from '~/layouts/navbar';
import { Progress } from '~/components/progress';
import { VisuallyHidden } from '~/components/visually-hidden';

import config from '~/config.json';
import styles from './root.module.css';
import './reset.module.css';
import './global.module.css';

export const loader = async ({ request }) => {
  const sessionStorage = createCookieSessionStorage({
    cookie: {
      name: '__session',
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secrets: ['dev-secret'],
      secure: process.env.NODE_ENV === 'production',
    },
  });

  const session = await sessionStorage.getSession(
    request.headers.get('Cookie')
  );

  const theme = session.get('theme') ?? 'dark';

  return json({ theme });
};

export default function App() {
  const { theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <Meta />
        <Links />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
      </head>
      <body data-theme={theme}>
        <ThemeProvider theme={theme}>
          <Progress />
          <VisuallyHidden showOnFocus as="a" href="#main-content">
            Skip to content
          </VisuallyHidden>
          <Navbar />
          <main id="main-content" data-loading={state === 'loading'}>
            <Outlet />
          </main>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <Error error={error} />;
}
