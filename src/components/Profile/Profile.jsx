import PropTypes from 'prop-types';
import { Container, Avatar, Name, Tag, Location, StatsList, StatsItem, StatsLabel, StatsQuantity } from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
    return (
        <Container >
            <div>
                <Avatar
                    src={avatar}
                    alt={username}
                />
                <Name>{username}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </div>

            <StatsList>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{stats.followers}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{stats.views}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{stats.likes}</StatsQuantity>
                </StatsItem>
            </StatsList>
        </Container>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }).isRequired
}