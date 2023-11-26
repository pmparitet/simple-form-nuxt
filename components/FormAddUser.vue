<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row> </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="firstname" label="Имя"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="lastname" label="Фамилия"></v-text-field>
        </v-col>
      </v-row>
      <v-btn
        class="mt-4 mr-4"
        type="submit"
        color="success"
        :disabled="disabledSubmit"
      >
        Отправить
      </v-btn>
      <v-btn class="mt-4" type="reset" color="error" @click="reset">
        Очистить форму
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    firstname: "",
    lastname: "",
  }),
  computed: {
    disabledSubmit() {
      return this.firstname.length <= 0 && this.lastname.length <= 0;
    },
  },
  methods: {
    submit() {
      if (!this.disabledSubmit) {
        this.$store.dispatch("sendForm", {
          id: Math.random().toString(16).slice(2),
          name: `${this.firstname} ${this.lastname}`,
        });

        this.$router.push("/success");
      }
    },
    reset() {
      this.firstname = "";
      this.lastname = "";
    },
  },
};
</script>

<style scoped></style>
