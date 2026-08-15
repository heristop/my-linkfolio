import type { SocialNetworkType, ThemeColors, UserConfigType } from "linkfolio";

export type { ThemeColors };

/**
 * Re-exported from the package rather than restated here. This file used to
 * hand-maintain a copy of the config shape, which meant every option the
 * library gained — `analytics` most recently — was invisible until someone
 * remembered to mirror it. Linkfolio 3.0.0 exports the real types, so the
 * copy is no longer worth keeping.
 */
export type SocialNetwork = SocialNetworkType;
export type UserConfig = UserConfigType;
