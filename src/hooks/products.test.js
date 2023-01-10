import { useProduct, useProducts } from "./products";

describe("Products Hook", () => {
  it("should return a product according to the given slang value", () => {
    const slang = "pintura-de-alimentos";
    const product = useProduct({ slang });
    expect(product.title).toEqual("Pintura de alimentos");
  });

  it("should return undefined if product not found", () => {
    const slang = "not-found";
    const product = useProduct({ slang });
    expect(product).toBeUndefined();
  });

  it("should return a product list", () => {
    const products = useProducts();
    expect(products.length).toBeGreaterThan(1);
  });
});
