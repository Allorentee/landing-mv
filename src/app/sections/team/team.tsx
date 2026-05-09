import React from "react";
import TeamCard from "./components/team-card";
import { Container } from "@/components/container/container";
import { Typography } from "@/components/typography/typography";
import { getTranslations } from "next-intl/server";

const TEAM_MEMBERS = [
  {
    slug: "pablo" as const,
    name: "Pablo del Barrio",
    avatar: "https://avatars.githubusercontent.com/u/47177543?v=4",
    githubUrl: "https://github.com/PabloDelBarrioArnanz",
    linkedinUrl:
      "https://www.linkedin.com/in/pablo-del-barrio-arnanz-06b8a715a/",
  },
  {
    slug: "alvaro" as const,
    name: "Álvaro Llorente",
    avatar: "https://avatars.githubusercontent.com/u/99037086?v=4",
    githubUrl: "https://github.com/Allorentee",
    linkedinUrl: "https://www.linkedin.com/in/alvaro-llorente-0a2778150",
  },
];

export default async function TeamSection() {
  const t = await getTranslations("Team");

  return (
    <Container id="team" className="flex flex-col gap-8">
      <div className="mx-auto max-w-screen-sm text-center flex flex-col gap-4">
        <Typography
          as="h2"
          className="text-3xl font-extrabold tracking-tight text-gray-900"
        >
          {t("title")}
        </Typography>
        <Typography as="p" className="sm:text-xl text-gray-600">
          {t("intro")}
        </Typography>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {TEAM_MEMBERS.map((member) => (
          <TeamCard
            key={member.githubUrl}
            name={member.name}
            role={t(`${member.slug}.role`)}
            description={t(`${member.slug}.desc`)}
            avatar={member.avatar}
            githubUrl={member.githubUrl}
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div>
    </Container>
  );
}
