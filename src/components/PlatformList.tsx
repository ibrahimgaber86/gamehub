import { Group, Spoiler, Text } from "@mantine/core";

import { Platform } from "../services/gameService";
import PlatformIcons from "./PlatformIcons";

const PlatformList = ({ platforms }: { platforms: Platform[] }) => {
  const iconSize = 25;
  return (
    <>
      <Text component='h3' mb='sm'>
        Platforms
      </Text>
      <Spoiler maxHeight={iconSize * 1.4} hideLabel='hide' showLabel='more'>
        <Group>
          {platforms.map((platform) => (
            <PlatformIcons platform={platform} iconSize={iconSize} />
          ))}
        </Group>
      </Spoiler>
    </>
  );
};

export default PlatformList;
