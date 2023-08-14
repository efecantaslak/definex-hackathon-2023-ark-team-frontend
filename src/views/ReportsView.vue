<template>
  <v-row>
    <!-- First Chart -->
    <v-col :cols="4">
      <v-card color="#2E7D32" class="ma-4" :elevation="3" :height="120" rounded>
        <v-chart :option="card1ChartOptions" />
      </v-card>
    </v-col>

    <!-- Second Chart -->
    <v-col :cols="4">
      <v-card color="#1565C0" class="ma-4" :elevation="3" :height="120" rounded>
        <v-chart :option="card2ChartOptions" />
      </v-card>
    </v-col>

    <!-- Third Chart -->
    <v-col :cols="4">
      <v-card color="#6A1B9A" class="ma-4" :elevation="3" :height="120" rounded>
        <v-chart :option="card1ChartOptions" />
      </v-card>
    </v-col>

    <!-- Pie Chart -->
    <v-col :cols="6">
      <v-card title="Şikayet Kategorilerine Göre Toplamlar" class="ma-4" :elevation="3" :height="500" rounded>
        <v-chart :option="pieChartOptions" />
      </v-card>
    </v-col>

  </v-row>
</template>

<script lang="ts">
import axios from 'axios';
import {use} from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

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
          data: [3367, 3565, 3323, 2987, 2856, 3060, 2845, 2542, 2156, 1925, 1802, 1456],
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
          data: [120, 200, 150, 80, 70, 110, 130],
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
            {value: 1242, name: 'Kredi Kartı'},
            {value: 876, name: 'Müşteri İlişkileri'},
            {value: 424, name: 'ATM'},
            {value: 311, name: 'Bireysel Krediler'},
            {value: 52, name: 'Banka/Şube'},
            {value: 24, name: 'Kurumsal Krediler'},
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
    }
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
        this.fetchComplaintsByBrand(),
        this.fetchComplaintsClassificationByBrand(),
        this.fetchComplaintsByDateAndClassification()
      ]);

      this.updateCard1Chart();
      this.updateCard2Chart();
      this.updatePieChart();
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
