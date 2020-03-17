import React from "react";
import Layout from "../../components/layout";
import InfoCard from "../../components/card/InfoCard";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import MiniCard from "../../components/card/MiniCard";
import { AccountCircle, ChildCare, CheckCircle } from "@material-ui/icons";

export default {
  title: "Page|Dashboard",
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      minWidth: 600,
      margin: 0,
    },
  }),
);

export const DashboardPage = () => {
  const styles = useStyles();

  return (
    <Layout>
      <InfoCard title={"현재회원종합"}>
        <Grid container spacing={3}>
          <Grid xs={12} sm={4} item>
            <MiniCard title={"전체(어른/아이)"} content={`10/10`} style={{ flex: 1 }}>
              <AccountCircle />
            </MiniCard>
          </Grid>
          <Grid xs={12} sm={4} item>
            <MiniCard
              title={"이용중(어른/아이)"}
              content={`10/10`}
              color={"rgb(112, 174, 152)"}
              style={{ flex: 1 }}
            >
              <ChildCare />
            </MiniCard>
          </Grid>
          <Grid xs={12} sm={4} item>
            <MiniCard
              title={"이용완료(어른/아이)"}
              content={`10/10`}
              color={"rgb(157, 171, 221)"}
              style={{ flex: 1 }}
            >
              <CheckCircle />
            </MiniCard>
          </Grid>
        </Grid>
      </InfoCard>
      <InfoCard title={"이용중인 회원"}>
        <Grid item xs={12}>
          <TableContainer>
            <Table className={styles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>구분</TableCell>
                  <TableCell>아이이름</TableCell>
                  <TableCell>회원번호</TableCell>
                  <TableCell>이용시간</TableCell>
                  <TableCell>퇴장시간</TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </InfoCard>
    </Layout>
  );
};
