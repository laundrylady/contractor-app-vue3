import { b as boot } from "./index.b2f4aca3.js";
import { P as Plugin } from "./index.esm.b0e24dd7.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
