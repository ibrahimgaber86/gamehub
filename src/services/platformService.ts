import APIClient from "./apiClient";

export type Platform = {
  id: number;
  name: string;
  slug: string;
  image: string | null;
};

export default new APIClient<Platform>("platforms");
