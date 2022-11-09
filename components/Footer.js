import styles from "../styles/footer.module.css"
import React, { useState } from "react";
import { Box, Button, TextareaAutosize } from "@mui/material"
import { Field, Form, Formik } from "formik"
import { TextField, Select } from 'formik-mui';
import * as yup from 'yup';

const TxtArea = () => {
  return (
    <>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={8.5}
        minCols={25}
        placeholder="your query"
        style={{ width: 300 }}
      />
    </>
  )
}

const Footer = () => {
  return (
    <div id="contact" className={styles.footer_container}>
      <div className={styles.title}>
        <h3 >
          Get in touch
        </h3>
      </div>
      <div  className={styles.contact_form}>
        <Formik
          initialValues={{
            fullName: '',
            query: '',
            email: "",

          }}
          onSubmit={async (values) => {
            try {
              const docRef = await addDoc(collection(db, "queries"), {
                fullName: values.fullName,
                email: values.email,
                query: values.query

              });
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          }}
        >
          <Form className={styles.form}>
            <div className={styles.main}>
              <div className={styles.left}>

                <Box paddingBottom={2} paddingTop={6}>
                  <Field variant="filled" paddingTop={0} fullWidth name="fullName" component={TextField} label="Full Name" />
                </Box>
                <Box paddingBottom={2}>
                  <Field variant="filled" type="email" fullWidth name="email" component={TextField} label="Email" />
                </Box>

              </div>
              <div className={styles.right}>

                <Box paddingBottom={2} paddingTop={6}>
                  <Field variant="filled" paddingTop={0} fullWidth name="query" component={TxtArea} label="query" />
                </Box>


              </div>
            </div>
            <div>
              <Button
                // startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                // disabled={isSubmitting}
                variant="outlined"
                color="primary"
                type="submit"
              >
                {'Submit'}
              </Button>
            </div>
          </Form>
        </Formik>
      </div >
      <div className={styles.bottom}>
        <div className={styles.logo}>
          <img src="/images/EDC_LOGO_W.png" alt="img" />
          <p>Enterepreneurship Development Cell, ZHCET</p>
        </div>
        
        <div className={styles.bottom_middle}>
          <p>Follow Us</p>
          <div>
          <a href="#">Linkedin</a>
          </div>
          <div>
          <a href="#">Instagram</a>
          </div>
          <div>
          <a href="#">Twitter</a>
          </div>
          <div>
          <a href="#">Youtube</a>
          </div>
            
        </div>
        <div className={styles.bottom_right}>
            <p>Quick Links</p>
            <div>
              <a href="/register">Join Us</a>
            </div>
            <div>
              <a href="/events">Events</a>
            </div>
            <div>
              <a href="/team">team</a>
            </div>
            <div>
              <a href="/contact">contact</a>
            </div>
        </div>

      </div>
    </div >
  )
}

export default Footer