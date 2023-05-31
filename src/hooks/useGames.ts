import { useQuery } from "@tanstack/react-query";
import gameService from "../services/gameService";

const fetchGames = async () => {
  return await gameService.getAll().then((res) => res.data.results);
};

const fetchOneGame = async () => {
  return await gameService.getOne(3328).then((res) => res.data);
};

const useGames = () =>
  useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

export const useGame = (id: number) =>
  useQuery({
    queryKey: ["games", id],
    queryFn: fetchOneGame,
  });

export default useGames;
