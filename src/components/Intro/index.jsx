import './style.css';

const Intro = () => {
  return (
    <section className="intro">
      <div className="hero-image"></div>
      <div className="intro-content">
        <div className="intro-container">
          <h1 className="intro-title">IT girl</h1>
          <h3 className="intro-subtitle">
            Welcome to my little corner of the Web!
          </h3>
          <p className="intro-text">
            Hi! I'm Petra - an IT girl. I have transitioned into the world of
            Tech about two years ago and I have decided to create a space where
            I could share my thoughts and experiences that I gained along the
            way. And maybe even inspire some other potential IT girls to give it
            a try.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
