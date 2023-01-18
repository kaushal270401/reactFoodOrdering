import CartIcon from "../Cart/CartIcon";
import classes from './HeadercartBtn.module.css'
const HeadercartBtn = (props) => {
    return ( 
         <button className={classes.button} onClick={props.cartshow}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span >
            <span className={classes.badge}>3</span>

         </button>
     );
}
 
export default HeadercartBtn;