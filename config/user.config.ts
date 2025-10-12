import { UserConfig } from "./user.types";
import {
  blueSkyIcon,
  githubIcon,
  instagramIcon,
  linkedinIcon,
  threadsIcon,
  xIcon,
} from "linkfolio/dist/assets";

const userConfig: UserConfig = {
  avatarSrc: "/assets/avatar.webp",
  avatarAlt: "Avatar",
  fullName: "Alexandre Mogère",
  alias: "@heristop",
  metaTitle: "Alexandre Mogère",
  metaDescription: "Alexandre Mogère's Links",
  enableTypingAlias: true,
  socialNetworks: [
    {
      url: "https://github.com/heristop",
      iconSrc: githubIcon,
      title: "GitHub",
      description: "Open-source Contributions",
      group: "socialnetwork",
    },
    {
      url: "https://instagram.com/heristop",
      iconSrc: instagramIcon,
      title: "Instagram",
      description: "Art & travel Snapshots",
      group: "socialnetwork",
    },
    {
      url: "https://www.linkedin.com/in/heristop",
      iconSrc: linkedinIcon,
      title: "LinkedIn",
      description: "Professional Overview",
      group: "socialnetwork",
    },
    {
      url: "https://bsky.app/profile/heristop.bsky.social",
      iconSrc: blueSkyIcon,
      title: "BlueSky",
      description: "Tech watch & insights",
      group: "socialnetwork",
    },
    {
      url: "https://x.com/heristop",
      iconSrc: xIcon,
      title: "X",
      description: "Tech Monitoring",
      group: "socialnetwork",
    },
    {
      url: "https://www.threads.net/@heristop",
      iconSrc: threadsIcon,
      title: "Threads",
      description: "Snapshots",
      group: "socialnetwork",
      hidden: true,
    },
    {
      url: "https://heristop.github.io",
      iconSrc: "/assets/zazen.webp",
      title: "Zazen Code",
      description: "Tech Blog",
      group: "website",
    },
    {
      url: "https://gutenku.xyz",
      iconSrc: "/assets/gutenku.webp",
      title: "GutenKu",
      description: "AI Haiku Generator",
      group: "project",
    },
    {
      url: "https://linkfolio-demo.vercel.app",
      iconSrc: "/assets/linkfolio.webp",
      title: "Linkfolio",
      description: "Portfolio Demo",
      group: "project",
      hidden: true,
    },
    {
      url: "https://pix-me.studio",
      iconSrc: "/assets/pix-me.webp",
      title: "Pix Me!",
      description: "AI Avatar Generator",
      group: "project",
    },
    {
      url: "https://clover-map.nuxt.dev",
      iconSrc: "/assets/clover-map.webp",
      title: "Clover Map",
      description: "Project Management Tool",
      group: "project",
    },
  ],
};

export default userConfig;
