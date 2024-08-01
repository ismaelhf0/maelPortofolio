import React, { useState, useRef, useImperativeHandle, forwardRef, useEffect,children } from 'react';
import './modal.scss';

// Forward ref to get access to the modal's methods
const Modal = forwardRef(({ children,isClickOutside = true }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    // Expose methods to parent components
    useImperativeHandle(ref, () => ({
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false)
    }));

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isClickOutside && modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isClickOutside]);

    return (
        <div className="modal-container" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-wrapper" ref={modalRef}>
                {children}
            </div>
        </div>
    );
});

export default Modal;
