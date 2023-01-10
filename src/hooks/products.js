import Birds from "assets/products/birds.jpg";
import Flowers from "assets/products/flowers.jpg";
import Fruit from "assets/products/fruit.jpg";
import Material from "assets/products/material.jpg";
import Ocean from "assets/products/ocean.jpg";
import People from "assets/products/people.jpg";
import Pencel from "assets/products/pencel.jpg";

function buildProducts() {
  const products = [
    {
      slang: "pintura-de-alimentos",
      title: "Pintura de alimentos",
      image: Fruit,
    },
    { slang: "tecnica-seca", title: "Técnica Seca", image: Birds },
    {
      slang: "tecninca-molhado-sobre-molhado",
      title: "Técnica molhado sobre molhado",
      image: Flowers,
    },
    {
      slang: "cuidando-dos-materiais",
      title: "Cuidado com os materiais",
      image: Material,
    },
    { slang: "tom-sobre-tom", title: "Tom sobre tom", image: Ocean },
    { slang: "traços-delicados", title: "Traços delicados", image: People },
    {
      slang: "dicas-sobre-pinceis",
      title: "Dicas sobre pinceis",
      image: Pencel,
    },
  ];

  return new Array(7).fill({}).map((_, index) => ({
    id: index,
    ...products[index],
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }));
}

export const useProducts = () => {
  return buildProducts();
};

export const useProduct = ({ slang }) => {
  return buildProducts().find((p) => p.slang === slang);
};
