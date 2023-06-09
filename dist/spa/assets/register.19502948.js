import { b as boot } from "./index.df648268.js";
import { P as Plugin } from "./index.esm.cb2184e1.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
