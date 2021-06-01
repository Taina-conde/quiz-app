
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const PastResultItem = (props) => {
    const { numQuestions, result } = props;
    return <>
    <ListItemIcon>

    </ListItemIcon>
    <ListItemText primary = {`${numQuestions} questions`} secondary = {`answered on ${formattedDate}`}/>

    </>
}
export default PastResultItem;