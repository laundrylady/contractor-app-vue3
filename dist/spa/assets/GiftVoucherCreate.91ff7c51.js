import { A as defineComponent, r as ref, B as reactive, l as openBlock, J as createBlock, K as withCtx, k as createVNode, p as createBaseVNode, Q as QCard, L as QCardSection, R as unref, bs as QRadio, M as QInput, aa as QCardActions, P as QBtn, y as createCommentVNode } from "./index.e94f5960.js";
import { Q as QSelect } from "./QSelect.11126e51.js";
import { Q as QPage } from "./QPage.82bb27c1.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.c6f613ee.js";
import { u as useVuelidate, r as required, e as email } from "./index.esm.d23c42b2.js";
import { a as api } from "./axios.300ce40b.js";
import { _ as _sfc_main$1 } from "./AppLogo.2c22791d.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import "./QItemSection.d938c332.js";
import "./format.6405c3bf.js";
const _hoisted_1 = { class: "col-xs-12 col-sm-10 col-md-5" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 q-mb-md" }, "Purchase a gift voucher", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Can be redeemed online for any Laundry Lady services at any location.", -1);
const _hoisted_4 = { class: "q-mb-sm" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey" }, "If you want to print the voucher or email it to the recipient yourself", -1);
const _hoisted_6 = { class: "bg-grey-1 q-pa-md q-mt-md" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Gift voucher details", -1);
const _hoisted_8 = { class: "bg-grey-1 q-pa-md q-mt-md" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Purchaser details", -1);
const _hoisted_10 = { class: "row q-col-gutter-md" };
const _hoisted_11 = { class: "col-xs-12 col-sm-6" };
const _hoisted_12 = { class: "col-xs-12 col-sm-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GiftVoucherCreate",
  setup(__props) {
    const loading = ref(false);
    const model = reactive({
      first_name: null,
      last_name: null,
      email: null,
      email_recipient: null,
      name_recipient: null,
      message_recipient: null,
      from_recipient: null,
      value: null,
      send_to: null
    });
    const rules = {
      first_name: { required },
      last_name: { required },
      email: { required, email },
      email_recipient: { required, email },
      name_recipient: { required },
      from_recipient: { required },
      message_recipient: { required },
      value: { required },
      send_to: { required }
    };
    const voucherOptions = [
      { value: 55, label: "$55 gift voucher" },
      { value: 70, label: "$70 gift voucher" },
      { value: 100, label: "$100 gift voucher" },
      { value: 150, label: "$150 gift voucher" },
      { value: 200, label: "$200 gift voucher" },
      { value: 250, label: "$250 gift voucher" },
      { value: 300, label: "$300 gift voucher" },
      { value: 400, label: "$400 gift voucher" },
      { value: 500, label: "$500 gift voucher" },
      { value: 700, label: "$700 gift voucher" },
      { value: 1e3, label: "$1000 gift voucher" }
    ];
    const $v = useVuelidate(rules, model, { $scope: false });
    const purchase = () => {
      loading.value = true;
      api.post("/public/giftvoucher", model).then((response) => {
        document.location.href = `/api/public/invoicepayment/session/${response.data.invoice_id}`;
      }).catch((error) => {
        useMixinDebug(error);
        loading.value = false;
      });
    };
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
                            createVNode(QSelect, {
                              modelValue: model.value,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
                              "map-options": "",
                              "emit-value": "",
                              options: voucherOptions,
                              label: "Gift voucher options",
                              outlined: "",
                              error: unref($v).value.$invalid
                            }, null, 8, ["modelValue", "error"]),
                            _hoisted_3,
                            createBaseVNode("div", _hoisted_4, [
                              createVNode(QRadio, {
                                modelValue: model.send_to,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.send_to = $event),
                                val: "purchaser",
                                label: "Send the gift voucher to my email address"
                              }, null, 8, ["modelValue"]),
                              _hoisted_5
                            ]),
                            createVNode(QRadio, {
                              modelValue: model.send_to,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.send_to = $event),
                              val: "recipient",
                              label: "Send the gift voucher to recipient's email address"
                            }, null, 8, ["modelValue"]),
                            createBaseVNode("div", _hoisted_6, [
                              _hoisted_7,
                              createVNode(QInput, {
                                modelValue: model.name_recipient,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.name_recipient = $event),
                                label: "Recipient name",
                                error: unref($v).name_recipient.$invalid,
                                disable: !model.send_to
                              }, null, 8, ["modelValue", "error", "disable"]),
                              createVNode(QInput, {
                                modelValue: model.email_recipient,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => model.email_recipient = $event),
                                label: "Recipient email",
                                error: unref($v).email_recipient.$invalid,
                                disable: !model.send_to
                              }, null, 8, ["modelValue", "error", "disable"]),
                              createVNode(QInput, {
                                modelValue: model.message_recipient,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.message_recipient = $event),
                                label: "Personalised message",
                                type: "textarea",
                                rows: "3",
                                outlined: "",
                                error: unref($v).message_recipient.$invalid,
                                "bottom-slots": "",
                                placeholder: "Happy birthday, have a wonderful day!",
                                disable: !model.send_to
                              }, null, 8, ["modelValue", "error", "disable"]),
                              createVNode(QInput, {
                                modelValue: model.from_recipient,
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.from_recipient = $event),
                                label: "Who is this gift from?",
                                error: unref($v).from_recipient.$invalid,
                                disable: !model.send_to
                              }, null, 8, ["modelValue", "error", "disable"])
                            ]),
                            createBaseVNode("div", _hoisted_8, [
                              _hoisted_9,
                              createBaseVNode("div", _hoisted_10, [
                                createBaseVNode("div", _hoisted_11, [
                                  createVNode(QInput, {
                                    modelValue: model.first_name,
                                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.first_name = $event),
                                    label: "First name",
                                    error: unref($v).first_name.$invalid,
                                    disable: !model.send_to
                                  }, null, 8, ["modelValue", "error", "disable"])
                                ]),
                                createBaseVNode("div", _hoisted_12, [
                                  createVNode(QInput, {
                                    modelValue: model.last_name,
                                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.last_name = $event),
                                    label: "Last name",
                                    error: unref($v).last_name.$invalid,
                                    disable: !model.send_to
                                  }, null, 8, ["modelValue", "error", "disable"])
                                ])
                              ]),
                              createVNode(QInput, {
                                modelValue: model.email,
                                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.email = $event),
                                label: "Email address",
                                error: unref($v).email.$invalid,
                                disable: !model.send_to
                              }, null, 8, ["modelValue", "error", "disable"])
                            ])
                          ]),
                          _: 1
                        }),
                        model.value ? (openBlock(), createBlock(QCardActions, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              onClick: _cache[10] || (_cache[10] = ($event) => purchase()),
                              label: `Purchase ($${model.value})`,
                              color: "primary",
                              disable: unref($v).$invalid || loading.value,
                              loading: loading.value,
                              class: "full-width"
                            }, null, 8, ["label", "disable", "loading"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
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
