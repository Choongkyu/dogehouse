import React from "react";
import { FeaturedRoomCardAvatars } from "./FeaturedRoomCardAvatars";

export type FeaturedRoomCardHostsProps = {
  avatars: string[];
  names: string[];
};

export const FeaturedRoomCardHosts: React.FC<FeaturedRoomCardHostsProps> = ({
  avatars,
  names,
}) => {
  return (
    <div className="flex-row px-6 py-6 align-middle">
      <FeaturedRoomCardAvatars avatars={avatars} />
      <div className="flex-col pl-4 justify-center">
        <p className="text-primary-300">Hosted by</p>
        <p className="text-primary-100">{names.join(", ")}</p>
      </div>
    </div>
  );
};
