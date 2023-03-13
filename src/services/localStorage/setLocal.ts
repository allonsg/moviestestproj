import { LocalInfo } from "@/types/types";

const setLocal = ({item, type}:LocalInfo ) => {
  if (typeof window === 'undefined') return null;
  window.localStorage.setItem(item, type)
};

export default setLocal