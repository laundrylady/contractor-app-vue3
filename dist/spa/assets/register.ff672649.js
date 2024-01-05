import { b as boot } from "./index.b8400575.js";
import { P as Plugin } from "./index.esm.5d1d1ce7.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
