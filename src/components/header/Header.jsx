import React from 'react';
import './styles.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">HFC</a>
        </div>
        <nav className="navigation">
          <a href="#">O nás</a>

          <a href="#">Fotogalerie</a>

          <a href="#">Aktuality</a>

          <a href="#">Rozcestník</a>

          <a href="/entryform">Vstupní formulář</a>
        </nav>
      </div>
    </header>
  );
}
