import{ useState } from 'react';
import './App.css';

function home(){
    const [number, timer] = useState(0);

    return (
        <div>
            <h1>Pagina inutil</h1>
            <p>You clicked {number} times</p>
            <button onClick={() => timer(number + 1)}>Clieck me</button>
        </div>
    );
}

const contador = (props) => (
    <h1 class="my-title">{props.minutos}:{props.segundos}</h1>
)

export default contador