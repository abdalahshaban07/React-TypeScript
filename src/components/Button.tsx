type ButtonProps = {
  // handleClick: () => void;
  handleClick: (event: React.MouseEvent<HTMLElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return <div onClick={(event) => props.handleClick(event, 1)}>Button</div>;
};

export default Button;
