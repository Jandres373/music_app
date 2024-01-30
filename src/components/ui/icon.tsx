import React from "react";

type IconProps = {
  iconName: string;
  color?: string;
  className?: string;
};

// Definir el tipo para el componente 'box-icon'
interface BoxIconProps {
  name: string;
  color?: string;
  className?: string;
}

// Extender el tipo 'JSX.IntrinsicElements' con nuestro componente 'box-icon'
declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "box-icon": BoxIconProps;
    }
  }
}

const Icon: React.FC<IconProps> = ({ iconName, color, className }) => {
  return (
    <div className={className}>
      <box-icon name={iconName} color={color}></box-icon>
    </div>
  );
};

export default Icon;
