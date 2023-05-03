import { b as boot } from "./index.b320c8ca.js";
import { P as Plugin } from "./index.esm.195037d1.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
