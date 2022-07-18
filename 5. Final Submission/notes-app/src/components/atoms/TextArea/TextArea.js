import styles from './TextArea.module.scss';

const TextArea = ({placeholder, value, onHandleChange}) =>{
    return(
        <textarea className={styles['custom-textarea']} onChange={(e)=>{onHandleChange(e.target.value)}} placeholder={placeholder} rows="10" >
            {value}
        </textarea>
    )
}

export default TextArea;