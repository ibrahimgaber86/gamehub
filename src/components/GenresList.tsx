import { Avatar, Group, NavLink, ScrollArea, Text } from "@mantine/core";
import { useGenres } from "../hooks/useGenres";
import useQueryStore from "../stores/queryStore";
import GenresSkeleton from "./GenresSkeleton";
import { shallow } from "zustand/shallow";

const GenresList = ({ closeNavbar }: { closeNavbar: () => void }) => {
  const { data: genres, isLoading, isError, error } = useGenres();

  const { genreFilter, setGenre } = useQueryStore(
    (s) => ({
      genreFilter: s.genre,
      setGenre: s.setGenre,
    }),
    shallow
  );
  if (isLoading) return <GenresSkeleton />;
  if (isError) return <Text>{error.message}</Text>;

  return (
    <ScrollArea>
      <NavLink
        label={"All Genres"}
        onClick={() => {
          setGenre(undefined);
          closeNavbar();
        }}
      />
      {genres.map((genre) => {
        return (
          <NavLink
            key={genre.id}
            active={genre.id.toString() === genreFilter}
            onClick={() => {
              setGenre(genre.id.toString());
              closeNavbar();
            }}
            label={
              <Group>
                <Avatar src={genre.image_background} alt={genre.name} />
                <Text size={"md"}>{genre.name}</Text>
              </Group>
            }
          />
        );
      })}
    </ScrollArea>
  );
};

export default GenresList;
