import { FaArrowUp as Up } from "react-icons/fa";

import { ActionIcon, Affix, Transition, rem } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

const ScrollUpBTN = () => {
  const [position, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: rem(20), right: rem(20) }}>
      <Transition
        transition={"slide-up"}
        mounted={position.y > 200}
        keepMounted
      >
        {(styles) => (
          <ActionIcon
            style={{ ...styles }}
            variant='filled'
            color='primary'
            radius={"xl"}
            size={"xl"}
            onClick={() => scrollTo({ y: 0 })}
          >
            <Up />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollUpBTN;
