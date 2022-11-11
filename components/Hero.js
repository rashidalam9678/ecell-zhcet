import styles from "../styles/landingpage.module.css"
const Hero = () => {
    return (
        <div className={styles.hero_container}>
            <div>
                <img class={styles.hero_logo} src="/images/EDC_LOGO_W.png" alt="Error" />
            </div>
            <div id="Videotext" className={styles.hero_text}>
                <h1 className={styles.hero_text1}>ENTREPRENEURSHIP DEVELOPMENT CELL </h1>
                <h2 className={styles.hero_text2}> Zakir Husain college of Engineering & Technol, Aligarh Muslim University
                </h2>
                <h2 className={styles.hero_text3}>"Unleash your potential"</h2>
            </div>

            {/* <div>
                <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className={styles.parallax}>
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="#00000063" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="#55575999" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="#0104070D" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#01040799 #00000063" />
                    </g>
                </svg>
            </div> */}

            <div id="flex_containerSocials" className={styles.flex_containerSocials}>
                <div><a href="https://www.linkedin.com/company/edc-zhcet-amu/?originalSubdomain=in " target="_blank">
                    <img className={styles.imgSocials} src="/images/LinkInden.png" alt="Error" /> </a></div>
                <div> <a href="https://www.instagram.com/edc_zhcet/?hl=en " target="_blank">
                    <img className={styles.imgSocials} src="/images/insta.png" alt="Error" /> </a></div>
                {/* <div> <a href="# "><img className={styles.imgSocials} src="/images/Tw.png" alt="Error" /> </a></div> */}
                {/* <!-- logo-Twitter --> */}
                <div> <a href=" https://www.facebook.com/EcellZHCET/" target="_blank"><img className={styles.imgSocials}
                    src="/images/FB.png" alt="Error" /> </a></div>
                {/* <!-- logo-Facebook --> */}
                {/* <div> <a href="# "><img className={styles.imgSocials} src="/images/Y.png" alt="Error" /> </a></div> */}
            </div>
        </div>
    )
}

export default Hero