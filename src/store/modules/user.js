import auth from "@/services/auth";

export const namespaced = true;

export const state = {
  fields: [
    {
      name: "email",
      label: "Email",
      required: true,
      placeholder: "Enter your email!",
      type: "text",
      value: ""
    },
    {
      name: "password",
      label: "Password",
      required: true,
      placeholder: "Enter your password!",
      type: "password",
      value: ""
    }
  ]
};

export const mutations = {
  SET_FIELD(state, { field, value }) {
    const index = state.fields.findIndex(val => val.name === field);
    state.fields[index].value = value;
  }
};

export const actions = {
  async loginUser({ state }) {
    const email = state.fields[0].value;
    const password = state.fields[1].value;
    await auth.login(email, password);
  },
  updateField({ commit }, fieldData) {
    commit("SET_FIELD", fieldData);
  }
};
