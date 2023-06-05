import { ActionIcon, TextInput, useMantineTheme } from "@mantine/core";
import { useRef } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import useQueryStore from "../stores/queryStore";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const theme = useMantineTheme();
  const { setSearch, setGenre, setPlatform } = useQueryStore((s) => ({
    setSearch: s.setSearch,
    setGenre: s.setGenre,
    setPlatform: s.setPlatform,
  }));
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGenre(undefined);
    setPlatform(undefined);
    setSearch(inputRef.current?.value || "");
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
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
            type='submit'
          >
            <FaArrowRight size='1.1rem' stroke={1.5} />
          </ActionIcon>
        }
        placeholder='Games Search'
        rightSectionWidth={42}
      />
    </form>
  );
};

export default SearchInput;
