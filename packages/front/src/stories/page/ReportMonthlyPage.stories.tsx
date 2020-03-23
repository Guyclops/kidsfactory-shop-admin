import React, { useState } from "react";
import WrapStorybook from "../wrap-storybook";
import Layout from "../../components/layout";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Grid,
  TableBody,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import InfoCard from "../../components/card/InfoCard";
import DatePicker from "../../components/picker/DatePicker";
import moment from "moment-timezone";

export default {
  title: "Page|ReportMonthly",
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      minWidth: 400,
      margin: 0,
    },
  }),
);

export const ReportMonthly = () => {
  const styles = useStyles();
  const [date, setDate] = useState(moment());

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
  const firstTable = [
    { title: "신규 회원", value: 0 },
    { title: "회원 탈퇴", value: 0 },
    { title: "어른 입장", value: 0 },
    { title: "아이 입장", value: 0 },
  ];
  const secondTable = [
    { title: "정기권 발행", value: 0 },
    { title: "정기권 사용/만료", value: 0 },
    { title: "정기권 취소/탈퇴", value: 0 },
  ];
  const thirdTable = [
    { title: "스탬프 발행", value: 0 },
    { title: "스탬프 차감/탈퇴", value: 0 },
    { title: "쿠폰 발행/사용", value: 0 },
  ];

  return (
    <WrapStorybook>
      <Layout>
        <DatePicker value={date} onChange={setDate} format={"YYYY-MM"} views={["year", "month"]} />
        <InfoCard title="월별 데이터 통계">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <MonthlyDataTable data={firstTable} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <MonthlyDataTable data={secondTable} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <MonthlyDataTable data={thirdTable} />
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
            </Table>
          </TableContainer>
        </InfoCard>
      </Layout>
    </WrapStorybook>
  );
};
