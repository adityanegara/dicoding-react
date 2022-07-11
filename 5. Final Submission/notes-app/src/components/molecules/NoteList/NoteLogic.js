import styles from './NoteList.module.scss';
import arrayToChunkArray from '../../../helpers/arrayToChunkArray';

const getNoteColor= () =>{
    const colors = [styles['orange-note'], styles['blue-note'], styles['green-note'], styles['red-note']];
    return colors[Math.floor(Math.random()*colors.length)];
}

const renderNotes = (notes) =>{
    const noteRow = arrayToChunkArray(notes, 2);
    let test =  noteRow.map((noteRow, rowIndex)=>{
        return(
            <div className={styles['note-row']}>
                {renderNoteRow(noteRow, rowIndex)}
            </div>
        )
    })
    return test;
}

const renderNoteRow = (noteRow, rowIndex) =>{
    const getNoteWidth = (i) =>{
        if(rowIndex % 2 === 0){
            
            return (i % 2 === 0) ? styles['width-small'] : styles['width-large']
        }
        return (i % 2 === 0) ? styles['width-large'] : styles['width-small']
    }
    return noteRow.map((note, i) =>{
        return(
        <div className={`${styles['note']} ${getNoteWidth(i)} ${getNoteColor()}`}>
            <p>{note.title}</p>
        </div>
        )
    })
}  

export {renderNotes};