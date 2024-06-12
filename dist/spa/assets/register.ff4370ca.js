import { b as boot } from "./index.c351ea70.js";
import { P as Plugin } from "./index.esm.8d291366.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
