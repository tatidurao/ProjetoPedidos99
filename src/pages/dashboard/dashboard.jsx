import Navbar from "../../components/navbar/navbar.jsx";
import Grafico from "../../components/grafico/grafico.jsx";

function Dashboard(){

    const dados_clientes = [
        ["Cliente", "Vendas"],
        ["Microsoft", 5200],
        ["IBM", 4900],
        ["Apple", 4200],
        ["Facebook", 3210],
        ["Google", 2140]
      ];

      const dados_vendas = [
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
      ];

      const dados_produtos = [
        ["Produto", "Vendas"],
        ["Teclado", 5200],
        ["Monitor", 4900],
        ["HD", 4200],
        ["Fone", 3210],
        ["Webcam", 2140]
      ];

      const dados_cidades = [
        ["Cidade", "Vendas"],
        ["São Paulo", 5200],
        ["Rio de Janeiro", 4900],
        ["Campinas", 4200],
        ["Curitiba", 3210],
        ["Bauru", 2140]
      ];
      {/** */}
    return <>
        <Navbar />
        {/*a div da pagina inteira chamando o stilo global mt-page*/}
        <div className="container-fluid mt-page">
            {/** primeiro elemento h2 para esquerda e segundo elemento para direita botao*/}
            <div className="ms-4 d-flex justify-content-between">
                <h2>Dashboard</h2>
                 {/*botao herda estilo bootstrap primary é azul */}
                <button className="btn btn-primary me-4"><i className="fas fa-plus"></i>Atualizar</button>
            </div> 
             {/**graficos dentro dela caixa*/}
            <div className="row">
                 {/** taamnho medio 6 colunas ate que a tela nao fique menor* paddingin 5*/}
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