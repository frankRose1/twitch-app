import React from 'react';
import Overlay from './Overlay';
import Aux from '../../hoc/Auxilliary';

const Modal = props => {
    let modalClass;
    if (props.showModal) {
        modalClass = 'modal';
    } else {
        modalClass = 'modal hide';
    }

    return (
        <Aux>
            <Overlay show={props.showModal} 
                    hideModalHandler={props.hideModalHandler}/>
            <div className={modalClass}>
                {props.children}
            </div>
        </Aux>
    );
};

export default Modal;