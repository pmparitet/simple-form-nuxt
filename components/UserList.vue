<template>
  <v-container>
    <h3>Список пользователей с сервера</h3>
    <v-row class="mt-2">
      <v-col>
        <template v-for="(user, index) in getAllUser">
          <p :key="user.id">{{ index + 1 }}. {{ user.name }}</p>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    getAllUser() {
      return this.$store.getters.getAllUser;
    },
  },
};
</script>

<style scoped></style>
