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
 

Bibliografia 
https://www.youtube.com/watch?v=b2iWK08pCgs

 # Aspectos abordados deste curso

 1[next] pasta page gera as rotas | ou seja transforma os ficheiros em url 
 2 [React] primeiro componentes
 3 [React]  componentes usando props.children
 4 [React]  componentes usando props.children
 5 [React]  componentes usando props.children



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


     

