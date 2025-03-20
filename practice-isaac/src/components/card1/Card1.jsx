const Card1 =({titulo, subtitulo, texto, boton})=>{
    return (
        <div class="card">
        <h5 class="card-header">{titulo}</h5>
        <div class="card-body">
        <h5 class="card-title">{subtitulo}</h5>
        <p class="card-text">{texto}</p>
        <a href="#" class="btn btn-primary">{boton}</a>
        </div>
        </div>
    )
}

export default Card1;