import TeamCard from "../components/events/team-card"
import styles from "../styles/profile_card.module.css"


const Team = () => {
  return (
    <main className={styles.team_container}>
      <h1>Team 2022-23</h1>
      <div className={styles.team_group}>
        <TeamCard name="Ale Imran" title="Faculty Coordinator" image="/images/imransir.jpeg" email="mailto:ale.imran23@gmail.com" linkedin="https://www.linkedin.com/in/ale-imran-0320b1152/" instagram="#" />
      </div>
      <div className={styles.team_group}>
        <TeamCard name="Devansh Varshney" title="Coordinator" image="/images/_devansh.jpeg" email="mailto:varshneydevansh@gmail.com" linkedin="https://www.linkedin.com/in/devansh-varshney-911b57189" instagram="https://www.instagram.com/devansh_var_" 
        />
        <TeamCard name="Mohammad Mobashshir Alam" title="Coordinator" image="/images/Mobashshir Alam.jpg" email="mailto:alammobashshir@gmail.com" linkedin="https://www.linkedin.com/in/alam-mobashshir" instagram="https://www.instagram.com/d_gentle_man" />
      </div>
      <div className={styles.team_group}>
        <TeamCard  name="Mohd Rashid" title="Joint Coordinator" image="/images/mra_profile.png" email="mailto:mohdrashidalam786@gmail.com" linkedin="https://www.linkedin.com/in/rashidalam9678" instagram="https://www.instagram.com/rashidalam_9678" />

        <TeamCard name="Mohd Shajar" title="Joint Coordinator" image="/images/shajar.jpg" email="mailto:shameem.shajar@gmail.com" linkedin="https://www.linkedin.com/in/mohdshajar247/" instagram="https://www.instagram.com/mohd_shajar247" />
      </div>
      <div className={styles.team_group}>
        <TeamCard name="Zulkifl Khairoowala" title="Alumni Relation Head" image="/images/zulkif.jpeg" email="mailto:zulkiflkhairoowala456@gmail.com" linkedin="https://www.linkedin.com/in/alam-mobashshir" instagram="https://www.instagram.com/zulkifl_k" />

        <TeamCard name="Hasan Ansari" title="Alumni Relation Associate" image="/images/hasan.jpg" email="mailto:ce.hasan@hotmail.com" linkedin="https://www.linkedin.com/in/cehasan" instagram="https://www.instagram.com/hasanansxri" />
      </div>
      <div className={styles.team_group}>
        <TeamCard name="Alkama Hasan" title="Technical Head" image="/images/alkama.jpg" email="mailto:hasanalkamal786@gmail.com" linkedin="https://www.linkedin.com/in/alkamahasan59684
" instagram="https://www.instagram.com/alkama.hasan" />

        <TeamCard name="Abhishek Singh" title="Technical Associate" image="/images/Abhishek Singh.jpg" email="mailto:lucifer2072003@gmail.com" linkedin="https://www.linkedin.com/in/abhishek-singh2073" instagram="https://www.instagram.com/d_gentle_man" />
      </div>
      <div className={styles.team_group}>
        <TeamCard name="Zaid Anas" title="Social Media Head" image="/images/ZAID ANAS.jpg" email="mailto:zaidansint@gmail.com" linkedin="https://www.linkedin.com/in/zaid-anas-b14834152/" instagram="https://www.instagram.com/_zaidanas_" />

        <TeamCard name="Nausheen Akhtar" title="Marketing Head" image="/images/Nausheen Akhtar.jpeg" email="mailto:nausheenakhtar08@gmail.com" linkedin="https://www.linkedin.com/in/nausheen-akhtar-56b352196/" instagram="#" />
      </div>
      <div className={styles.team_group}>
        <TeamCard name="Kanika Johri" title="Social Media Associate" image="/images/kanika.jpg" email="mailto:kanikajohri989@gmail.com" linkedin="https://www.linkedin.com/in/kanika-johri-94a3101b7" instagram="https://www.instagram.com/_kanika_johri_" />
        
        <TeamCard name="Daksh Sharma" title="Social Media Associate" image="/images/Daksh Sharma.jpg" email="mailto:13dakshsharma13@gmail.com" linkedin="https://www.linkedin.com/in/daksh-sharma-341b2724b" instagram="https://www.instagram.com/daksh_13_sharma" />
      </div>
      <div className={styles.team_group}>
        <TeamCard name="Sadaf Arshad" title="Content Design Associate" image="/images/Sadaf Arshad.jpg" email="mailto:sadarshad01@gmail.com" linkedin="http://linkedin.com/in/sadaf-arshad-aa0366211" instagram="https://www.instagram.com/_sadaf_arshad_" />

        <TeamCard name="Laksh Gupta" title="Content Design Associate" image="/images/Laksh Gupta.jpg" email="mailto:guptalaksh123456@gmail.com" linkedin="https://www.linkedin.com/in/laksh-gupta-a35a66221" instagram="https://www.instagram.com/laksh_gupta_" />
      </div >

    </main>
  )
}

export default Team