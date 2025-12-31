import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
  useNavigation,
  useRouteError,
} from "@remix-run/react";

import { json, createCookieSessionStorage } from "@remix-run/node";
import { useEffect } from "react";

import { ThemeProvider, themeStyles } from "~/components/theme-provider";
import { Error } from "~/layouts/error";
import { VisuallyHidden } from "~/components/visually-hidden";
import { Navbar } from "~/layouts/navbar";
import { Progress } from "~/components/progress";

import GothamBook from "~/assets/fonts/gotham-book.woff2";
import GothamMedium from "~/assets/fonts/gotham-medium.woff2";

import config from "~/config.json";

import styles from "./root.module.css";
import "./reset.module.css";
import "./global.module.css";

/* -------------------- LINKS -------------------- */
export const links = () => [
  {
    rel: "preload",
    href: GothamMedium,
    as: "font",
    type: "font/woff2",
    crossOrigin: "",
  },
  {
    rel: "preload",
    href: GothamBook,
    as: "font",
    type: "font/woff2",
    crossOrigin: "",
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "shortcut icon", href: "/shortcut.png", type: "image/png", sizes: "64x64" },
  { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" },
  { rel: "author", href: "/humans.txt", type: "text/plain" },
];

/* -------------------- SESSION -------------------- */
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    secrets: [process.env.SESSION_SECRET || "dev-secret"],
    secure: process.env.NODE_ENV === "production",
  },
});

/* -------------------- LOADER -------------------- */
export const loader = async ({ request }) => {
  const { pathname } = new URL(request.url);
  const cleanPath =
    pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

  const canonicalUrl = `${config.url}${cleanPath}`;

  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const theme = session.get("theme") || "dark";

  return json(
    { canonicalUrl, theme },
    {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(session),
      },
    }
  );
};

/* -------------------- APP -------------------- */
export default function App() {
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();

  if (fetcher.formData?.has("theme")) {
    theme = fetcher.formData.get("theme");
  }

  function toggleTheme(nextTheme) {
    fetcher.submit(
      { theme: nextTheme ?? (theme === "dark" ? "light" : "dark") },
      { action: "/api/set-theme", method: "post" }
    );
  }

  useEffect(() => {
    console.info(
      `${config.ascii}\n`,
      `Source code → ${config.repo}\n`
    );
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="theme-color"
          content={theme === "dark" ? "#111" : "#F2F2F2"}
        />
        <meta
          name="color-scheme"
          content={theme === "light" ? "light dark" : "dark light"}
        />

        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <Meta />
        <Links />
        <link rel="canonical" href={canonicalUrl} />
      </head>

      <body data-theme={theme}>
        <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
          <Progress />

          <VisuallyHidden
            showOnFocus
            as="a"
            className={styles.skip}
            href="#main-content"
          >
            Skip to main content
          </VisuallyHidden>

          <Navbar />

          <main
            id="main-content"
            className={styles.container}
            tabIndex={-1}
            data-loading={state === "loading"}
          >
            <Outlet />
          </main>
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/* -------------------- ERROR BOUNDARY -------------------- */
export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111" />
        <meta name="color-scheme" content="dark light" />

        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <Meta />
        <Links />
      </head>

      <body data-theme="dark">
        <Error error={error} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
