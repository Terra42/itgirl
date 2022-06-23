import './style.css';
import instagram from './img/instagram.png';
import youtube from './img/youtube.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="https://www.instagram.com/zemape42/">
          <img src={instagram} alt="Instagram icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCIlds53EkKDZvxlhkfzyB6Q">
          <img src={youtube} alt="Youtube icon" />
        </a>
      </div>
      <div className="footer-container">
        <div className="copyright">
          <p>&copy; 2022 by Petra Zemanová</p>
        </div>
        <details className="attributions">
          <summary>Attributions</summary>
          <ul>
            <li>
              <a
                href="https://www.flaticon.com/free-icons/instagram"
                title="instagram icons"
              >
                Instagram icons created by edt.im - Flaticon
              </a>
            </li>
            <li>
              <a
                href="https://www.flaticon.com/free-icons/youtube"
                title="youtube icons"
              >
                Youtube icons created by Freepik - Flaticon
              </a>
            </li>
          </ul>
        </details>
      </div>
    </footer>
  );
};

export default Footer;
