import { b as boot } from "./index.6498e03d.js";
import { P as Plugin } from "./index.esm.8e1a172e.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
