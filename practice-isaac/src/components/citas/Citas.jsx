import './Cita.css';

const Citas =({nombre, texto, autor})=>{
    return (
        <div class="card">
            <div className="titulo">
                {nombre}
            </div>
            <div className="card-body">
                <p className="texto">
                    {texto}
                </p>
                <p className="autor">
                    {autor}
                </p>
            </div>
        </div>
    )
}

export default Citas;