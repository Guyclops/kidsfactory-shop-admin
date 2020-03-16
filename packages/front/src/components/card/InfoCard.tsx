import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  makeStyles,
  createStyles,
  CardProps,
} from "@material-ui/core";

interface Props extends CardProps {
  /** content */
  children?: React.ReactNode;
  /** 타이틀 */
  title?: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: { marginBottom: 10 },
    header: {
      height: "3rem",
      padding: 10,
      backgroundColor: "rgb(222, 240, 252)",
    },
    content: {
      flexGrow: 1,
      width: "100%",
      padding: 10,
    },
  }),
);

const CardHeader = props => {
  const styles = useStyles();
  return (
    <div className={styles.header}>
      <Typography>{props.title}</Typography>
    </div>
  );
};

const InfoCard = (props: Props) => {
  const { title, children } = props;
  const styles = useStyles();
  return (
    <Card className={styles.root} variant={"outlined"} {...props}>
      <CardHeader title={title} />
      <Divider />
      <CardContent className={styles.content}>{children}</CardContent>
    </Card>
  );
};

InfoCard.defaultProps = {
  title: "",
};

export default InfoCard;
