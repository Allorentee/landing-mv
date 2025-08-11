import React from "react";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  avatar: string;
  githubUrl?: string;
  className?: string;
}

export default function TeamCard({
  name,
  role,
  description,
  avatar,
  githubUrl,
  className = "",
}: TeamCardProps) {
  return (
    <div
      className={`items-center sm:flex dark:border-gray-200 bg-white/60 border border-gray-200 rounded-lg shadow-md overflow-hidden ${className}`}
    >
      <a href="#">
        <img
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg object-cover h-48 sm:h-full"
          src={avatar}
          alt={`${name} Avatar`}
        />
      </a>
      <div className="p-5 flex flex-col justify-center">
        <h3 className="tracking-tight text-gray-900 dark:text-white text-xl font-bold">
          <a href="#">{name}</a>
        </h3>
        <span className="block text-gray-600 dark:text-gray-300 text-base font-medium">
          {role}
        </span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
          {description}
        </p>
        {githubUrl && (
          <ul className="flex space-x-4 sm:mt-0">
            <li>
              <a
                href={githubUrl}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                {/* Icono de GitHub SVG */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.867 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.135 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
