<template>
  <v-row>
    <v-col :cols="12">
      <!-- First Chart -->
      <v-card title="Aylık Şikayet Sayıları" color="#2E7D32" class="ma-4" rounded>
        <v-chart :option="stackedBarChart" style="height: 240px;"/>
      </v-card>
    </v-col>
    <!-- Pie Chart Column -->
    <v-col :cols="6">
      <v-card title="Markalara Göre Şikayet Sınıflandırmaları" class="ma-4" rounded>
        <v-chart :option="pieChartOptions" style="height: 575px;"/>
      </v-card>
    </v-col>

    <!-- Charts Column -->
    <v-col :cols="6">

      <!-- Second Chart -->
      <v-row>
        <v-col :cols="12">
          <v-card title="Markalara Göre Şikayetler" color="#1565C0" class="ma-4" rounded>
            <v-chart :option="card2ChartOptions" style="height: 234px;"/>
          </v-card>
        </v-col>

        <!-- Third Chart -->
        <v-col :cols="12">
          <v-card title="Şikayet Kategorilerine Göre Toplamlar" color="#6A1B9A" class="ma-4" rounded>
            <v-chart :option="card1ChartOptions" style="height: 234px;"/>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

  </v-row>
</template>


<script lang="ts">
import axios from 'axios';
import {use} from 'echarts/core';
import {BarChart, LineChart, PieChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';
import VChart from 'vue-echarts';
import {GridComponent, LegendComponent, TooltipComponent} from 'echarts/components';

use([
  PieChart,
  CanvasRenderer,
  LegendComponent,
  GridComponent,
  LineChart,
  TooltipComponent,
  BarChart,
]);

export default {
  components: {
    VChart,
  },
  data: () => ({
    allComplaints: [],
    complaintsByMonth: {
      months: [],
      data: {}
    },
    complaintsByBrand: [],
    complaintsClassificationByBrand: [],
    complaintsByDateAndClassification: [],
    card1ChartOptions: {
      tooltip: {
        appendToBody: true,
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      color: '#303F9F',
      textStyle: {
        color: '#ffffff',
      },
      grid: {
        left: 48,
        top: 24,
        right: 24,
        bottom: 24,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [],
          type: 'line',
          areaStyle: {},
        },
      ],
    },
    card2ChartOptions: {
      tooltip: {
        appendToBody: true,
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      color: '#303F9F',
      textStyle: {
        color: '#ffffff',
      },
      grid: {
        left: 48,
        top: 24,
        right: 24,
        bottom: 24,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
      ],
    },
    pieChartOptions: {
      backgroundColor: '#212121',
      legend: {
        top: 'top',
        textStyle: {
          color: '#ffffff',
        },
      },
      series: [
        {
          type: 'pie',
          radius: [50, 150],
          center: ['50%', '50%'],
          itemStyle: {
            borderRadius: 8,
          },
          data: [
            {value: 0, name: 'Kredi Kartı'},
            {value: 0, name: 'Müşteri İlişkileri'},
            {value: 0, name: 'ATM'},
            {value: 0, name: 'Bireysel Krediler'},
            {value: 0, name: 'Banka/Şube'},
            {value: 0, name: 'Kurumsal Krediler'},
          ],
        },
      ],
    },
    classificationByBrandOptions: {
      //... (your default bar chart configuration for brand classifications)
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: []
      },
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: []
    },
    stackedBarChart: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      textStyle: {
        color: '#ffffff',
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {

        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Direct',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: 'Mail Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Affiliate Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: 'Search Engine',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    },
  }),
  created() {
    axios.get('http://localhost/api/complaints/complaints-classification-brand/')
        .then(response => {
          this.complaintsClassificationByBrand = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching data:", error);
        });
  },
  mounted() {
    this.fetchAllData();
  },
  methods: {
    async fetchAllData() {
      await Promise.all([
        this.fetchAllComplaints(),
        this.fetchComplaintsByMonth(),
        this.fetchComplaintsByBrand(),
        this.fetchComplaintsClassificationByBrand(),
        this.fetchComplaintsByDateAndClassification()
      ]);

      this.updateCard1Chart();
      this.updateCard2Chart();
      this.updatePieChart();
      this.updateComplaintsByMonth();
    },
    async fetchComplaintsByMonth() {
      const response = await axios.get('http://localhost/api/complaints/complaints-by-month/');
      this.complaintsByMonth = response.data;
    },
    async fetchAllComplaints() {
      const response = await axios.get('http://localhost/api/complaints/all-complaints/');
      this.allComplaints = response.data;
    },
    async fetchComplaintsByBrand() {
      const response = await axios.get('http://localhost/api/complaints/complaints-brand/');
      this.complaintsByBrand = response.data;
    },
    async fetchComplaintsClassificationByBrand() {
      const response = await axios.get('http://localhost/api/complaints/complaints-classification-brand/');
      this.complaintsClassificationByBrand = response.data;
    },
    async fetchComplaintsByDateAndClassification() {
      const response = await axios.get('http://localhost/api/complaints/complaints-date-classification/');
      this.complaintsByDateAndClassification = response.data;
    },
    updateCard1Chart() {
      // Here you can use the fetched data to modify card1ChartOptions
      // Example:
      this.card1ChartOptions.series[0].data = this.complaintsByDateAndClassification.map(item => item.count);
      this.card1ChartOptions.xAxis.data = this.complaintsByDateAndClassification.map(item => item.date);
    },
    updateComplaintsByMonth() {
      const classifications = new Set();
      const seriesData = {};
      const months = this.complaintsByMonth.months;

      for (let month of months) {
        const dataForMonth = this.complaintsByMonth.data[month];
        for (let classification in dataForMonth) {
          classifications.add(classification);
          if (!seriesData[classification]) seriesData[classification] = [];
          seriesData[classification].push(dataForMonth[classification]);
        }
      }

      const series = [...classifications].map(classification => {
        return {
          name: classification,
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: seriesData[classification].map(value => value || 0)
        };
      });
      this.stackedBarChart.series = series;
      this.stackedBarChart.xAxis.data = this.complaintsByMonth.months;
    },
    updateCard2Chart() {
      // Modify card2ChartOptions with fetched data
      this.card2ChartOptions.series[0].data = this.complaintsByBrand.map(item => item.count);
      this.card2ChartOptions.xAxis.data = this.complaintsByBrand.map(item => item.brand || 'Unknown');
    },
    updatePieChart() {
      // Modify pieChartOptions with fetched data
      this.pieChartOptions.series[0].data = this.complaintsClassificationByBrand.map(item => ({
        value: item.count,
        name: `${item.brand} - ${item.classification}`
      }));
    },
  },
}
</script>
