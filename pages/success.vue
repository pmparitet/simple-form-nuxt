<template>
  <div>
    <h2>
      Пользователь {{ getUser.name }} с id {{ getUser.id }} добавлен в список!
    </h2>

    <user-list />
  </div>
</template>

<script>
import UserList from "~/components/UserList.vue";

export default {
  components: { UserList },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style scoped></style>
