import { b as boot } from "./index.bc725a9e.js";
import { P as Plugin } from "./index.esm.47bd8af2.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
