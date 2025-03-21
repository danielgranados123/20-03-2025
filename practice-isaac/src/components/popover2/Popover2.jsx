import './Popover2.css';

const Popover2 = ({a, b, c}) => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary boton2">{a}</button>
            <button type="button" className="btn btn-primary boton2">{b}</button>
            <button type="button" className="btn btn-primary boton2">{c}</button>
        </div>
    );
}

export default Popover2;