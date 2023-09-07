import { A as defineComponent, a9 as useRoute, r as ref, B as reactive, o as onMounted, l as openBlock, J as createBlock, K as withCtx, k as createVNode, p as createBaseVNode, Q as QCard, L as QCardSection, m as createElementBlock, y as createCommentVNode, M as QInput, R as unref, aa as QCardActions, P as QBtn } from "./index.0a73f961.js";
import { Q as QPage } from "./QPage.e0ac27ef.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.ce3c1efc.js";
import { u as useVuelidate, r as required } from "./index.esm.9f21d7f0.js";
import { a as api } from "./axios.753e2493.js";
import { _ as _sfc_main$1 } from "./AppLogo.a52ef008.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import "./QResizeObserver.9e3533fe.js";
const _hoisted_1 = { class: "col-xs-12 col-sm-10 col-md-5" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 q-mb-md" }, "Update your Bank Account Details", -1);
const _hoisted_3 = {
  key: 0,
  class: "text-positive"
};
const _hoisted_4 = {
  key: 1,
  class: "text-negative"
};
const _hoisted_5 = { key: 2 };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, "Before we are able to process your refund, we need to ensure your bank account details are up to date. ", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, "Please enter the bank account details for the refund:", -1);
const _hoisted_8 = { class: "row q-col-gutter-md" };
const _hoisted_9 = { class: "col-xs-12 col-sm-6" };
const _hoisted_10 = { class: "col-xs-12 col-sm-6" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", { class: "text-caption" }, "*Please ensure no spaces or dashes (-) are included in the BSB or Account Number ", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UpdateBa",
  setup(__props) {
    const $route = useRoute();
    const loading = ref(false);
    const result = ref({ success: false, error: false });
    const model = reactive({
      bsb: null,
      account_number: null
    });
    const rules = {
      bsb: { required },
      account_number: { required }
    };
    const $v = useVuelidate(rules, model, { $scope: false });
    const update = () => {
      loading.value = true;
      api.post(`/public/invoicepayment/updateba/${$route.params.id}`, model).then(() => {
        result.value.success = true;
        loading.value = false;
      }).catch((error) => {
        useMixinDebug(error);
        loading.value = false;
        result.value.error = true;
      });
    };
    onMounted(() => {
      api.get(`/public/invoicepayment/updateba/${$route.params.id}`).then().catch((error) => {
        useMixinDebug(error);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                class: "row justify-center items-center animated fadeIn",
                padding: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, { class: "q-pt-xs q-pb-xs" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
                          ]),
                          _: 1
                        }),
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            _hoisted_2,
                            result.value.success ? (openBlock(), createElementBlock("div", _hoisted_3, "We will process your refund within the next 5 business days.")) : createCommentVNode("", true),
                            result.value.error ? (openBlock(), createElementBlock("div", _hoisted_4, "There was an error updating your bank account details. Please try again. days.")) : createCommentVNode("", true),
                            !result.value.success ? (openBlock(), createElementBlock("div", _hoisted_5, [
                              _hoisted_6,
                              _hoisted_7,
                              createBaseVNode("div", _hoisted_8, [
                                createBaseVNode("div", _hoisted_9, [
                                  createVNode(QInput, {
                                    modelValue: model.bsb,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.bsb = $event),
                                    label: "BSB",
                                    error: unref($v).bsb.$invalid,
                                    type: "number"
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_10, [
                                  createVNode(QInput, {
                                    modelValue: model.account_number,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.account_number = $event),
                                    label: "Account Number",
                                    error: unref($v).account_number.$invalid,
                                    type: "number"
                                  }, null, 8, ["modelValue", "error"])
                                ])
                              ]),
                              _hoisted_11
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(QCardActions, null, {
                          default: withCtx(() => [
                            !result.value.success ? (openBlock(), createBlock(QBtn, {
                              key: 0,
                              onClick: _cache[2] || (_cache[2] = ($event) => update()),
                              label: "Update",
                              color: "primary",
                              disable: unref($v).$invalid || loading.value,
                              loading: loading.value,
                              rounded: ""
                            }, null, 8, ["disable", "loading"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
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
