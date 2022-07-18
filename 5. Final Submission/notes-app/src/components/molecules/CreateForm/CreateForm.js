import styles from './CreateForm.module.scss';
import Input from '../../atoms/Input/Input';
import { useState } from 'react';

const CreateForm = () =>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onHandleTitleChange = (value) =>{
        setTitle(value);
    }

    return(
        <form className={styles['create-form']}>
              <Input value={title} onHandleChange={onHandleTitleChange} type="text" placeholder="Note Title..."/>
              <textarea placeholder='Note Description...' rows="10" />
        </form>
    )
}

export default CreateForm;