<template>
  <v-layout>
    <v-navigation-drawer
      expand-on-hover
      :rail="true"
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    >
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Jane Doe"
          subtitle="Analyst"
        ></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" :nav="true">
        <v-list-item prepend-icon="home" title="Anasayfa" value="home" to="home"></v-list-item>
        <v-list-item
          prepend-icon="query_stats"
          title="Raporlar"
          value="reports"
          to="reports"
        ></v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list-item
          class="mb-5"
          prepend-icon="logout"
          title="Çıkış Yap"
          value="logout"
          to="/auth/login"
        ></v-list-item>
      </template>
    </v-navigation-drawer>

    <v-app-bar>
      <img src="../assets/predictX-logo.png" alt="PredictX" class="predictX-logo ml-4" />
      <div style="width: 130px; height: 64px">
        <v-chart :option="predictXLogoAnimation" />
      </div>
    </v-app-bar>

    <v-main class="ma-2">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-layout>
</template>
<script lang="ts">
import { use } from 'echarts/core';
import VChart from 'vue-echarts';
import { GraphicComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

use([GraphicComponent, CanvasRenderer]);
export default {
  components: {
    VChart,
  },
  data: () => ({
    predictXLogoAnimation: {
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: 'PredictX',
              fontSize: 26,
              fontWeight: '400',
              lineDash: [0, 200],
              lineDashOffset: 0,
              fill: 'transparent',
              stroke: '#ffffff',
              lineWidth: 1,
            },
            keyframeAnimation: {
              duration: 60000,
              loop: true,
              keyframes: [
                {
                  percent: 0.04,
                  style: {
                    fill: 'transparent',
                    lineDashOffset: 200,
                    lineDash: [200, 0],
                  },
                },
                {
                  percent: 0.04,
                  style: {
                    fill: 'transparent',
                  },
                },
                {
                  percent: 0.05,
                  style: {
                    fill: '#ffffff',
                  },
                },
                {
                  percent: 99.87,
                  style: {
                    fill: '#ffffff',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  }),
};
</script>
