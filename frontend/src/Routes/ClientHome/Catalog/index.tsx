import "./style.css";

import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import CatalogItem from "../../../components/CatalogItem";
import * as productService from "../../../services/product-service";

export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {productService.findAll().map((p) => (
            <CatalogItem product={p} key={p.id} />
          ))}
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
