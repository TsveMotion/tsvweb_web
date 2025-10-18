// app/layout.js
import './globals.css';

export const metadata = {
  title: 'TsvWeb',
  description: 'TsvWeb - Visit us at tsvweb.co.uk',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
