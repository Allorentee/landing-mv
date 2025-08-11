import { ChevronRightIcon } from "lucide-react";

export default function ContactUsBadge() {
  return (
    <div className="my-4 hidden md:flex">
      <div className="relative flex items-center gap-x-4 rounded-full  px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        <span className="font-semibold text-primary-dark">
          ¿Quieres una demo?
        </span>
        <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
        <a href="#contact-us" className="flex items-center gap-x-1">
          <span aria-hidden="true" className="absolute inset-0" />
          Contacta con nosotros
          <ChevronRightIcon
            aria-hidden="true"
            className="-mr-2 size-5 text-gray-400"
          />
        </a>
      </div>
    </div>
  );
}
