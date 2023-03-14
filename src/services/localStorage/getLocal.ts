import { LocalInfo } from "@/types/types";
import setLocal from "./setLocal";
import Cookies from 'js-cookie';

const getLocal = ({ item, type }: LocalInfo) => {
    if (typeof window === 'undefined') {
        return '';
    }

    let localInfo = Cookies.get(item);

    if (!localInfo) {
        setLocal({ item, type });
        return '';
    }

    return JSON.parse(localInfo);
};

export default getLocal;
