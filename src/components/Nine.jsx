import React from 'react';
import styles from './assets/css/styles.css';

import * as Constants from './Constants.jsx';
import { BaseCard } from './BaseCard.jsx';

export const Nine = ({ suit }) => {

    const suitImagePath = Constants.suitImagePaths[suit];

    return (
        <BaseCard suit={suit}  value={"9"} style={Constants.color333}>
            <div className={styles['card-suit']} style={Constants.ZMTMFMFR0}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.HMTMFMFR0}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.ZTTMFMFR0}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.HTTMFMFR0}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.FF3MFMFR0}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.ZSFMFR180}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.HSFMFR180}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.ZHTMFMFR180}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.HHTMFMFR180}>
                <img src={suitImagePath} />
            </div>
        </BaseCard>
    )
}