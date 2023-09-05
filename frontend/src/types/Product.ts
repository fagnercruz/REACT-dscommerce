import { CategoryDTO } from "./Category";

export type ProductDTO = {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  categories: CategoryDTO[];
};
