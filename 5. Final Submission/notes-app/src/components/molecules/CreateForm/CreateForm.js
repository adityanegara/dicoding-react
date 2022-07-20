import styles from './CreateForm.module.scss';
import Input from '../../atoms/Input/Input';
import TextArea from '../../atoms/TextArea/TextArea';
import { useState } from 'react';
import ColorButtons from '../ColorButtons/ColorButton';
import {getFontColorCreateButtonHover, getTextAreaRows} from './CreateFormLogic';
import uiStore from '../../../store/uiStore';
import useMediaQuery from '../../../hooks/useMediaQuery';

const CreateForm = () =>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const createModalBackgroundColor = uiStore(state => state.createModalBackgroundColor);
    const isDesktop = useMediaQuery('(min-width: 600px)');


    const onHandleTitleChange = (newTitle) =>{
        setTitle(newTitle);
    }

    const onHandleDescriptionChange = (newDescription) =>{
        setDescription(newDescription);
    }

    return(
        <form onSubmit={(e)=>{e.preventDefault()}}className={styles['create-form']}>
              <Input value={title} onHandleChange={onHandleTitleChange} type="text" placeholder="Note Title..." charactersLimit={50}/>
              <TextArea rows={getTextAreaRows(isDesktop)} value={description} onHandleChange={onHandleDescriptionChange} placeholder="Note Description..." charactersLimit={100}/>
              <ColorButtons/>
              <div className={styles['button-group']}>
                    <button className={getFontColorCreateButtonHover(createModalBackgroundColor)}>Create</button>
                    <button>Reset</button>
              </div>
        </form>
    )
}

export default CreateForm;