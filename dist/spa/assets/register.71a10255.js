import { b as boot } from "./index.c8d47ef5.js";
import { P as Plugin } from "./index.esm.5d9d54b7.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
