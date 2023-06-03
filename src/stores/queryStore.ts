import { create } from "zustand";

type GenreStore = {
  genre: string | undefined;
  platform: string | undefined;
  search: string | undefined;
  setGenre: (genre: string | undefined) => void;
  setPlatform: (platform: string | undefined) => void;
  setSearch: (search: string | undefined) => void;
};

const useQueryStore = create<GenreStore>((set) => ({
  genre: undefined,
  platform: undefined,
  search: undefined,
  setGenre: (genre) => set(() => ({ genre })),
  setPlatform: (platform) =>
    set(() => ({ platform: platform === "" ? undefined : platform })),
  setSearch: (search) => set(() => ({ search })),
}));

export default useQueryStore;
