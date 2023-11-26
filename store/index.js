export const state = () => ({
  sendForm: false,
  newUser: {},
  allUser: [],
});

export const mutations = {
  // запись нового пользователя для вывода на странице
  addNewUser(state, payload) {
    state.newUser = payload;
  },
  // флаг отправки формы
  setSendForm(state, payload) {
    state.sendForm = payload;
  },
  // запись массива юзеров с сервера
  setAllUser(state, payload) {
    state.allUser = payload;
  },
  // доб. пользователя к полученным с сервера
  addUser(state, payload) {
    state.allUser.unshift(payload);
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    await this.$axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        commit("setAllUser", res.data);
      });
  },
  // отправка формы
  sendForm({ commit }, payload) {
    commit("setSendForm", true);
    commit("addNewUser", payload);
    commit("addUser", payload);
  },
};

export const getters = {
  // статус формы
  getStatusForm: (state) => {
    return state.sendForm;
  },
  // все юзеры
  getAllUser: (state) => {
    return state.allUser;
  },
  // новый юзер
  getUser: (state) => {
    return state.newUser;
  },
};
