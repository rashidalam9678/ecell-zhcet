import styles from "../styles/footer.module.css"
import React, { useState } from "react";
// import { Field, Form, Formik } from "formik"
// import { TextField } from 'formik-mui';
import { Box, Button, TextareaAutosize, TextField } from "@mui/material"
import * as yup from 'yup';
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/config"



const Footer = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [query, setQuery] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

   async function SubmitForm(e){
    e.preventDefault()
    
    try {
      setIsSubmitting(true)
      setError(false)
      const docRef = await addDoc(collection(db, "queries"), {
        firstName: name,
        query: query,
        email: email,
        status:false,
      });
      console.log("Document written with ID: ", docRef.id);
      setIsSubmitting(false)
      setEmail("")
      setName("")
      setQuery("")
      setSuccess(true)
    } catch (e) {
      setError(true)
      console.error("Error adding document: ", e);
      setIsSubmitting(false)
      
    }
  }
  return (
    <>
      <div id="contact" className={styles.footer_container}>
      <hr />
      <div className={styles.title}>
        <h3 >
          Get in touch
        </h3>
      </div>
      <div className={styles.contact_form}>

        <form onSubmit={SubmitForm} className={styles.form}>
          <div className={styles.main}>
            <div className={styles.left}>

              <Box paddingBottom={2} paddingTop={6}>
                <TextField value={name} required variant="filled" paddingTop={0} fullWidth name="fullName" label="Full Name" onChange={(e) => setName(e.target.value)} />
              </Box>
              <Box paddingBottom={2}>
                <TextField value={email} variant="filled" required type="email" fullWidth name="email" label="Email"  onChange={(e) => setEmail(e.target.value)} />
              </Box>

            </div>
            <div className={styles.right}>
              <Box paddingBottom={2} paddingTop={6}>
                <TextareaAutosize
                value={query}
                  variant="filled" paddingTop={0} fullWidth name="query"
                  aria-label="minimum height"
                  minRows={8.5}
                  required
                  minCols={25}
                  placeholder="your query"
                  style={{ width: 300 }}
                  label="query"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Box>
            </div>
          </div>
          <div>
            <Button
              disabled={isSubmitting}
              variant="outlined"
              color="primary"
              type="submit"
            >
              {isSubmitting ? 'Sending...' : "Send"}
            </Button>
          </div>
          {error && <p className={styles.error}>Error while sending message please try again</p>}
          {success&& <p className={styles.success}>Message sent successfully</p> }
        </form>
      </div >
      <div className={styles.bottom}>
        <div className={styles.logo}>
          <img src="/images/EDC_LOGO_W.png" alt="img" />
          <p>Enterepreneurship Development Cell, ZHCET</p>
          <p>Email: <strong>edcell.zhcet@gmail.com</strong></p>
        </div>

        <div className={styles.bottom_middle}>
          <p>Follow Us</p>
          <div>
            <a href="https://www.linkedin.com/company/edc-zhcet-amu/?originalSubdomain=in " target="_blank">Linkedin</a>
          </div>
          <div>
            <a href="https://www.instagram.com/edc_zhcet/?hl=en " target="_blank">Instagram</a>
          </div>
          <div>
            <a href=" https://www.facebook.com/EcellZHCET/" target="_blank">Facebook</a>
          </div>
          {/* <div>
          <a href="#">Youtube</a>
          </div> */}

        </div>
        <div className={styles.bottom_right}>
          <p>Quick Links</p>
          <div>
            <a href="/member/registration">Join Us</a>
          </div>
          <div>
            <a href="/events">Events</a>
          </div>
          <div>
            <a href="/team">team</a>
          </div>
          <div>
            <a href="#contact">contact</a>
          </div>
        </div>

      </div>
    </div >
    
    </>
  )
}

export default Footer