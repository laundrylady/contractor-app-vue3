import { S as createComponent, f as computed, h, V as hSlot, ab as useDarkProps, ac as useDark, w as watch, ad as isNumber, o as onMounted, E as onBeforeUnmount, ae as hDir, g as getCurrentInstance, P as QBtn, a5 as hMergeSlot, af as useFormProps, ag as getBtnDesignAttr, ah as useFormInject, A as defineComponent, r as ref, B as reactive, l as openBlock, J as createBlock, K as withCtx, k as createVNode, p as createBaseVNode, Q as QCard, L as QCardSection, y as createCommentVNode, M as QInput, R as unref, ai as QToggle } from "./index.909d8447.js";
import { Q as QSelect } from "./QSelect.4ea71d9c.js";
import { u as useRatioProps, a as useRatio } from "./use-ratio.2d647b5a.js";
import { u as usePanelChildProps, a as usePanelProps, b as usePanelEmits, c as usePanel } from "./use-panel.9cc8a99f.js";
import { u as useFullscreenProps, a as useFullscreenEmits, b as useFullscreen } from "./use-fullscreen.dc294ee1.js";
import { Q as QBtnGroup } from "./QBtnGroup.388235f5.js";
import { Q as QPage } from "./QPage.dcc47d1c.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.70f9b192.js";
import { u as useVuelidate, r as required, e as email } from "./index.esm.4243924e.js";
import { a as api } from "./axios.cc1e1de2.js";
import { _ as _sfc_main$1 } from "./AppLogo.668a5e39.js";
import { _ as _sfc_main$2 } from "./AddressSearch.8f2bc9d2.js";
import { _ as _sfc_main$3 } from "./PostcodeRegionField.bc8d41c3.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import "./selection.b37ccca0.js";
import "./QItemLabel.415ed021.js";
import "./QMenu.f5054dc0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./touch.3df10340.js";
import "./use-cache.b0833c75.js";
import "./QResizeObserver.54f765c0.js";
var QVideo = createComponent({
  name: "QVideo",
  props: {
    ...useRatioProps,
    src: {
      type: String,
      required: true
    },
    title: String,
    fetchpriority: {
      type: String,
      default: "auto"
    },
    loading: {
      type: String,
      default: "eager"
    },
    referrerpolicy: {
      type: String,
      default: "strict-origin-when-cross-origin"
    }
  },
  setup(props) {
    const ratioStyle = useRatio(props);
    const classes = computed(
      () => "q-video" + (props.ratio !== void 0 ? " q-video--responsive" : "")
    );
    return () => h("div", {
      class: classes.value,
      style: ratioStyle.value
    }, [
      h("iframe", {
        src: props.src,
        title: props.title,
        fetchpriority: props.fetchpriority,
        loading: props.loading,
        referrerpolicy: props.referrerpolicy,
        frameborder: "0",
        allowfullscreen: true
      })
    ]);
  }
});
var QCarouselSlide = createComponent({
  name: "QCarouselSlide",
  props: {
    ...usePanelChildProps,
    imgSrc: String
  },
  setup(props, { slots }) {
    const style = computed(() => props.imgSrc ? { backgroundImage: `url("${props.imgSrc}")` } : {});
    return () => h("div", {
      class: "q-carousel__slide",
      style: style.value
    }, hSlot(slots.default));
  }
});
const navigationPositionOptions = ["top", "right", "bottom", "left"];
const controlTypeOptions = ["regular", "flat", "outline", "push", "unelevated"];
var QCarousel = createComponent({
  name: "QCarousel",
  props: {
    ...useDarkProps,
    ...usePanelProps,
    ...useFullscreenProps,
    transitionPrev: {
      type: String,
      default: "fade"
    },
    transitionNext: {
      type: String,
      default: "fade"
    },
    height: String,
    padding: Boolean,
    controlColor: String,
    controlTextColor: String,
    controlType: {
      type: String,
      validator: (v) => controlTypeOptions.includes(v),
      default: "flat"
    },
    autoplay: [Number, Boolean],
    arrows: Boolean,
    prevIcon: String,
    nextIcon: String,
    navigation: Boolean,
    navigationPosition: {
      type: String,
      validator: (v) => navigationPositionOptions.includes(v)
    },
    navigationIcon: String,
    navigationActiveIcon: String,
    thumbnails: Boolean
  },
  emits: [
    ...useFullscreenEmits,
    ...usePanelEmits
  ],
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    let timer = null, panelsLen;
    const {
      updatePanelsList,
      getPanelContent,
      panelDirectives,
      goToPanel,
      previousPanel,
      nextPanel,
      getEnabledPanels,
      panelIndex
    } = usePanel();
    const { inFullscreen } = useFullscreen();
    const style = computed(() => inFullscreen.value !== true && props.height !== void 0 ? { height: props.height } : {});
    const direction = computed(() => props.vertical === true ? "vertical" : "horizontal");
    const classes = computed(
      () => `q-carousel q-panel-parent q-carousel--with${props.padding === true ? "" : "out"}-padding` + (inFullscreen.value === true ? " fullscreen" : "") + (isDark.value === true ? " q-carousel--dark q-dark" : "") + (props.arrows === true ? ` q-carousel--arrows-${direction.value}` : "") + (props.navigation === true ? ` q-carousel--navigation-${navigationPosition.value}` : "")
    );
    const arrowIcons = computed(() => {
      const ico = [
        props.prevIcon || $q.iconSet.carousel[props.vertical === true ? "up" : "left"],
        props.nextIcon || $q.iconSet.carousel[props.vertical === true ? "down" : "right"]
      ];
      return props.vertical === false && $q.lang.rtl === true ? ico.reverse() : ico;
    });
    const navIcon = computed(() => props.navigationIcon || $q.iconSet.carousel.navigationIcon);
    const navActiveIcon = computed(() => props.navigationActiveIcon || navIcon.value);
    const navigationPosition = computed(
      () => props.navigationPosition || (props.vertical === true ? "right" : "bottom")
    );
    const controlProps = computed(() => ({
      color: props.controlColor,
      textColor: props.controlTextColor,
      round: true,
      [props.controlType]: true,
      dense: true
    }));
    watch(() => props.modelValue, () => {
      if (props.autoplay) {
        startTimer();
      }
    });
    watch(() => props.autoplay, (val) => {
      if (val) {
        startTimer();
      } else if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    });
    function startTimer() {
      const duration = isNumber(props.autoplay) === true ? Math.abs(props.autoplay) : 5e3;
      timer !== null && clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        if (duration >= 0) {
          nextPanel();
        } else {
          previousPanel();
        }
      }, duration);
    }
    onMounted(() => {
      props.autoplay && startTimer();
    });
    onBeforeUnmount(() => {
      timer !== null && clearTimeout(timer);
    });
    function getNavigationContainer(type, mapping) {
      return h("div", {
        class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${type} q-carousel__navigation--${navigationPosition.value}` + (props.controlColor !== void 0 ? ` text-${props.controlColor}` : "")
      }, [
        h("div", {
          class: "q-carousel__navigation-inner flex flex-center no-wrap"
        }, getEnabledPanels().map(mapping))
      ]);
    }
    function getContent() {
      const node = [];
      if (props.navigation === true) {
        const fn = slots["navigation-icon"] !== void 0 ? slots["navigation-icon"] : (opts) => h(QBtn, {
          key: "nav" + opts.name,
          class: `q-carousel__navigation-icon q-carousel__navigation-icon--${opts.active === true ? "" : "in"}active`,
          ...opts.btnProps,
          onClick: opts.onClick
        });
        const maxIndex = panelsLen - 1;
        node.push(
          getNavigationContainer("buttons", (panel, index) => {
            const name = panel.props.name;
            const active = panelIndex.value === index;
            return fn({
              index,
              maxIndex,
              name,
              active,
              btnProps: {
                icon: active === true ? navActiveIcon.value : navIcon.value,
                size: "sm",
                ...controlProps.value
              },
              onClick: () => {
                goToPanel(name);
              }
            });
          })
        );
      } else if (props.thumbnails === true) {
        const color = props.controlColor !== void 0 ? ` text-${props.controlColor}` : "";
        node.push(getNavigationContainer("thumbnails", (panel) => {
          const slide = panel.props;
          return h("img", {
            key: "tmb#" + slide.name,
            class: `q-carousel__thumbnail q-carousel__thumbnail--${slide.name === props.modelValue ? "" : "in"}active` + color,
            src: slide.imgSrc || slide["img-src"],
            onClick: () => {
              goToPanel(slide.name);
            }
          });
        }));
      }
      if (props.arrows === true && panelIndex.value >= 0) {
        if (props.infinite === true || panelIndex.value > 0) {
          node.push(
            h("div", {
              key: "prev",
              class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${direction.value} absolute flex flex-center`
            }, [
              h(QBtn, {
                icon: arrowIcons.value[0],
                ...controlProps.value,
                onClick: previousPanel
              })
            ])
          );
        }
        if (props.infinite === true || panelIndex.value < panelsLen - 1) {
          node.push(
            h("div", {
              key: "next",
              class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${direction.value} absolute flex flex-center`
            }, [
              h(QBtn, {
                icon: arrowIcons.value[1],
                ...controlProps.value,
                onClick: nextPanel
              })
            ])
          );
        }
      }
      return hMergeSlot(slots.control, node);
    }
    return () => {
      panelsLen = updatePanelsList(slots);
      return h("div", {
        class: classes.value,
        style: style.value
      }, [
        hDir(
          "div",
          { class: "q-carousel__slides-container" },
          getPanelContent(),
          "sl-cont",
          props.swipeable,
          () => panelDirectives.value
        )
      ].concat(getContent()));
    };
  }
});
var QBtnToggle = createComponent({
  name: "QBtnToggle",
  props: {
    ...useFormProps,
    modelValue: {
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator: (v) => v.every(
        (opt) => ("label" in opt || "icon" in opt || "slot" in opt) && "value" in opt
      )
    },
    color: String,
    textColor: String,
    toggleColor: {
      type: String,
      default: "primary"
    },
    toggleTextColor: String,
    outline: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    rounded: Boolean,
    push: Boolean,
    glossy: Boolean,
    size: String,
    padding: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    readonly: Boolean,
    disable: Boolean,
    stack: Boolean,
    stretch: Boolean,
    spread: Boolean,
    clearable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "clear", "click"],
  setup(props, { slots, emit }) {
    const hasActiveValue = computed(
      () => props.options.find((opt) => opt.value === props.modelValue) !== void 0
    );
    const formAttrs = computed(() => ({
      type: "hidden",
      name: props.name,
      value: props.modelValue
    }));
    const injectFormInput = useFormInject(formAttrs);
    const btnDesignAttr = computed(() => getBtnDesignAttr(props));
    const btnOptionDesign = computed(() => ({
      rounded: props.rounded,
      dense: props.dense,
      ...btnDesignAttr.value
    }));
    const btnOptions = computed(() => props.options.map((item, i) => {
      const { attrs, value, slot, ...opt } = item;
      return {
        slot,
        props: {
          key: i,
          "aria-pressed": value === props.modelValue ? "true" : "false",
          ...attrs,
          ...opt,
          ...btnOptionDesign.value,
          disable: props.disable === true || opt.disable === true,
          color: value === props.modelValue ? mergeOpt(opt, "toggleColor") : mergeOpt(opt, "color"),
          textColor: value === props.modelValue ? mergeOpt(opt, "toggleTextColor") : mergeOpt(opt, "textColor"),
          noCaps: mergeOpt(opt, "noCaps") === true,
          noWrap: mergeOpt(opt, "noWrap") === true,
          size: mergeOpt(opt, "size"),
          padding: mergeOpt(opt, "padding"),
          ripple: mergeOpt(opt, "ripple"),
          stack: mergeOpt(opt, "stack") === true,
          stretch: mergeOpt(opt, "stretch") === true,
          onClick(e) {
            set(value, item, e);
          }
        }
      };
    }));
    function set(value, opt, e) {
      if (props.readonly !== true) {
        if (props.modelValue === value) {
          if (props.clearable === true) {
            emit("update:modelValue", null, null);
            emit("clear");
          }
        } else {
          emit("update:modelValue", value, opt);
        }
        emit("click", e);
      }
    }
    function mergeOpt(opt, key) {
      return opt[key] === void 0 ? props[key] : opt[key];
    }
    function getContent() {
      const child = btnOptions.value.map((opt) => {
        return h(QBtn, opt.props, opt.slot !== void 0 ? slots[opt.slot] : void 0);
      });
      if (props.name !== void 0 && props.disable !== true && hasActiveValue.value === true) {
        injectFormInput(child, "push");
      }
      return hMergeSlot(slots.default, child);
    }
    return () => h(QBtnGroup, {
      class: "q-btn-toggle",
      ...btnDesignAttr.value,
      rounded: props.rounded,
      stretch: props.stretch,
      glossy: props.glossy,
      spread: props.spread
    }, getContent);
  }
});
const _hoisted_1 = { class: "container q-pt-lg" };
const _hoisted_2 = { class: "row q-col-gutter-xl" };
const _hoisted_3 = { class: "col-xs-12 col-sm-6" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, "Thanks for your interest in joining The Laundry Lady.", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "Please check your email for the next steps.", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Apply Now", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, "Fill out the form below and we'll send you an info pack all about joining the team.", -1);
const _hoisted_8 = { class: "row q-col-gutter-md" };
const _hoisted_9 = { class: "row q-col-gutter-md" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mt-sm" }, "Address Details", -1);
const _hoisted_11 = { class: "row q-col-gutter-md" };
const _hoisted_12 = { class: "bg-grey-1 q-pa-sm q-mt-md" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Confirm your eligibility requirements:", -1);
const _hoisted_14 = { class: "col-xs-12 col-sm-6" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 text-primary text-bold" }, "Join The Team", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h4 text-bold" }, "Who it suits?", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 text-grey text-bold" }, "Our business suits all types of people.", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "Work school hours, husband & wife teams"),
  /* @__PURE__ */ createBaseVNode("li", null, "Stay at home mums & dads and home schooling parents"),
  /* @__PURE__ */ createBaseVNode("li", null, "Carers of children, elderly parents or sick family members"),
  /* @__PURE__ */ createBaseVNode("li", null, "People who don't want to work 9-5 and crave work life balance"),
  /* @__PURE__ */ createBaseVNode("li", null, "Men and women who like to work for themselves"),
  /* @__PURE__ */ createBaseVNode("li", null, "Who want a franchise opportunity"),
  /* @__PURE__ */ createBaseVNode("li", null, "Laundromat or beauty salon owners"),
  /* @__PURE__ */ createBaseVNode("li", null, "And everything in between!")
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "You're required to:", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "have a reliable medium to large car and drivers licence"),
  /* @__PURE__ */ createBaseVNode("li", null, "have a smartphone with data plan"),
  /* @__PURE__ */ createBaseVNode("li", null, "have a current NDIS Workers Clearance Certificate"),
  /* @__PURE__ */ createBaseVNode("li", null, "have a current public liability insurance policy"),
  /* @__PURE__ */ createBaseVNode("li", null, "have an ABN"),
  /* @__PURE__ */ createBaseVNode("li", null, "have a steam station iron, washing machine and dryer or be willing to purchase these."),
  /* @__PURE__ */ createBaseVNode("li", null, "available for morning or afternoon pickups and deliveries (school hours is fine and you can select the days and timeslots)")
], -1);
const _hoisted_21 = { class: "row justify-center q-mt-lg" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ApplyNow",
  setup(__props) {
    const loading = ref(false);
    const success = ref(false);
    const emailError = ref({ error: false, msg: "" });
    const model = reactive({
      first_name: null,
      last_name: null,
      dateofbirth: null,
      email: null,
      mobile: null,
      address1: null,
      address2: null,
      suburb_postcode_region_id: null,
      contractor_abn: null,
      contractor_car_licence: false,
      contractor_equipment: false,
      contractor_why_join: null,
      contractor_referral_type: null
    });
    const rules = {
      first_name: { required },
      last_name: { required },
      email: { required, email },
      mobile: { required },
      address2: { required },
      suburb_postcode_region_id: { required },
      contractor_why_join: { required },
      contractor_referral_type: { required }
    };
    const carousel = ref({ info: "busy", test: "first" });
    const $v = useVuelidate(rules, model);
    const applyNow = () => {
      loading.value = true;
      success.value = false;
      api.post("/auth/contractor/applynow", model).then(() => {
        success.value = true;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const checkEmail = () => {
      emailError.value = { error: false, msg: "" };
      if (model.email) {
        api.post("/user/checkemail/0", { email: model.email }).then((response) => {
          if (parseFloat(response.data.found[0].count) > 0) {
            emailError.value.error = true;
            emailError.value.msg = "That email address is already in use";
            model.email = null;
          }
        }).catch((error) => {
          useMixinDebug(error);
        });
      }
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
                                createBaseVNode("div", _hoisted_8, [
                                  createVNode(QInput, {
                                    modelValue: model.first_name,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.first_name = $event),
                                    label: "First Name",
                                    error: unref($v).first_name.$invalid,
                                    class: "col-xs-12 col-sm-6",
                                    autofocus: ""
                                  }, null, 8, ["modelValue", "error"]),
                                  createVNode(QInput, {
                                    modelValue: model.last_name,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.last_name = $event),
                                    label: "Last Name",
                                    error: unref($v).last_name.$invalid,
                                    class: "col-xs-12 col-sm-6"
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_9, [
                                  createVNode(QInput, {
                                    modelValue: model.email,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.email = $event),
                                    label: "Email",
                                    error: unref($v).email.$invalid || emailError.value.error,
                                    onBlur: _cache[3] || (_cache[3] = ($event) => checkEmail()),
                                    "error-message": emailError.value.msg || "",
                                    hint: emailError.value.msg || "",
                                    class: "col-xs-12 col-sm-6"
                                  }, null, 8, ["modelValue", "error", "error-message", "hint"]),
                                  createVNode(QInput, {
                                    modelValue: model.mobile,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => model.mobile = $event),
                                    label: "Mobile Phone",
                                    error: unref($v).mobile.$invalid,
                                    mask: "#### ### ###",
                                    "unmasked-value": "",
                                    class: "col-xs-12 col-sm-6"
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                _hoisted_10,
                                createVNode(_sfc_main$2, {
                                  model,
                                  outlined: true,
                                  addressfields: { address1: "address1", address2: "address2", suburb_postcode_region_id: "suburb_postcode_region_id", lat: "lat", lng: "lng", country_id: "country_id" },
                                  placeholder: _ctx.$t("address.search")
                                }, null, 8, ["model", "placeholder"]),
                                createBaseVNode("div", _hoisted_11, [
                                  createVNode(QInput, {
                                    modelValue: model.address1,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.address1 = $event),
                                    label: _ctx.$t("address.line1"),
                                    "bottom-slots": "",
                                    class: "col-xs-12 col-sm-6"
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QInput, {
                                    modelValue: model.address2,
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.address2 = $event),
                                    error: unref($v).address2.$invalid,
                                    label: _ctx.$t("address.line2"),
                                    class: "col-xs-12 col-sm-6"
                                  }, null, 8, ["modelValue", "error", "label"])
                                ]),
                                createVNode(_sfc_main$3, {
                                  modelValue: model.suburb_postcode_region_id,
                                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.suburb_postcode_region_id = $event),
                                  label: "Suburb",
                                  invalid: unref($v).suburb_postcode_region_id.$invalid
                                }, null, 8, ["modelValue", "invalid"]),
                                createBaseVNode("div", _hoisted_12, [
                                  _hoisted_13,
                                  createVNode(QToggle, {
                                    modelValue: model.contractor_car_licence,
                                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.contractor_car_licence = $event),
                                    label: "Reliable car and current drivers licence"
                                  }, null, 8, ["modelValue"]),
                                  createVNode(QToggle, {
                                    modelValue: model.contractor_equipment,
                                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.contractor_equipment = $event),
                                    label: "Equipment including steam station iron, washing machine, dryer, or willing to purchase these?"
                                  }, null, 8, ["modelValue"])
                                ]),
                                createVNode(QInput, {
                                  modelValue: model.contractor_why_join,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => model.contractor_why_join = $event),
                                  label: "Why do you want to join our team?",
                                  class: "q-mt-lg",
                                  error: unref($v).contractor_why_join.$invalid,
                                  type: "textarea",
                                  rows: "3",
                                  outlined: ""
                                }, null, 8, ["modelValue", "error"]),
                                createVNode(QSelect, {
                                  modelValue: model.contractor_referral_type,
                                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => model.contractor_referral_type = $event),
                                  label: "How did you find out about us?",
                                  options: ["Instagram", "Facebook", "Google", "Gumtree", "Working Parents Connect", "Seek", "Melbourne Mums", "Word of Mouth", "Radio", "Newspaper/Magazine", "Event", "Other"],
                                  error: unref($v).contractor_referral_type.$invalid
                                }, null, 8, ["modelValue", "error"]),
                                createVNode(QBtn, {
                                  loading: loading.value,
                                  onClick: _cache[12] || (_cache[12] = ($event) => applyNow()),
                                  disabled: unref($v).$invalid || !model.contractor_car_licence || !model.contractor_equipment,
                                  color: "primary",
                                  label: "Apply Now",
                                  class: "full-width q-mt-md",
                                  rounded: ""
                                }, null, 8, ["loading", "disabled"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_14, [
                        _hoisted_15,
                        _hoisted_16,
                        _hoisted_17,
                        _hoisted_18,
                        _hoisted_19,
                        _hoisted_20,
                        createVNode(QCarousel, {
                          animated: "",
                          modelValue: carousel.value.info,
                          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => carousel.value.info = $event),
                          infinite: "",
                          class: "q-mt-lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(QCarouselSlide, { name: "busy" }, {
                              default: withCtx(() => [
                                createVNode(QVideo, {
                                  class: "absolute-full",
                                  src: "https://www.youtube.com/embed/j_4_WXJUj1o?feature=oembed&autoplay=1&rel=0"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QCarouselSlide, { name: "love" }, {
                              default: withCtx(() => [
                                createVNode(QVideo, {
                                  class: "absolute-full",
                                  src: "https://www.youtube.com/embed/OLVUWLRWiJc?feature=oembed&autoplay=1&rel=0"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_21, [
                          createVNode(QBtnToggle, {
                            modelValue: carousel.value.info,
                            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => carousel.value.info = $event),
                            flat: "",
                            "no-caps": "",
                            options: [
                              { label: "Does it suit busy mum/dad life?", value: "busy" },
                              { label: "What do you love about being a Laundry Lad?", value: "love" }
                            ]
                          }, null, 8, ["modelValue"])
                        ])
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
