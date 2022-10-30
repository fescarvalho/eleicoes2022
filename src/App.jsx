import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [lula, setLula] = useState({});
  const [bolsonaro, setBolsonaro] = useState({});
  const [urnas, setUrnas] = useState(0);
  const [contador, setContador] = useState(0);
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [eleitoL, setEleitoL] = useState("");
  const [eleitoB, setEleitoB] = useState("");

  useEffect(() => {
    gateData();
  }, [contador]);
  function render() {
    gateData();
  }

  setTimeout(() => {
    setContador(contador + 1);
  }, [1000]);

  function gateData() {
    axios
      .get(
        "https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json",
      )
      .then((response) => {
        console.log(response);
        setLula(response.data.cand[0]);
        setBolsonaro(response.data.cand[1]);
        setUrnas(response.data.pst);
        setData(response.data.dg);
        setHora(response.data.hg);
        setEleitoL(response.data.cand[0].e === "s" ? true : false);
        setEleitoB(response.data.cand[1].e === "s" ? true : false);
      });
  }

  return (
    <div className="app">
      <h1 className="title">
        ELEIÇÕES 2022 <span>Segundo Turno</span>{" "}
      </h1>
      <div className="urnas">
        <h2>Urnas Apuradas</h2>
        <span>{urnas}%</span>
        <p>
          Ultima atualização: {data} - {hora} - Fonte: TSE
        </p>
      </div>
      <div className="contentApp">
        <h1>Resultados Gerais</h1>
        <Card name={lula.nm} porcentagem={lula.pvap} eleito={eleitoL} />
        <Card name={bolsonaro.nm} porcentagem={bolsonaro.pvap} eleito={eleitoB} />
      </div>
      <button className="btn" onClick={render}>
        ATUALIZAR
      </button>
    </div>
  );
}

export default App;
