# LinkFolio Page

![LinkFolio](https://github.com/heristop/linkfolio/blob/main/docs/linkfolio.png?raw=true)

A sleek, minimalist landing page that connects your audience to all of your online presences.

**Want your own LinkFolio page? Simply install it from this template: [🔗LinkFolio](https://github.com/heristop/linkfolio).**

## Preview

![Preview](https://github.com/heristop/linkfolio/blob/main/docs/preview.png?raw=true)

## Features:

🚀 Built with Next.js for optimal performance

💅 Styled using TailwindCSS for a modern look

🛠️ Easy configuration to add or remove links

## Installation

1. Clone the repository: git clone https://github.com/heristop/my-linkfolio

2. Navigate to the project directory: `cd my-linkfolio`

3. Install dependencies: `pnpm install`

4. Start the development server: `pnpm dev`

Visit http://localhost:3000 to see the app running.

## Configuration

Edit `app/userConfig.js`:

```js
const userConfig = {
  avatarSrc: "/assets/avatar.webp",
  avatarAlt: "Avatar",
  fullName: "Your Name",
  alias: "@your_alias",
  socialNetworks: [
    {
      url: "https://github.com/{your_alias}",
      iconSrc: githubIcon,
      title: "GitHub",
      description: "Open-source contributions",
    },
  ],
};
```
