import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRecipesDashboard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const StyledRecipeCard = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    border: 2px solid ${(props) => props.color};
    border-radius: 10px;
    padding: 10px;
    max-width: 200px;
    text-decoration: none;
    color: black;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
    }
    
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 10px;
    }

    h2 {
        margin-top: 10px;
        text-align: center;
    }
`