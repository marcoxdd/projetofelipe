import{ useState } from 'react';

function home() {
    return (
        <div>
            <h1>Home</h1>
             <Mais />
            </div>
    )
    // hahaha
}
function Mais() {
   const [contador,setContador] = useState(1);
   function adicionarContador() {
       setContador(contador +  1);
   }
   function diminuirContador() {
       setContador(contador - 1);
   }
return( 
<div>
    <div>{contador}</div>
    <button onClick = {adicionarContador}  >+1</button>
    <button onClick = {diminuirContador} > -1 </button>
</div> 
)
}



export default home