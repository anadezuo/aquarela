const { faker } = require("@faker-js/faker");

const buildProducts = (size) => {
  return Array(size)
    .fill({})
    .map((_, index) => {
      return {
        id: index + 1,
        image: "",
        title: faker.commerce.productName(),
        summary: faker.commerce.productDescription(),
        slang: faker.lorem.slug(),
      };
    });
};

console.log(JSON.stringify(buildProducts(8), null, "  "));
