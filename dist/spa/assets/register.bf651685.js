import { b as boot } from "./index.ff28a0be.js";
import { P as Plugin } from "./index.esm.8ac35bbe.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
