import type { StaticImageData } from "next/image";

export interface SocialNetwork {
  url: string;
  iconSrc: StaticImageData | string;
  title: string;
  description: string;
  group: string;
  hidden?: boolean;
}

export type ThemeColors = {
  "color-primary"?: string;
  "color-secondary"?: string;
  "color-background-start"?: string;
  "color-background-end"?: string;
  "lf-card-bg"?: string;
  "lf-card-shadow"?: string;
  "lf-card-border"?: string;
  "lf-name-color"?: string;
  "lf-alias-color"?: string;
  "lf-network-hover-bg"?: string;
  "lf-description-color"?: string;
  "lf-accent-line-color"?: string;
  "lf-accent-line-opacity"?: string;
  "lf-button-opacity"?: string;
};

export interface UserConfig {
  avatarSrc?: string | StaticImageData;
  avatarAlt?: string;
  avatarSize?: number;
  fullName?: string;
  alias?: string;
  metaTitle?: string;
  metaDescription?: string;
  themeColor?: string;
  theme?: ThemeColors;
  darkTheme?: ThemeColors;
  enableTypingAlias?: boolean;
  socialNetworks?: SocialNetwork[];
}
