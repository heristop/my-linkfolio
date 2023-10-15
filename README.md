# LinkHub

A single page displaying my social links made with Next.js and Tailwind

![Preview](/docs/preview.png)

Social networks can be configured in `app/config.js`:

```json
export default {
  avatarSrc: "",
  avatarAlt: "",
  fullName: "",
  pseudo: "@",
  socialNetworks: [
    {
      href: "https://github.com/heristop",
      iconSrc: "/assets/github.webp",
      title: "GitHub",
      description: "Open-source contributions",
    },
    {
      href: "https://instagram.com/heristop",
      iconSrc: "/assets/instagram.webp",
      title: "Instagram",
      description: "Art & travel snapshots",
    },
    {
      href: "https://www.linkedin.com/in/heristop",
      iconSrc: "/assets/linkedin.webp",
      title: "LinkedIn",
      description: "Professional overview",
    },
    {
      href: "https://x.com/heristop",
      iconSrc: "/assets/x.webp",
      title: "Twitter / X",
      description: "Tech monitoring",
    },
    {
      href: "https://gutenku.xyz",
      iconSrc: "/assets/gutenku.webp",
      title: "GutenKu",
      description: "AI-crafted haikus",
    },
    {
      href: "https://heristop.github.io",
      iconSrc: "/assets/zazen.webp",
      title: "ZazenCode",
      description: "Tech blog",
    },
  ],
};
```
