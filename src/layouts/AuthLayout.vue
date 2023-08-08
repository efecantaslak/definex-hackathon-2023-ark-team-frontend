<template>
  <v-layout>
    <v-app-bar title="PredictX">
      <template v-slot:prepend>
        <v-icon icon="diamond"></v-icon>
      </template>
    </v-app-bar>
    <v-main class="ma-2">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>
<script setup lang="ts">
</script>