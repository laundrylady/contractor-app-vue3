import { b as boot } from "./index.d881d216.js";
import { P as Plugin } from "./index.esm.ccffb304.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
