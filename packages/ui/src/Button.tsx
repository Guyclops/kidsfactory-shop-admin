import * as React from "react";

type ButtonProps = {
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼 안의 내용 */
  name?: string;
  /** 버튼 크기 */
  big?: boolean;
};

const Button: React.FC<ButtonProps> = props => {
  return <button {...props}>{props.children}</button>;
};

Button.defaultProps = {
  name: "제목",
  big: false,
};
export default Button;
