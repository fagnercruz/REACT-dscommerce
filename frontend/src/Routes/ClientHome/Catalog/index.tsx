import "./style.css";

import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import CatalogItem from "../../../components/CatalogItem";
import { ProductDTO } from "../../../types/Product";

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

export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogItem product={product} key={product.id} />
          <CatalogItem product={product} key={product.id + 1} />
          <CatalogItem product={product} key={product.id + 2} />
          <CatalogItem product={product} key={product.id + 3} />
          <CatalogItem product={product} key={product.id + 4} />
          <CatalogItem product={product} key={product.id + 5} />
          <CatalogItem product={product} key={product.id + 6} />
          <CatalogItem product={product} key={product.id + 7} />
          <CatalogItem product={product} key={product.id + 8} />
          <CatalogItem product={product} key={product.id + 9} />
          <CatalogItem product={product} key={product.id + 10} />
          <CatalogItem product={product} key={product.id + 11} />
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
