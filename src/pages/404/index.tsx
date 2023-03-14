import Link from 'next/link'
import { FC } from 'react'
import MainContainer from '@/components/MainContainer'
import { Styled404 } from '@/components/Styled404/indext'

const Custom404: FC = () => {

    return (
        <MainContainer title='ERROR 404' keywords='Movies' description='Movies service'>
            <Styled404>
                <div>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                    <Link href="/">
                        Go back home
                    </Link>
                </div>
            </Styled404>
        </MainContainer>
    )
}

export default Custom404
