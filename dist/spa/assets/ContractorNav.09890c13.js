import { Q as QRouteTab } from "./QRouteTab.bd750ae6.js";
import { Q as QTabs } from "./QTabs.e9f7ff7b.js";
import { B as defineComponent, r as ref, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx } from "./index.1eb7e0d4.js";
const _hoisted_1 = { class: "layout-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorNav",
  setup(__props) {
    const currentTab = ref("details");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(QTabs, {
          modelValue: currentTab.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentTab.value = $event),
          align: !_ctx.$q.screen.xs ? "left" : "center"
        }, {
          default: withCtx(() => [
            createVNode(QRouteTab, {
              to: { name: "appDashboard" },
              icon: "home",
              title: "Home",
              exact: ""
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-dashboard" },
              icon: "bar_chart",
              title: "Profile"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-schedule" },
              icon: "schedule",
              title: "Roster"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-commission-paid" },
              icon: "attach_money",
              title: "Commissions"
            }),
            createVNode(QRouteTab, {
              to: { name: "contractor-edit" },
              icon: "settings",
              title: "Details"
            })
          ]),
          _: 1
        }, 8, ["modelValue", "align"])
      ]);
    };
  }
});
export { _sfc_main as _ };
