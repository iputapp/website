import React from 'react';

import Footer from '@/components/view/footer';
import Header from '@/components/view/header';


export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </body>
  );
}