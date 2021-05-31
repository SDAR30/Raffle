import { useEffect, useState } from "react";
import axios from "axios"
import "./Home.css"
import RaffleListItem from "./RaffleListItem";
import '@fontsource/roboto';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Card } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 20,
    },
    title: {
        fontSize: 37,
    }
});


const Home = (props) => {
    const classes = useStyles();
    const [raffleName, setRaffleName] = useState('');
    const [secretToken, setSecretToken] = useState('');
    const [raffleList, setRaffleList] = useState([]);
    
    const handleRaffleName = (e) => {
        setRaffleName(e.target.value);
    }
    const handleSecretToken = (e) => {
        setSecretToken(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createRaffle();
        retrieveAllRaffles();
    }

    const createRaffle = async () => {
        const notifySuccess = () => toast("New Raffle Created: "+raffleName);
        const notifyFailure = () => toast(raffleName + " failed to be created");
        let payload = { name: raffleName, secret_token: secretToken };
        try {
            await axios.post('/api/raffles', payload);
            setRaffleName("")
            setSecretToken("")
            notifySuccess()
        } catch (error) {
            notifyFailure()
            console.log(error)
        }
    }

    const retrieveAllRaffles = async () => {
        try {
            const { data } = await axios.get("/api/raffles");
            setRaffleList(data)
        } catch (error) {
            setRaffleList([])
            console.log(error)
        }
    }

    useEffect(() => {
        retrieveAllRaffles()

    }, [])

    return (<section className="home-container">
        <Card ><Typography variant="h1" className={classes.title}>RAFFLE APP</Typography></Card>
        <Card className={classes.root}>
            <form className="" onSubmit={handleSubmit}>
                <div>
                    <label className="required">Raffle Name:
                <input type='text' size="40" value={raffleName} onChange={handleRaffleName} required />
                    </label>
                </div>
                <br />
                <div>
                    <label className="required">Raffle Secret Token:
                <input type='text' size="33" value={secretToken} onChange={handleSecretToken} required />
                    </label>
                </div>
                <p className="token-warning">You must remember the Raffle Token because it will be asked when picking a winner</p>
                <button className="create-button">Create New Raffle</button>
                <ToastContainer />
            </form>
        </Card>

        <section className="raffle-list-container">
            <section className="raffle-list">
                {raffleList.map(raffle => {
                    return <RaffleListItem setTitle={props.setTitle} raffleName={raffle.name} key={raffle.id} id={raffle.id} createdAt={raffle.created_at} winnerID={raffle.winner_id} raffledAt={raffle.raffled_at} />
                })}
            </section>

        </section>
    </section>)
}

export default Home;