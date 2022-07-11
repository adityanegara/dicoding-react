import styles from './NoteList.module.scss';
import NOTES from './notes_constant';
import { useEffect } from 'react';

const NoteList = () =>{
    const notesToRowNotes = (notes) =>{
        let noteRows = [];
        const chunkSize = 2;
        for (let i = 0; i < notes.length; i += chunkSize) {
            const chunk = notes.slice(i, i + chunkSize);
            noteRows.push(chunk);
        }
        return noteRows;
    }

    const renderNotes = (noteRow) =>{
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
                return (i % 2 === 0) ? styles['width-60'] : styles['width-40']
               
            }
            return (i % 2 === 0) ? styles['width-40'] : styles['width-60']
          
          
        }
        return noteRow.map((note, i) =>{
            return(
            <div className={`${styles['note']} ${getNoteWidth(i)}`}>
                {note.title}
            </div>
            )
        })
    }   
  

    return(
        <div className={styles['note-list']}>
           {renderNotes(notesToRowNotes(NOTES))}
            
        </div>
    )
}

export default NoteList;