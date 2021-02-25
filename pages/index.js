import{ useState } from 'react';

data-ad-client="ca-pub-4490220948438663" async 
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"

function home() {
    return (
        <div>
            <h1>Home</h1>
             <Contador />
            </div>
    )
}
function Contador() {
   const [contador,setContador] = useState(1);

   function adicionarContador() {
       setContador(contador +  1);
   }
return( 
<div>
    <div>{contador}</div>
    <button onClick = {adicionarContador}  >Adicionar Contador</button>
</div> 
)
}



export default home