import { b as boot } from "./index.8e5fd2f9.js";
import { P as Plugin } from "./index.esm.b6951c4b.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
