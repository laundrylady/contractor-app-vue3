import { b as boot } from "./index.2ce3582b.js";
import { P as Plugin } from "./index.esm.50e7ba97.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
