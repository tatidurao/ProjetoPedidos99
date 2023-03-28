{/*google charts www.npmjs.doc */}
import { Chart } from "react-google-charts";
 {/**vamos modificar varios grafico e por isso usaremos as props*/}
function Grafico(props){
    {/* */}
    const options = {
        /* se props legenda verdadeiro, nao remove se falso remove*/
        legend: props.legenda ? { } : { position: "none" }
    }

    return <>
    {/* cinza text-secondary*/}
    <h3 className="text-secondary">{props.titulo}</h3>

        <Chart chartType={props.chartType}
               data={props.dados}
               width="100%"
               height="180px"
               options={options}
               legendToggle />    
    </>    
}

export default Grafico;