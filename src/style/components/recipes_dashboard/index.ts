import styled from "styled-components";

export const StyledRecipesDashboard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const StyledRecipeCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    border: 2px solid ${(props) => props.color};
    border-radius: 10px;
    padding: 10px;
    max-width: 200px;

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
`;