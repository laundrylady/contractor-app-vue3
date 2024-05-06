import { b as boot } from "./index.bd785861.js";
import { P as Plugin } from "./index.esm.a332d5cc.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
