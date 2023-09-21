import { b as boot } from "./index.b20dbd4f.js";
import { P as Plugin } from "./index.esm.54530cf8.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
