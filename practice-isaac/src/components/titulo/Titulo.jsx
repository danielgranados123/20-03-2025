import './Titulo.css';

const Titulo = ({titulo, etiqueta}) => {
    return (
        <h1>{titulo} <span class="badge text-bg-secondary">{etiqueta}</span></h1>
    );
}

export default Titulo;