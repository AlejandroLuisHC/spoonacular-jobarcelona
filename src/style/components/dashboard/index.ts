import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
`