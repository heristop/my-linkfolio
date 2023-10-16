# LinkFolio

![Logo](/docs/linkfolio.png)

LinkFolio is a minimalist web page that acts as a hub for all your online presence. Initially created for my personal use, I'm not considering yet transforming it into a package.

## Features

🚀 Built with Next.js for optimal performance.

💅 Styled using TailwindCSS for a modern look.

🛠️ Easy configuration to add or remove links.

## Preview

![Preview](/docs/preview.png)

## Configuration

Edit `app/config.js`:

```js
export default {
  avatarSrc: "/assets/avatar.webp",
  avatarAlt: "Avatar",
  fullName: "Pseudo",
  pseudo: "@pseudo",
  socialNetworks: [
    {
      url: "https://github.com/{pseudo}",
      iconSrc: "/assets/github.webp",
      title: "GitHub",
      description: "Open-source contributions",
    },
  ],
};
```

## Installation

1. Clone the repository: git clone https://github.com/heristop/linkfolio

2. Navigate to the project directory: cd linkfolio

3. Install dependencies: pnpm install

4. Start the development server: pnpm dev

Visit http://localhost:3000 to see the app running.

## Contribution

Feel free to fork the repository and make customizations as per your need. If you have ideas to improve or found a bug, do not hesitate to create an issue or submit a pull request.
