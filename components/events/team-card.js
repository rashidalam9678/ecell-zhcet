import styles from "../../styles/profile_card.module.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from "react";
import Image from "next/legacy/image";

const TeamCard = ({name,title,image, linkedin, instagram, email}) => {

    return (
        <>
            <div className={styles.grid} >
                <div className={styles.img_container}  id="img" >
                    <Image src={image} layout="fill" alt="img" />
                </div>
                <div className={styles.details}>
                    <h1>{name}</h1>
                    <p>{title}</p>
                </div>
                <div className={styles.icons}>

                    <div>
                        <a href={linkedin} target="_blank">
                            <LinkedInIcon />
                        </a>
                    </div>
                    <div>
                        <a href={instagram}target="_blank" >
                            <InstagramIcon />
                        </a>
                    </div>
                    <div>
                        <a href={email} target="_blank">
                            <MailIcon />
                        </a>
                    </div>


                </div>

            </div>
        </>
    )
}

export default TeamCard

