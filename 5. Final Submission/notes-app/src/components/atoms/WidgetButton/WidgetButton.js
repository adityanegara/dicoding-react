import styles from './WidgetButton.module.scss';
import { getWidgetButtonPosition } from './WidgetButtonLogic';

const WidgetButton = ({label, position, text}) =>{
    return(
        <button aria-label={label} className={`${styles['widget-button']} ${getWidgetButtonPosition(position)}`}>
            {text}
        </button>
    )
}

export default WidgetButton;