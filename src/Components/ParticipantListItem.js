
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Typography, CardContent, Card } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 5,
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 40,
    width: 40,
  },
  pos: {
    marginBottom: 3,
  },
});


const ParticipantListItem =(props)=> {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      
        <Typography variant="h5" component="h2">
          {props.participant.firstname} {props.participant.lastname}
        </Typography>
        <CardMedia   className={classes.media}
                    image="http://www.kingsvilletwp.org/wp-content/uploads/2017/06/cropped-person-icon-8-1.png"
                    title="participant"/>
        <Typography className={classes.pos} color="textSecondary">
        ID: {props.participant.id} 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Email: {props.participant.email} 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Phone: {props.participant.phone} 
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ParticipantListItem;