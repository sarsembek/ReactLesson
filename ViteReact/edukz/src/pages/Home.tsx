import { FC } from 'react';
import Header from '../components/header/Header';
import Content from '../components/content/Content';
import ProductList from '../components/ProductList/ProductList';

const Home: FC = () => {
    return (
        <>
            <Header/>
            <Content/>
            <ProductList />
        </>
    )
}

export default Home;