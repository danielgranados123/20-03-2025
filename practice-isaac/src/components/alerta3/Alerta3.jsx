import './Alerta3.css';

const Alerta3 = ({texto}) => {
    return (
        <div className="alert alert-warning" role="alert">
            {texto}
        </div>
    );
}

export default Alerta3;