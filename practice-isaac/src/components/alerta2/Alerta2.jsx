import './Alerta2.css';

const Alerta2 = ({texto}) => {
    return (
        <div className="alert alert-primary" role="alert">
            {texto}
        </div>
    );
}

export default Alerta2;