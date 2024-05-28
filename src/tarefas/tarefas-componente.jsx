import { useState } from "react";

function Tarefas() {
    const [listaTarefas, setListaTarefas] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    function adicionarTarefa() {
        const novaTarefa = {
            titulo: titulo,
            descricao: descricao,
            finalizado: false
        };

        setListaTarefas([...listaTarefas, novaTarefa]);
        setTitulo('');
        setDescricao('');
        console.log('Cadastrado');
    }

    function atualizarTarefa(index) {
        const tarefasAtualizadas = [...listaTarefas];
        tarefasAtualizadas[index].finalizado = !tarefasAtualizadas[index].finalizado;
        setListaTarefas(tarefasAtualizadas);
    }

    function excluirTarefa(index) {
        const tarefasAtualizadas = listaTarefas.filter((_, i) => i !== index);
        setListaTarefas(tarefasAtualizadas);
    }

    function pegaEstilo(tarefaAtual) {
        return tarefaAtual.finalizado ? 'line-through' : 'none';
    }

    return (
        <div>
            <h2>Cadastrar Nova Tarefa</h2>
            <div>
                <label>
                    Título:
                    <input 
                        type="text" 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                    />
                </label>
                <br />
                <label>
                    Descrição:
                    <input 
                        type="text" 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)} 
                    />
                </label>
                <br />
                <button onClick={adicionarTarefa}>Cadastrar</button>
            </div>
            <br />
            <h2>Lista de Tarefas</h2>
            <div>
                {
                    listaTarefas.map((tarefaAtual, index) => (
                        <div key={index} style={{
                                margin: '10px',
                                color: 'white',
                                backgroundColor: 'aqua',
                                textDecoration: pegaEstilo(tarefaAtual),
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input 
                                    type="checkbox" 
                                    checked={tarefaAtual.finalizado} 
                                    onChange={() => atualizarTarefa(index)} 
                                    style={{ marginRight: '10px' }}
                                />
                                <div onClick={() => atualizarTarefa(index)} style={{ cursor: 'pointer' }}>
                                    <strong>{tarefaAtual.titulo}</strong>: {tarefaAtual.descricao}
                                </div>
                            </div>
                            <button onClick={() => excluirTarefa(index)} style={{ marginLeft: '10px' }}>
                                Excluir
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Tarefas;
