const Card = (props) => {
  const className = props.className;
  return <div className={className}>{props.children}</div>;
};

export default Card;
