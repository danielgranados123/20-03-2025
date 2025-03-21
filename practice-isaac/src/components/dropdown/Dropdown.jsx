import './Dropdown.css';

const Dropdown = ({ primero, segundo, tercero, titulo }) => {
    return (
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {titulo}
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">{primero}</a></li>
    <li><a class="dropdown-item" href="#">{segundo}</a></li>
    <li><a class="dropdown-item" href="#">{tercero}</a></li>
  </ul>
</div>
    );
}

export default Dropdown;
