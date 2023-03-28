
function Pedido(props){

    const dt_pedido = new Date(props.dt_pedido);

    return <tr>
        <td>{props.id_pedido}</td>
        <td>{props.cliente}</td>
        <td>{new Intl.DateTimeFormat('pt-BR', {dateStyle: 'short'}).format(dt_pedido)}</td>
        <td>{props.status_descricao}</td>
        <td>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.vl_total)}</td>
        <td>
             {/*drop down do bootstrap */}
            <div class="dropdown">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                    Opções
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Editar Pedido</a></li>
                    <li><a class="dropdown-item" href="#">Excluir Pedido</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Finalizar Pedido</a></li>
                    <li><a class="dropdown-item" href="#">Reabrir Pedido</a></li>
                </ul>
            </div>
        </td>
    </tr>
}

export default Pedido;