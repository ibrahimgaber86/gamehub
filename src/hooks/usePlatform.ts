import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import platformService from "../services/platformService";
import { Platform } from "../services/gameService";

const fetchGames = async (signal?: AbortSignal) => {
  return await platformService
    .getAll({ signal })
    .then((res) => res.data.results);
};

const fetchOneGame = async (id: number, signal?: AbortSignal) => {
  return await platformService.getOne(id, { signal }).then((res) => res.data);
};

const usePlatforms = () =>
  useQuery<Platform[], AxiosError>({
    queryKey: ["platforms"],
    queryFn: ({ signal }) => fetchGames(signal),
    staleTime: 1000 * 60 * 60,
  });

export const usePlatform = (id: number) =>
  useQuery({
    queryKey: ["games", id],
    queryFn: ({ signal }) => fetchOneGame(id, signal),
  });

export default usePlatforms;
