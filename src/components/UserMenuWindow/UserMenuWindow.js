import './UserMenuWindow.css';

export default function UserMenuWindow(props) {
    const UserMenuButtons = props.userMenuList.map((userMenu,index) => {
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
    userMenuList:[
        {text:'주문내역',link:'/'},
        {text:'배송지 관리',link:'/'},
        {text:'쿠폰',link:'/'},
        {text:'로그아웃',link:'/'},
    ]
}

