import QuadrangleIconTextButton from "../QuadrangleIconTextButton/QuadrangleIconTextButton";

export default function SocialLoginButton(props) {
    return (
        <QuadrangleIconTextButton
            image={props.image}
            width='100%'
            paddingTop={8}
            paddingBottom={8}></QuadrangleIconTextButton>
    )
}