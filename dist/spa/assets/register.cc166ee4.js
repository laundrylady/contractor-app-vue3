import { b as boot } from "./index.b04b1049.js";
import { P as Plugin } from "./index.esm.053cbfc5.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
