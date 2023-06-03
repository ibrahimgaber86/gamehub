import { Skeleton } from "@mantine/core";
import { GameGrid, GameGridCol } from "./GameList";
import { GameCardTemplate } from "./GameCard";

const GamesSkeleton = () => {
  return (
    <GameGrid>
      {new Array(8).fill(1).map((_, idx) => (
        <GameGridCol key={idx}>
          <GameCardTemplate>
            <Skeleton height={160}></Skeleton>
            <Skeleton height={20} mt={10} mr={"auto"} width={"30%"}></Skeleton>
            <Skeleton height={20} mt={10}></Skeleton>
            <Skeleton height={20} mt={10}></Skeleton>
          </GameCardTemplate>
        </GameGridCol>
      ))}
    </GameGrid>
  );
};

export default GamesSkeleton;
