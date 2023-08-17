import { b as boot } from "./index.b831cb22.js";
import { P as Plugin } from "./index.esm.37b77ede.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
