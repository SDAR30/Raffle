import NavBar from "./NavBar"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
import ParticipantListItem from "./ParticipantListItem";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    filterInput: {
        margin: theme.spacing(0),
        width: '100ch',
    },
}));

const Participants = (props) => {
    const classes = useStyles();
    const [participantList, setParticipantList] = useState([]);
    const [filter, setFilter] = useState("");
    const { id } = useParams();

    const retrieveParticipants = async () => {
        try {
            const { data } = await axios.get(`/api/raffles/${id}/participants`);

            setParticipantList(data)
        } catch (error) {
            setParticipantList([])
            console.log(error)
        }
    }

    const handleFilter = (e) => setFilter(e.target.value)

    useEffect(() => {
        retrieveParticipants()

    }, [])

    const matches = participantList.filter(participant => participant.firstname.toLowerCase().includes(filter.toLowerCase()) || participant.lastname.toLowerCase().includes(filter.toLowerCase()))
        .map(participant => <ParticipantListItem key={participant.id} participant={participant} />)

    return (<div>

        <NavBar />
        <h2 className="title-header">{props.title}</h2>
        <h2 className="total-participants" style={{ textAlign: 'left', marginLeft: "50px" }}>Participants: {matches.length} total</h2>
        <TextField id="outlined-basic" className={classes.filterInput} label="Search..." variant="outlined" value={filter} onChange={handleFilter} />
        <ul>
            {matches}
        </ul>
    </div>)

}

export default Participants;