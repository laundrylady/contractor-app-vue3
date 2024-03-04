import { b as boot } from "./index.c9cb2a43.js";
import { P as Plugin } from "./index.esm.8c6af29b.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
