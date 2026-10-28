import type { ReactNode } from 'react';
import { Navbar } from '@/components/organisms/Navbar';
import './MainLayout.css';

export interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="template-main-layout">
      <Navbar />
      <main className="template-main-layout__content">{children}</main>
      <footer className="template-main-layout__footer">
        <p>📚 DAM Hub — Hecho por y para la clase de 1º DAM</p>
      </footer>
    </div>
  );
};
