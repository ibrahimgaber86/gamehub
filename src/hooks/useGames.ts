import { Platform } from "./../services/gameService";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FetchResponse } from "../services/apiClient";
import gameService, { Game } from "../services/gameService";

const fetchGames = async (
  pageParam = "1",
  options = {},
  signal?: AbortSignal
) => {
  console.log(options);
  return await gameService
    .getAll({ signal, params: { ...options, page: pageParam } })
    .then((res) => res.data);
};

const fetchOneGame = async (id: number, signal?: AbortSignal) => {
  return await gameService.getOne(id, { signal }).then((res) => res.data);
};

type useGamesOptions = {
  platforms?: string;
  genres?: string;
  search?: string;
};
const useGames = (options?: useGamesOptions) =>
  useInfiniteQuery<FetchResponse<Game>, AxiosError>({
    queryKey: ["games", options?.platforms, options?.genres, options?.search],
    queryFn: ({ signal, pageParam }) => fetchGames(pageParam, options, signal),
    getNextPageParam: (lastPage) =>
      lastPage.next !== null
        ? new URLSearchParams(lastPage.next).get("page")
        : undefined,
  });

export const useGame = (id: number) =>
  useQuery({
    queryKey: ["games", id],
    queryFn: ({ signal }) => fetchOneGame(id, signal),
  });

export default useGames;
