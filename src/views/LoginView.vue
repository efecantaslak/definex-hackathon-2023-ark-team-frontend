<template>
  <div>
    <div class="mx-auto text-center text-h4 my-8">
      <span>Login</span>
    </div>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-form @submit.prevent>
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
        <v-text-field
          density="compact"
          placeholder="Enter your e-mail address"
          prepend-inner-icon="email"
          variant="outlined"
          tabindex="1"
          autofocus
          :rules="[rules.email]"
        ></v-text-field>
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password

          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?
          </a>
        </div>
        <v-text-field
          :append-inner-icon="visible ? 'visibility_off' : 'visibility'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="key"
          variant="outlined"
          tabindex="2"
          :rules="[rules.required]"
          @click:append-inner="visible = !visible"
        ></v-text-field>
        <v-card class="mb-12 mt-6" color="surface-variant" variant="tonal">
          <v-card-text class="text-medium-emphasis text-caption">
            Lorem ipsum dolor sit amet.
          </v-card-text>
        </v-card>
        <v-btn
          block
          type="submit"
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          tabindex="3"
        >
          Log In
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    visible: false,
    rules: {
      required: (value: string) => !!value || 'Field is required',
      email: (value: string) =>
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(
          value
        ) || 'Please enter a valid e-mail'
    }
  })
}
</script>
