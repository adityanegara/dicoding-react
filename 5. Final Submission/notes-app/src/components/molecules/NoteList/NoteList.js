import styles from './NoteList.module.scss';
import NOTES from './notes_constant';
import { renderNotes } from './NoteLogic';

const NoteList = () =>{
    return(
        <div className={styles['note-list']}>
           {renderNotes(NOTES)}
        </div>
    )
}

export default NoteList;