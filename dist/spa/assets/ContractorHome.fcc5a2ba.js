import { Q as QHeader } from "./QHeader.b67976f3.js";
import { Q as QPage } from "./QPage.32b66f9a.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.7bb79d4f.js";
import { a as api } from "./axios.a26d4bb7.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { A as defineComponent, r as ref, l as openBlock, m as createElementBlock, k as createVNode, K as withCtx, a9 as useRoute, i as inject, o as onMounted, E as onBeforeUnmount, w as watch, bw as resolveComponent, J as createBlock, y as createCommentVNode, s as normalizeClass } from "./index.8169762b.js";
import { Q as QRouteTab } from "./QRouteTab.7cb594a4.js";
import { Q as QTabs } from "./QTabs.9c4f62b8.js";
import "./QResizeObserver.2d74d71a.js";
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
