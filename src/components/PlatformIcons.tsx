import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../services/gameService";
import { Tooltip } from "@mantine/core";

const platformIcons = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

type PlatformIconsProps = {
  platform: Platform;
  iconSize: number;
};
const PlatformIcons = ({ platform, iconSize }: PlatformIconsProps) => {
  const name = platform.name.toLowerCase();

  return (
    <Tooltip label={name} key={platform.id}>
      <div>
        {(name.startsWith("pc") && <platformIcons.pc size={iconSize} />) ||
          (name.startsWith("playstation") && (
            <platformIcons.playstation size={iconSize} />
          )) ||
          (name.startsWith("xbox") && <platformIcons.xbox size={iconSize} />) ||
          (name.startsWith("nintendo") && (
            <platformIcons.nintendo size={iconSize} />
          )) ||
          (name.startsWith("linux") && (
            <platformIcons.linux size={iconSize} />
          )) ||
          (name.startsWith("android") && (
            <platformIcons.android size={iconSize} />
          )) ||
          (name.startsWith("ios") && <platformIcons.ios size={iconSize} />) ||
          (name.startsWith("mac") && <platformIcons.mac size={iconSize} />) ||
          (name.startsWith("web") && <platformIcons.web size={iconSize} />) ||
          false}
      </div>
    </Tooltip>
  );
};

export default PlatformIcons;
