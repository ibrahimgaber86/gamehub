import APIClient from "./apiClient";

type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  rating: number;
  metacritic: number;
  platforms: Platform[];
};

export default new APIClient<Game>("games");
