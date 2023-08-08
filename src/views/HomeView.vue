<template>
  <v-container>
    <v-row>
      <v-col :cols="4">
        <v-card color="#2E7D32" class="ma-4" :elevation="3" :height="120" rounded>
          <v-chart :option="card1ChartOptions" />
        </v-card>
      </v-col>
      <v-col :cols="4">
        <v-card color="#1565C0" class="ma-4" :elevation="3" :height="120" rounded>
          <v-chart :option="card2ChartOptions" />
        </v-card>
      </v-col>
      <v-col :cols="4">
        <v-card color="#6A1B9A" class="ma-4" :elevation="3" :height="120" rounded>
          <v-chart :option="card1ChartOptions" />
        </v-card>
      </v-col>
      <v-col :cols="6">
        <v-card title="Lorem Ipsum" class="ma-4" :elevation="3" :height="500" rounded>
          <v-chart :option="pieChartOptions" />
        </v-card>
      </v-col>
      <v-col :cols="6"></v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { use } from 'echarts/core';
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
            { value: 1242, name: 'Kredi Kartı' },
            { value: 876, name: 'Müşteri İlişkileri' },
            { value: 424, name: 'ATM' },
            { value: 311, name: 'Bireysel Krediler' },
            { value: 52, name: 'Banka/Şube' },
            { value: 24, name: 'Kurumsal Krediler' },
          ],
        },
      ],
    },
  }),
};
</script>
