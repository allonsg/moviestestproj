import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { FC, ReactElement, ReactNode } from 'react';
import { StyledMain, StyledHeader, StyledNavLink } from './MainContainer.styled';

interface IProps{
    keywords: string;
    description: string;
    title: string;
    children: ReactNode | ReactElement;
    canonical?: string;
}

interface ILink{
    id: number;
    pageTitle: string;
    path: string;
}

const THIS_URL = 'http://localhost:3000';

const MainContainer: FC<IProps> = ({ keywords = 'movies', description = 'simple service for movies', title = 'Movies | Home', children }) => {
    const { pathname } = useRouter();

    const navigation: ILink[] =
        [
            { id: 1, pageTitle: 'Movies', path: '/' },
            { id: 2, pageTitle: 'Favorite', path: '/favoritemovies' },
        ]
    

    return (
        <>
            <Head>
                <title> {title} </title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <meta name="robots" content="index, follow"/>
                <meta charSet="utf-8" />
                <link rel="canonical" href={`${THIS_URL+pathname}`} />
            </Head>

            <StyledHeader>
                <nav>
                    {navigation.map(({ id, pageTitle, path }) => <StyledNavLink key={id} aria-disabled={pathname === path} className={pathname === path ? 'active' : ''} href={path}>{pageTitle}</StyledNavLink>)}
                </nav>
            </StyledHeader>

            <StyledMain>{children}</StyledMain>
        </>
    );
};



export default MainContainer;
