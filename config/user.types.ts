import type { StaticImageData } from "next/image";

export interface SocialNetwork {
  url: string;
  iconSrc: StaticImageData | string;
  title: string;
  description: string;
  group: string;
  hidden?: boolean;
}

export interface UserConfig {
  avatarSrc: string;
  avatarAlt: string;
  fullName: string;
  alias: string;
  metaTitle: string;
  metaDescription: string;
  enableTypingAlias: boolean;
  socialNetworks: SocialNetwork[];
}
