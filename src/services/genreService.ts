import ApiClient from "./apiClient";

export type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export default new ApiClient<Genre>("genres");
