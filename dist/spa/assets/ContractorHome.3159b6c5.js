import { Q as QHeader } from "./QHeader.2cd57eaa.js";
import { Q as QPage } from "./QPage.ce1c6447.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.a5be01cf.js";
import { a as api } from "./axios.b1a36989.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { B as defineComponent, aa as useRoute, i as inject, r as ref, o as onMounted, G as onBeforeUnmount, w as watch, by as resolveComponent, m as openBlock, K as createBlock, L as withCtx, l as createVNode, t as normalizeClass, z as createCommentVNode } from "./index.181f8828.js";
import { _ as _sfc_main$1 } from "./ContractorNav.f9578f17.js";
import "./QResizeObserver.875c1ed1.js";
import "./QRouteTab.16fe9815.js";
import "./QTabs.dd459f5f.js";
import "./rtl.b51694b1.js";
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
      return openBlock(), createBlock(QLayout, {
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
              createVNode(_sfc_main$1)
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
                  model.value && model.value.id ? (openBlock(), createBlock(_component_router_view, {
                    key: 0,
                    model: model.value
                  }, null, 8, ["model"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
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
