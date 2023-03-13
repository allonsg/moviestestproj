import { LocalInfo } from "@/types/types";
import setLocal from "./setLocal";

const getLocal = ({ item, type }: LocalInfo) => {
    if (typeof window === 'undefined') {
        return '';
    }

    const localInfo = window.localStorage.getItem(item);

    if (!localInfo) {
        setLocal({ item, type })
        return '';
    }
    
    return JSON.parse(localInfo);
};

export default getLocal;