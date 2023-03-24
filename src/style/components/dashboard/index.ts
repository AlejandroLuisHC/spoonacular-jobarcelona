import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { color } from '../../style_constants'
export const StyledCard = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    width: 250px;
    margin: 20px;
    color: white;
    background-color: ${(props) => props.color};
    border-radius: 10px;
    text-decoration: none;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
    }

    h2 {
        font-size: 1.5rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`;
export const StyledDashboard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 2rem;
    width: 100%;
    margin: 0 auto;
`

export const StyledSearchBar = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
`;

export const StyledSearchInput = styled.input`
    padding: 8px;
    border: 1px solid ${color.blue};
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    max-width: 400px;
    margin-right: 10px;
`;

export const StyledSearchButton = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    background-color: ${color.primary};
    color: ${color.white};
    cursor: pointer;

    &:hover {
        background-color: ${color.accentHover};
    }
`;