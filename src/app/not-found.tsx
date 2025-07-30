import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid h-dvh place-content-center absolute z-50 w-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading
            level={1}
            className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-detail"
          >
            404
          </Heading>
          <Heading level={2}>Ha ocurrido un error</Heading>
          <Text>
            No hemos podido encontrar la página que esta buscando, puede
            explorar nuestra página principal haciendo click en el botón de
            abajo
          </Text>
          <Link
            href="/"
            className="inline-flex cursor-pointer text-slate-950 bg-orange-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Volver a la home
          </Link>
        </div>
      </div>
    </section>
  );
}
