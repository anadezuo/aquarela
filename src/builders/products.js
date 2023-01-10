import products from "../mocks/products.json";
import BgWaterColor from "stories/assets/bg-watercolor.jpg";

export const buildProducts = (size) => {
  return Array(size)
    .fill({})
    .map((_, index) => {
      return {
        ...products[index],
        image: BgWaterColor,
      };
    });
};

export const buildProduct = () => buildProducts(1)[0];
