import React from "react"
import styles from "./statistic.module.css"
import PropTypes from "prop-types"
import getRandomRGB from "../getRandomColor.js"

function Statistics({title, stats}){
    return(
        <section className={styles.statistic}>
            {title && <h2 className={styles.title}>Upload stats</h2>}
            <ul className={styles['stat_list']}>
                {stats.map( ({ id, label, percentage }) => {
                    return (
                        <li style={{backgroundColor: getRandomRGB()}} key={id} className={styles.item}>
                            <span className={styles.label}>{label}</span>
                            <span className={styles.percentage}>{percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
      })
    ).isRequired
  }

export default Statistics