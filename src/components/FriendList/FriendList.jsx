import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FriendList({friends}) {
    const elements = friends.map(({ id, avatar, name, isOnline }) => 
        <li className={css.item} key={id}>
            <span className={isOnline ? css.online : css.offline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>)

    return (
        <ul className={css.friendList}>
            {elements}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    })).isRequired
}