import { b as boot } from "./index.db72ca64.js";
import { P as Plugin } from "./index.esm.b2a502f9.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
