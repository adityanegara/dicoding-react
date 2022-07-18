import ReactDOM from 'react-dom';
import Overlay from "../../atoms/Overlay/Overlay";
import uiStore from "../../../store/uiStore";
import styles from './Modal.module.scss';
import CreateForm from '../CreateForm/CreateForm';
import closeIcon from '../../../assets/icons/close.png';
import { getModalBackgroundColor } from './ModalLogic';

const Modal = () =>{
    const isCreateModalOpen = uiStore(state => state.isCreateModalOpen);
    const toggleCreateModalOpen = uiStore(state => state.toggleCreateModalOpen);
    const createModalBackgroundColor = uiStore(state => state.createModalBackgroundColor);
    const stopPropagation = (e) =>{
        e.stopPropagation();
    }
    const renderModal = (isCreateModalOpen) =>{
        return (isCreateModalOpen) ? 
            (
            <Overlay onHandleOverlayClicked={toggleCreateModalOpen}>
                <div className={`${styles['modal']} ${getModalBackgroundColor(createModalBackgroundColor)}`} onClick={stopPropagation}>
                    <div className={styles['close-modal__button']}>
                    <button onClick={toggleCreateModalOpen} aria-label='close modal' >
                        <img alt='close' src={closeIcon}/>
                    </button>
                    </div>
              
                   <div className={styles['modal-content']} >
                        <CreateForm/>
                   </div>
                </div>
            </Overlay>)
             : null
    }
    return ReactDOM.createPortal(renderModal(isCreateModalOpen), document.getElementById('modal'))
}

export default Modal;