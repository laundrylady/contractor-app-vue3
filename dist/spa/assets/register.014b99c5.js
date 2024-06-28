import { b as boot } from "./index.bffa8c3c.js";
import { P as Plugin } from "./index.esm.651b7fdd.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
