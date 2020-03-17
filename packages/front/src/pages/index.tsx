import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { observer, inject } from "mobx-react";
import InfoCard from "../components/card/InfoCard";
import MiniCard from "../components/card/MiniCard";
import { ChildCare, CheckCircle, AccountCircle } from "@material-ui/icons";
import {
  Grid,
  TableContainer,
  TableHead,
  TableBody,
  Table,
  TableRow,
  TableCell,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import Store from "../stores";

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      minWidth: 600,
      margin: 0,
    },
  }),
);

const IndexPage = (props: Store) => {
  const { dashboard } = props;
  const { totalAdultCount, totalChildCount, use, visit, rooms } = dashboard;
  const styles = useStyles();

  useEffect(() => {
    dashboard.getRoomInfo();
  }, []);
  return (
    <Layout>
      <SEO title="현재 매장 정보" />
      <InfoCard title={"현재회원종합"}>
        <Grid container spacing={3}>
          <Grid xs={12} sm={4} item>
            <MiniCard
              title={"전체(어른/아이)"}
              content={`${totalAdultCount}/${totalChildCount}`}
              style={{ flex: 1 }}
            >
              <AccountCircle />
            </MiniCard>
          </Grid>
          <Grid xs={12} sm={4} item>
            <MiniCard
              title={"이용중(어른/아이)"}
              content={`${visit.adult}/${visit.child}`}
              color={"rgb(112, 174, 152)"}
              style={{ flex: 1 }}
            >
              <ChildCare />
            </MiniCard>
          </Grid>
          <Grid xs={12} sm={4} item>
            <MiniCard
              title={"이용완료(어른/아이)"}
              content={`${use.adult}/${use.child}`}
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
                  <TableCell align={"center"}>구분</TableCell>
                  <TableCell align={"center"}>아이이름</TableCell>
                  <TableCell align={"center"}>회원번호</TableCell>
                  <TableCell align={"center"}>이용시간</TableCell>
                  <TableCell align={"center"}>퇴장시간</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rooms.map((item, index) => (
                  <TableRow key={`room-${index}`}>
                    <TableCell align={"center"}>{item.r_before_name}</TableCell>
                    <TableCell align={"center"}>{item.r_child_name}</TableCell>
                    <TableCell align={"center"}>{item.user.phone}</TableCell>
                    <TableCell align={"center"}>{item.time.useTime}</TableCell>
                    <TableCell align={"center"}>{item.time.outTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </InfoCard>
    </Layout>
  );
};

export default inject("dashboard")(observer(IndexPage));
