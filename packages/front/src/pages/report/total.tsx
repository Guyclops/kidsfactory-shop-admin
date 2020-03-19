import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import InfoCard from "../../components/card/InfoCard";
import { Grid } from "@material-ui/core";
import MiniCard from "../../components/card/MiniCard";
import { Person } from "@material-ui/icons";
import { Bar } from "react-chartjs-2";

const ReportTotal = () => (
  <Layout>
    <SEO title="전체 통계" />
    <InfoCard title="회원 종합">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <MiniCard title="전체 회원" content="0명">
            <Person />
          </MiniCard>
        </Grid>
        <Grid item xs={12} sm={3}>
          <MiniCard title="정기권 구매 회원" content="0명">
            <Person />
          </MiniCard>
        </Grid>
        <Grid item xs={12} sm={3}>
          <MiniCard title="탈퇴 회원" content="0명">
            <Person />
          </MiniCard>
        </Grid>
        <Grid item xs={12} sm={3}>
          <MiniCard title="올해 신규 회원 추이" content="0명">
            <Person />
          </MiniCard>
        </Grid>
      </Grid>
      <Grid container>
        <Bar
          data={{
            lables: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "올해 신규 회원",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                backgroundColor: "rgba(255,99,132,0.2)",
                data: [65, 59, 80, 81, 56, 55, 40],
              },
            ],
          }}
          width={100}
          height={50}
        />
      </Grid>
    </InfoCard>
  </Layout>
);

export default ReportTotal;
