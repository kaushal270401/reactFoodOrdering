import classes from './Modal.module.css'

const  Backdrop = (props) => {
    return ( 
        <div className={classes.backdrop} onClick={props.closeCart}></div>
     );
}
 
const ModalOverlay=props=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}



const Modal = (props) => {
    return (
        <>
            <Backdrop onClose={props.closeCart}/>
            <ModalOverlay>{props.children}</ModalOverlay>
        </>

    );
}
 
export default Modal;