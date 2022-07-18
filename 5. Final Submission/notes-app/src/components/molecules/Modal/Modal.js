import ReactDOM from 'react-dom';
import Overlay from "../../atoms/Overlay/Overlay";
import uiStore from "../../../store/uiStore";
import styles from './Modal.module.scss';
import CreateForm from '../CreateForm/CreateForm';

const Modal = () =>{
    const isCreateModalOpen = uiStore(state => state.isCreateModalOpen);
    const toggleCreateModalOpen = uiStore(state => state.toggleCreateModalOpen);

    const stopPropagation = (e) =>{
        e.stopPropagation();
        console.log('Clicking inside modal');
    }
    const renderModal = (isCreateModalOpen) =>{
        return (isCreateModalOpen) ? 
            ( 
            <Overlay onHandleOverlayClicked={toggleCreateModalOpen}>
                <div className={styles['modal']} onClick={stopPropagation}>
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