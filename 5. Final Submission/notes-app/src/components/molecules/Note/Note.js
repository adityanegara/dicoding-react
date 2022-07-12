import styles from './Note.module.scss';
import { getNoteWidth, getNoteColor} from './NoteLogic';


const Note = ({note, index, rowIndex}) =>{
    return(
        <li className={`${styles['note']} ${getNoteWidth(index, rowIndex)} ${getNoteColor()}`}>
            <p>{note.title}</p>
        </li>
    )
}

export default Note;