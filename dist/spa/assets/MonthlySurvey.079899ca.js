import { B as defineComponent, aj as useRoute, r as ref, C as reactive, m as openBlock, a9 as createBlock, K as withCtx, l as createVNode, q as createBaseVNode, Q as QCard, L as QCardSection, z as createCommentVNode, bv as QOptionGroup, bw as QSeparator, M as QInput, R as unref, P as QBtn } from "./index.ed589837.js";
import { Q as QPage } from "./QPage.31941715.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.255e88f8.js";
import { u as useVuelidate, r as required } from "./index.esm.03006c8e.js";
import { a as api } from "./axios.69534440.js";
import { _ as _sfc_main$1 } from "./AppLogo.cbf5c21f.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import "./QResizeObserver.a41e8fd1.js";
const _hoisted_1 = { class: "container q-pt-lg" };
const _hoisted_2 = { class: "row q-col-gutter-xl" };
const _hoisted_3 = { class: "col-xs-12 col-sm-6 offset-sm-3" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Thank you!", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "Your response has been submitted", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Monthly Contractor Pulse Survey", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, "This survey will be sent to you every month to help provide Head Office with key information to help us understand your ongoing experience as a Laundry Lady or Lad.", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, "We use this information to determine marketing and support distribution.", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "How satisfied are you with your experience as a Laundry Lady or Lad?", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold q-mb-sm" }, "Overall how would you rate your experience as a Laundry Lady or Lad in the following areas? ", -1);
const _hoisted_11 = { class: "row q-col-gutter-md items-center q-mb-sm" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "col-xs-12 col-sm-4" }, "Dependability of earnings", -1);
const _hoisted_13 = { class: "col-xs-12 col-sm-8" };
const _hoisted_14 = { class: "row q-col-gutter-md items-center q-mb-sm" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "col-xs-12 col-sm-4" }, "Quantity of new bookings", -1);
const _hoisted_16 = { class: "col-xs-12 col-sm-8" };
const _hoisted_17 = { class: "row q-col-gutter-md items-center q-mb-sm" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "col-xs-12 col-sm-4" }, "Location Service area", -1);
const _hoisted_19 = { class: "col-xs-12 col-sm-8" };
const _hoisted_20 = { class: "row q-col-gutter-md items-center q-mb-sm" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "col-xs-12 col-sm-4" }, "Quality of Head Office support", -1);
const _hoisted_22 = { class: "col-xs-12 col-sm-8" };
const _hoisted_23 = { class: "row q-col-gutter-md items-center q-mb-sm" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "col-xs-12 col-sm-4" }, "Responsiveness to requests for support", -1);
const _hoisted_25 = { class: "col-xs-12 col-sm-8" };
const _hoisted_26 = { class: "row q-col-gutter-md items-center" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "col-xs-12 col-sm-4" }, "App performance and features", -1);
const _hoisted_28 = { class: "col-xs-12 col-sm-8" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "How satisfied are you with your current work-life balance?", -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "How well are you coping with your current workload?", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "How satisfied are you with the training and knowledge you have to complete bookings assigned to you?", -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "How much do you feel that the company values you?", -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "How satisfied are you with your current earnings?", -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "What is the weekly $ target you would like to be earning throughout the next month? ", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Outside of your regular schedule, are you planning to take any time off / block off your roster in the next month? (indicate expected number of days) ", -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "What can be done to improve your experience as a Laundry Lady or Lad? Please write your comments below. ", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MonthlySurvey",
  setup(__props) {
    const route = useRoute();
    const loading = ref(false);
    const success = ref(false);
    const model = reactive({
      satisfaction: null,
      earnings_dependability: null,
      bookings_quality: null,
      location_service_area: null,
      head_office_support_quality: null,
      support_request_responsiveness: null,
      app_performance_features: null,
      work_life_balance: null,
      current_work_load: null,
      training_knowledge: null,
      company_value: null,
      earnings_satisfaction: null,
      weekly_target: null,
      time_off: null,
      improve_experience: null
    });
    const rules = {
      satisfaction: { required },
      earnings_dependability: { required },
      bookings_quality: { required },
      location_service_area: { required },
      head_office_support_quality: { required },
      support_request_responsiveness: { required },
      app_performance_features: { required },
      work_life_balance: { required },
      current_work_load: { required },
      training_knowledge: { required },
      company_value: { required },
      earnings_satisfaction: { required },
      weekly_target: { required },
      time_off: { required },
      improve_experience: { required }
    };
    const $v = useVuelidate(rules, model);
    const submit = () => {
      loading.value = true;
      success.value = false;
      api.post(`/public/usermonthlysurvey/${route.params.id}`, model).then(() => {
        success.value = true;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, { padding: "" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("div", _hoisted_2, [
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(QCard, null, {
                          default: withCtx(() => [
                            createVNode(QCardSection, { class: "q-pt-xs q-pb-xs" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$1)
                              ]),
                              _: 1
                            }),
                            success.value ? (openBlock(), createBlock(QCardSection, {
                              key: 0,
                              class: "text-left"
                            }, {
                              default: withCtx(() => [
                                _hoisted_4,
                                _hoisted_5
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !success.value ? (openBlock(), createBlock(QCardSection, {
                              key: 1,
                              class: "text-left"
                            }, {
                              default: withCtx(() => [
                                _hoisted_6,
                                _hoisted_7,
                                _hoisted_8,
                                _hoisted_9,
                                createVNode(QOptionGroup, {
                                  modelValue: model.satisfaction,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.satisfaction = $event),
                                  options: [{ label: "Very dissatisfied", value: "Very dissatisfied" }, { label: "Dissatisfied", value: "Dissatisfied" }, { label: "Neutral", value: "Neutral" }, { label: "Satisfied", value: "Satisifed" }, { label: "Very satisfied", value: "Very satisfied" }],
                                  color: "primary",
                                  inline: ""
                                }, null, 8, ["modelValue"]),
                                createVNode(QSeparator, { class: "q-mt-md q-mb-md" }),
                                _hoisted_10,
                                createBaseVNode("div", _hoisted_11, [
                                  _hoisted_12,
                                  createBaseVNode("div", _hoisted_13, [
                                    createVNode(QOptionGroup, {
                                      modelValue: model.earnings_dependability,
                                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.earnings_dependability = $event),
                                      options: [{ label: "Poor", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }, { label: "4", value: 4 }, { label: "Excellent", value: 5 }],
                                      color: "primary",
                                      inline: ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_14, [
                                  _hoisted_15,
                                  createBaseVNode("div", _hoisted_16, [
                                    createVNode(QOptionGroup, {
                                      modelValue: model.bookings_quality,
                                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.bookings_quality = $event),
                                      options: [{ label: "Poor", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }, { label: "4", value: 4 }, { label: "Excellent", value: 5 }],
                                      color: "primary",
                                      inline: ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_17, [
                                  _hoisted_18,
                                  createBaseVNode("div", _hoisted_19, [
                                    createVNode(QOptionGroup, {
                                      modelValue: model.location_service_area,
                                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.location_service_area = $event),
                                      options: [{ label: "Poor", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }, { label: "4", value: 4 }, { label: "Excellent", value: 5 }],
                                      color: "primary",
                                      inline: ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_20, [
                                  _hoisted_21,
                                  createBaseVNode("div", _hoisted_22, [
                                    createVNode(QOptionGroup, {
                                      modelValue: model.head_office_support_quality,
                                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => model.head_office_support_quality = $event),
                                      options: [{ label: "Poor", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }, { label: "4", value: 4 }, { label: "Excellent", value: 5 }],
                                      color: "primary",
                                      inline: ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_23, [
                                  _hoisted_24,
                                  createBaseVNode("div", _hoisted_25, [
                                    createVNode(QOptionGroup, {
                                      modelValue: model.support_request_responsiveness,
                                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.support_request_responsiveness = $event),
                                      options: [{ label: "Poor", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }, { label: "4", value: 4 }, { label: "Excellent", value: 5 }],
                                      color: "primary",
                                      inline: ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_26, [
                                  _hoisted_27,
                                  createBaseVNode("div", _hoisted_28, [
                                    createVNode(QOptionGroup, {
                                      modelValue: model.app_performance_features,
                                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.app_performance_features = $event),
                                      options: [{ label: "Poor", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }, { label: "4", value: 4 }, { label: "Excellent", value: 5 }],
                                      color: "primary",
                                      inline: ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createVNode(QSeparator, { class: "q-mt-md q-mb-md" }),
                                _hoisted_29,
                                createVNode(QOptionGroup, {
                                  modelValue: model.work_life_balance,
                                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.work_life_balance = $event),
                                  options: [{ label: "Very dissatisfied", value: "Very dissatisfied" }, { label: "Dissatisfied", value: "Dissatisfied" }, { label: "Neutral", value: "Neutral" }, { label: "Satisfied", value: "Satisifed" }, { label: "Very satisfied", value: "Very satisfied" }],
                                  color: "primary",
                                  inline: ""
                                }, null, 8, ["modelValue"]),
                                createVNode(QSeparator, { class: "q-mt-md q-mb-md" }),
                                _hoisted_30,
                                createVNode(QOptionGroup, {
                                  modelValue: model.current_work_load,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.current_work_load = $event),
                                  options: [{ label: "Not at all", value: "Not at all" }, { label: "Slightly", value: "Slightly" }, { label: "Moderately", value: "Moderately" }, { label: "Very much", value: "Very much" }, { label: "Extremely", value: "Extremely" }],
                                  color: "primary",
                                  inline: ""
                                }, null, 8, ["modelValue"]),
                                createVNode(QSeparator, { class: "q-mt-md q-mb-md" }),
                                _hoisted_31,
                                createVNode(QOptionGroup, {
                                  modelValue: model.training_knowledge,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.training_knowledge = $event),
                                  options: [{ label: "Not at all", value: "Not at all" }, { label: "A little bit", value: "A little bit" }, { label: "Somewhat", value: "Somewhat" }, { label: "A lot", value: "A lot" }, { label: "Very much", value: "Very much" }],
                                  color: "primary",
                                  inline: ""
                                }, null, 8, ["modelValue"]),
                                createVNode(QSeparator, { class: "q-mt-md q-mb-md" }),
                                _hoisted_32,
                                createVNode(QOptionGroup, {
                                  modelValue: model.company_value,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => model.company_value = $event),
                                  options: [{ label: "Not at all", value: "Not at all" }, { label: "Slightly", value: "Slightly" }, { label: "Moderately", value: "Moderately" }, { label: "Very much", value: "Very much" }, { label: "Extremely", value: "Extremely" }],
                                  color: "primary",
                                  inline: ""
                                }, null, 8, ["modelValue"]),
                                createVNode(QSeparator, { class: "q-mt-md q-mb-md" }),
                                _hoisted_33,
                                createVNode(QOptionGroup, {
                                  modelValue: model.earnings_satisfaction,
                                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => model.earnings_satisfaction = $event),
                                  options: [{ label: "Very dissatisfied", value: "Very dissatisfied" }, { label: "Dissatisfied", value: "Dissatisfied" }, { label: "Neutral", value: "Neutral" }, { label: "Satisfied", value: "Satisifed" }, { label: "Very satisfied", value: "Very satisfied" }],
                                  color: "primary",
                                  inline: ""
                                }, null, 8, ["modelValue"]),
                                createVNode(QSeparator, { class: "q-mt-md q-mb-md" }),
                                _hoisted_34,
                                createVNode(QInput, {
                                  modelValue: model.weekly_target,
                                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => model.weekly_target = $event),
                                  error: unref($v).weekly_target.$invalid,
                                  outlined: "",
                                  dense: "",
                                  type: "number"
                                }, null, 8, ["modelValue", "error"]),
                                createVNode(QSeparator, { class: "q-mt-md q-mb-md" }),
                                _hoisted_35,
                                createVNode(QInput, {
                                  modelValue: model.time_off,
                                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => model.time_off = $event),
                                  error: unref($v).time_off.$invalid,
                                  outlined: "",
                                  dense: "",
                                  type: "number"
                                }, null, 8, ["modelValue", "error"]),
                                createVNode(QSeparator, { class: "q-mt-md q-mb-md" }),
                                _hoisted_36,
                                createVNode(QInput, {
                                  modelValue: model.improve_experience,
                                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => model.improve_experience = $event),
                                  error: unref($v).improve_experience.$invalid,
                                  outlined: "",
                                  dense: "",
                                  type: "textarea"
                                }, null, 8, ["modelValue", "error"]),
                                createVNode(QBtn, {
                                  loading: loading.value,
                                  onClick: _cache[15] || (_cache[15] = ($event) => submit()),
                                  disabled: unref($v).$invalid,
                                  color: "primary",
                                  label: "Submit",
                                  class: "full-width q-mt-md",
                                  rounded: ""
                                }, null, 8, ["loading", "disabled"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ])
                    ])
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
