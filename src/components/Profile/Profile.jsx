import PropTypes from 'prop-types';
import {Container,Description,Avatar,Name,Tag,Location,Stats,StatsItem,Label,Quantity } from './Profile.styled'

export default function Profile ({username, tag, location, avatar, stats}) {
    return <Container>
    <Description>
      <Avatar
        src={avatar}
        alt={username}
        
      />
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </Description>
  
    <Stats>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity> {stats.followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity> {stats.views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity> {stats.likes}</Quantity>
      </StatsItem>
    </Stats>
  </Container>
}

Profile.propTypes = {
    username: PropTypes.string,
    tag:PropTypes.string,
    location:PropTypes.string,
    avatar:PropTypes.string,
    stats:PropTypes.object
}