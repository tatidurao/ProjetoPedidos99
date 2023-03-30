import Navbar from "../../components/navbar/navbar.jsx";
import Grafico from "../../components/grafico/grafico.jsx";
import { useState } from "react";
import { useEffect } from "react";

function Dashboard(){

    const [dados_clientes, setDadosClientes] = useState([]);
    const [dados_vendas, setDadosVendas] = useState([]);
    const [dados_produtos, setDadosProdutos] = useState([]);
    const [dados_cidades, setDadosCidades] = useState([]);

    function GraficoClientes(){

      // Fazer um get no servidor...

      setDadosClientes([
        ["Cliente", "Vendas"],
        ["Microsoft", 5200],
        ["IBM", 4900],
        ["Apple", 4200],
        ["Facebook", 3210],
        ["Google", 2140]
      ]);
    } 

    function GraficoVendas(){
      setDadosVendas([
        ["Mês", "Vendas"],
        ["1", 5200],
        ["2", 4900],
        ["3", 7200],
        ["4", 3210],
        ["5", 5362],
        ["6", 6200],
        ["7", 6852],
        ["8", 4210],
        ["9", 5630],
        ["10", 8452],
        ["11", 4250],
        ["12", 6325]        
      ]);
    }

    function GraficoProdutos(){
      setDadosProdutos([
        ["Produto", "Vendas"],
        ["Teclado", 5200],
        ["Monitor", 4900],
        ["HD", 4200],
        ["Fone", 3210],
        ["Webcam", 2140]
      ]);
    }
      
    function GraficoCidades(){
      setDadosCidades([
        ["Cidade", "Vendas"],
        ["São Paulo", 5200],
        ["Rio de Janeiro", 4900],
        ["Campinas", 4200],
        ["Curitiba", 3210],
        ["Bauru", 2140]
      ]);
    }
        
    function MontarGraficos(){
      GraficoClientes();
      GraficoVendas();
      GraficoProdutos();
      GraficoCidades();
    }
    {/*Ele chama essa função uma vez quando a pag é recarregada */}
    useEffect(() => {
      MontarGraficos();
    }, []);

    return <>
        <Navbar />

        <div className="container-fluid mt-page">

            <div className="ms-4 d-flex justify-content-between">
                <h2>Dashboard</h2>
                <button className="btn btn-primary me-4" onClick={MontarGraficos}>Atualizar</button>
            </div> 

            <div className="row">

                <div className="col-md-6 p-5">
                    <Grafico titulo="Venda por clientes (top 5)" 
                             chartType="Bar"
                             dados={dados_clientes}
                             legenda={false} />
                </div>

                <div className="col-md-6 p-5">
                    <Grafico titulo="Vendas anual" 
                             chartType="Line"
                             dados={dados_vendas}
                             legenda={false} />
                </div>

                <div className="col-md-6 p-5">
                    <Grafico titulo="Venda por produto (top 5)" 
                             chartType="PieChart"
                             dados={dados_produtos}
                             legenda={true} />
                </div>

                <div className="col-md-6 p-5">
                    <Grafico titulo="Venda por cidade" 
                             chartType="BarChart"
                             dados={dados_cidades}
                             legenda={false} />
                </div>
       

            </div>

        </div>
    </>
}

export default Dashboard;