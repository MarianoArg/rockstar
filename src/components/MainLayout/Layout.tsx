import Header from '@/components/Header';
import React from 'react';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

export default function MainLayout({ children }: Props) {
  return (
    <main className="flex flex-col w-full min-h-screen overflow-hidden">
      <Header />
      {children}
    </main>
  );
}
