import { b as boot } from "./index.cfc8c6ea.js";
import { P as Plugin } from "./index.esm.6971141f.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
