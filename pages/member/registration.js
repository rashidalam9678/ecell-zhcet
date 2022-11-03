import styles from "../../styles/MemberRegistration.module.css"
import React, { useState } from "react";
import { Box, Button, Card, CardContent, CircularProgress, Step, StepLabel, Stepper, FormControl, MenuItem, Grid } from "@mui/material"
import { Field, Form, Formik } from "formik"
import { TextField, Select } from 'formik-mui';
import * as yup from 'yup';
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useRouter } from "next/router";

export default function Register() {
    const router = useRouter();
    return (
        <div className={styles.main_container}>
            <Card>
                <CardContent>
                    <FormikStepper
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            enrollmentNumber: "",
                            facultyNumber: "",
                            course: '',
                            yearOfStudy: null,
                            branch: '',
                            email: "",
                            phoneNumber: null,
                            address: "",
                        }}
                        onChange={(values) => {
                            setFormData(values)
                        }}
                        onSubmit={async (values) => {
                            try {
                                const docRef = await addDoc(collection(db, "members"), {
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                    enrollmentNumber: values.enrollmentNumber,
                                    facultyNumber: values.facultyNumber,
                                    course: values.course,
                                    yearOfStudy: values.yearOfStudy,
                                    branch: values.branch,
                                    email: values.email,
                                    phoneNumber: values.phoneNumber,
                                    address: values.address
                                });
                                console.log("Document written with ID: ", docRef.id);
                                router.push("/success")
                            } catch (e) {
                                console.error("Error adding document: ", e);
                            }
                        }}
                    >
                        <FormikStep label="Personal Details" >
                            <Box paddingBottom={2} paddingTop={6}>
                                <Field paddingTop={0} fullWidth name="firstName" component={TextField} label="First Name" />
                            </Box>
                            <Box paddingBottom={2}>
                                <Field fullWidth name="lastName" component={TextField} label="Last Name" />
                            </Box>
                            <Box paddingBottom={2}>
                                <Field fullWidth name="enrollmentNumber" component={TextField} label="Enrollement Number" />
                            </Box>
                            <Box paddingBottom={2}>
                                <Field fullWidth name="facultyNumber" component={TextField} label="Faculty Number" />
                            </Box>
                            <Box paddingBottom={2}>
                                <Field fullWidth name="course" component={TextField} label="Course" />
                            </Box>
                            <Box paddingBottom={2}>
                                <Field fullWidth  name="yearOfStudy" component={TextField} label="Year of study" />
                            </Box>

                            <Box paddingBottom={2}>
                                <Field fullWidth name="branch" component={TextField} label="Branch Name" />
                            </Box>

                        </FormikStep>
                        <FormikStep
                            label="Contact Details"
                            validationSchema={yup.object({
                                email: yup.string().email('Invalid email').required('Required'),
                                phoneNumber: yup.number().required('Required'),
                                address: yup.string().required("Required")
                            })}
                        >
                            <Box paddingBottom={2}>
                                <Field fullWidth type="email" name="email" component={TextField} label="Email" />
                            </Box>
                            <Box paddingBottom={2}>
                                <Field fullWidth type="number" name="phoneNumber" component={TextField} label="Phone Number" />
                            </Box>
                            <Box paddingBottom={2}>
                                <Field fullWidth name="address" component={TextField} label="Address" />
                            </Box>
                        </FormikStep>

                        <FormikStep label="Make Payment">
                            <Box paddingBottom={2}>
                                <p>Membership Fees is Rs 150</p>
                            </Box>
                        </FormikStep>
                    </FormikStepper>
                </CardContent>
            </Card>

        </div>
    );
}



export function FormikStep({ children }) {
    return <>{children}</>;
}

export function FormikStepper({ children, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const [completed, setCompleted] = useState(false);

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(values, helpers);
                    setCompleted(true);
                } else {
                    setStep((s) => s + 1);

                    // the next line was not covered in the youtube video
                    //
                    // If you have multiple fields on the same step
                    // we will see they show the validation error all at the same time after the first step!
                    //
                    // If you want to keep that behaviour, then, comment the next line :)
                    // If you want the second/third/fourth/etc steps with the same behaviour
                    //    as the first step regarding validation errors, then the next line is for you! =)
                    //
                    // In the example of the video, it doesn't make any difference, because we only
                    //    have one field with validation in the second step :)
                    helpers.setTouched({});
                }
            }}
        >
            {({ isSubmitting }) => (
                <Form autoComplete="off">
                    <Stepper alternativeLabel activeStep={step}>
                        {childrenArray.map((child, index) => (
                            <Step key={child.props.label} completed={step > index || completed}>
                                <StepLabel>{child.props.label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {currentChild}

                    <Grid container spacing={2}>
                        {step > 0 ? (
                            <Grid item>
                                <Button
                                    disabled={isSubmitting}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setStep((s) => s - 1)}
                                >
                                    Back
                                </Button>
                            </Grid>
                        ) : null}
                        <Grid item>
                            <Button
                                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                                disabled={isSubmitting}
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                {isSubmitting ? 'Submitting' : isLastStep() ? 'Make payment' : 'Next'}
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
}