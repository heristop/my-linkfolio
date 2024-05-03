import { LinkFolio } from "linkfolio";
import userConfig from "~/user.config";

export default function Home() {
  return <LinkFolio userConfig={userConfig} />;
}
