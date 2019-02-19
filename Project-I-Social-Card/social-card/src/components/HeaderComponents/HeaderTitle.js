import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import moment from 'moment';

const time = moment ();

const HeaderTitle = () => {
    return (
        <div className = "headerWrap">
        <div className = "title">
        Lambda School
    <span className = "timeStamp">

    </span>
        </div>
        </div>
    )
};

export default HeaderTitle;