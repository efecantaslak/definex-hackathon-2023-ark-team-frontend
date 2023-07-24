<template>
  <v-layout>
    <v-navigation-drawer
        expand-on-hover
        rail
    >
      <v-list>
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Jane Doe"
            subtitle="jane_doe@outlook.com"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="home" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="query_stats" title="Reports" value="reports"></v-list-item>
        <v-list-item prepend-icon="insights" title="Insights" value="insights"></v-list-item>
        <v-list-item prepend-icon="assignment_turned_in" title="Actions" value="actions"></v-list-item>
        <v-list-item prepend-icon="star" title="Details" value="details"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar title="ARK App"></v-app-bar>

    <v-main class="d-flex ma-2" style="min-height: 300px;">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>