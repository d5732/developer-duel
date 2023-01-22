import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    font-size: 18px;
    height: 100%;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
`;

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    margin-top: 4rem;
`;

export const ErrorDisplay = styled.div`
    position: absolute;
    width: 100%;
    top: -5rem;
    right: 0;
    padding: 1rem 2rem;
    color: white;
    background: darkred;
    font-weight: bold;
    text-align: center;
`;

export const ProfileContainer = styled.article`
    position: relative;
    display: grid;
    width: 649px;
    padding: 1.5rem;
    grid-template-columns: 1fr 3fr;
    border: 1px solid black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProfileDetailsContainer = styled.div`
    display: grid;
    gap: 0.75rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const ProfileDetail = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
`;

export const ProfileLabel = styled.span`
    border: 1px solid rgba(0, 0, 0, 0.75);
    width: 14rem;
    border-radius: 5px;
    font-size: 1.4rem;
    background: #e1f1ff;
    text-align: center;
    padding: 0.25rem;
`;

export const ProfileValue = styled.span`
    font-size: 2.25rem;
`;

export const Bio = styled.div`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;
    text-align: center;
`;

export const Avatar = styled.img`
    border-radius: 100%;
    width: 103px;
    height: 103px;
`;

export const AvatarBioContainer = styled.div`
    margin: auto;
    margin-right: 2rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

const buttonCss = `
    width: 265px;    
    padding: 2rem 0;
    margin: auto;
    font-size: 3rem;
    text-align: center;
    border: 1px black solid;
    color: black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &[disabled] {
        cursor: not-allowed;
        color: grey;
        border-color: grey;
    }
`;

export const ButtonLink = styled(Link)`
    ${buttonCss}
`;

export const Button = styled.button`
    ${buttonCss}
`;

export const TextInput = styled.input`
    background: #e1f1ff;
    border: 1px solid rgba(0, 0, 0, 0.75);
    text-align: center;
    padding: 1rem;
    font-size: 2.5rem;
`;
