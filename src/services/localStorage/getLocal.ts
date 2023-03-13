import { LocalInfo } from "@/types/types";
import setLocal from "./setLocal";

const getLocal = ({ item, type }: LocalInfo) => {
    if (typeof window === 'undefined') {
        return null;
    }

    const localInfo = window.localStorage.getItem(item);

    if (!localInfo) {
        setLocal({ item, type })
        return null;
    }
    
    return JSON.parse(localInfo);
};

export default getLocal;