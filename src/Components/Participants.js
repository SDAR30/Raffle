import NavBar from "./NavBar"
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios"
import ParticipantListItem from "./ParticipantListItem";

const Participants = (props) =>{
    const [participantList,setParticipantList] = useState([]);
    const { id } = useParams();

    const retrieveParticipants = async ()=>{
        try {
            const {data} = await axios.get(`/api/raffles/${id}/participants`);
            
            setParticipantList(data)
        } catch (error) {
            setParticipantList([])
            console.log(error)
        }
    }

    useEffect(()=>{
        retrieveParticipants()

    },[])


    return(<div>
  
        <NavBar/>
        <h2 className="title-header">{props.title}</h2>
        <ul>
            {participantList.map(participant=> <ParticipantListItem key={participant.id} participant={participant}/>)}
        </ul>
    </div>)

}

export default Participants;