import React from "react";
import TeamCard from "./components/team-card";
import { Container } from "@/components/container/container";
import { Typography } from "@/components/typography/typography";

const TEAM_MEMBERS = [
  {
    name: "Pablo del Barrio",
    role: "Sofware enginner",
    description:
      "Amplia experiencia en desarrollo de aplicaciones robustas y escalables.",
    avatar: "https://avatars.githubusercontent.com/u/47177543?v=4",
    githubUrl: "https://github.com/PabloDelBarrioArnanz",
    linkedinUrl:
      "https://www.linkedin.com/in/pablo-del-barrio-arnanz-06b8a715a/",
  },
  {
    name: "Álvaro Llorente",
    role: "Web Developer",
    description:
      "Desarrollo de web con amplia experiencia en la construcción de interfaces.",
    avatar: "https://avatars.githubusercontent.com/u/99037086?v=4",
    githubUrl: "https://github.com/Allorentee",
    linkedinUrl: "https://www.linkedin.com/in/alvaro-llorente-0a2778150",
  },
];

// Deja el TeamCard sin importación, asumiendo que está disponible en el entorno

export default function TeamSection() {
  return (
    <Container id="team" className="flex flex-col gap-8">
      <div className="mx-auto max-w-screen-sm text-center flex flex-col gap-4">
        <Typography
          as="h2"
          className="text-3xl font-extrabold tracking-tight text-gray-900"
        >
          Nuestro equipo
        </Typography>
        <Typography as="p" className="sm:text-xl text-gray-600">
          Descubre a las personas que hacen este software posible. Profesionales
          dedicados y apasionados que colaboran estrechamente para ofrecer
          soluciones innovadoras y de alta calidad. Conoce a algunos de los
          miembros clave de nuestro equipo:
        </Typography>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {TEAM_MEMBERS.map((member) => (
          <TeamCard
            key={member.githubUrl}
            name={member.name}
            role={member.role}
            description={member.description}
            avatar={member.avatar}
            githubUrl={member.githubUrl}
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div>
    </Container>
  );
}
