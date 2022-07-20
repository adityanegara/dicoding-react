import styles from './Note.module.scss';
import { getNoteWidth} from './NoteLogic';


const Note = ({note, index, rowIndex}) =>{
    return(
        <li className={`${styles['note']} ${styles[`${note.color}-note`]} ${getNoteWidth(index, rowIndex)}`}>
            <p>{note.title}</p>
        </li>
    )
}

export default Note;