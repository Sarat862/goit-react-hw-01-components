import PropTypes from 'prop-types';
import { FriendListLs } from './FriendList.styled';

import { FriendListItem } from './FriendListItem'

export function FriendList({friends}) {

    return (
        <FriendListLs>
            <FriendListItem friends={friends} />
        </FriendListLs>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}