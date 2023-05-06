import { Q as QSelect } from "./QSelect.4af781f0.js";
import { A as defineComponent, i as inject, r as ref, B as reactive, o as onMounted, m as openBlock, K as createBlock, L as withCtx, l as createVNode, N as QInput, U as unref, n as createElementBlock, R as createTextVNode, q as createBaseVNode, F as Fragment, be as renderList, y as createCommentVNode, M as QCardSection, S as QBtn, ae as QCardActions, Q as QCard, aI as toDisplayString } from "./index.15e87dfc.js";
import { u as useVuelidate, r as required } from "./index.esm.32910043.js";
import { a as api } from "./axios.c48e86d7.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { b as doNotify } from "./help.16f9d5c4.js";
import { _ as _sfc_main$2 } from "./SmsLogComponent.25821656.js";
import "./QItemSection.a02f1455.js";
import "./rtl.4502dde4.js";
import "./format.5b671469.js";
import "./QTable.759037cf.js";
import "./QList.f8adc042.js";
import "./QMarkupTable.b26d5921.js";
import "./QLinearProgress.f94d5831.js";
import "./use-fullscreen.78aba050.js";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Send SMS", -1);
const _hoisted_2$1 = {
  key: 0,
  class: "q-pa-md"
};
const _hoisted_3 = {
  key: 1,
  class: "q-pa-md bg-positive text-white"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SendSmsTeam",
  props: {
    team: null
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const sent = ref([]);
    const loading = ref(false);
    const templates = ref();
    const schema = {
      content: null,
      template: null,
      number: null,
      team_id: props.team.id
    };
    const sms = reactive(JSON.parse(JSON.stringify(schema)));
    const rules = {
      content: { required },
      team_id: { required }
    };
    const $v = useVuelidate(rules, sms);
    const recipients = ref();
    const useTemplate = () => {
      sms.content = sms.template;
    };
    const save = () => {
      loading.value = true;
      api.post("/sms/sendteam", sms).then((response) => {
        doNotify("positive", `SMS sent to ${props.team.name}`);
        loading.value = false;
        sent.value = response.data;
        bus.emit("getSmsLog", {});
        Object.assign(sms, JSON.parse(JSON.stringify(schema)));
      }).catch((response) => {
        useMixinDebug(response);
        loading.value = false;
      });
    };
    onMounted(() => {
      Object.assign(sms, { content: null, template: null, number: null, team_id: props.team.id });
      const r = [];
      if (props.team && props.team.users) {
        props.team.users.forEach((obj) => {
          if (obj.user.mobile && obj.user.sms_notifications) {
            r.push(obj.user);
          }
        });
        recipients.value = r;
      }
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
                label: "Choose a Template",
                "map-options": "",
                "emit-value": "",
                class: "q-mb-md"
              }, null, 8, ["modelValue", "options"]),
              createVNode(QInput, {
                modelValue: sms.content,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sms.content = $event),
                type: "textarea",
                maxlength: "160",
                label: "Message to send",
                error: unref($v).content.$error,
                autogrow: ""
              }, null, 8, ["modelValue", "error"]),
              !sent.value || !sent.value.length ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                createTextVNode(" A message will be sent to the following members: "),
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(recipients.value, (u) => {
                    return openBlock(), createElementBlock("li", {
                      key: u.id
                    }, toDisplayString(u.fullname) + " (" + toDisplayString(u.mobile) + ") ", 1);
                  }), 128))
                ])
              ])) : createCommentVNode("", true),
              sent.value && sent.value.length ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createTextVNode(" A message was sent to the following members: "),
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(sent.value, (u) => {
                    return openBlock(), createElementBlock("li", {
                      key: u.id
                    }, toDisplayString(u.user.fullname) + " (" + toDisplayString(u.user.mobile) + ") ", 1);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(QCardActions, { align: "right" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                color: "primary",
                disabled: unref($v).$invalid,
                loading: loading.value,
                onClick: _cache[3] || (_cache[3] = ($event) => save()),
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
  __name: "TeamSms",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("p", null, "Send an SMS or view the history for this " + toDisplayString(_ctx.$t("team.name")) + ".", 1),
        createVNode(_sfc_main$1, {
          team: __props.model,
          class: "q-mb-lg"
        }, null, 8, ["team"]),
        createVNode(_sfc_main$2, {
          team_id: __props.model.id
        }, null, 8, ["team_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
