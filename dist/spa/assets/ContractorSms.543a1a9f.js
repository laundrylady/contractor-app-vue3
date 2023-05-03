import { Q as QSelect } from "./QSelect.062469f2.js";
import { A as defineComponent, i as inject, r as ref, B as reactive, o as onMounted, m as openBlock, K as createBlock, L as withCtx, l as createVNode, N as QInput, U as unref, q as createBaseVNode, aI as toDisplayString, M as QCardSection, S as QBtn, ae as QCardActions, Q as QCard, n as createElementBlock, y as createCommentVNode } from "./index.f596c8b4.js";
import { u as useVuelidate, r as required } from "./index.esm.62e65c44.js";
import { a as api } from "./axios.165a10e8.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { b as doNotify } from "./help.f405f514.js";
import { _ as _sfc_main$2 } from "./SmsLogComponent.b7c7f191.js";
import "./QItemSection.428ce3b8.js";
import "./rtl.a33aca76.js";
import "./format.ce8c2b83.js";
import "./QTable.d7bb4f34.js";
import "./QList.0be7fff6.js";
import "./QMarkupTable.d01b3e45.js";
import "./QLinearProgress.bbb2424d.js";
import "./use-fullscreen.ea6ac12a.js";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Send SMS", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SendSmsUser",
  props: {
    smsUser: null
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const sent = ref([]);
    const loading = ref(false);
    const show = ref(false);
    const templates = ref();
    const sms = reactive({
      content: null,
      template: null,
      user_id: null
    });
    const rules = {
      content: { required }
    };
    const $v = useVuelidate(rules, sms);
    const useTemplate = () => {
      sms.content = sms.template;
    };
    const save = () => {
      loading.value = true;
      api.post("/sms/senduser", sms).then((response) => {
        doNotify("positive", `SMS sent to ${props.smsUser.mobile}`);
        loading.value = false;
        show.value = false;
        sent.value = response.data;
        bus.emit("getSmsLog", {});
      }).catch((response) => {
        useMixinDebug(response);
        loading.value = false;
      });
    };
    onMounted(() => {
      Object.assign(sms, { content: null, template: null, user_id: props.smsUser.id });
      api.get("/smstemplate/index").then((response) => {
        templates.value = response.data.map((o) => {
          return { value: o.content, label: o.name };
        });
      }).catch((error) => {
        useMixinDebug(error);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, null, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              _hoisted_1$1,
              createVNode(QSelect, {
                modelValue: sms.template,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => sms.template = $event),
                  _cache[1] || (_cache[1] = ($event) => useTemplate())
                ],
                options: templates.value,
                label: "Template",
                "map-options": "",
                "emit-value": "",
                class: "q-mb-md",
                outlined: ""
              }, null, 8, ["modelValue", "options"]),
              createVNode(QInput, {
                modelValue: sms.content,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sms.content = $event),
                type: "textarea",
                maxlength: "160",
                label: "Message to send",
                error: unref($v).content.$error,
                autogrow: "",
                counter: "",
                "max-length": "160"
              }, null, 8, ["modelValue", "error"]),
              createBaseVNode("div", null, "The above message will be sent to " + toDisplayString(__props.smsUser.fullname) + " (" + toDisplayString(__props.smsUser.mobile) + ") ", 1)
            ]),
            _: 1
          }),
          createVNode(QCardActions, { align: "right" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                color: "secondary",
                onClick: _cache[3] || (_cache[3] = ($event) => [sms.content = null]),
                label: "Reset",
                flat: ""
              }),
              createVNode(QBtn, {
                color: "primary",
                disabled: unref($v).$invalid,
                loading: loading.value,
                onClick: _cache[4] || (_cache[4] = ($event) => save()),
                label: "Send"
              }, null, 8, ["disabled", "loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "SMS Activities", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorSms",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("p", null, "Send an SMS or view the history for this " + toDisplayString(_ctx.$t("contractor.name")) + ".", 1),
        createVNode(_sfc_main$1, {
          "sms-user": __props.model,
          class: "q-mb-lg"
        }, null, 8, ["sms-user"]),
        createVNode(_sfc_main$2, {
          user_id: __props.model.id
        }, null, 8, ["user_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
