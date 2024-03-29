import classes from './MealItemForm.module.css'
import Input from '../../Ui/Input';
const MealItemForm = (props) => {
    return ( 
        <form action="" className={classes.form}>
            <Input label="Amount" input={{
                id:'amount' +props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'0'
            }}></Input>
            <button>Add</button>
        </form>


     );
}
 
export default MealItemForm ;