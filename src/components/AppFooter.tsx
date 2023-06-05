import { Footer, Group, Text } from "@mantine/core";
import MyBrand from "./MyBrand";

const AppFooter = () => {
  return (
    <Footer height={70} p={10}>
      <Group>
        <MyBrand />
        <Text tt='uppercase'>
          <Text c='dimmed'>developed by</Text>
          <Text c='yellow.5' sx={{ textIndent: 20 }}>
            ibrahim gaber<sup>&reg;</sup>
          </Text>
        </Text>
      </Group>
    </Footer>
  );
};

export default AppFooter;
