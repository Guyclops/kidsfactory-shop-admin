import React, { useState, useEffect, useCallback } from "react";
import {
  TableContainer,
  makeStyles,
  createStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
} from "@material-ui/core";
import moment from "moment-timezone";
import Layout from "../../components/layout";
import DatePicker from "../../components/picker/DatePicker";
import InfoCard from "../../components/card/InfoCard";
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

const ReportMonthly = (props: Store) => {
  const { monthlyReport } = props;
  const { user, voucher, stamp, gift, visitRank } = monthlyReport;
  const styles = useStyles();
  const [date, setDate] = useState(moment().format("YYYY-MM"));

  const handleDate = useCallback(async date => {
    setDate(date);
    await monthlyReport.getShopInfoMontly(moment(date).format("YYYY-MM"));
  }, []);

  useEffect(() => {
    monthlyReport.getShopInfoMontly(date);
  }, []);

  const MonthlyDataTable = props => {
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
              <TableRow key={`item.title-${index}`}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Layout>
      <DatePicker
        value={date}
        onChange={setDate}
        onMonthChange={handleDate}
        minDate={"2015-01-01"}
        maxDate={"2099-12-31"}
        format={"YYYY-MM"}
        views={["year", "month"]}
      />
      <InfoCard title="월별 데이터 통계">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <MonthlyDataTable
              data={[
                { title: "신규 회원", value: user.new },
                { title: "회원 탈퇴", value: user.out },
                { title: "어른 입장", value: user.adult },
                { title: "아이 입장", value: user.child },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MonthlyDataTable
              data={[
                { title: "정기권 발행", value: voucher.publish },
                { title: "정기권 사용/만료", value: `${voucher.use}/${voucher.expire}` },
                { title: "정기권 취소/탈퇴", value: `${voucher.cancel}/${voucher.out}` },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MonthlyDataTable
              data={[
                { title: "스탬프 발행", value: stamp.add },
                { title: "스탬프 차감/탈퇴", value: `${stamp.minus}/${stamp.out}` },
                { title: "쿠폰 발행/사용", value: `${gift.all}/${gift.use}` },
              ]}
            />
          </Grid>
        </Grid>
      </InfoCard>
      <InfoCard title="월별 방문 순위">
        <TableContainer>
          <Table className={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell>순서</TableCell>
                <TableCell>아이 이름</TableCell>
                <TableCell>연락처</TableCell>
                <TableCell>입장횟수</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visitRank.map((item, index) => (
                <TableRow key={`rank-${index}`}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.childName}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InfoCard>
    </Layout>
  );
};

export default inject("monthlyReport")(observer(ReportMonthly));
