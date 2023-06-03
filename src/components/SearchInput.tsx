import { ActionIcon, TextInput, useMantineTheme } from "@mantine/core";
import React, { useRef, useState } from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import useQueryStore from "../stores/queryStore";

const SearchInput = () => {
  const theme = useMantineTheme();
  const setSearch = useQueryStore((s) => s.setSearch);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <TextInput
      icon={<FaSearch size='1.1rem' stroke={1.5} />}
      radius='xl'
      ref={inputRef}
      onChange={({ target }) => {
        if (target.value.trim() === "") setSearch(undefined);
      }}
      rightSection={
        <ActionIcon
          size={32}
          radius='xl'
          color={theme.primaryColor}
          variant='filled'
          onClick={() => setSearch(inputRef.current?.value || "")}
        >
          <FaArrowRight size='1.1rem' stroke={1.5} />
        </ActionIcon>
      }
      placeholder='Games Search'
      rightSectionWidth={42}
    />
  );
};

export default SearchInput;
