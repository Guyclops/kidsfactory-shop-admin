export interface FormProps {
  /** submit */
  onSubmit?: (e?: any) => void;
  /** form 안의 내용 */
  children?: React.ReactNode;
}
