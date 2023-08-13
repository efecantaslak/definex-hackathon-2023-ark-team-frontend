<template>
  <v-row justify="center">
    <v-col :cols="8">
      <v-card class="ma-4 pa-4" :elevation="3" rounded>
        <template v-slot:title>Şikayetler</template>
        <v-text-field
          v-model="complaintSearch"
          :loading="loading"
          density="compact"
          variant="solo"
          label="En az 3 karakter giriniz..."
          append-inner-icon="search"
          single-line
          hide-details
        ></v-text-field>
        <v-card-text>
          <div class="ma-4">
            <v-chip-group
              v-model="complaintFilter"
              selected-class="text-secondary"
              filter
              column
              multiple
            >
              <v-chip
                v-for="complaintType in complaintTypes"
                :key="complaintType"
                :value="complaintType"
                variant="outlined"
                size="large"
                class="ma-1"
                >{{ complaintType }}</v-chip
              >
            </v-chip-group>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <template v-for="complaint in complaints" :key="complaint.id">
      <v-col
        :cols="4"
        v-if="
          (complaintFilter.length === 0 && complaintSearch.length === 0) ||
          (complaintSearch.length >= 3 &&
            complaintFilter.length === 0 &&
            complaint.description.includes(complaintSearch)) ||
          (complaintFilter.length > 0 &&
            complaintSearch.length < 3 &&
            complaintFilter.includes(complaint.classification)) ||
          (complaintSearch.length >= 3 &&
            complaintFilter.length > 0 &&
            complaint.description.includes(complaintSearch) &&
            complaintFilter.includes(complaint.classification))
        "
      >
        <v-card
          class="ma-4"
          :title="complaint.title"
          :subtitle="complaint.classification"
          :elevation="3"
          :max-height="238"
          rounded
          @click="onCardClick(complaint)"
        >
          <v-card-text>
            <div
              style="
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                display: -webkit-box;
              "
            >
              {{ complaint.description }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </template>
  </v-row>
  <v-dialog
    v-model="complaintDialog"
    scrollable
    width="600"
  >
    <v-card>
      <v-card-title>
        {{ selectedComplaint.title }}
        <div class="text-subtitle-2" v-if="selectedComplaint.classification">
          {{ selectedComplaint.classification }}
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        {{ selectedComplaint.description }}
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="complaintDialog = false"
        >
          Kapat
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import complaints from '../resources/complaints.json';

export default {
  data: () => ({
    complaintDialog: false,
    selectedComplaint: null,
    complaintSearch: '',
    complaints: complaints,
    complaintTypes: [
      'Müşteri Hizmetleri',
      'Kredi Başvurusu',
      'Mobil Uygulama',
      'Ücretlendirme',
      'ATM',
      'Kredi Kartı',
      'İnternet Bankacılığı',
      'Bilgi ve İletişim',
      'Faiz İşlem',
      'Şube Hizmetleri',
      'Çağrı Merkezi',
      'Para Transferi',
      'POS',
    ],
    complaintFilter: [],
    loading: false,
  }),
  methods: {
    onCardClick(complaint) {
      this.selectedComplaint = complaint;
      this.complaintDialog = true;
    }
  }
};
</script>
