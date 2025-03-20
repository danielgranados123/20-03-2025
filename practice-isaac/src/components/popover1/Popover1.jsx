import './Popover1.css';

const Popover1 =({a, b, c})=>{

    return (
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">{a}</button>
        <button type="button" class="btn btn-primary">{b}</button>
        <button type="button" class="btn btn-primary">{c}</button>
      </div>
    )
}

export default Popover1;