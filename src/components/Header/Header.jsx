import s from './Header.module.css';
import logo from '../../images/57180.png';


const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" className={s.header_logo} />
      <span className={s.header_title}>Tic-Tac-Toe</span>
      {/* <button className={s.fs_btn}> </button> */}
    </header>
  );
};

export default Header;