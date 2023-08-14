import './UserMenuWindow.css';

export default function UserMenuWindow(props) {
    let userMenuList;
    if ((props.userClass === 'manager') || (props.userClass === 'Manager')) {
        userMenuList =
            [
                {text:'주문내역',link:'/user/orderhistory'},
                {text:'배송지관리',link:'/user/shippings'},
                {text:'쿠폰',link:'/user/coupons'},
                {text:'주문관리',link:'/manage/delivery'},
                {text:'로그아웃',link:'/user/logout'},
            ];
    } else {
        userMenuList =
            [
                {text:'주문내역',link:'/user/orderhistory'},
                {text:'배송지관리',link:'/user/shippings'},
                {text:'쿠폰',link:'/user/coupons'},
                {text:'로그아웃',link:'/user/logout'},
            ];
    }

    const UserMenuButtons = userMenuList.map((userMenu,index) => {
        const clickEvent = () => {
            window.location.href = userMenu.link;
        }

        return (
            <button className='user-menu-button' onClick={() => clickEvent()} key={'user-menu-button'+index}>
                <span className='user-menu-button-text'>{userMenu.text}</span>
            </button>
        )
    })

    if (props.isOn) {
        return (
            <div className='user-menu-window'>
                {UserMenuButtons}
            </div>
        )
    }
}

UserMenuWindow.defaultProps = {
    isOn: true,
    userClass: 'manager',
}

