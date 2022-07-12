import styles from './NoteList.module.scss';
import NOTES from './notes_constant';
import { renderNotes } from './NoteListLogic';

const NoteList = () =>{
    return(
        <div className={styles['note-list']}>
           {renderNotes(NOTES)}
        </div>
    )
}

export default NoteList;