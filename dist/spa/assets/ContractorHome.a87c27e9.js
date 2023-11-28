import { Q as QHeader } from "./QHeader.970bdf6a.js";
import { Q as QPage } from "./QPage.9030e3aa.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.105bf8c5.js";
import { a as api } from "./axios.cd986332.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { B as defineComponent, r as ref, m as openBlock, n as createElementBlock, l as createVNode, L as withCtx, aa as useRoute, i as inject, o as onMounted, G as onBeforeUnmount, w as watch, by as resolveComponent, K as createBlock, z as createCommentVNode, t as normalizeClass } from "./index.2c4e0f9e.js";
import { Q as QRouteTab } from "./QRouteTab.32d92cf9.js";
import { Q as QTabs } from "./QTabs.9cf46273.js";
import "./QResizeObserver.327cfc1c.js";
import "./rtl.b51694b1.js";
const _hoisted_1 = { class: "layout-container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContractorNav",
  props: {
    model: null
  },
  setup(__props) {
    const currentTab = ref("details");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(QTabs, {
          modelValue: currentTab.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentTab.value = $event),
          dense: "",
          align: !_ctx.$q.screen.xs ? "left" : "center"
        }, {
          default: withCtx(() => [
            createVNode(QRouteTab, {
              to: { name: "contractor-dashboard" },
              label: "Home",
              icon: "home"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-edit" },
              label: "Details",
              icon: "info"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-schedule" },
              label: "Roster",
              icon: "calendar_month"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-commission-paid" },
              label: "Commissions",
              icon: "attach_money"
            })
          ]),
          _: 1
        }, 8, ["modelValue", "align"])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorHome",
  setup(__props) {
    const route = useRoute();
    const bus = inject("bus");
    const model = ref();
    const getContractor = async () => {
      api.get("/public/user/contractor/profile").then((response) => {
        model.value = response.data;
        document.title = model.value.fullname;
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    onMounted(async () => {
      await getContractor();
      bus.on("getContractor", () => {
        getContractor();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getContractor");
    });
    watch(() => route.params.id, (newVal) => {
      if (route.name === "contractor-dashboard") {
        if (newVal) {
          getContractor();
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return model.value && model.value.id ? (openBlock(), createBlock(QLayout, {
        key: 0,
        view: "lHh Lpr lFf",
        container: "",
        class: "layout-height"
      }, {
        default: withCtx(() => [
          createVNode(QHeader, {
            class: normalizeClass({ "page-title text-black": !_ctx.$q.dark.isActive, "bg-dark": _ctx.$q.dark.isActive }),
            bordered: ""
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, { model: model.value }, null, 8, ["model"])
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                padding: "",
                class: "q-pt-md layout-container q-pa-md"
              }, {
                default: withCtx(() => [
                  createVNode(_component_router_view, { model: model.value }, null, 8, ["model"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
