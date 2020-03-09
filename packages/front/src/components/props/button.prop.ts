export interface ButtonProps {
  /** 스타일 */
  style?: object;
  /** 버튼 안의 내용 */
  children?: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
