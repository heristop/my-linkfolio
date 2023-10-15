import React from "react";
import SocialNetwork from "./SocialNetwork";
import config from "../config";
import { SocialNetworkProps } from "../types";

const SocialLinks = () => {
  return (
    <main className="flex flex-wrap gap-y-4 gap-x-20 justify-center">
      {config.socialNetworks.map(
        (network: SocialNetworkProps, index: number) => (
          <SocialNetwork
            key={index}
            delay={index * 100}
            href={network.href}
            iconSrc={network.iconSrc}
            title={network.title}
            description={network.description}
          />
        ),
      )}
    </main>
  );
};

export default SocialLinks;
