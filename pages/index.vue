<template>
  <main>
    <h1>Simple form</h1>

    <form-add-user v-if="!getStatusForm" />
    <p class="mt-4" v-else>Форма уже отправлена. (перезагрузите страницу)</p>

    <user-list v-if="getAllUser.length > 0" />
  </main>
</template>

<script>
import FormAddUser from "~/components/FormAddUser.vue";
import UserList from "~/components/UserList.vue";

export default {
  components: { FormAddUser, UserList },

  computed: {
    getAllUser() {
      return this.$store.getters.getAllUser;
    },
    getStatusForm() {
      return this.$store.getters.getStatusForm;
    },
  },
};
</script>

<style scoped></style>
