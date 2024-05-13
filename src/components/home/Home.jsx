import Header from '../header/Header';
import logo from './logo.png';
import './styles.css';

export function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <img src={logo} alt="logo" />
        <h1>Pohyb je lék!</h1>
        <a href="/entryform">
          <button>Začít</button>
        </a>
      </div>
    </div>
  );
}
