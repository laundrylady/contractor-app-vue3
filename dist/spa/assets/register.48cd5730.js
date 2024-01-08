import { b as boot } from "./index.c08a4e10.js";
import { P as Plugin } from "./index.esm.bc7f2d59.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
