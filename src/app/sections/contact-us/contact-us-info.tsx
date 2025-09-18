import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function ContactUsInfo() {
  return (
    <div className="relative lg:static">
      <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg flex flex-row items-center justify-center gap-x-4">
        <div className="flex flex-row items-center justify-center gap-x-4">
          <a
            href="tel:+34 628 530 092"
            className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-primary!"
          >
            <PhoneIcon
              aria-hidden="true"
              className="h-7 w-6 text-gray-400 hover:text-primary-dark"
            />
          </a>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-4">
          <a
            href="mailto:info.menuvision@gmail.com"
            className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-primary!"
          >
            <EnvelopeIcon
              aria-hidden="true"
              className="h-7 w-6 text-gray-400 hover:text-primary-dark"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
