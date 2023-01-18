import classes from './MealsSummary.module.css'

const MealsSummary = () => {
    return ( 
        <section className={classes.summary}>
            <h2>Delicious food deliver to you</h2>
            <p>
                Choose your fovourite meals
            </p>
            <p>
                All meals are cooked with high-quality ingredients
            </p>
        </section>
     );
}
 
export default MealsSummary;