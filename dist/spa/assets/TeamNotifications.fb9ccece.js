import { Q as QEditor, _ as _sfc_main$2 } from "./QEditor.35d245e5.js";
import { Q as QSelect } from "./QSelect.a53b0a68.js";
import { A as defineComponent, i as inject, r as ref, B as reactive, o as onMounted, m as openBlock, K as createBlock, L as withCtx, l as createVNode, N as QInput, U as unref, n as createElementBlock, R as createTextVNode, q as createBaseVNode, F as Fragment, bm as renderList, y as createCommentVNode, M as QCardSection, S as QBtn, ae as QCardActions, Q as QCard, aI as toDisplayString } from "./index.b320c8ca.js";
import { u as useVuelidate, r as required } from "./index.esm.51560a50.js";
import { u as useQuasar } from "./use-quasar.d5633278.js";
import { a as api } from "./axios.fb60ded3.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { b as doNotify } from "./help.1102714b.js";
import "./QToolbarTitle.4392daa0.js";
import "./QTable.d4f43e78.js";
import "./QList.b5b9109a.js";
import "./QMarkupTable.90f28d12.js";
import "./QLinearProgress.b986023f.js";
import "./use-fullscreen.414bafcc.js";
import "./ClosePopup.97d3c14c.js";
import "./QBadge.7a2f6d69.js";
import "./QBtnGroup.2ed8c5f4.js";
import "./format.8239da63.js";
import "./QItemSection.370f32fe.js";
import "./rtl.20f006a8.js";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Send Notification", -1);
const _hoisted_2$1 = {
  key: 0,
  class: "q-pa-md"
};
const _hoisted_3 = {
  key: 1,
  class: "bg-positive text-white q-pa-md q-mt-md"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SendNotificationTeam",
  props: {
    notifiable_id: null,
    team: null
  },
  setup(__props) {
    const props = __props;
    const $q = useQuasar();
    const bus = inject("bus");
    const sentTo = ref();
    const html = ref();
    const templates = ref();
    const schema = {
      notification_template_id: null,
      notifiable_id: props.notifiable_id,
      notifiable_type: "Team",
      html: "",
      subject: null
    };
    const model = reactive(schema);
    const recipients = ref();
    const rules = {
      notifiable_id: { required },
      notifiable_type: { required },
      subject: { required },
      html: { required }
    };
    const $v = useVuelidate(rules, model);
    const reset = () => {
      sentTo.value = null;
      Object.assign(model, JSON.parse(JSON.stringify(schema)));
    };
    const populateHtml = () => {
      if (!model.notification_template_id) {
        model.subject = null;
        model.html = "";
        return;
      }
      api.get(`/notificationtemplate/${model.notification_template_id}`).then((response) => {
        if (response.data.content) {
          model.html = response.data.content;
          model.subject = response.data.subject;
        } else {
          html.value = "";
        }
      });
    };
    const send = () => {
      $q.loading.show({ message: "Queuing emails for sending..." });
      api.post("/notification/sendteam", model).then((res) => {
        doNotify("positive", "Emails queued for sending");
        $q.loading.hide();
        sentTo.value = res.data;
        bus.emit("getNotifications");
        model.subject = null;
        model.html = "";
      }).catch((error) => {
        useMixinDebug(error);
        $q.loading.hide();
      });
    };
    onMounted(() => {
      const r = [];
      if (props.team.users) {
        props.team.users.forEach((obj) => {
          if (obj.user.email_notifications) {
            r.push(obj.user);
          }
        });
        recipients.value = r;
      }
      api.get("/notificationtemplate/index").then((response) => {
        templates.value = [{ value: null, label: "Select a template" }].concat(response.data.map((o) => {
          return { value: o.id, label: o.name };
        }));
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
                modelValue: model.notification_template_id,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => model.notification_template_id = $event),
                  _cache[1] || (_cache[1] = ($event) => populateHtml())
                ],
                options: templates.value,
                "emit-value": "",
                "map-options": "",
                label: "Template",
                outlined: "",
                class: "q-mb-md"
              }, null, 8, ["modelValue", "options"]),
              createVNode(QInput, {
                modelValue: model.subject,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.subject = $event),
                label: "Subject",
                error: unref($v).subject.$invalid,
                onBlur: _cache[3] || (_cache[3] = ($event) => unref($v).subject.$touch())
              }, null, 8, ["modelValue", "error"]),
              createVNode(QEditor, {
                modelValue: model.html,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => model.html = $event),
                label: "Content",
                error: unref($v).html.$invalid
              }, null, 8, ["modelValue", "error"]),
              !sentTo.value || !sentTo.value.length ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                createTextVNode(" An email will be sent to the following members: "),
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(recipients.value, (u) => {
                    return openBlock(), createElementBlock("li", {
                      key: u.id
                    }, toDisplayString(u.fullname) + " (" + toDisplayString(u.email) + ") ", 1);
                  }), 128))
                ])
              ])) : createCommentVNode("", true),
              sentTo.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createTextVNode(" Email sent to: "),
                (openBlock(true), createElementBlock(Fragment, null, renderList(sentTo.value, (s) => {
                  return openBlock(), createElementBlock("div", {
                    key: s.id
                  }, [
                    createBaseVNode("strong", null, toDisplayString(s.user.fullname) + " (" + toDisplayString(s.user.email) + ")", 1)
                  ]);
                }), 128))
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(QCardActions, { align: "right" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                onClick: _cache[5] || (_cache[5] = ($event) => reset()),
                color: "secondary",
                label: "Reset"
              }),
              createVNode(QBtn, {
                onClick: _cache[6] || (_cache[6] = ($event) => send()),
                disable: unref($v).$invalid,
                label: "Send",
                color: "primary"
              }, null, 8, ["disable"])
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
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Email Activities", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamNotifications",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("p", null, "Send an Email or view the history for this " + toDisplayString(_ctx.$t("team.name")) + ".", 1),
        createVNode(_sfc_main$1, {
          team: __props.model,
          notifiable_id: __props.model.id,
          class: "q-mb-lg"
        }, null, 8, ["team", "notifiable_id"]),
        createVNode(_sfc_main$2, {
          notifiable_id: __props.model.id,
          notifiable_type: "Team"
        }, null, 8, ["notifiable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
