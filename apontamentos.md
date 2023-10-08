==extrutura de um projecto react==

meu-projeto-react/
  ├── node_modules/           // Dependências do projeto (gerenciadas pelo npm ou yarn)
  ├── public/                 // Arquivos públicos (HTML, imagens, ícones, etc.)
  ├── src/                    // Código-fonte do projeto React
  │   ├── components/         // Componentes React reutilizáveis
  │   ├── pages/              // Componentes de página específicos (roteamento)
  │   ├── App.js              // Componente raiz da aplicação
  │   ├── index.js            // Ponto de entrada da aplicação React
  ├── package.json            // Metadados do projeto e dependências
  ├── package-lock.json       // Versões exatas das dependências (npm)
  ├── yarn.lock               // Versões exatas das dependências (yarn)
  ├── README.md               // Documentação do projeto
 
 # HOOK 

 O termo "hook" em React refere-se a uma característica introduzida no React 16.8 que permite que você use o estado (state) e outros recursos do React em componentes funcionais. Antes dos hooks, as funcionalidades de estado e ciclo de vida estavam disponíveis apenas em componentes de classe.

Os hooks são funções especiais que permitem que você "conecte" o estado e o ciclo de vida do React a componentes funcionais, sem a necessidade de converter esses componentes em classes. Eles foram projetados para tornar o código mais legível e reutilizável em componentes funcionais, que são mais simples e concisos do que componentes de classe.

Alguns dos hooks mais comuns incluem:

1. useState: Permite que você adicione estado local a um componente funcional.

import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}


2. useEffect: Permite que você realize efeitos colaterais em componentes funcionais, como solicitações de rede, atualizações de título da página, etc.

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}


Existem muitos outros hooks disponíveis, como useContext, useReducer, useRef, etc. Eles permitem que você gerencie o estado, os efeitos colaterais e outros aspectos do ciclo de vida em componentes funcionais de forma mais eficaz.

Os hooks tornaram o desenvolvimento em React mais intuitivo e funcional, eliminando a necessidade de classes em muitos casos e promovendo o reuso de lógica em componentes funcionais. Eles se tornaram uma parte fundamental da biblioteca React.

Bibliografia 
https://www.youtube.com/watch?v=b2iWK08pCgs

 # Aspectos abordados neste curso

 1[next] pasta page gera as rotas | ou seja transforma os ficheiros em url 
 2 [React] primeiro componentes
 3 [React]  componentes usando props.children
 4 [React]  componentes usando props
 5 [React]  componentes com eventos 
 6 [React]  componentes com estados
  
   Nota:. No react a mudança de estado de uma váriavel acontece de forma unidirecional. 
   Ou seja para alterares o valor de uma componente , precisas mudar o estado interno da váriavel do componente
          

 7 [React]  comunicação entre componentes (direita)
 8 [React]  comunicação entre componentes (indireita)
 9 [React]  renderização condicional 
 10 [React]  renderização de lista  

 
 
  https://www.youtube.com/watch?v=TE4hnVlQbL4
  12 [React]  componentes de layout com grid #ep.4 
  13 [React]  hook personalizados de layout com grid  #ep.4
  14 [React]  chamar api https://swapi.dev/  #ep.5

  15 [React]  hook... useEffect useCallback useState #EP6

  16 [React]  useContext e Context API  #7 
      




 # Para acessar as paginas da pasta page no browser  basta inserir o  caminho ocultando a extensão do ficheiro 
 # Ou seja as pasta page gera as rotas
 EX:. URL  localhost:3000/pageName/fileName 

 # Acessando ficheiro da pasta  components

 1º criar pasta ex:. components/pasta/File.tsx
 
 para invocar ou acessar componente na pasta page ex:. page/pasta/file.tsx
 basta importar o ficheiro da pasta components/pasta/File.tsx 
 ex: import File from "@/components/pasta/File"; 

 basta criar uma taag com nome do ficheiro do componente no ficheiro da pagina em que pretendes chamar a componente
 ex. <File />

 NOTA:. Por convenção os ficheiros dos componentes são sempre escrito com a primeira letra maiuscúla 
        para diferencia-lôs dos ficheiros das páginas 


NOTA:. Todas ficheiros(imagens,docs, videos etc...) que desejamos adicionar ao projecto e que não estejam armazenados localmente, atravéz do ficheiro next.config.js devemos adicionar o domínio/dns onde esta esta alocado o ficheiro. Para que tenhamos acesso ao ficheiro


     

