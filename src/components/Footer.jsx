import { Link } from "react-router-dom";
import "../assets/styles/components/footer.css"

export const Footer = () => {
  return (
    <footer className="amazon-footer">
      {/* Barre "Retourner en haut" */}
      <div onClick={()=>window.scrollTo({top:0})} className="back-to-top">
        Retourner en haut
      </div>

      {/* Logo Amazon uniquement */}
      <div className="footer-logo-bar">
        <Link to="/" className="footer-logo">
          <div className="footer-logo-text">amazon</div>
          <svg className="footer-smile" viewBox="0 0 100 20">
            <path
              d="M5,5 Q50,25 95,5"
              stroke="#ff9900"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
      <div className="footer-copyright">
        <p>© 1996-2026, Amazon.com Inc. ou ses affiliés</p>
      </div>
    </footer>
  );
};
