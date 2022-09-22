import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    padding-top: 20px;
    text-align:center;
    width: 200px;
    background-color: white;
`;

export const Avatar = styled.img`
    margin-bottom: 10px;
    border-radius: 50%;
    border: 3px solid black;
    width: 100px;
    box-shadow: 2px 8px 20px darkgrey;
`;

export const Name = styled.p`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Tag = styled.p`
    margin-bottom: 5px;
    color: grey;
`;

export const Location = styled.p`
    margin-bottom: 10px;
    color: grey;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 10px;
    background-color:rgb(163, 190, 241);
`;

export const StatsItem = styled.li`
    padding-top: 5px;
    padding-bottom: 10px;
`

export const StatsLabel = styled.span`
    display: flex;
    color: grey;
`;

export const StatsQuantity = styled.p`
    font-weight: bold;
`;