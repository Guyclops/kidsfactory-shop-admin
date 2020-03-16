import React from "react";
import { CardProps, Card, makeStyles, createStyles, Avatar } from "@material-ui/core";

interface Props extends CardProps {
  /** 제목 */
  title?: string;

  /** 내용 */
  content?: string;

  /** 색 */
  color?: string;

  /** 아이콘 */
  children?: React.ReactNode;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      padding: "1rem",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      color: "rgb(84, 110, 122)",
      marginBottom: 10,
    },
    content: {
      marginBottom: 10,
    },
  }),
);

const MiniCard = (props: Props) => {
  const { title, content, children, color } = props;
  const styles = useStyles(color);
  return (
    <Card className={styles.root}>
      <div>
        <h5 className={styles.title}>{title}</h5>
        <h3 className={styles.content}>{content}</h3>
      </div>
      <Avatar style={{ backgroundColor: color }}>{children}</Avatar>
    </Card>
  );
};

MiniCard.defaultProps = {
  color: "rgb(32, 83, 134)",
};

export default MiniCard;
