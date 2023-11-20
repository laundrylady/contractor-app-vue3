import { b as boot } from "./index.d121ec5d.js";
import { P as Plugin } from "./index.esm.113dea1e.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
