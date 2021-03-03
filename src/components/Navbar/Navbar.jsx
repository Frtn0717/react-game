import s from './Navbar.module.css';




const Navbar = () => {

  return (
    <nav className={s.nav}>
      {/* <div className={s.nav_symbol}>
        <span>Choose your symbol: </span> <br />
        <label><input type="radio" name="symbol" value="rad1" checked /> Cross </label>
        <label><input type="radio" name="symbol" value="rad2" /> Circle </label>
      </div> */}
      {/* <div className={s.nav_difficulty}>
        <span>Difficulty: </span>
        <input type="button" className={s.nav_difficulty_btn} value="Normal" />
      </div> */}
      {/* <div className={s.nav_score}> */}
        {/* <p>Score: </p>
        <span> Hero: </span> <span className={s.hero_score}>  </span> <br />
        <span> Enemy: </span>  <span className={s.enemy_score}>  </span>
      </div> */}
      <div>
        <button className={s.nav_game_btn} >
          New Game
        </button>
      </div>

    </nav>


  );
};

export default Navbar;