import './styles.scss';

function Modal({ children }: { children: React.ReactNode }) {
    return ( 
        <div className="modal">
            {children}
        </div>
     );
}

export default Modal;