import "./RaffleListItem.css"
import {useHistory} from 'react-router-dom'

const RaffleListItem = (props)=>{
    const history = useHistory();
    let timeCreated = new Date(props.createdAt);
    let timeRaffled = props.raffledAt ? new Date(props.raffledAt) : null;

    const goToRafflePage = (id)=>{
        history.push(`/raffles/${id}`)
        props.setTitle(props.raffleName)
    }
    
    return(<section className="raffle-listitem" onClick={()=>goToRafflePage(props.id)}>
        <h3>{props.raffleName}</h3>
        <p>Created on: {timeCreated.toDateString()} at {timeCreated.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</p>
        <p>Winner ID: {props.winnerID || "No one yet"}</p>
        <p>Raffled on: {timeRaffled ? timeRaffled.toDateString() + " at " + timeRaffled.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })  : "Not raffled yet"}</p>

    </section>)

}

export default RaffleListItem;