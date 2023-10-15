import Image from "next/image";
import SocialLinks from "../src/components/SocialLinks";
import MyProfile from "../src/components/MyProfile";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10 md:p-16 lg:px-15% lg:py-10 max-w-screen-lg mx-auto font-roboto">
      <MyProfile />

      <SocialLinks />

      <Image src="/assets/bird.webp" alt="Bird" width={160} height={160} />

      <footer className="mt-4 text-center bg-gray-200 text-gray-600 px-6 py-2 text-sm rounded">
        Made by{" "}
        <a href="https://github.com/heristop/linkfolio" target="_blank">
          heristop
        </a>
      </footer>
    </div>
  );
}
