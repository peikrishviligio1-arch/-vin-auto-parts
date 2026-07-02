import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VIN AUTO PARTS',
  description: 'ავტონაწილების ქართული marketplace VIN, OEM და ნაწილის სახელით ძებნით.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}
