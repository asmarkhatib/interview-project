export default {
  userInfo(context, payload) {
    const data = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      sum: payload.sum,
    };
    context.commit("getUser", data);
  },
};
