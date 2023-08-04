import { Q as QSelect } from "./QSelect.d9c1a7f5.js";
import { A as defineComponent, i as inject, r as ref, B as reactive, o as onMounted, l as openBlock, J as createBlock, K as withCtx, k as createVNode, M as QInput, R as unref, m as createElementBlock, aG as createTextVNode, p as createBaseVNode, F as Fragment, bd as renderList, y as createCommentVNode, L as QCardSection, P as QBtn, aa as QCardActions, Q as QCard, aH as toDisplayString } from "./index.ff28a0be.js";
import { u as useVuelidate, r as required } from "./index.esm.0d049a57.js";
import { a as api } from "./axios.31973f2c.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { b as doNotify } from "./help.805c841c.js";
import { _ as _sfc_main$2 } from "./SmsLogComponent.abdfecab.js";
import "./QItemSection.46a22740.js";
import "./format.0f02b137.js";
import "./QTable.72abe654.js";
import "./QList.fea27c01.js";
import "./QLinearProgress.c11c5cee.js";
import "./use-fullscreen.a67c953b.js";
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