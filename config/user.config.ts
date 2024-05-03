import {
  githubIcon,
  instagramIcon,
  linkedinIcon,
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
    },
    {
      url: "https://instagram.com/heristop",
      iconSrc: instagramIcon,
      title: "Instagram",
      description: "Art & travel Snapshots",
    },
    {
      url: "https://www.linkedin.com/in/heristop",
      iconSrc: linkedinIcon,
      title: "LinkedIn",
      description: "Professional Overview",
    },
    {
      url: "https://x.com/heristop",
      iconSrc: xIcon,
      title: "Twitter / X",
      description: "Tech Monitoring",
    },
    {
      url: "https://gutenku.xyz",
      iconSrc: "/assets/gutenku.webp",
      title: "GutenKu",
      description: "Haiku generator using AI",
    },
    {
      url: "https://heristop.github.io",
      iconSrc: "/assets/zazen.webp",
      title: "Zazen Code",
      description: "Tech Blog",
    },
  ],
};

export default userConfig;
