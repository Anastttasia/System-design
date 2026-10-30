const UiButton = (props) => {
    const { onClick, children } = props;

    return <button onClick={onClick}>{children}</button>
}

export default UiButton;