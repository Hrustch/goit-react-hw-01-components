import styles from './friends.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './friendsItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendList;
