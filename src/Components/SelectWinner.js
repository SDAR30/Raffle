import NavBar from "./NavBar"
import { Button, TextField, Grid, Box, Typography } from '@material-ui/core';
import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router";
import Winner from "./Winner";
import "./SelectWinner.css"

const defaultProps = {
    m: 2,
    padding: 1,
    border: 3,
    style: { width: '60rem', height: '4rem' },
};

const SelectWinner = (props) => {
    const { id } = useParams();
    const [secretToken, setSecretToken] = useState("");
    const [winner, setWinner] = useState({});
    const [tokenTitle, setTokenTitle] = useState("Secret Token");
    const [tokenText, setTokenText] = useState("The secret token used when creating the raffle must be provided.");
    const handleSecret = (e) => setSecretToken(e.target.value)

    const handleClick = () => {
        if (secretToken === "") return;
        selectWinner();
        setSecretToken("")
    }

    const selectWinner = async () => {

        let payload = { secret_token: secretToken };
        try {
            let { data } = await axios.put(`/api/raffles/${id}/winner`, payload);
            setWinner(data)
        } catch (error) {
            setTokenTitle('Wrong Secret Token');
            setTokenText('You have a missing or incorrect secret token.')
            setWinner({})
            console.log(error);
        }

    }

    const checkForWinner = async () => {
        try {
            let { data } = await axios.get(`/api/raffles/${id}/winner`);
            setWinner(data)
            console.log(data)
        } catch (error) {
            setWinner({})
            console.log("no winner yet");
        }
    }

    useEffect(() => {
        checkForWinner()

    }, [])

    return (<div>
        <NavBar />
        {(Object.keys(winner).length === 0) ?
            <section className="no-winner-selected">
                <h2 className="title-header">{props.title}</h2>
                <h1>Pick a Winner</h1>
                <Grid container justify="center" alignContent="center" spacing={1} direction="column" >
                    <Grid container item xs={6} >
                        <TextField
                            onChange={handleSecret}
                            value={secretToken}
                            name="secretToken"
                            variant="outlined"
                            required
                            fullWidth
                            label="Secret Token"
                            autoFocus
                        />
                    </Grid>
                    <Grid container item xs={6}>
                        <Button
                            onClick={() => handleClick()}
                            type="submit"
                            variant="contained"
                            fullWidth
                            color="primary">
                            Submit
                </Button>
                    </Grid>
                    <Grid container item xs={6} >
                        <Box bgcolor="#ffebee"  {...defaultProps}>
                            <Typography align="left" >{tokenTitle}</Typography>
                            <Typography align="left">{tokenText}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </section> : <Winner winner={winner}/>}
    </div>)

}

export default SelectWinner;