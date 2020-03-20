import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import InfoCard from "../../components/card/InfoCard";
import {
  Grid,
  Table,
  TableHead,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import MiniCard from "../../components/card/MiniCard";
import { Person, ConfirmationNumber } from "@material-ui/icons";
import { Bar } from "react-chartjs-2";
import { inject, observer } from "mobx-react";
import { Store } from "../../stores";

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      minWidth: 400,
      margin: 0,
    },
  }),
);

const ReportTotal = (props: Store) => {
  const { totalReport } = props;
  const { userCount, voucherCount, newCount, outCount, voucher, accUserList } = totalReport;

  const [newData, setNewData] = useState({});
  const [visitData, setVisitData] = useState({});

  useEffect(() => {
    totalReport.getLoadReport(setNewData, setVisitData);
  }, []);

  const styles = useStyles();
  return (
    <Layout>
      <SEO title="전체 통계" />
      <InfoCard title="회원 종합">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <MiniCard title="전체 회원" content={`${userCount}명`} color={"rgb(153, 102, 255)"}>
              <Person />
            </MiniCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            <MiniCard
              title="정기권 구매 회원"
              content={`${voucherCount}명`}
              color={"rgb(75, 192, 192)"}
            >
              <Person />
            </MiniCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            <MiniCard title="탈퇴 회원" content={`${outCount}명`} color={"rgb(255, 99, 132)"}>
              <Person />
            </MiniCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            <MiniCard title="올해 신규 회원" content={`${newCount}명`} color={"rgb(255, 206, 86)"}>
              <Person />
            </MiniCard>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={12}>
          <Bar data={newData} width={100} height={50} />
        </Grid>
      </InfoCard>
      <InfoCard title="월별 입장 어른/아이수">
        <Bar data={visitData} width={100} height={50} />
      </InfoCard>
      <InfoCard title="정기권">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <MiniCard
              title="전체 정기권 발행"
              content={`${voucher.publish}개`}
              color={"rgb(153, 102, 255)"}
            >
              <ConfirmationNumber />
            </MiniCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            <MiniCard
              title="정기권 사용/만료"
              content={`${voucher.use} / ${voucher.expire}개`}
              color={"rgb(75, 192, 192)"}
            >
              <ConfirmationNumber />
            </MiniCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            <MiniCard
              title="정기권 취소/탈퇴"
              content={`${voucher.cancel} / ${voucher.out}개`}
              color={"rgb(255, 99, 132)"}
            >
              <ConfirmationNumber />
            </MiniCard>
          </Grid>
          <Grid item xs={12} sm={3}>
            <MiniCard
              title="잔여 정기권"
              content={`${voucher.remain}개`}
              color={"rgb(255, 206, 86)"}
            >
              <ConfirmationNumber />
            </MiniCard>
          </Grid>
        </Grid>
      </InfoCard>
      <InfoCard title="누적 방문 고객 순위">
        <Grid container>
          <TableContainer>
            <Table className={styles.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">순위</TableCell>
                  <TableCell align="center">아이 이름</TableCell>
                  <TableCell align="center">전화번호</TableCell>
                  <TableCell align="center">입장횟수</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accUserList.map((item, index) => (
                  <TableRow key={`rank-${index}`}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">{item.su_child_name}</TableCell>
                    <TableCell align="center">{item.phone}</TableCell>
                    <TableCell align="center">{item.count}</TableCell>
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

export default inject("totalReport")(observer(ReportTotal));
