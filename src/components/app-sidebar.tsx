"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  Gavel,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Catalina",
    email: "ca@ta.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Abogado Virtual",
      logo: Gavel,
      plan: "Cliente",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Chat Legal",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Nuevo Chat",
          url: "#",
        },
        {
          title: "Mis Casos",
          url: "#",
        },
        {
          title: "Mi Abogado",
          url: "#",
        },
        {
          title: "Configuraciones",
          url: "#",
        },
      ],
    },
    {
      title: "Comunicaciones",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Generación de Documentos",
          url: "#",
        },
        {
          title: "Análisis de Contratos",
          url: "#",
        },
        {
          title: "Investigación Jurídica",
          url: "#",
        },
      ],
    },
    {
      title: "Administración",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introducción",
          url: "#",
        },
        {
          title: "Comenzar",
          url: "#",
        },
        {
          title: "Tutoriales",
          url: "#",
        },
      ],
    },
    {
      title: "Configuraciones",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Equipo",
          url: "#",
        },
        {
          title: "Facturación",
          url: "#",
        },
        {
          title: "Límites",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Centro de Ayuda",
      url: "#",
      icon: Frame,
    },
    {
      name: "Glosario Legal",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Mapa Jurídico",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
