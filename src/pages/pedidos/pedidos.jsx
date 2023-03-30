import Navbar from "../../components/navbar/navbar.jsx";
import { Link } from "react-router-dom";
import "./pedidos.css";
import Pedido from "../../components/pedido/pedido.jsx";
import { useState } from "react";
import { useEffect } from "react";

function Pedidos(){

    const [pedidos, setPedidos] = useState([]);
    const [status, setStatus] = useState("");

    function ConsultarPedidos(){
        
        // Fazer get o server...

        setPedidos([
            {
                "id_pedido": 3,
                "cliente": "Autoposto São Paulo",
                "dt_pedido": "2023-03-09T19:45:54.209Z",
                "status": "A",
                "status_descricao": "Em Aberto",
                "vl_total": 630
            },
            {
                "id_pedido": 2,
                "cliente": "Autoposto Brasil",
                "dt_pedido": "2023-03-09T19:45:54.209Z",
                "status": "F",
                "status_descricao": "Finalizado",
                "vl_total": 180
            },
            {
                "id_pedido": 1,
                "cliente": "99 Coders",
                "dt_pedido": "2023-02-15T00:00:00.000Z",
                "status": "F",
                "status_descricao": "Finalizado",
                "vl_total": 1400
            }
        ]);
    }    

    useEffect(() => {
        ConsultarPedidos();
    }, []);

    return <>
        <Navbar />

        <div className="container-fluid mt-page form-pedido">

            <div className="ms-4 d-flex justify-content-between">
                <div>
                    <h2 className="d-inline">Pedidos</h2>
                    <Link className="btn btn-success ms-5 mb-2" to="/pedidos/novo">Adicionar Pedido</Link>
                </div>

                <div>
                     <div className="form-control d-inline me-3">
                        <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>
                            <option value="">Todos os Status</option>
                            <option value="A">Aberto</option>
                            <option value="F">Finalizado</option>
                        </select>
                    </div>
                    <button className="btn btn-primary" onClick={ConsultarPedidos}>Filtrar</button>
                </div>
                
            </div> 

            <div className="mt-5 ms-4 me-4">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Pedido</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Dt. Venda</th>
                        <th scope="col">Status</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pedidos.map((pedido) => {
                                return <Pedido key={pedido.id_pedido}
                                               id_pedido={pedido.id_pedido}
                                               cliente={pedido.cliente}
                                               dt_pedido={pedido.dt_pedido}
                                               status={pedido.status}                                
                                               status_descricao={pedido.status_descricao}
                                               vl_total={pedido.vl_total} />
                            })                            
                        }                        
                        
                    </tbody>
                </table>
            </div>

        </div>
    </>
}

export default Pedidos;