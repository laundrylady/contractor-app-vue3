import { b as boot } from "./index.c225e500.js";
import { P as Plugin } from "./index.esm.721dc298.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
