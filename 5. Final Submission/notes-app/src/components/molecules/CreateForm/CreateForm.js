import styles from './CreateForm.module.scss';
import Input from '../../atoms/Input/Input';
import TextArea from '../../atoms/TextArea/TextArea';
import { useState } from 'react';
import Test from '../test/Test';

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
        <form onSubmit={(e)=>{e.preventDefault()}}className={styles['create-form']}>
              <Input value={title} onHandleChange={onHandleTitleChange} type="text" placeholder="Note Title..."/>
              <TextArea value={description} onHandleChange={onHandleDescriptionChange} placeholder="Note Description..."/>
              <Test/>
        </form>
    )
}

export default CreateForm;