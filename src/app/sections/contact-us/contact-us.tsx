"use client";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { usePostTicket } from "@/api/use-post-ticket";
import { Container } from "@/components/container/container";
import { validations } from "./validations";
import { Formik } from "formik";
import { toast } from "react-hot-toast";

export default function ContactUsSection() {
  const { postTicket, isLoading } = usePostTicket();

  const handleSubmit = async (values: any, resetForm: () => void) => {
    try {
      await postTicket(values);
      toast.success("Ticket enviado correctamente");
      resetForm();
    } catch (_error) {
      toast.error("Error al enviar el ticket");
    }
  };

  return (
    <Container className="relative isolate z-20" id="contact-us">
      <div className="mx-auto grid gap-10 md:gap-0 max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6  lg:static lg:px-8 ">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
                className="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#14b8a6] to-[#2dd4bf] opacity-20"
              />
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Contacta con nosotros
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              ¿Quieres llevar tu restaurante al siguiente nivel con una carta
              digital QR? Estamos aquí para ayudarte a implementar la mejor
              solución para tu negocio.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Dirección</span>
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd className="dark:text-gray-400">
                  Madrid, España
                  <br />
                  Disponible en toda España
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Teléfono</span>
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="tel:+34 628 530 092"
                    className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    +34 628 530 092
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400 "
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:info@menuvision.es"
                    className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    info@menuvision.es
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <Formik
          initialValues={{
            source: "LANDING",
            name: "",
            surname: "",
            email: "",
            message: "",
            subject: "",
          }}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
          validationSchema={validations}
          className="px-6 sm:pb-32 lg:px-8 w-full"
        >
          {({ values, handleChange, errors, handleSubmit }) => {
            console.log(errors);
            return (
              <div className="lg:mr-0 lg:max-w-lg w-full">
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 w-full px-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm!/6 font-semibold text-gray-900 dark:text-white"
                    >
                      Nombre
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        data-invalid={errors.name ? "true" : undefined}
                        autoComplete="given-name"
                        className="block w-full rounded-md data-invalid:outline-red-500     bg-white dark:bg-white/70 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <span className="text-red-500! text-sm!">
                          {errors.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="surname"
                      className="block text-sm!/6 font-semibold text-gray-900 dark:text-white"
                    >
                      Apellidos
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="surname"
                        name="surname"
                        type="text"
                        value={values.surname}
                        data-invalid={errors.surname ? "true" : undefined}
                        autoComplete="family-name"
                        className="block w-full rounded-md data-invalid:outline-red-500 bg-white dark:bg-white/70 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                        onChange={handleChange}
                      />
                      {errors.surname && (
                        <span className="text-red-500! text-sm!">
                          {errors.surname}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm!/6 font-semibold text-gray-900 dark:text-white"
                    >
                      Correo electrónico
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        data-invalid={errors.email ? "true" : undefined}
                        autoComplete="email"
                        className="block w-full rounded-md data-invalid:outline-red-500 bg-white dark:bg-white/70 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                        onChange={handleChange}
                      />
                    </div>
                    {errors.email && (
                      <span className="text-red-500! text-sm!">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm!/6 font-semibold text-gray-900 dark:text-white"
                    >
                      Asunto
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="subject"
                        name="subject"
                        data-invalid={errors.subject ? "true" : undefined}
                        className="block w-full rounded-md data-invalid:outline-red-500 bg-white dark:bg-white/70 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                        value={values.subject}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.subject && (
                      <span className="text-red-500! text-sm!">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm!/6 font-semibold text-gray-900 dark:text-white"
                    >
                      Mensaje
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        data-invalid={errors.message ? "true" : undefined}
                        className="block w-full rounded-md data-invalid:outline-red-500 bg-white dark:bg-white/70 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                        value={values.message}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.message && (
                      <span className="text-red-500! text-sm!">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    onClick={() => handleSubmit()}
                    disabled={isLoading}
                    className="rounded-md cursor-pointer disabled:cursor-not-allowed bg-primary-dark px-3.5 py-2.5 text-center text-sm! font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {isLoading ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
}
