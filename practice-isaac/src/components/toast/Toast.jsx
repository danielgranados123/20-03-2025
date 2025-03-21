import './Toast.css';

const Toast = ({ titulo, hora, texto }) => {
    return (
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <strong className="me-auto">{titulo}</strong>
                <small>{hora}</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {texto}
            </div>
        </div>
    );
}

export default Toast;
