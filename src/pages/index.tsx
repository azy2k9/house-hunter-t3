import { type NextPage } from 'next';
import Head from 'next/head';
import Card from '~/components/Card';
import Container from '~/components/Container';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>House Hunter</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container title="House Hunter How Are You">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
                    <Card
                        link="/page/312-raynes-way"
                        title="312 Raynes Way"
                        features={[
                            'Big garden',
                            '3 bedrooms',
                            '2 reception rooms',
                        ]}
                    />
                    <Card
                        link="/page/29-bowker-street"
                        title="29 Bowker Street"
                        features={['Garden', '5 bedrooms', '2 reception rooms']}
                    />
                </div>
            </Container>
        </>
    );
};

export default Home;
