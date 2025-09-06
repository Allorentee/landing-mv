import InfiniteSlider from "@/components/animations/Infinity-list";
import { Container } from "@/components/container/container";
import { Heading } from "@/components/typography/heading";

const items = [
  {
    title: "Incremento de ventas",
    description: "+20%",
  },
  {
    title: "",
    description: "+20%",
  },
];

export default function Benefits() {
  return (
    <Container>
      <div className="container mx-auto px-4">
        <Heading level={2} className="text-center mb-12 dark:text-zinc-950">
          ¿Por qué elegir nuestro producto?
        </Heading>
      </div>
      <InfiniteSlider
        items={items.map((item) => {
          return (
            <div key={item.title}>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          );
        })}
      />
    </Container>
  );
}
