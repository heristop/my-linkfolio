import React from "react";
import Image from "next/image";
import { SocialNetworkProps } from "../types";

const SocialNetwork: React.FC<SocialNetworkProps> = ({
  url,
  iconSrc,
  title,
  description,
  delay = 0,
}) => {
  return (
    <div
      className={`flex items-start justify-center p-2 w-full md:w-1/4 rounded hover:bg-gray-200 hover:opacity-90 transition duration-300 ease-in-out fade-in-up-bounce`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <a href={url} target="blank">
        <Image
          src={iconSrc}
          alt={description}
          width={300}
          height={100}
          className="object-cover w-[300px] h-[100px] rounded-lg overflow-hidden shadow-lg"
        />

        <div className="data px-2 py-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default SocialNetwork;
