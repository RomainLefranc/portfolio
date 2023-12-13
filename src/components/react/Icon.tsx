import { iconPaths } from "../IconPaths";

type Props = {
  icon: keyof typeof iconPaths;
  color?: string;
  gradient?: boolean;
  size?: string;
};

export const Icon = ({
  color = "currentcolor",
  gradient,
  icon,
  size = "1em",
}: Props) => {
  const iconPath = iconPaths[icon];
  const style = { "--size": size } as React.CSSProperties;
  const gradientId = "icon-gradient";

  return (
    <svg
      className="align-middle w-[--size] h-[--size]"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 256 256"
      aria-hidden="true"
      stroke={gradient ? `url(#${gradientId})` : color}
      fill={gradient ? `url(#${gradientId})` : color}
      style={style}
    >
      <g dangerouslySetInnerHTML={{ __html: iconPath }} />
      {gradient ? (
        <linearGradient
          id={gradientId}
          x1="23"
          x2="235"
          y1="43"
          y2="202"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--gradient-stop-1)" />
          <stop offset=".5" stopColor="var(--gradient-stop-2)" />
          <stop offset="1" stopColor="var(--gradient-stop-3)" />
        </linearGradient>
      ) : null}
    </svg>
  );
};
