import { A as defineComponent, I as useRouter, B as reactive, r as ref, u as useUserStore, l as openBlock, J as createBlock, K as withCtx, k as createVNode, s as normalizeClass, Q as QCard, L as QCardSection, M as QInput, N as QIcon, O as withKeys, p as createBaseVNode, P as QBtn, R as unref, a as authLogin } from "./index.c8d47ef5.js";
import { Q as QPage } from "./QPage.3dbd67b7.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.5887d668.js";
import { u as useVuelidate, r as required, e as email } from "./index.esm.5888d050.js";
import { a as api } from "./axios.415142fa.js";
import { _ as _sfc_main$1 } from "./AppLogo.b82b8ed0.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import "./QResizeObserver.1f95b9c9.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 text-bold" }, "Sign In", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "Welcome back!", -1);
const _hoisted_3 = { class: "text-right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SignIn",
  setup(__props) {
    const router = useRouter();
    const login = reactive({
      username: void 0,
      password: void 0
    });
    const rules = {
      username: { required, email },
      password: { required }
    };
    const $v = useVuelidate(rules, login);
    const loading = ref(false);
    const isPwd = ref(true);
    const error = ref(false);
    const userStore = useUserStore();
    const signIn = () => {
      loading.value = true;
      if (login.username && login.password) {
        api.post("/auth/signin", login).then(() => {
          api.get("/auth/check").then((res) => {
            userStore.setUserData(res.data);
            authLogin();
            router.push({ name: "appDashboard" });
          }).catch((es) => {
            useMixinDebug(es);
          });
        }).catch((response) => {
          useMixinDebug(response);
          loading.value = false;
          error.value = true;
        });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                class: normalizeClass(["row justify-center items-center animated fadeIn", { "q-pa-md": _ctx.$q.screen.xs }]),
                padding: ""
              }, {
                default: withCtx(() => [
                  createVNode(QCard, { class: "col-xs-12 col-sm-6 col-md-3" }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, {
                        class: "text-center",
                        style: { "min-height": "165px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1)
                        ]),
                        _: 1
                      }),
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          _hoisted_1,
                          _hoisted_2,
                          createVNode(QInput, {
                            modelValue: login.username,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => login.username = $event),
                            label: "Registered Email",
                            "bottom-slots": "",
                            autofocus: "",
                            outlined: ""
                          }, {
                            prepend: withCtx(() => [
                              createVNode(QIcon, { name: "account_circle" })
                            ]),
                            _: 1
                          }, 8, ["modelValue"]),
                          createVNode(QInput, {
                            modelValue: login.password,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => login.password = $event),
                            type: isPwd.value ? "password" : "text",
                            label: "Password",
                            onKeydown: _cache[3] || (_cache[3] = withKeys(($event) => signIn(), ["enter"])),
                            error: error.value,
                            "error-message": "Invalid credentials",
                            outlined: ""
                          }, {
                            prepend: withCtx(() => [
                              createVNode(QIcon, { name: "lock" })
                            ]),
                            append: withCtx(() => [
                              createVNode(QIcon, {
                                name: isPwd.value ? "visibility_off" : "visibility",
                                class: "cursor-pointer",
                                onClick: _cache[1] || (_cache[1] = ($event) => isPwd.value = !isPwd.value)
                              }, null, 8, ["name"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "type", "error"]),
                          createBaseVNode("div", _hoisted_3, [
                            createVNode(QBtn, {
                              to: { name: "passwordResetRequest" },
                              label: "Forgot your password?",
                              "no-caps": "",
                              color: "primary",
                              flat: "",
                              rounded: ""
                            })
                          ]),
                          createVNode(QBtn, {
                            loading: loading.value,
                            onClick: _cache[4] || (_cache[4] = ($event) => signIn()),
                            disable: unref($v).$invalid || loading.value,
                            color: "primary",
                            label: "Sign In",
                            class: "full-width q-mt-md",
                            rounded: ""
                          }, null, 8, ["loading", "disable"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };