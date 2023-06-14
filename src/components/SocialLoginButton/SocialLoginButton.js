import QuadrangleIconTextButton from "../QuadrangleIconTextButton/QuadrangleIconTextButton";

export default function SocialLoginButton(props) {
    return (
        <QuadrangleIconTextButton
            image={props.image}
            width='100%'
            paddingTop={8}
            paddingBottom={8}
            text={props.text}
            backgroundColor={props.backgroundColor}
            color={props.color}
            fontWeight={400}></QuadrangleIconTextButton>
    )
}

SocialLoginButton.defaultProps = {
    image: '',
    text: '소셜 로그인',
    backgroundColor: '#EB5C2E',
    color: '#fff',
}