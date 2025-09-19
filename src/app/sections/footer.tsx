import { InstagramIcon } from "@/components/icons";

const navigation = [
  // {
  //   name: "Facebook",
  //   href: "#",
  //   icon: FacebookIcon,
  // },
  {
    name: "Instagram",
    href: "https://www.instagram.com/menuvisionqr",
    icon: InstagramIcon,
  },
  // {
  //   name: "X",
  //   href: "#",
  //   icon: XIcon,
  // },
  // {
  //   name: "GitHub",
  //   href: "#",
  //   icon: GitHubIcon,
  // },
  // {
  //   name: "YouTube",
  //   href: "#",
  //   icon: YouTubeIcon,
  // },
];

export default function Footer() {
  return (
    <footer className="relative isolate z-20 flex flex-row items-center justify-between gap-4 p-6 lg:px-0 lg:py-6 lg:max-w-7xl lg:mx-auto">
      <div className="flex justify-center gap-x-6 md:order-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-600 hover:text-gray-800"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon aria-hidden="true" className="size-6" />
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
        &copy; 2025 MenuVision, Inc. All rights reserved.
      </p>
    </footer>
  );
}
