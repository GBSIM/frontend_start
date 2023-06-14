import QuadrangleIconTextButton from "../QuadrangleIconTextButton/QuadrangleIconTextButton";

export default function SocialLoginButton(props) {
    return (
        <QuadrangleIconTextButton
            image={props.image}
            width='100%'
            paddingTop={props.paddingTop}
            paddingBottom={props.paddingBottom}
            text={props.text}
            backgroundColor={props.backgroundColor}
            color={props.color}
            iconWidth={props.iconWidth}
            iconHeight={props.iconHeight}
            iconLeft={props.iconLeft}
            fontWeight={400}></QuadrangleIconTextButton>
    )
}

SocialLoginButton.defaultProps = {
    image: '',
    text: '소셜 로그인',
    backgroundColor: '#EB5C2E',
    color: '#fff',
    iconWidth: 24,
    iconHeight: 24,
    iconLeft: 10,
    paddingTop: 8,
    paddingBottom: 8,
}