import React from 'react'
import PropTypes from 'prop-types'
import styles from "./friends.module.css"

function friendListItem ({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )
}

friendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}

export default friendListItem