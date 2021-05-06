import React from 'react';
import image from "../src/images/newyork.png";
import Common from './Common';

import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    grid: {
        marginTop: theme.spacing(4),
    }
}));

const Contact = () => {
    const classes = useStyles();
    const paperStyle = { padding: 20, width: 400, margin: "0 auto" }
    const headerStyle = { margin: 0 }

    const marginTop = { marginTop: 5 }
    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        adress: '',
        helpmessage: ''
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required(" Required"),
        phoneNumber: Yup.string().min(10, "Enter Valid Phone Number").required('Required'),
        adress: Yup.string().max(100, "Maxiumum 100 letters allowed"),
        helpmessage: Yup.string().max(250, "Maxiumum 250 letters allowed").required("Required"),
    })
    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

    return (
        <>
            <Common
                name=" Welcome Guys - "
                imgsrc={image}
                visit="/contact"
                btnName="Contact Now"

            />

            <Grid className={classes.grid}>
                <Paper style={paperStyle}>
                    <Grid align='center'>
                        <Typography className="Logo1" variant="h6" color="primary" noWrap>
                            wAppotix
                    </Typography>
                        <h2 style={headerStyle}>Contact Us</h2>
                        <Typography variant='caption' gutterBottom>Please fill this for any Query !</Typography>
                    </Grid>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (
                            <Form>

                                <Field as={TextField} fullWidth variant="outlined" size="small" name="name" label='Name*'
                                    placeholder="Enter your name" helperText={<ErrorMessage name="name" />} />

                                <Field as={TextField} fullWidth variant="outlined" size="small" name="email" label='Email*'
                                    placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />

                                <Field as={TextField} fullWidth variant="outlined" size="small" name="phoneNumber" label='Phone Number*'
                                    placeholder="Enter your phone number" type="number" helperText={<ErrorMessage name="phoneNumber" />} />

                                <Field as={TextField} multiline fullWidth rows={2} variant="outlined" size="small" name="adress" label='Adress'
                                    placeholder="Enter your Current Adress" helperText={<ErrorMessage name="adress" />} />

                                <Field as={TextField} multiline fullWidth rows={4} variant="outlined" size="small" name="helpmessage" label='Message*(Between 20 to 250 Character)'
                                    placeholder="Between 20 to 250 Character" helperText={<ErrorMessage name="helpmessage" />} />

                                <Button type='submit' fullWidth variant='contained' disabled={props.isSubmitting}
                                    color='primary'>{props.isSubmitting ? "Loading" : "Submit"}</Button>

                            </Form>
                        )}
                    </Formik>
                    <div className="w-100 text-center mt-2" align="center">Don't have an account? <Link to="/signup">Signup</Link> </div>

                    <Typography align="center">OR</Typography>
                    <div className={classes.root}>
                        <CssBaseline />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>

                                <CallIcon />
                                <label>1234567890 </label>

                            </Grid>
                            <Grid item xs={6}>
                                <label>Direction </label>
                                <DirectionsIcon />
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Grid>

        </>
    );
};

export default Contact;