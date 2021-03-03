import s from "./Footer.module.css";
import logo from "../../images/rs_school_js.svg";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_resource}>
        <a href="https://rs.school/js/" target="_blank">
          <img src={logo} alt="logo" className={s.footer_logo} />
        </a>
      </div>
      <div className={s.footer_resource}>
        <a href="https://github.com/Frtn0717" target="_blank">
          <span className={s.footer_author}> Creator </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
