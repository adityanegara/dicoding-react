import styles from './Input.module.scss';

const Input = ({type, placeholder, value, onHandleChange}) =>{
    return(
        <input type={type}  placeholder={placeholder} value={value} onChange={(e)=>{onHandleChange(e.target.value)}} className={styles['custom-input']}/>
    )
}

export default Input