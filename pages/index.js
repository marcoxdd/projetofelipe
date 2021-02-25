import{ useState } from 'react';

function home(){
    const [contador, timer] = useState(0);

    return (
        <div>
            <h1>Pagina inutil</h1>
            <p>You clicked {contador} times</p>
            <button onClick={() => timer(contador + 1)}>Clieck me</button>
        </div>
    );
}

export default home