import setLocal from "./setLocal";

interface IProps{
    page: string | number,
    type: string, 
    searchQuery: string
}

const setSearchParams = (props: IProps) => {
    const cookies = ['page', 'type', 'searchQuery'];
    for (let i = 0; i < cookies.length; i++) {
        setLocal({ item: cookies[i], type: props[cookies[i] as keyof IProps] });
    }
}

export default setSearchParams
