import { LocalInfo } from "@/types/types";
import Cookies from "js-cookie";


const setLocal = ({item, type}:LocalInfo ) => {
  if (typeof window === 'undefined') return null;
  
  Cookies.set(item, JSON.stringify(type));
};

export default setLocal