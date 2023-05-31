import { Text } from "@mantine/core";
import useGames from "../hooks/useGames";

const GameList = () => {
  const { data: games, isError, isLoading } = useGames();
  console.log(games);
  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>Error...</Text>;

  return (
    <div>
      {games?.map((g) => (
        <Text key={g.id}>{g.name}</Text>
      ))}
    </div>
  );
};

export default GameList;
