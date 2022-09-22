import PropTypes from 'prop-types';
import { FriendsItem, Status, FriendsAvatar } from './FriendList.styled';

export function FriendListItem({ friends }) {
    return (
        friends.map(({id, avatar, name, isOnline}) =>
            <FriendsItem key={id} >
                <Status isOnline={isOnline}></Status>
                <FriendsAvatar src={avatar} alt="User avatar" width="48" />
                <p>{name}</p>
            </FriendsItem>
        )
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    })).isRequired
}
