import { b as boot } from "./index.3eea7960.js";
import { P as Plugin } from "./index.esm.b06efdf8.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
