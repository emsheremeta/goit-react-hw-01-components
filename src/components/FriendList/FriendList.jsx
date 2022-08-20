import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Friend, Item } from './FriendList.styled';

export default function FriendList ({friends }) {
    return <Friend>
    {friends.map(friend => (
        <Item>
       <FriendListItem 
       key={friend.id}
       name={friend.name}
       avatar={friend.avatar}
       isOnline={friend.isOnline}
       />
       </Item>
    ))}
  </Friend>
}

FriendList.propTypes ={
  friends:PropTypes.array
}