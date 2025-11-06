//It’s your RootLayout — the main wrapper where all global providers and configurations are initialized.

"use client";

import "@/app/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider as JotaiProvider } from "jotai";
import { AuthProvider } from "@/context/AuthContext";
import Navigation from "@/components/Navigation";
import { queryClient } from "@/lib/queryClient";
import { ThemeProvider } from "@/components/themeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProvider client={queryClient}>
            <JotaiProvider>
              <AuthProvider>
                <Navigation />
                <main className="flex justify-center p-6">{children}</main>
              </AuthProvider>
              <ReactQueryDevtools initialIsOpen={false} />
            </JotaiProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
