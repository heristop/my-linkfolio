# Linkfolio Page

![Linkfolio](https://github.com/heristop/linkfolio/blob/main/docs/linkfolio.png?raw=true)

A sleek, minimalist landing page that connects your audience to all of your online presences.

**Want your own Linkfolio page? Simply install it from this template: [🔗Linkflio](https://github.com/heristop/linkfolio).**

## Features

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

Edit `config/user.config.ts`:

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
