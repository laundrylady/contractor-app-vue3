import { b as boot } from "./index.2bb9246b.js";
import { P as Plugin } from "./index.esm.280be858.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
