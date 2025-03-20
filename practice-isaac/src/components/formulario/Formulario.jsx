import './Formulario.css';

const Formulario =({nombre, texto, correo, check, textoBoton})=>{
    return (
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">{correo}</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">Nos contactaremos contigo</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">{nombre}</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
                <button type="submit" className="btn">{textoBoton}</button>
        </form>
    )
}

export default Formulario;