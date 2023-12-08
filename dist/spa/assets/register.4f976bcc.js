import { b as boot } from "./index.d21e33cc.js";
import { P as Plugin } from "./index.esm.169a809c.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
