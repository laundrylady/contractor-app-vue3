import { b as boot } from "./index.e689b3a4.js";
import { P as Plugin } from "./index.esm.70a8a6a1.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
