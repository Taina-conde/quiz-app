import {useContext} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Context from "../../context";
const QuizView = () => {
    const ctx = useContext(Context);

    return <Grid container>
        {ctx.numQuestions !== 0 && <Grid item>
            
            </Grid>}


    </Grid>
}
export default QuizView;