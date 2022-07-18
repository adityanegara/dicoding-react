import styles from './Test.module.scss';

const getSelectedButton = (button, currentSelectedButton) =>{
    return  (button === currentSelectedButton) ? styles['selected'] : '';
}

export {getSelectedButton};