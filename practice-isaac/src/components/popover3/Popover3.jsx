import './Popover3.css';

const Popover3 = ({a, b, c}) => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary boton3">{a}</button>
            <button type="button" className="btn btn-primary boton3">{b}</button>
            <button type="button" className="btn btn-primary boton3">{c}</button>
        </div>
    );
}

export default Popover3;