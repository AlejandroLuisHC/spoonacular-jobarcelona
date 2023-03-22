import {
    Container,
    Logo,
    Navigation,
    NavLink,
} from '../../style/components/layout/headerStyle';

const Header = () => {
    return (
        <Container>
            <Logo to="/">Food Recipes</Logo>
            <Navigation>
                <NavLink to="/">Home</NavLink>
            </Navigation>
        </Container>
    );
};

export default Header;