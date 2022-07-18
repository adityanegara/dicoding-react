import styles from './CreateForm.module.scss';
import Input from '../../atoms/Input/Input';
import TextArea from '../../atoms/TextArea/TextArea';
import { useState } from 'react';

const CreateForm = () =>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onHandleTitleChange = (newTitle) =>{
        setTitle(newTitle);
    }

    const onHandleDescriptionChange = (newDescription) =>{
        setDescription(newDescription);
    }

    return(
        <form className={styles['create-form']}>
              <Input value={title} onHandleChange={onHandleTitleChange} type="text" placeholder="Note Title..."/>
              <TextArea value={description} onHandleChange={onHandleDescriptionChange} placeholder="Note Description..."/>
        </form>
    )
}

export default CreateForm;