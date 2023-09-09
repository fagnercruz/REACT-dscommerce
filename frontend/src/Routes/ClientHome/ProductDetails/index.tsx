import "./styles.css";
import ProductDetailCard from "../../../components/ProductDetailCard";
import * as productService from "../../../services/product-service";
import { useParams } from "react-router-dom";

export default function ProductsDetails() {
  const params = useParams();
  const product = productService.findById(Number(params.productId));

  return <>{product && <ProductDetailCard product={product} />}</>;
}
