import { b as boot } from "./index.ec82fb92.js";
import { P as Plugin } from "./index.esm.c197fa5a.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
