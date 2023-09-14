import "./styles.css";
import ProductDetailCard from "../../../components/ProductDetailCard";
import * as productService from "../../../services/product-service";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../types/Product";

export default function ProductsDetails() {
  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();
  const navigate = useNavigate();

  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then((response) => {
        /* Condição para sucesso */
        console.log("Carregou produto: " + response.data.name);
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  });

  return <>{product && <ProductDetailCard product={product} />}</>;
}
