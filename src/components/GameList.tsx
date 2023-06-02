import { Grid, Text } from "@mantine/core";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GamesSkeleton from "./GameSkeleton";

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
  const { data: games, isError, isLoading, error } = useGames();
  console.log(games);

  if (isLoading) return <GamesSkeleton />;

  if (isError) return <Text>{error.message}</Text>;

  return (
    <GameGrid>
      {games.map((game) => (
        <GameGridCol key={game.id}>
          <GameCard game={game} />
        </GameGridCol>
      ))}
    </GameGrid>
  );
};

export default GameList;
