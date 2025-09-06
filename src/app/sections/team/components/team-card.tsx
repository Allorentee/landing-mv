import Image from "next/image";
import React from "react";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  avatar: string;
  githubUrl?: string;
  linkedinUrl?: string;
  className?: string;
}

export default function TeamCard({
  name,
  role,
  description,
  avatar,
  githubUrl,
  linkedinUrl,
  className = "",
}: TeamCardProps) {
  console.log(linkedinUrl);
  return (
    <div
      className={`relative group transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl items-center sm:flex bg-white/80 dark:bg-zinc-900/80 border border-gray-200 dark:border-zinc-700 rounded-2xl shadow-lg overflow-hidden ${className} glass-effect`}
    >
      <div className="relative flex-shrink-0 w-full sm:w-56 h-full sm:h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30">
        {/* LinkedIn en la esquina superior izquierda */}
        <div className="absolute top-2 left-2 z-10">
          {/** @ts-ignore */}
          {typeof linkedinUrl !== "undefined" && linkedinUrl && (
            <a
              href={linkedinUrl}
              className="inline-flex items-center justify-center rounded-full bg-white/80 dark:bg-zinc-800/80 p-2 shadow hover:bg-primary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <rect width="256" height="256" fill="#fff" rx="60" />
                  <rect width="256" height="256" fill="#0A66C2" rx="60" />
                  <path
                    fill="#fff"
                    d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                  />
                </g>
              </svg>
            </a>
          )}
        </div>
        <Image
          className="w-32 h-32 rounded-full border-4 border-white dark:border-zinc-800 object-cover shadow-lg transition-all duration-300 group-hover:scale-105"
          width={128}
          height={128}
          src={avatar}
          alt={`${name} Avatar`}
        />
        <div className="absolute top-2 right-2">
          {githubUrl && (
            <a
              href={githubUrl}
              className="inline-flex items-center justify-center rounded-full bg-white/80 dark:bg-zinc-800/80 p-2 shadow hover:bg-primary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
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
          )}
        </div>
      </div>
      <div className="p-7 flex flex-col justify-center flex-1">
        <h3 className="tracking-tight text-gray-900 dark:text-white text-2xl font-extrabold mb-1">
          {name}
        </h3>
        <span className="inline-block text-primary font-semibold text-base mb-2">
          {role}
        </span>
        <p className="mb-0 font-light text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
