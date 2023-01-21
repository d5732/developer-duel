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
    margin-top: 10rem;
    gap: 78px;
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
    border: 1px solid black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: "Roboto", sans-serif;
`;

export const ProfileDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProfileDetail = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
`;

export const ProfileLabel = styled.span`
    width: 107px;
    height: 26px;
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    font-size: 13px;
    line-height: 15px;
    background: #e1f1ff;
    text-align: center;
`;

export const ProfileValue = styled.span`
    font-size: 24px;
    line-height: 28px;
`;

export const Bio = styled.div`
    font-size: 14px;
    line-height: 16px;
    text-align: center;
`;

export const Avatar = styled.img`
    border-radius: 100%;
    height: 104px;
    width: 104px;
`;

export const AvatarBioContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    font-size: 26px;
    line-height: 30px;
`;
