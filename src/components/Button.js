import '../styles/buttons.css';

function Button({nameId, nameClass, onMouseEnter, onMouseLeave, img, event}) {
    return(
        <button
            onClick={event}
            id={nameId}
            className={nameClass}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            {img}
        </button>
    )
}

export default Button;