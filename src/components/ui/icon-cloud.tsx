"use client";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export type DynamicCloudProps = {
  iconSlugs?: string[];
  imageArray?: string[];
};

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;
  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  });
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({
  iconSlugs = [],
  imageArray = [], // Provide default empty array to avoid undefined checks
}: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme]);

  // Using @ts-expect-error because the Cloud component's type definitions are incomplete
  return (
    <Cloud {...cloudProps}>
      <>
        <>{renderedIcons}</>
        {imageArray.length > 0 &&
          imageArray.map((image, index) => (
            <a key={index} href="#" onClick={(e) => e.preventDefault()}>
              <div
                style={{ width: "42px", height: "42px", position: "relative" }}
              >
                <Image
                  fill
                  src={image}
                  alt={`Cloud icon ${index + 1}`}
                  sizes="42px"
                />
              </div>
            </a>
          ))}
      </>
    </Cloud>
  );
}
