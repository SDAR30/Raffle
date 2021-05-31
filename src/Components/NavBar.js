import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import "./NavBar.css"

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    NavStyle: {
        textDecoration: "none",
        border: 0,
        color: 'black',
        height: 30,
        fontSize: 25,
        padding: '23px 50px',
    },
    NavHeader: {
        height: 70,
    },
});

const NavBar = () => {
    const classes = useStyles();
    const { id } = useParams();
    return (<nav><AppBar position="static" color="default" height="100px" className={classes.NavHeader}>
        <Toolbar>
            <Typography varient="h1" className={classes.root}> <NavLink className={classes.NavStyle} to="/" exact={true}>All Raffles</NavLink></Typography>
            <Typography varient="h4" className={classes.root}> <NavLink className={classes.NavStyle} to={`/raffles/${id}`} exact={true}>Register</NavLink></Typography>
            <Typography varient="h4" className={classes.root}>  <NavLink className={classes.NavStyle} to={`/raffles/${id}/participants`} exact={true}>Participants</NavLink></Typography>
            <Typography varient="h4" className={classes.root}>  <NavLink className={classes.NavStyle} to={`/raffles/${id}/winner`} exact={true}>Pick Winner</NavLink></Typography>
        </Toolbar>
    </AppBar></nav>)
}

export default NavBar;