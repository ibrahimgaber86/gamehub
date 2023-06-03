import { Select } from "@mantine/core";
import usePlatforms from "../hooks/usePlatform";

type SelectPlatformProps = {
  value: string | null;
  onSelection: (val: string) => void;
};
const SelectPlatform = ({ value, onSelection }: SelectPlatformProps) => {
  const { data: platforms = [] } = usePlatforms();
  return (
    <Select
      maw='400px'
      mb={"md"}
      size={"lg"}
      value={value}
      onChange={onSelection}
      placeholder='Pick Platform'
      data={[{ id: "", name: "All Platforms" }, ...platforms].map(
        (platform) => ({
          value: platform.id.toString(),
          label: platform.name,
        })
      )}
    />
  );
};

export default SelectPlatform;
