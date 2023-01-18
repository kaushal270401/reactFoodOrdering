import meals from '../../assets/img/meals.jpg'
import classes from "./Header.module.css"
import HeadercartBtn from './HeaderCartBtn';

const Header = (props) => {
    return ( 
        <>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeadercartBtn cartshow={props.showCart}>Cart</HeadercartBtn>
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt="food Img" />
        </div>
         </>
    );
}
 
export default Header;