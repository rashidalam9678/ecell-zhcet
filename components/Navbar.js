import styles from "../styles/landingpage.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react";
import {useRouter} from "next/router"

const Navbar = () => {
  // const router= useRouter()
  const [showmenu, setShowmenu] = useState(false)

  return (
    <header className={styles.navbar_container}>
      <nav className={styles.navbar}>
        <div>
          <a href="#"> <img className={styles.imgEDClogo_Nav} src="/images/EDC LOGO .png" alt="Error" />
          </a>
        </div>

        <div id="flex_containerNav" className={styles.flex_containerNav}>
          <div><a className={styles.active_home_btn} href="/"> Home</a></div>
          <div> <a className={styles.active_home_btn} href="/events">Events</a></div>
          <div> <a className={styles.active_home_btn} href="/member/registration"> Join us</a></div>
          <div> <a className={styles.active_home_btn} href="/team">Team </a></div>
          <div> <a className={styles.active_home_btn} href="#contact"> Contact </a></div>
        </div>
        <div className={styles.amu_logo}>
          <a href="https://www.amu.ac.in/" target="_blank"> <img className={styles.imgAmulogo_Nav} src="/images/Amulogo.png" alt="Error" />
          </a>
        </div>
        {!showmenu &&
          <div onClick={() => { setShowmenu(!showmenu) }}>
            <MenuIcon className={styles.hamburger_icon1} />
          </div>}

        {showmenu &&
          <>

            <div className={styles.mobile_navbar}>
              <div onClick={() => { setShowmenu(!showmenu) }}>
                <CancelIcon className={styles.hamburger_icon2} />
              </div>
              <div className={styles.mobile_menu}>
                <div><a className={styles.active_home_btn} href="/"> Home</a></div>
                <div> <a className={styles.active_home_btn} href="/events">Events</a></div>
                <div> <a className={styles.active_home_btn} href="/member/registration"> Join us</a></div>
                <div> <a className={styles.active_home_btn} href="/team">Team </a></div>
                <div> <a className={styles.active_home_btn} href="#contact"> Contact</a></div>
              </div>
            </div>
          </>
        }
      </nav>
    </header>
  )
}

export default Navbar