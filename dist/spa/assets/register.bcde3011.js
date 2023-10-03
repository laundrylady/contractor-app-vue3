import { b as boot } from "./index.8de41301.js";
import { P as Plugin } from "./index.esm.5d86ed6d.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
