import './Perfil.css';

const Perfil = ({nombre}) => {
    return (
        <button type="button" className="btn btn-primary btnPerfil position-relative">
            {nombre}
        <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
        <span class="visually-hidden">New alerts</span>
        </span>
        </button>
    );
}

export default Perfil;