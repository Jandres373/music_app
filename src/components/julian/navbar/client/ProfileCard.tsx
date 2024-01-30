"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import content from '../content.json'
export const ProfileCard = () => {
  return (
    <div className="w-32 bg-secondary p-1 rounded-lg flex  justify-center items-center gap-5">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p>{content.profileCard.name}</p>
    </div>
  );
};


