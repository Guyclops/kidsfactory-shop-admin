import React from "react";
import Layout from "../../components/layout";
import InfoCard from "../../components/card/InfoCard";
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import MiniCard from "../../components/card/MiniCard";
import WrapStorybook from "../wrap-storybook";
import { Person, ConfirmationNumber } from "@material-ui/icons";
import { Bar } from "react-chartjs-2";

export default {
  title: "Page|ReportTotal",
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

export const TotalPage = () => {
  const data = {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: [
      {
        label: "올해 신규 회원 추이",
        data: [65, 59, 80, 81, 56, 55, 40],
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
  const data2 = {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
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
  return (
    <WrapStorybook>
      <Layout>
        <InfoCard title="회원 종합">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <MiniCard title="전체 회원" content="0명" color={"rgb(153, 102, 255)"}>
                <Person />
              </MiniCard>
            </Grid>
            <Grid item xs={12} sm={3}>
              <MiniCard title="정기권 구매 회원" content="0명" color={"rgb(75, 192, 192)"}>
                <Person />
              </MiniCard>
            </Grid>
            <Grid item xs={12} sm={3}>
              <MiniCard title="탈퇴 회원" content="0명" color={"rgb(255, 99, 132)"}>
                <Person />
              </MiniCard>
            </Grid>
            <Grid item xs={12} sm={3}>
              <MiniCard title="올해 신규 회원" content="0명" color={"rgb(255, 206, 86)"}>
                <Person />
              </MiniCard>
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12}>
            <Bar data={data} width={100} height={50} />
          </Grid>
        </InfoCard>
        <InfoCard title="월별 입장 어른/아이수">
          <Bar data={data2} width={100} height={50} />
        </InfoCard>
        <InfoCard title="정기권">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <MiniCard title="전체 정기권 발행" content="0개" color={"rgb(153, 102, 255)"}>
                <ConfirmationNumber />
              </MiniCard>
            </Grid>
            <Grid item xs={12} sm={3}>
              <MiniCard title="정기권 사용/만료" content="0개" color={"rgb(75, 192, 192)"}>
                <ConfirmationNumber />
              </MiniCard>
            </Grid>
            <Grid item xs={12} sm={3}>
              <MiniCard title="정기권 취소/탈퇴" content="0명" color={"rgb(255, 99, 132)"}>
                <ConfirmationNumber />
              </MiniCard>
            </Grid>
            <Grid item xs={12} sm={3}>
              <MiniCard title="잔여 정기권" content="0명" color={"rgb(255, 206, 86)"}>
                <ConfirmationNumber />
              </MiniCard>
            </Grid>
          </Grid>
        </InfoCard>
        <InfoCard title="누적 방문 고객 순위">
          <Grid container>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">순위</TableCell>
                    <TableCell align="center">아이 이름</TableCell>
                    <TableCell align="center">전화번호</TableCell>
                    <TableCell align="center">입장횟수</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow></TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </InfoCard>
      </Layout>
    </WrapStorybook>
  );
};
