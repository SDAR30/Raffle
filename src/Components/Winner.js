import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CardMedia, CardContent, CardActionArea, Card, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 200,
    },
});

const Winner = (props) => {
    const classes = useStyles();
    let timeRegistered = new Date(props.winner.registered_at);
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '70vh' }}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://wownolacreations.com/wp-content/uploads/2017/11/winner.jpg"
                        title="Winner"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.winner.firstname} {props.winner.lastname}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Registered at {timeRegistered.toDateString()} at {timeRegistered.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}
                        </Typography>
                        <p>ID: {props.winner.id}</p>
                        <p>Email: {props.winner.email}</p>
                        <p>Phone: {props.winner.phone}</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
export default Winner;