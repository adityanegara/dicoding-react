import styles from './Note.module.scss';

const getNoteWidth = (i, rowIndex) =>{
    if(rowIndex % 2 === 0){
        return (i % 2 === 0) ? styles['width-small'] : styles['width-large']
    }
    return (i % 2 === 0) ? styles['width-large'] : styles['width-small']
}

const getNoteColor= () =>{
    const colors = [styles['orange-note'], styles['blue-note'], styles['green-note'], styles['red-note']];
    return colors[Math.floor(Math.random()*colors.length)];
}

export {getNoteWidth, getNoteColor}