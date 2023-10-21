import Image from "next/image";
import { UserProfileProps } from "../types";
import { defaultAvatarIcon } from "../assets";

function UserProfile({ userConfig }: UserProfileProps) {
  return (
    <header className="mb-12 text-center">
      <Image
        src={(userConfig.avatarSrc ??= defaultAvatarIcon)}
        alt={(userConfig.avatarAlt ??= "Avatar")}
        width={(userConfig.avatarSize ??= 120)}
        height={(userConfig.avatarSize ??= 120)}
        className="rounded-full mb-4 mx-auto shadow-lg"
      />

      <h1 className="text-2xl font-semibold">
        {(userConfig.fullName ??= "Your Name")}
      </h1>

      <p className="mt-2 text-gray-600 font-semibold">
        {(userConfig.alias ??= "@your_alias")}
      </p>
    </header>
  );
}

export default UserProfile;