import React, { useState } from "react";
import WrapStorybook from "../wrap-storybook";
import Layout from "../../components/layout";
import InfoCard from "../../components/card/InfoCard";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import { DatePicker } from "../components/Picker.stories";

export default {
  title: "Page|ReportDaily",
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

export const ReportDaily = () => {
  const styles = useStyles();
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "어른",
        data: [65, 59, 80, 81, 56, 55, 40, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "아이",
        data: [65, 59, 80, 81, 56, 55, 40, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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

  const [date, setDate] = useState(moment());
  const handleDate = (date: moment.Moment | null) => {
    setDate(date);
  };
  return (
    <WrapStorybook>
      <Layout>
        <DatePicker value={date} onChange={handleDate} />
        <InfoCard title="일별 데이터 통계">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <DailyDataTable title={"회원 통계"} data={firstTable} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DailyDataTable title={"정기권 통계"} data={secondTable} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DailyDataTable title={"스탬프 통계"} data={thirdTable} />
            </Grid>
          </Grid>
        </InfoCard>
        <InfoCard title="시간대별 입장수">
          <Bar data={data} width={100} height={50} />
        </InfoCard>
        <InfoCard title="입/퇴장 내역">
          <TableContainer>
            <Table className={styles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>순서</TableCell>
                  <TableCell>연락처</TableCell>
                  <TableCell>어른/아이</TableCell>
                  <TableCell>시간</TableCell>
                  <TableCell>상태</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </InfoCard>
      </Layout>
    </WrapStorybook>
  );
};
