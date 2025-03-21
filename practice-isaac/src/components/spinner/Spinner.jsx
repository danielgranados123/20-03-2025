import './Spinner.css';

const Titulo = ({titulo, etiqueta}) => {
    return (
        <div class="spinner-border" role="status">
  <span class="visually-hidden">Cargando...</span>
</div>
    );
}

export default Titulo;