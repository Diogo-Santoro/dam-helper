import { Badge } from '@/components/atoms/Badge';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header className="organism-navbar">
      <div className="organism-navbar__container">
        <div className="organism-navbar__brand">
          <span className="organism-navbar__logo">📚</span>
          <span className="organism-navbar__title">DAM Hub</span>
          <Badge variant="accent">1º DAM</Badge>
        </div>
        <nav className="organism-navbar__nav">
          <a
            href="https://github.com/Diogo-Santoro/dam-helper"
            target="_blank"
            rel="noreferrer"
            className="organism-navbar__link"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
};
