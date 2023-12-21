import { b as boot } from "./index.8df0f4ad.js";
import { P as Plugin } from "./index.esm.4fefa0d7.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
