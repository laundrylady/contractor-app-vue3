import { b as boot } from "./index.d6d4bbef.js";
import { P as Plugin } from "./index.esm.2545bb9a.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
