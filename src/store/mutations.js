export default {
  getUser(state, payload) {
    state.userData.push(payload);
  },
};
