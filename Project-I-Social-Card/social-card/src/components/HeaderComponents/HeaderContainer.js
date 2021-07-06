import React from 'react';
import './Header.css';
// import ReactDom from 'react-dom';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {

return (
    <div className = "containerHeader">
        <HeaderTitle />
        <ImageThumbnail/>
    </div>
);

};

export default HeaderContainer;
