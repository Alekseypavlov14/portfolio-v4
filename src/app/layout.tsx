import { fontFamilyCSSVariablesInjector } from '@/shared/styles/fonts'
import type { Metadata } from "next"
import "./globals.scss"

export const metadata: Metadata = {
  title: "Oleksii Pavlov | Frontend Developer"
}

// prevents fetch cache by default
export const fetchCache = 'default-no-store'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontFamilyCSSVariablesInjector}>
        {children}
      </body>
    </html>
  );
}
