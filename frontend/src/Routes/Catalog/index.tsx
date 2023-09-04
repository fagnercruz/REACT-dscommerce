import "./style.css";
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import ButtonNextPage from "../../components/ButtonNextPage";
import CatalogItem from "../../components/CatalogItem";

export default function Catalog() {
  return (
    <>
      <HeaderClient />

      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
