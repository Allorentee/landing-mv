import React from "react";
import TeamCard from "./components/team-card";

const TEAM_MEMBERS = [
  {
    name: "Pablo del barrio",
    role: "Sofware enginner",
    description:
      "Amplia experiencia en desarrollo de aplicaciones robustas y escalables.",
    avatar: "https://avatars.githubusercontent.com/u/47177543?v=4",
    githubUrl: "https://github.com/PabloDelBarrioArnanz",
  },
  {
    name: "Álvaro Llorente",
    role: "Web Developer",
    description:
      "Desarrollo de web con amplia experiencia en la construcción de interfaces.",
    avatar: "https://avatars.githubusercontent.com/u/99037086?v=4",
    githubUrl: "https://github.com/Allorentee",
  },
];

// Deja el TeamCard sin importación, asumiendo que está disponible en el entorno

export default function TeamSection() {
  return (
    <section id="equipo">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
            Nuestro equipo
          </h2>
          <p className="lg:mb-16 sm:text-xl text-gray-600">
            Descubre a las personas que hacen este software posible.
            Profesionales dedicados y apasionados que colaboran estrechamente
            para ofrecer soluciones innovadoras y de alta calidad. Conoce a
            algunos de los miembros clave de nuestro equipo:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6 lg:mb-16">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard
              key={member.githubUrl}
              name={member.name}
              role={member.role}
              description={member.description}
              avatar={member.avatar}
              githubUrl={member.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
