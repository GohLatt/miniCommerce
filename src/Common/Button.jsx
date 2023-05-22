function Button(props) {
  const className = props.className;
  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
