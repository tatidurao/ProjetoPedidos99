import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Pedidos from "./pages/pedidos/pedidos.jsx";
import PedidoEditar from "./pages/pedido-editar/pedido-editar.jsx";

function Rotas(){
    return <BrowserRouter>
        <Routes>
            /*Endpoint */
            <Route path="/" element={<Dashboard />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/pedidos/novo" element={<PedidoEditar />} />
        </Routes>
    </BrowserRouter>
}

export default Rotas;