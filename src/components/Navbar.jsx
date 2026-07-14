import "../assets/styles/components/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo">
          <div className="logo-text">
            amazon<span className="dot-com">.com.be</span>
          </div>
          <svg className="smile" viewBox="0 0 100 20">
            <path
              d="M5,5 Q50,25 95,5"
              stroke="#ff9900"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </Link>

        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Rechercher Amazon.com.be"
          />
          <button className="search-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#131921">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z" />
            </svg>
          </button>
        </div>

        <Link to="/login" className="account">
          <div className="line1">Bonjour, Identifiez-vous</div>
          <div className="line2">Compte et listes ▾</div>
        </Link>

        <Link to="/cart" className="cart">
          <span className="cart-count">0</span>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="#fff">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          <span className="cart-label">Panier</span>
        </Link>
      </div>
    </>
  );
};
