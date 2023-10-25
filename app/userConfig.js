import {
  githubIcon,
  instagramIcon,
  linkedinIcon,
  xIcon,
} from "linkfolio/src/assets";

const userConfig = {
  avatarSrc: "/assets/avatar.webp",
  avatarAlt: "Avatar",
  fullName: "Alexandre Mogère",
  alias: "@heristop",
  socialNetworks: [
    {
      url: "https://github.com/heristop",
      iconSrc: githubIcon,
      title: "GitHub",
      description: "Open-source contributions",
    },
    {
      url: "https://instagram.com/heristop",
      iconSrc: instagramIcon,
      title: "Instagram",
      description: "Art & travel snapshots",
    },
    {
      url: "https://www.linkedin.com/in/heristop",
      iconSrc: linkedinIcon,
      title: "LinkedIn",
      description: "Professional overview",
    },
    {
      url: "https://x.com/heristop",
      iconSrc: xIcon,
      title: "Twitter / X",
      description: "Tech monitoring",
    },
    {
      url: "https://gutenku.xyz",
      iconSrc: "/assets/gutenku.webp",
      title: "GutenKu",
      description: "Haiku generator using Gutenberg",
    },
    {
      url: "https://heristop.github.io",
      iconSrc: "/assets/zazen.webp",
      title: "ZazenCode",
      description: "Tech blog",
    },
  ],
};

export default userConfig;
