import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
    }
}))
const Score = (props) => {
    const classes = useStyles();
    return <Paper className = {classes.paper}>
        <Grid container>
            <Grid item >
                
            </Grid>

        </Grid>
    </Paper>
}
export default Score;