import Image from "next/image"
import { useState } from "react";
import styles from "../styles/grid_card.module.css"

const GalleryCard = ({ title, src }) => {
  const [mouse, setMouse] = useState("false")

  function MouseOver(event) {
    setMouse(true)

  }
  function MouseOut(event) {
    setMouse(false)
  }
  return (
    <>

        <div className={styles.grid} >
          <div className={styles.img_container} onMouseOver={MouseOver} >
            <Image src={src} layout="fill" alt="img" />
          </div>
          {mouse && <div className={styles.on_hover} onMouseOut={MouseOut}>
            <h1>{title}</h1>
          </div>}
        </div>


    </>
  )
}

export default GalleryCard