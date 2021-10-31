import React, { useState, useEffect, useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext';
import CloseModal from './CloseModal';
const Modal = ({ children,className }) => {
    const [open, setopen] = React.useContext(ModalContext);

    return (
        <div className={(open ? "flex" : "hidden") + " "+className }>
            <CloseModal className="absolute w-full h-full bg-gray-900 opacity-50">
            </CloseModal>
            {children}

        </div>
    )
}

export default Modal
