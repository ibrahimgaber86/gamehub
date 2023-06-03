import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genreService";

const fetchGenres = async (signal?: AbortSignal) => {
  return await genreService.getAll({ signal }).then((res) => res.data.results);
};

export const useGenres = () =>
  useQuery<Genre[], AxiosError>({
    queryKey: ["genres"],
    queryFn: ({ signal }) => fetchGenres(signal),
  });
