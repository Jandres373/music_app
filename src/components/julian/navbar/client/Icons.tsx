import Icon from "@/components/ui/icon";
import React from "react";
import content from "../content.json";

export const Icons = () => {
  return (
    <div className="text-white flex gap-2">
      {content.icons.map((icon) => (
        <Icon key={icon.name} iconName={icon.icon} color="white"/> 
      ))}
    </div>
  );
};
