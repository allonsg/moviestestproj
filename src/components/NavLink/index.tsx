import {FC, ReactElement, ReactNode} from 'react'
import { StyledNavLink } from './NavLink.styled';
import { useRouter } from 'next/router';
import setSearchParams from '@/services/localStorage/setSearchParams';

interface IProps{
    children: ReactNode | ReactElement;
    path: string;
}

const NavLink: FC<IProps> = ({children, path}) => {
    const { push } = useRouter();
    
    const onClickHandle = () => { 
        setSearchParams({page: '', type: '', searchQuery: ''});
        push(path);
    }
    
  return (
      <StyledNavLink onClick={onClickHandle}>{children}</StyledNavLink>
  )
}

export default NavLink