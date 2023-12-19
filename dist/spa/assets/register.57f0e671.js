import { b as boot } from "./index.b933ddc7.js";
import { P as Plugin } from "./index.esm.85c4103c.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
