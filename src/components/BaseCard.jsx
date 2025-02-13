import React from 'react';
import styles from './assets/css/styles.css';

import * as Constants from './Constants.jsx';

export const BaseCard = ({ suit, value, style,  children }) => {

    const suitImagePath = Constants.suitImagePaths[suit];

    return (
        <div className={`${styles.card}`} style={style}>
            <div className={styles['card-middle']}>
                {children}
            </div>
            <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
                <div className={styles['card-rank']}>{value}</div>
                <div className={styles['card-suit']}>
                    <img src={suitImagePath} />
                </div>
            </div>
            <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
                <div className={styles['card-rank']}>{value}</div>
                <div className={styles['card-suit']}>
                    <img src={suitImagePath} />
                </div>
            </div>
        </div>
    )
}