import { Link, Outlet } from "react-router-dom"; // Importa o Link para navegação entre rotas e Outlet para renderizar rotas filhas
import './Cabecalho.css'; // Importa o arquivo CSS para estilização

function Cabecalho() { // Define o componente Cabecalho
    return (
        <header className="cabecalho">
            <div className="logo">
                <h1>Home Task .app</h1> {/* Título do cabeçalho */}
            </div>
            <nav className="nav-links">
                <Link to='/tarefas' className="link">Tarefas</Link> {/* Link para a rota '/tarefas' */}
                <Link to='/cadastroU' className="link">Cadastro de Usuário</Link> {/* Link para a rota '/cadastroU' */}
            </nav>
            <Outlet /> {/* Renderiza as rotas filhas */}
        </header>
    );
}

export default Cabecalho; // Exporta o componente Cabecalho
