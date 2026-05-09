"use client";

import { usePostTicket } from "@/api/use-post-ticket";
import { makeContactValidationSchema } from "./validations";
import { Formik } from "formik";
import { toast } from "react-hot-toast";
import ContactUsInfo from "./contact-us-info";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

export default function ContactUsForm() {
  const { postTicket, isLoading } = usePostTicket();
  const t = useTranslations("Contact");
  const tv = useTranslations("Contact.validation");
  const locale = useLocale();

  const validationSchema = useMemo(
    () =>
      makeContactValidationSchema({
        name: tv("name"),
        surname: tv("surname"),
        emailInvalid: tv("emailInvalid"),
        emailRequired: tv("emailRequired"),
        message: tv("message"),
        subject: tv("subject"),
      }),
    [locale, tv],
  );

  const handleSubmit = async (values: Record<string, string>, resetForm: () => void) => {
    await postTicket(values)
      .then(() => {
        toast.success(t("toastOk"));
        resetForm();

        if (typeof window !== "undefined") {
          const win = window as unknown as {
            dataLayer?: unknown[];
          };
          win.dataLayer = win.dataLayer || [];
          win.dataLayer.push({
            event: "formulario_contacto_enviado",
            event_category: "contacto",
            event_label: "landing",
          });
        }
      })
      .catch(() => {
        toast.error(t("toastErr"));
      });
  };

  return (
    <Formik
      initialValues={{
        source: "LANDING",
        name: "",
        surname: "",
        email: "",
        message: "",
        subject: "",
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validateOnMount={false}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, errors, handleSubmit }) => {
        return (
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 w-full">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("placeholders.name")}
                  value={values.name}
                  data-invalid={errors.name ? "true" : undefined}
                  autoComplete="given-name"
                  className="block w-full rounded-md data-invalid:outline-red-500 bg-white dark:bg-white/90  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="text-red-500! text-sm!">{errors.name}</span>
                )}
              </div>
              <div>
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder={t("placeholders.surname")}
                  value={values.surname}
                  data-invalid={errors.surname ? "true" : undefined}
                  autoComplete="family-name"
                  className="block w-full rounded-md data-invalid:outline-red-500 bg-white dark:bg-white/90  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                  onChange={handleChange}
                />
                {errors.surname && (
                  <span className="text-red-500! text-sm!">
                    {errors.surname}
                  </span>
                )}
              </div>
              <div className="sm:col-span-2">
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("placeholders.email")}
                    value={values.email}
                    data-invalid={errors.email ? "true" : undefined}
                    autoComplete="email"
                    className="block w-full rounded-md data-invalid:outline-red-500 bg-white dark:bg-white/90  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                    onChange={handleChange}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500! text-sm!">{errors.email}</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <div>
                  <input
                    id="subject"
                    name="subject"
                    data-invalid={errors.subject ? "true" : undefined}
                    className="block w-full rounded-md data-invalid:outline-red-500 bg-white dark:bg-white/90  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                    placeholder={t("placeholders.subject")}
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
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    data-invalid={errors.message ? "true" : undefined}
                    className="block w-full rounded-md data-invalid:outline-red-500 bg-white dark:bg-white/90  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                    placeholder={t("placeholders.message")}
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
            <div className="flex mt-4 justify-between items-center">
              <ContactUsInfo />
              <button
                type="submit"
                onClick={() => handleSubmit()}
                disabled={isLoading}
                className="rounded-md cursor-pointer disabled:cursor-not-allowed bg-primary-dark px-8 py-2.5 text-center text-sm! font-semibold text-white shadow-xs hover:bg-primary hover:text-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {isLoading ? t("submitting") : t("submit")}
              </button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
