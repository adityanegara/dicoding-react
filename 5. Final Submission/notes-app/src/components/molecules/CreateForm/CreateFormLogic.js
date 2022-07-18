import styles from './CreateForm.module.scss';

const getFontColorCreateButtonHover = (background) =>{
    switch(background) {
        case 'red':
          return styles['create-button__red'];
        case 'orange':
          return styles['create-button__orange'];
        case 'blue':
          return styles['create-button__blue'];
        case 'green':
          return styles['create-button__green'];
        default:
         return styles['create-button__orange'];
      }
}

const getTextAreaRows = (isDesktop) =>{
  return (isDesktop) ? "5" : "10";
}

export {getFontColorCreateButtonHover, getTextAreaRows};