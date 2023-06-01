import APIClient from "./apiClient";

export type Platform = {
  id: number;
  name: string;
  slug: string;
  image: string | null;
};

export type Game = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  rating: number;
  metacritic: number;
  platforms: { platform: Platform }[];
};

export default new APIClient<Game>("games");
