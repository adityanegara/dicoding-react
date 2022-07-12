import styles from './WidgetButton.module.scss';
import { getWidgetButtonPosition } from './WidgetButtonLogic';
import uiStore from '../../../store/uiStore';

const WidgetButton = ({label, position, text}) =>{

    const toggleCreateModalOpen = uiStore(state => state.toggleCreateModalOpen);

    return(
        <button aria-label={label} onClick={toggleCreateModalOpen} className={`${styles['widget-button']} ${getWidgetButtonPosition(position)}`}>
            {text}
        </button>
    )
}

export default WidgetButton;