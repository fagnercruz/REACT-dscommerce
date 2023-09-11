import "./style.css";
import Tag from "../Tag";
import Button from "../Button";

import { ProductDTO } from "../../types/Product";

type Props = {
  product: ProductDTO;
};

export default function ProductDetailCard({ product }: Props) {
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        <div className="dsc-card dsc-mb20">
          <div className="dsc-product-details-top dsc-line-bottom">
            <img src={product.imgUrl} alt={product.name} />
          </div>
          <div className="dsc-product-details-bottom">
            <h3>R$ {product.price.toFixed(2)}</h3>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <div className="dsc-category-container">
              {product.categories.map((cat) => {
                return <Tag name={cat.name} key={cat.id} />;
              })}
            </div>
          </div>
        </div>
        <div className="dsc-btn-page-container">
          <Button label="Comprar" corClass="blue" />
          <Button label="Inicio" corClass="white" />
        </div>
      </section>
    </main>
  );
}
