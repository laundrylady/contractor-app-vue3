import { b as boot } from "./index.5c682f3f.js";
import { P as Plugin } from "./index.esm.5f8d5e28.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
