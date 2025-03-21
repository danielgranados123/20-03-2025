import './Popover.css';

const Popover1 = ({a, b, c}) => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary boton1">{a}</button>
            <button type="button" className="btn btn-primary boton1">{b}</button>
            <button type="button" className="btn btn-primary boton1">{c}</button>
        </div>
    );
}

export default Popover1;