import { b as boot } from "./index.250db7cb.js";
import { P as Plugin } from "./index.esm.72ddbcc5.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
