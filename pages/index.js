import{ useState } from 'react';

function home(){
    return (
        <div>
            <h1>Home</h1>
            <button />
            </div>
    )
}


function contador() {
   const [contador,setContador] = useState(1);

   function adicionarContador() {
       setContador(contador +  gi1);
   }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar Contador</button>
        </div>
    )
}



export default home