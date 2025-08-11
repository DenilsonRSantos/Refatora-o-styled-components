import React, { useState } from "react";
import CardProduto from "./components/CardProduto";

export default function App() {
  const [adicionado, setAdicionado] = useState(false);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa"
    }}>
      <CardProduto
        nome="Camiseta colorida"
        preco="39,90"
        adicionado={adicionado}
        onClick={() => setAdicionado(!adicionado)}
      />
    </div>
  );
}

