import './UserClass.css';

export default function UserClass(props) {
    let UserClassDetailButton;
    if (props.class === 'Manager' || props.class === 'manager') {
        UserClassDetailButton =
            <button className='user-class-detail-button' onClick={() => props.moveToOrderManagement}>
                <span className='user-class-detail-button-text'>주문 관리하러 가기</span>
            </button>
    } else {
        UserClassDetailButton =
            <button className='user-class-detail-button'>
                <span className='user-class-detail-button-text'>고객 등급 알아보기</span>
            </button>
    }

    return (
        <div className='user-class'>
            <div className='user-class-row'>
                <div className='user-class-box' style={{'background':props.boxColor}}>
                    <h3 className='user-class-box-text' style={{'color':props.textColor}}>{props.class}</h3>
                </div>
                <h2 className='user-class-name'>{props.name}</h2>
            </div>
            <div className='user-class-row'>
                {UserClassDetailButton}
            </div>
        </div>
    )
}

const defaultClickEvent = () => {
    
}

UserClass.defaultProps = {
    class: "Orange",
    boxColor: '#eb5c2e',
    textColor: '#fff',
    name: '김제니',
    moveToOrderManagement: defaultClickEvent,
}