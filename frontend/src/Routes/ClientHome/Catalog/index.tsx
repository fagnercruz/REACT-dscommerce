import "./style.css";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import CatalogItem from "../../../components/CatalogItem";
import { ProductDTO } from "../../../types/Product";
import { useEffect, useState } from "react";
import * as productService from "../../../services/product-service.ts";

export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    productService.findAll().then((response) => {
      setProducts(response.data.content);
      console.log("Status:" + response.status);
    });
  }, []);

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((p) => (
            <CatalogItem product={p} key={p.id} />
          ))}
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
