import { b as boot } from "./index.6bc9da2c.js";
import { P as Plugin } from "./index.esm.5cf44adb.js";
var register = boot(({ app }) => {
  app.use(Plugin);
});
export { register as default };
