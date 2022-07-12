import styles from './NoteList.module.scss';
import arrayToChunkArray from '../../../helpers/arrayToChunkArray';
import Note from '../Note/Note';


const renderNotes = (notes) =>{
    const noteRow = arrayToChunkArray(notes, 2);
    let test =  noteRow.map((noteRow, rowIndex)=>{
        return(
            <ul key={`row-${rowIndex}`}  className={styles['note-row']}>
                {renderNoteRow(noteRow, rowIndex)}
            </ul>
        )
    })
    return test;
}

const renderNoteRow = (noteRow, rowIndex) =>{
    return noteRow.map((note, i) =>{
        return(
            <Note key={note.id} note={note} index={i} rowIndex={rowIndex}/>
        )
    })
}  

export {renderNotes};