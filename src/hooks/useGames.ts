import { useQuery } from "@tanstack/react-query";
import gameService from "../services/gameService";

const fetchGames = async (signal?: AbortSignal) => {
  return await gameService.getAll({ signal }).then((res) => res.data.results);
};

const fetchOneGame = async (id: number, signal?: AbortSignal) => {
  return await gameService.getOne(id, { signal }).then((res) => res.data);
};

const useGames = () =>
  useQuery({
    queryKey: ["games"],
    queryFn: ({ signal }) => fetchGames(signal),
  });

export const useGame = (id: number) =>
  useQuery({
    queryKey: ["games", id],
    queryFn: ({ signal }) => fetchOneGame(id, signal),
  });

export default useGames;
