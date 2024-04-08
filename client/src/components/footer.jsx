import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />

      <span>
        Made with love <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
