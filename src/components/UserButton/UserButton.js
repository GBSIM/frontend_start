import './UserButton.css';

import TextIconButton from '../TextIconButton/TextIconButton';

export default function UserButton(props) {
    return (
        <TextIconButton
            text={(props.name)+'님'}
            color='#666'
            image={require('../../icons/inequity_down_grey.png')}
            iconSize={16}/>
    )
}

UserButton.defaultProps = {
    name: '장원영',

}