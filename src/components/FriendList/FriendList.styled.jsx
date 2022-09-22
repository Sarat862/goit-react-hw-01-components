import styled from 'styled-components';

export const FriendListLs = styled.ul`
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    width: 220px;
    background-color: white;
`

export const FriendsItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 170px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    font-weight: bold;
`;

export const Status = styled.span`
    margin-left: 20px;
    margin-right: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;

    background-color: ${({ isOnline }) =>
        isOnline ? 'green' : 'red'
    };
`;

export const FriendsAvatar = styled.img`
    margin-right: 10px;
`;