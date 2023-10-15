import Image from "next/image";
import config from "../../app/config";

function MyProfile() {
  return (
    <header className="mb-12 text-center">
      <Image
        src={config.avatarSrc}
        alt={config.avatarAlt}
        width={90}
        height={90}
        className="rounded-full mb-4 mx-auto shadow-lg"
      />
      <h1 className="text-2xl font-semibold">{config.fullName}</h1>
      <p className="mt-2 text-gray-600">{config.pseudo}</p>
    </header>
  );
}

export default MyProfile;
