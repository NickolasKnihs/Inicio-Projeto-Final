import React from 'react'; // Importa o React
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM para renderização do DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Importa funções do React Router para lidar com rotas
import App from './App.jsx'; // Importa o componente App
import './index.css'; // Importa o arquivo CSS para estilização
import Cabecalho from './componente-cabecalho/cabecalho.jsx'; // Importa o componente Cabecalho
import Tarefas from './tarefas/tarefas-componente.jsx'; // Importa o componente Tarefas
import CadastroUsuario from './cadastroU/cadastro-usuario.jsx'; // Importa o componente CadastroUsuario

// Cria as rotas da aplicação usando o createBrowserRouter
const routes = createBrowserRouter([
  {
    path: '/', // Rota raiz
    element: <Cabecalho />, // Componente a ser renderizado na raiz
    children: [ // Rotas filhas
      {
        path: 'tarefas', // Rota para a página de tarefas
        element: <Tarefas /> // Componente a ser renderizado na rota de tarefas
      },
      {
        path: 'cadastroU', // Rota para a página de cadastro de usuário
        element: <CadastroUsuario /> // Componente a ser renderizado na rota de cadastro de usuário
      }
    ]
  }
]);

// Renderiza a aplicação dentro do elemento com o ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} /> {/* Fornece as rotas para a aplicação usando o RouterProvider */}
  </React.StrictMode>
);
