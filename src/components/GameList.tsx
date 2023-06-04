import { Button, Center, Grid, Loader, Text } from "@mantine/core";
import { shallow } from "zustand/shallow";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GamesSkeleton from "./GameSkeleton";
import SelectPlatform from "./SelectPlatform";
import useQueryStore from "../stores/queryStore";
import { Fragment } from "react";

export const GameGrid = ({ children }: { children: React.ReactNode }) => (
  <Grid gutter={5} gutterXs='md' gutterMd='xl' gutterXl={50} m='auto'>
    {children}
  </Grid>
);

export const GameGridCol = ({ children }: { children: React.ReactNode }) => (
  <Grid.Col sm={12} md={6} lg={4} xl={3}>
    {children}
  </Grid.Col>
);

const GameList = () => {
  const {
    platformId,
    setPlatform,
    search,
    genre: genreId,
  } = useQueryStore(
    (s) => ({
      platformId: s.platform,
      genre: s.genre,
      search: s.search,
      setPlatform: s.setPlatform,
    }),
    shallow
  );

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    isLoading,
    error,
  } = useGames({ platforms: platformId, genres: genreId, search });

  if (isLoading) return <GamesSkeleton />;

  if (isError) return <Text>{error.message}</Text>;

  return (
    <>
      <SelectPlatform value={platformId || null} onSelection={setPlatform} />
      <GameGrid>
        {data.pages.map((page, idx) => (
          <Fragment key={idx}>
            {page.results.map((game) => (
              <GameGridCol key={game.id}>
                <GameCard game={game} />
              </GameGridCol>
            ))}
          </Fragment>
        ))}
      </GameGrid>
      <Center>
        {isFetchingNextPage ? (
          <Loader m={"xl"} />
        ) : (
          hasNextPage && (
            <Button m={"lg"} onClick={() => fetchNextPage()}>
              More Game...
            </Button>
          )
        )}
      </Center>
    </>
  );
};

export default GameList;
