import { useParams } from "react-router-dom"
import { useState } from "react"
import NavBar from "./NavBar";
import axios from 'axios'
import React from 'react';
import { Button, CssBaseline, TextField, Grid, Box, Typography, makeStyles, Container } from '@material-ui/core/';
//template from 
//https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-up

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 2, 2),
    },
}));


const Register = (props) => {
    const { id } = useParams();
    const classes = useStyles();
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitMessage, setSubmitMessage] = useState('')

    const handleFirst = (e) => setFirst(e.target.value)
    const handleLast = (e) => setLast(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePhone = (e) => setPhone(e.target.value)

    const registerPerson = async () => {

        let payload = { firstname: first, lastname: last, email: email, phone: phone };
        try {
            let data = await axios.post(`/api/raffles/${id}/participants`, payload);
            setSubmitMessage(data.data.content)
        } catch (error) {
            setSubmitMessage("")
            console.log(error);
        }
    }

    const reset = (fullReset) => {
        if (fullReset) setSubmitMessage("")
        setFirst("")
        setLast("")
        setEmail("")
        setPhone("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (first === "" || last === "" || email === "") {
            return;
        }
        registerPerson();
        reset();
    }

    return (
        <>
            <NavBar />
            <h2 className="title-header">{props.title}</h2>
            <Container component="main" maxWidth="xs" className="register-container">

                <CssBaseline />
                <div className={classes.paper}>

                    <Typography component="h1" variant="h5">
                        Register to participate in the raffle:
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={handleFirst}
                                    value={first}
                                    autoComplete="first"
                                    name="first"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="first"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={handleLast}
                                    value={last}
                                    required={true}
                                    variant="outlined"
                                    fullWidth
                                    id="last"
                                    label="Last Name"
                                    name="last"
                                    autoComplete="last"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleEmail}
                                    value={email}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handlePhone}
                                    value={phone}
                                    variant="outlined"
                                    fullWidth
                                    name="phone"
                                    label="Phone"
                                    type="number"
                                    id="phone"
                                    autoComplete="phone"
                                />
                            </Grid>

                        </Grid>
                        {submitMessage ? <Grid container justify="center">
                            <h4 className="submit-message" style={{ color: 'darkgreen' }}>{submitMessage}</h4>
                        </Grid> : null}
                        <Grid container justify="center">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                Submit
                            </Button>
                            <Button
                                onClick={() => reset(true)}
                                variant="contained"
                                color="secondary"
                                className={classes.submit}>
                                Reset
                            </Button>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                </Box>
            </Container>
        </>);
}

export default Register;