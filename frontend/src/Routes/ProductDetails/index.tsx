import ProductDetailCard from "../../components/ProductDetailCard";
import { ProductDTO } from "../../types/Product";
import "./styles.css";

const product: ProductDTO = {
  id: 1,
  name: "MacBook Pro XT",
  description:
    "Novo MacBook vesão 2024 2.0 Turbo Mega Master Hiper Ultra com injeção direta MPFI",
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/10-small.jpg",
  price: 8999.99,
  categories: [
    {
      id: 1,
      name: "Computadores",
    },
    {
      id: 2,
      name: "Importados",
    },
    {
      id: 3,
      name: "Mac",
    },
  ],
};

export default function ProductsDetails() {
  return (
    <>
      <ProductDetailCard product={product} />
    </>
  );
}
