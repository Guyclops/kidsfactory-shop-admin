/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

export interface Props {
  /** 색 이름 */
  title: string;
  /** hash 값 */
  hash: string;
  /** rgb 값 */
  rgb: string;
}

const ColorItem = (props: Props) => {
  const { title, hash, rgb } = props;
  return (
    <Container color={rgb}>
      <div className="colorBody"></div>
      <div className="description">
        <div>{title}</div>
        <div>{hash}</div>
        <div>{rgb}</div>
      </div>
    </Container>
  );
};

ColorItem.defaultProps = {
  title: "",
  hash: "#000000",
  rgb: "rgb(0, 0, 0)",
};

const Container = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid rgb(220, 220, 220);

  > .colorBody {
    width: 100%;
    height: 50%;
    background-color: ${({ color }) => color};
    margin-bottom: 5px;
  }

  > .description {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
  }
`;

export default ColorItem;
