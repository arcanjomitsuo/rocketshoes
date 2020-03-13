import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9-feminino/68/D16-5354-868/D16-5354-868_zoom2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9-feminino/68/D16-5354-868/D16-5354-868_zoom2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9-feminino/68/D16-5354-868/D16-5354-868_zoom2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9-feminino/68/D16-5354-868/D16-5354-868_zoom2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9-feminino/68/D16-5354-868/D16-5354-868_zoom2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9-feminino/68/D16-5354-868/D16-5354-868_zoom2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis</strong>
        <span>R$199,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
