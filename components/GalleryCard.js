import Image from "next/image"
import { useEffect, useState } from "react";
import styles from "../styles/grid_card.module.css"

const GalleryCard = ({ title, src }) => {

  const [mouse, setMouse] = useState(false)

  function MouseOver(event) {
    setMouse(!mouse)

  }
  function MouseOut(event) {
    setMouse(!mouse)
  }
  return (
    <>
        <div className={styles.grid} >
          <div className={styles.img_container}  id="img" >
            <Image src={src} layout="fill" alt="img" />
          </div>
          {!mouse && <div className={styles.on_hover} onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <h1>{title}</h1>
          </div>}
        </div>
    </>
  )
}

export default GalleryCard