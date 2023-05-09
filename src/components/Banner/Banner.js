import './Banner.css';

import { useState } from 'react';

export default function Banner(props) {
    const [bannerIndex, setBannerIndex] = useState(1);
    let viewportWidth = window.innerWidth;
    const initialLeftPosition = -viewportWidth;
    let nextBannerIndex;

    window.onresize = function () {
        let leftInitializationPosition = -window.innerWidth * (bannerIndex - 1);
        document.getElementById('banner-contents').style.left = String(leftInitializationPosition) + 'px';
    }

    let bannerNumber = 0;
    if (props.bannerList && Array.isArray(props.bannerList)) bannerNumber = props.bannerList.length;

    function BannerImageContainer (props) {
        return (
            <a className='banner-image-container' href='/'>
                <img
                    src={props.wideScreenImage}
                    className='banner-image wide'
                    alt='banner-wide-screen'></img>
                <img
                    src={props.mobileImage}
                    className='banner-image mobile'
                    alt='banner-mobile'></img>
            </a>
        )
    }
    let BannerImageContainers = props.bannerList.map((banner,index) => {
        return (
            <BannerImageContainer
                wideScreenImage={banner.wideScreenImage}
                mobileImage={banner.mobileImage}
                key={'banner-'+String(index)} />
        )
    })
    const LastBanner = <BannerImageContainer  
                            wideScreenImage={props.bannerList[props.bannerList.length-1].wideScreenImage}
                            mobileImage={props.bannerList[props.bannerList.length-1].mobileImage}
                            key='first-banner'/>
    const FirstBanner = <BannerImageContainer  
                            wideScreenImage={props.bannerList[1].wideScreenImage}
                            mobileImage={props.bannerList[1].mobileImage}
                            key='last-banner'/>
    BannerImageContainers.push(FirstBanner);
    BannerImageContainers.unshift(LastBanner);

    const moveLeft = () => {
        nextBannerIndex = bannerIndex - 1;
        if (nextBannerIndex === 0) {
            document.getElementById('banner-contents').style.left = -((nextBannerIndex) * window.innerWidth) + 'px';
            document.getElementById('banner-contents').style.transition = `${0.3}s ease-out`;
            const resetToLast = () => {
                document.getElementById('banner-contents').style.left = -bannerNumber*window.innerWidth + 'px';
                document.getElementById('banner-contents').style.transition = `${0}s ease-out`;
            }
            setTimeout(() => resetToLast(),300);
            nextBannerIndex = bannerNumber;
        } else {
            document.getElementById('banner-contents').style.left = -((nextBannerIndex) * window.innerWidth) + 'px';
            document.getElementById('banner-contents').style.transition = `${0.3}s ease-out`;
        }
        setBannerIndex(nextBannerIndex);
    }

    const moveRight = () => {
        nextBannerIndex = bannerIndex + 1;
        if (nextBannerIndex > bannerNumber) {
            document.getElementById('banner-contents').style.left = -((nextBannerIndex) * window.innerWidth) + 'px';
            document.getElementById('banner-contents').style.transition = `${0.3}s ease-out`;
            const resetToFirst = () => {
                document.getElementById('banner-contents').style.left = -window.innerWidth + 'px';
                document.getElementById('banner-contents').style.transition = `${0}s ease-out`;
            }
            setTimeout(() => resetToFirst(),300);
            nextBannerIndex = 1;
        } else {
            document.getElementById('banner-contents').style.left = -((nextBannerIndex) * window.innerWidth) + 'px';
            document.getElementById('banner-contents').style.transition = `${0.3}s ease-out`;
        }
        setBannerIndex(nextBannerIndex);        
    }

    return (
        <div className='banner'>
            <button className='banner-button left' onClick={() => moveLeft()}></button>
            <button className='banner-button right' onClick={() => moveRight()}></button>
            <div className='banner-counter'>
                <span className='banner-counter-number'>
                    {bannerIndex} / {bannerNumber}
                </span>
            </div>
            <div className='banner-contents' id='banner-contents' style={{'left':initialLeftPosition}}>
                {BannerImageContainers}
            </div>
        </div>
    )
}

Banner.defaultProps = {
    bannerList: [
        {"bannerImage":"","mobileImage":"","link":"/"},
        {"bannerImage":"","mobileImage":"","link":"/"},
        {"bannerImage":"","mobileImage":"","link":"/"},
        {"bannerImage":"","mobileImage":"","link":"/"},
    ]
}