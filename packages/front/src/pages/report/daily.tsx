import React, { useState, useEffect, useCallback } from "react";
import Layout from "../../components/layout";
import DatePicker from "../../components/picker/DatePicker";
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
import { Bar } from "react-chartjs-2";
import moment from "moment-timezone";
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

const DailyDataTable = props => {
  const { data } = props;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{props.title}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ReportDaily = (props: Store) => {
  const styles = useStyles();
  const [date, setDate] = useState(moment());
  const { dailyReport } = props;
  const { user, voucher, stamp, gift } = dailyReport;
  const [barData, setBarData] = useState({});

  const handleDate = useCallback(async date => {
    setDate(date);
    await dailyReport.getShopInfoDaily(moment(date).format("YYYY-MM-DD"), setBarData);
  }, []);

  useEffect(() => {
    dailyReport.getShopInfoDaily(moment().format("YYYY-MM-DD"), setBarData);
  }, []);

  return (
    <Layout>
      <DatePicker value={date} onChange={handleDate} />
      <InfoCard title="일별 데이터 통계">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <DailyDataTable
              title={"회원 통계"}
              data={[
                { title: "신규 회원", value: user.new },
                { title: "회원 탈퇴", value: user.out },
                { title: "어른 입장", value: user.adult },
                { title: "아이 입장", value: user.child },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <DailyDataTable
              title={"정기권 통계"}
              data={[
                { title: "정기권 발행", value: voucher.publish },
                { title: "정기권 사용/만료", value: `${voucher.use}/${voucher.expire}` },
                { title: "정기권 취소/탈퇴", value: `${voucher.cancel}/${voucher.out}` },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <DailyDataTable
              title={"스탬프 통계"}
              data={[
                { title: "스탬프 발행", value: stamp.add },
                { title: "스탬프 차감/탈퇴", value: `${stamp.minus}/${stamp.out}` },
                { title: "쿠폰 발행/사용", value: `${gift.all}/${gift.use}` },
              ]}
            />
          </Grid>
        </Grid>
      </InfoCard>
      <InfoCard title="시간대별 입장수">
        <Bar data={barData} width={100} height={50} />
      </InfoCard>
      <InfoCard title="입/퇴장 내역">
        <TableContainer>
          <Table className={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell>순서</TableCell>
                <TableCell>연락처</TableCell>
                <TableCell>어른/아이</TableCell>
                <TableCell>입/퇴장 시간</TableCell>
                <TableCell>상태</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dailyReport.visitList.map((item, index) => (
                <TableRow key={`visit-${index}`}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{`${item.adult}/${item.child}`}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InfoCard>
    </Layout>
  );
};

export default inject("dailyReport")(observer(ReportDaily));
