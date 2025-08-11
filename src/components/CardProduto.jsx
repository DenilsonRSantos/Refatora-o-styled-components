import React from "react";
import styled from "styled-components";

// Container geral do card
const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 250px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

// Nome do produto
const NomeProduto = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #333;
`;

// Preço do produto
const PrecoProduto = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #555;
  margin-bottom: 12px;
`;

// Botão dinâmico
const BotaoAdicionar = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #fff;
  background-color: ${({ adicionado }) => (adicionado ? "#198754" : "#6c757d")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ adicionado }) => (adicionado ? "#157347" : "#5a6268")};
  }
`;

export default function CardProduto({ nome, preco, adicionado, onClick }) {
  return (
    <CardContainer>
      <NomeProduto>{nome}</NomeProduto>
      <PrecoProduto>R$ {preco}</PrecoProduto>
      <BotaoAdicionar adicionado={adicionado} onClick={onClick}>
        {adicionado ? "Adicionado ✅" : "Adicionar ao Carrinho"}
      </BotaoAdicionar>
    </CardContainer>
  );
}
