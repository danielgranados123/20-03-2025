import './Alerta1.css';

const Alerta1 = ({texto}) => {
    return (
        <div className="alert alert-danger" role="alert">
            {texto}
        </div>
    );
}

export default Alerta1;