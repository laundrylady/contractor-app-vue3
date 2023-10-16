import { b as boot } from "./index.b7abd301.js";
import { P as Plugin } from "./index.esm.6c86aac1.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
