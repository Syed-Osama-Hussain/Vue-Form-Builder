import { createStore } from "vuex";
import * as user from "@/store/modules/user.js";

export default createStore({
  modules: {
    user
  }
});
