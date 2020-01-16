import React, { useState } from 'react';

// três conceitos 
// Componente: App() é um componente que retorna um HTML, CSS e JavaScript. É um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Estado: Informaçãoes mantidas pelo componente (Lembrar: imutabilidade)
// Propriedade: Informações que um componente PAI passa para o compoenete FILHO

// import Header from './Header';

// function App() {
//   return (
//     <>
//       <Header title="Titulo 1" />
//       <Header title="Titulo 2" />
//       <Header title="Titulo 3" />
//     </>
//   );
// }

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incremetar</button>
    </>
  );
}

export default App;
