import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Main, LayoutContainer } from '../style/components/layout/layoutStyle';

const Layout = () => {
    return (
        <LayoutContainer>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </LayoutContainer>
    )
}

export default Layout