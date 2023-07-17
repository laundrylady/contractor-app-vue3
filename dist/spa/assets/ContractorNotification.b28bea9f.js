import { Q as QEditor, _ as _sfc_main$2 } from "./QEditor.c224e0bf.js";
import { Q as QSelect } from "./QSelect.d9c1a7f5.js";
import { A as defineComponent, i as inject, r as ref, B as reactive, o as onMounted, l as openBlock, J as createBlock, K as withCtx, k as createVNode, p as createBaseVNode, aH as toDisplayString, M as QInput, R as unref, m as createElementBlock, aG as createTextVNode, y as createCommentVNode, L as QCardSection, P as QBtn, aa as QCardActions, Q as QCard } from "./index.ff28a0be.js";
import { u as useVuelidate, r as required } from "./index.esm.0d049a57.js";
import { u as useQuasar } from "./use-quasar.69508f93.js";
import { a as api } from "./axios.31973f2c.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { b as doNotify } from "./help.805c841c.js";
import "./QToolbarTitle.3b6300e1.js";
import "./QTable.72abe654.js";
import "./QList.fea27c01.js";
import "./QLinearProgress.c11c5cee.js";
import "./use-fullscreen.a67c953b.js";
import "./ClosePopup.bda7fd1c.js";
import "./QBadge.7fd0a1ea.js";
import "./QBtnGroup.aa699d3a.js";
import "./format.0f02b137.js";
import "./QItemSection.46a22740.js";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Send Notification", -1);
const _hoisted_2$1 = {
  key: 0,
  class: "bg-positive text-white q-pa-md q-mt-md"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SendNotificationUser",
  props: {
    cc: null,
    notificationUser: null
  },
  setup(__props) {
    const props = __props;
    const $q = useQuasar();
    const bus = inject("bus");
    const sentTo = ref();
    const html = ref();
    const templates = ref();
    const schema = {
      user_id: props.notificationUser.id,
      notification_template_id: null,
      notifiable_id: props.notificationUser.id,
      notifiable_type: "User",
      html: "",
      subject: null,
      cc: props.cc || []
    };
    const model = reactive(schema);
    const rules = {
      user_id: { required },
      notifiable_id: { required },
      notifiable_type: { required },
      subject: { required },
      html: { required }
    };
    const $v = useVuelidate(rules, model);
    const reset = () => {
      sentTo.value = null;
      Object.assign(model, schema);
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
      api.post("/notification/sendsingle", model).then((res) => {
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
              createBaseVNode("p", null, "Send a notification to " + toDisplayString(__props.notificationUser.email) + ".", 1),
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
              sentTo.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                createTextVNode(" Email sent to "),
                createBaseVNode("strong", null, toDisplayString(sentTo.value.email), 1)
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
                color: "primary",
                icon: "send"
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
  __name: "ContractorNotification",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("p", null, "Send an Email or view the history for this " + toDisplayString(_ctx.$t("contractor.name")) + ".", 1),
        createVNode(_sfc_main$1, {
          "notification-user": __props.model,
          class: "q-mb-lg"
        }, null, 8, ["notification-user"]),
        createVNode(_sfc_main$2, {
          notifiable_id: __props.model.id,
          notifiable_type: "User"
        }, null, 8, ["notifiable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
