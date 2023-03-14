import Head from 'next/head';
import React, { FC, ReactElement, ReactNode } from 'react';
import NavLink from '../NavLink';
import { useRouter } from 'next/router';

import { StyledMain, StyledHeader, StyledNav } from './MainContainer.styled';

interface IProps{
    keywords: string;
    description: string;
    title: string;
    children: ReactNode | ReactElement;
}

interface ILink{
    id: number;
    pageTitle: string;
    path: string;
}

 const THIS_URL = 'https://moviestestproj.vercel.app';

const MainContainer: FC<IProps> = ({ keywords = 'movies', description = 'simple service for movies', children }) => {
    const { pathname } = useRouter();

    const navigation: ILink[] =
        [
            { id: 1, pageTitle: 'Movies', path: '/' },
            { id: 2, pageTitle: 'Favorite', path: '/favoriteMovies' },
        ]
    return (
        <>
            <Head>
                <title>Movies</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <meta name="robots" content="index, follow"/>
                <meta charSet="utf-8" />
                <link rel="canonical" href={`${THIS_URL + pathname}`} />
            </Head>

            <StyledHeader>
                <StyledNav>
                    {navigation.map(({ id, pageTitle, path }) => <NavLink key={id} path={path}>{pageTitle}</NavLink>)}
                </StyledNav>
            </StyledHeader>

            <StyledMain>{children}</StyledMain>
        </>
    );
};



export default MainContainer;
