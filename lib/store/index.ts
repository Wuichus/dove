import { create } from "zustand";

export type GlobalStore = {
  user: {} | null;
};

const useGlobalStore = create<GlobalStore>()((set) => ({
  user: null,
}));

export default useGlobalStore;
