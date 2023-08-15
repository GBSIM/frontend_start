import './UserClass.css';

export default function UserClass(props) {
    let UserClassDetailButton;
    const moverToOrderManagement = () => {
        window.location.href = '/manage/delivery';
    }
    
    if (props.class === 99) {
        if (window.location.pathname.split('/')[1] === 'manage') {
            UserClassDetailButton =
                <button className='user-class-detail-button'>
                    <span className='user-class-detail-button-text'>매니저님, 오늘도 좋은 하루 되세요.</span>
                </button>
        } else {
            UserClassDetailButton =
                <button className='user-class-detail-button' onClick={() => moverToOrderManagement()}>
                    <span className='user-class-detail-button-text'>주문 관리하러 가기</span>
                </button>
        }        
    } else {
        UserClassDetailButton =
            <button className='user-class-detail-button'>
                <span className='user-class-detail-button-text'>고객 등급 알아보기</span>
            </button>
    }

    let ClassBox;
    if (props.class === 0) {
        ClassBox = 
            <div className='user-class-box' style={{'background':'#12C642'}}>
                <h3 className='user-class-box-text' style={{'color':'#fff'}}>Green</h3>
            </div>
    } else if(props.class === 1) {
        ClassBox = 
            <div className='user-class-box' style={{'background':'#EB5C2E'}}>
                <h3 className='user-class-box-text' style={{'color':'#fff'}}>Orange</h3>
            </div>
    } else if (props.class === 99) {
        ClassBox = 
            <div className='user-class-box' style={{'background':'#EB5C2E'}}>
                <h3 className='user-class-box-text' style={{'color':'#fff'}}>Manager</h3>
            </div>
    } else {
        ClassBox = 
            <div className='user-class-box' style={{'background':'#12C642'}}>
                <h3 className='user-class-box-text' style={{'color':'#fff'}}>Green</h3>
            </div>
    }

    return (
        <div className='user-class'>
            <div className='user-class-row'>
                {ClassBox}
                <h2 className='user-class-name'>{props.name}님</h2>
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
    class: "Manager",
    boxColor: '#eb5c2e',
    textColor: '#fff',
    name: '김제니',
    moveToOrderManagement: defaultClickEvent,
}