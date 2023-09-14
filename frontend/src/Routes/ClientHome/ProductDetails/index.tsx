import "./styles.css";
import ProductDetailCard from "../../../components/ProductDetailCard";
import * as productService from "../../../services/product-service";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../types/Product";

export default function ProductsDetails() {
  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId)).then((response) => {
      console.log("Carregou produto: " + response.data.name);
      setProduct(response.data);
    });
  }, [params.productId]);

  return <>{product && <ProductDetailCard product={product} />}</>;
}
