import React from 'react';

const InputModal = (props) => {
    return (
        props.isOpen ?
            <div>
                <div>Hello</div>
                <button onClick={props.onClose()}>Close</button>
            </div> :
            <></>
    );
};

export default InputModal;