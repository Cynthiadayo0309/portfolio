<style lang="scss" scoped></style>

<template>
  <div id="chart">
  <apexchart type="bar" height="515" :options="chartOptions" :series="series">
  </apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
    series: [
      {
        name: "Experience",
        data: [30, 30, 40, 10, 20, 20, 40, 10, 20, 10, 40, 30,],
      },
    ],
    chartOptions: {
      annotations: {
        points: [
          {
            x: "Bananas",
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0",
              },
              text: "Bananas are good",
            },
          },
        ],
      },
      chart: {
        height: 515,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: [
          "Vue.js",
          "Vuetify",
          "JavaScript",
          "PHP",
          "Ruby",
          "Rails",
          "GitHub",
          "Heroku",
          "FireBase",
          "Docker",
          "PhotoShop",
          "Illustrator",
        ],
        tickPlacement: "on",
      },
      yaxis: {
        title: {
          text: "Experience (%)",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100],
        },
      },
    },
  }),
}
</script>
