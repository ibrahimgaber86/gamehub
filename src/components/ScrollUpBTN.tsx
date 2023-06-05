import { FaArrowUp as Up } from "react-icons/fa";

import { ActionIcon } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

const ScrollUpBTN = () => {
  const [position, scrollTo] = useWindowScroll();

  return (
    <ActionIcon
      variant='filled'
      color='primary'
      radius={"xl"}
      size={"xl"}
      sx={{
        transform: `translatey(${position.y < 200 ? "5rem" : "0px"})`,
        position: "fixed",
        bottom: "1rem",
        right: "min(2rem , 10vw)",
        transition: "all 300ms",
      }}
      onClick={() => scrollTo({ y: 0 })}
    >
      <Up />
    </ActionIcon>
  );
};

export default ScrollUpBTN;
