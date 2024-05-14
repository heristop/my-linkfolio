import {
  githubIcon,
  instagramIcon,
  linkedinIcon,
  threadsIcon,
  xIcon,
} from "linkfolio/dist/assets";

const userConfig = {
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
      url: "https://x.com/heristop",
      iconSrc: xIcon,
      title: "Twitter / X",
      description: "Tech Monitoring",
      group: "socialnetwork",
    },
    {
      url: "https://www.threads.net/@heristop",
      iconSrc: threadsIcon,
      title: "Threads",
      description: "Snapshots",
      group: "socialnetwork",
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
      description: "Haiku generator using AI",
      group: "project",
    },
    {
      url: "https://linkfolio-demo.vercel.app",
      iconSrc: "/assets/linkfolio.webp",
      title: "LinkFolio",
      description: "Portfolio Demo",
      group: "project",
    },
    {
      url: "https://pix-me.studio",
      iconSrc: "/assets/pix-me.webp",
      title: "Pix Me!",
      description: "AI Avatar Generator",
      group: "project",
    },
  ],
};

export default userConfig;
