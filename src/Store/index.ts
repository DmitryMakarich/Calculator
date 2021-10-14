import { createContext, useContext } from "react";
import BufferStore from "./Buffer";

import ThemeStore from "./Theme";

interface Store {
  themeStore: ThemeStore;
  bufferStore: BufferStore;
}

export const store: Store = {
  themeStore: new ThemeStore(),
  bufferStore: new BufferStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
