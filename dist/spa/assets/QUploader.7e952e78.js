import { r as ref, g as computed, j as getCurrentInstance, aC as stop, as as stopAndPrevent, aR as client, h, ac as useDarkProps, ad as useDark, bg as vmIsDestroyed, Z as provide, bh as uploaderKey, w as watch, G as onBeforeUnmount, k as isRef, bi as injectProp, bj as injectMultipleProps, aJ as QSpinner, O as QIcon, R as QBtn, U as createComponent, bk as isObject } from "./index.2cdb50d9.js";
import { Q as QCircularProgress } from "./QCircularProgress.f0f99b6b.js";
import { h as humanStorageSize } from "./format.3e32b8d9.js";
function filterFiles(files, rejectedFiles, failedPropValidation, filterFn) {
  const acceptedFiles = [];
  files.forEach((file) => {
    if (filterFn(file) === true) {
      acceptedFiles.push(file);
    } else {
      rejectedFiles.push({ failedPropValidation, file });
    }
  });
  return acceptedFiles;
}
function stopAndPreventDrag(e) {
  e && e.dataTransfer && (e.dataTransfer.dropEffect = "copy");
  stopAndPrevent(e);
}
const useFileProps = {
  multiple: Boolean,
  accept: String,
  capture: String,
  maxFileSize: [Number, String],
  maxTotalSize: [Number, String],
  maxFiles: [Number, String],
  filter: Function
};
const useFileEmits = ["rejected"];
function useFile({
  editable,
  dnd,
  getFileInput,
  addFilesToQueue
}) {
  const { props: props2, emit, proxy } = getCurrentInstance();
  const dndRef = ref(null);
  const extensions = computed(() => props2.accept !== void 0 ? props2.accept.split(",").map((ext) => {
    ext = ext.trim();
    if (ext === "*") {
      return "*/";
    } else if (ext.endsWith("/*")) {
      ext = ext.slice(0, ext.length - 1);
    }
    return ext.toUpperCase();
  }) : null);
  const maxFilesNumber = computed(() => parseInt(props2.maxFiles, 10));
  const maxTotalSizeNumber = computed(() => parseInt(props2.maxTotalSize, 10));
  function pickFiles(e) {
    if (editable.value) {
      if (e !== Object(e)) {
        e = { target: null };
      }
      if (e.target !== null && e.target.matches('input[type="file"]') === true) {
        e.clientX === 0 && e.clientY === 0 && stop(e);
      } else {
        const input = getFileInput();
        input && input !== e.target && input.click(e);
      }
    }
  }
  function addFiles(files) {
    if (editable.value && files) {
      addFilesToQueue(null, files);
    }
  }
  function processFiles(e, filesToProcess, currentFileList, append) {
    let files = Array.from(filesToProcess || e.target.files);
    const rejectedFiles = [];
    const done = () => {
      if (rejectedFiles.length !== 0) {
        emit("rejected", rejectedFiles);
      }
    };
    if (props2.accept !== void 0 && extensions.value.indexOf("*/") === -1) {
      files = filterFiles(files, rejectedFiles, "accept", (file) => {
        return extensions.value.some((ext) => file.type.toUpperCase().startsWith(ext) || file.name.toUpperCase().endsWith(ext));
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props2.maxFileSize !== void 0) {
      const maxFileSize = parseInt(props2.maxFileSize, 10);
      files = filterFiles(files, rejectedFiles, "max-file-size", (file) => {
        return file.size <= maxFileSize;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props2.multiple !== true && files.length !== 0) {
      files = [files[0]];
    }
    files.forEach((file) => {
      file.__key = file.webkitRelativePath + file.lastModified + file.name + file.size;
    });
    if (append === true) {
      const filenameMap = currentFileList.map((entry) => entry.__key);
      files = filterFiles(files, rejectedFiles, "duplicate", (file) => {
        return filenameMap.includes(file.__key) === false;
      });
    }
    if (files.length === 0) {
      return done();
    }
    if (props2.maxTotalSize !== void 0) {
      let size = append === true ? currentFileList.reduce((total, file) => total + file.size, 0) : 0;
      files = filterFiles(files, rejectedFiles, "max-total-size", (file) => {
        size += file.size;
        return size <= maxTotalSizeNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (typeof props2.filter === "function") {
      const filteredFiles = props2.filter(files);
      files = filterFiles(files, rejectedFiles, "filter", (file) => {
        return filteredFiles.includes(file);
      });
    }
    if (props2.maxFiles !== void 0) {
      let filesNumber = append === true ? currentFileList.length : 0;
      files = filterFiles(files, rejectedFiles, "max-files", () => {
        filesNumber++;
        return filesNumber <= maxFilesNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    done();
    if (files.length !== 0) {
      return files;
    }
  }
  function onDragover(e) {
    stopAndPreventDrag(e);
    dnd.value !== true && (dnd.value = true);
  }
  function onDragleave(e) {
    stopAndPrevent(e);
    const gone = e.relatedTarget !== null || client.is.safari !== true ? e.relatedTarget !== dndRef.value : document.elementsFromPoint(e.clientX, e.clientY).includes(dndRef.value) === false;
    gone === true && (dnd.value = false);
  }
  function onDrop(e) {
    stopAndPreventDrag(e);
    const files = e.dataTransfer.files;
    if (files.length !== 0) {
      addFilesToQueue(null, files);
    }
    dnd.value = false;
  }
  function getDndNode(type) {
    if (dnd.value === true) {
      return h("div", {
        ref: dndRef,
        class: `q-${type}__dnd absolute-full`,
        onDragenter: stopAndPreventDrag,
        onDragover: stopAndPreventDrag,
        onDragleave,
        onDrop
      });
    }
  }
  Object.assign(proxy, { pickFiles, addFiles });
  return {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  };
}
function getProgressLabel(p) {
  return (p * 100).toFixed(2) + "%";
}
const coreProps = {
  ...useDarkProps,
  ...useFileProps,
  label: String,
  color: String,
  textColor: String,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  noThumbnails: Boolean,
  autoUpload: Boolean,
  hideUploadBtn: Boolean,
  disable: Boolean,
  readonly: Boolean
};
const coreEmits = [
  ...useFileEmits,
  "start",
  "finish",
  "added",
  "removed"
];
function getRenderer(getPlugin, expose) {
  const vm = getCurrentInstance();
  const { props: props2, slots, emit, proxy } = vm;
  const { $q } = proxy;
  const isDark = useDark(props2, $q);
  function updateFileStatus(file, status, uploadedSize) {
    file.__status = status;
    if (status === "idle") {
      file.__uploaded = 0;
      file.__progress = 0;
      file.__sizeLabel = humanStorageSize(file.size);
      file.__progressLabel = "0.00%";
      return;
    }
    if (status === "failed") {
      proxy.$forceUpdate();
      return;
    }
    file.__uploaded = status === "uploaded" ? file.size : uploadedSize;
    file.__progress = status === "uploaded" ? 1 : Math.min(0.9999, file.__uploaded / file.size);
    file.__progressLabel = getProgressLabel(file.__progress);
    proxy.$forceUpdate();
  }
  const editable = computed(() => props2.disable !== true && props2.readonly !== true);
  const dnd = ref(false);
  const rootRef = ref(null);
  const inputRef = ref(null);
  const state = {
    files: ref([]),
    queuedFiles: ref([]),
    uploadedFiles: ref([]),
    uploadedSize: ref(0),
    updateFileStatus,
    isAlive: () => vmIsDestroyed(vm) === false
  };
  const {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  } = useFile({ editable, dnd, getFileInput, addFilesToQueue });
  Object.assign(state, getPlugin({
    props: props2,
    slots,
    emit,
    helpers: state,
    exposeApi: (obj) => {
      Object.assign(state, obj);
    }
  }));
  if (state.isBusy === void 0) {
    state.isBusy = ref(false);
  }
  const uploadSize = ref(0);
  const uploadProgress = computed(() => uploadSize.value === 0 ? 0 : state.uploadedSize.value / uploadSize.value);
  const uploadProgressLabel = computed(() => getProgressLabel(uploadProgress.value));
  const uploadSizeLabel = computed(() => humanStorageSize(uploadSize.value));
  const canAddFiles = computed(
    () => editable.value === true && state.isUploading.value !== true && (props2.multiple === true || state.queuedFiles.value.length === 0) && (props2.maxFiles === void 0 || state.files.value.length < maxFilesNumber.value) && (props2.maxTotalSize === void 0 || uploadSize.value < maxTotalSizeNumber.value)
  );
  const canUpload = computed(
    () => editable.value === true && state.isBusy.value !== true && state.isUploading.value !== true && state.queuedFiles.value.length !== 0
  );
  provide(uploaderKey, renderInput);
  const classes = computed(
    () => "q-uploader column no-wrap" + (isDark.value === true ? " q-uploader--dark q-dark" : "") + (props2.bordered === true ? " q-uploader--bordered" : "") + (props2.square === true ? " q-uploader--square no-border-radius" : "") + (props2.flat === true ? " q-uploader--flat no-shadow" : "") + (props2.disable === true ? " disabled q-uploader--disable" : "") + (dnd.value === true ? " q-uploader--dnd" : "")
  );
  const colorClass = computed(
    () => "q-uploader__header" + (props2.color !== void 0 ? ` bg-${props2.color}` : "") + (props2.textColor !== void 0 ? ` text-${props2.textColor}` : "")
  );
  watch(state.isUploading, (newVal, oldVal) => {
    if (oldVal === false && newVal === true) {
      emit("start");
    } else if (oldVal === true && newVal === false) {
      emit("finish");
    }
  });
  function reset() {
    if (props2.disable === false) {
      state.abort();
      state.uploadedSize.value = 0;
      uploadSize.value = 0;
      revokeImgURLs();
      state.files.value = [];
      state.queuedFiles.value = [];
      state.uploadedFiles.value = [];
    }
  }
  function removeUploadedFiles() {
    if (props2.disable === false) {
      batchRemoveFiles(["uploaded"], () => {
        state.uploadedFiles.value = [];
      });
    }
  }
  function removeQueuedFiles() {
    batchRemoveFiles(["idle", "failed"], ({ size }) => {
      uploadSize.value -= size;
      state.queuedFiles.value = [];
    });
  }
  function batchRemoveFiles(statusList, cb) {
    if (props2.disable === true) {
      return;
    }
    const removed = {
      files: [],
      size: 0
    };
    const localFiles = state.files.value.filter((f) => {
      if (statusList.indexOf(f.__status) === -1) {
        return true;
      }
      removed.size += f.size;
      removed.files.push(f);
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
      return false;
    });
    if (removed.files.length !== 0) {
      state.files.value = localFiles;
      cb(removed);
      emit("removed", removed.files);
    }
  }
  function removeFile(file) {
    if (props2.disable) {
      return;
    }
    if (file.__status === "uploaded") {
      state.uploadedFiles.value = state.uploadedFiles.value.filter((f) => f.__key !== file.__key);
    } else if (file.__status === "uploading") {
      file.__abort();
    } else {
      uploadSize.value -= file.size;
    }
    state.files.value = state.files.value.filter((f) => {
      if (f.__key !== file.__key) {
        return true;
      }
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
      return false;
    });
    state.queuedFiles.value = state.queuedFiles.value.filter((f) => f.__key !== file.__key);
    emit("removed", [file]);
  }
  function revokeImgURLs() {
    state.files.value.forEach((f) => {
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
    });
  }
  function getFileInput() {
    return inputRef.value || rootRef.value.getElementsByClassName("q-uploader__input")[0];
  }
  function addFilesToQueue(e, fileList) {
    const localFiles = processFiles(e, fileList, state.files.value, true);
    const fileInput = getFileInput();
    if (fileInput !== void 0 && fileInput !== null) {
      fileInput.value = "";
    }
    if (localFiles === void 0) {
      return;
    }
    localFiles.forEach((file) => {
      state.updateFileStatus(file, "idle");
      uploadSize.value += file.size;
      if (props2.noThumbnails !== true && file.type.toUpperCase().startsWith("IMAGE")) {
        const img = new Image();
        img.src = window.URL.createObjectURL(file);
        file.__img = img;
      }
    });
    state.files.value = state.files.value.concat(localFiles);
    state.queuedFiles.value = state.queuedFiles.value.concat(localFiles);
    emit("added", localFiles);
    props2.autoUpload === true && state.upload();
  }
  function upload() {
    canUpload.value === true && state.upload();
  }
  function getBtn(show, icon, fn) {
    if (show === true) {
      const data = {
        type: "a",
        key: icon,
        icon: $q.iconSet.uploader[icon],
        flat: true,
        dense: true
      };
      let child = void 0;
      if (icon === "add") {
        data.onClick = pickFiles;
        child = renderInput;
      } else {
        data.onClick = fn;
      }
      return h(QBtn, data, child);
    }
  }
  function renderInput() {
    return h("input", {
      ref: inputRef,
      class: "q-uploader__input overflow-hidden absolute-full",
      tabindex: -1,
      type: "file",
      title: "",
      accept: props2.accept,
      multiple: props2.multiple === true ? "multiple" : void 0,
      capture: props2.capture,
      onMousedown: stop,
      onClick: pickFiles,
      onChange: addFilesToQueue
    });
  }
  function getHeader() {
    if (slots.header !== void 0) {
      return slots.header(publicApi);
    }
    return [
      h("div", {
        class: "q-uploader__header-content column"
      }, [
        h("div", {
          class: "flex flex-center no-wrap q-gutter-xs"
        }, [
          getBtn(state.queuedFiles.value.length !== 0, "removeQueue", removeQueuedFiles),
          getBtn(state.uploadedFiles.value.length !== 0, "removeUploaded", removeUploadedFiles),
          state.isUploading.value === true ? h(QSpinner, { class: "q-uploader__spinner" }) : null,
          h("div", { class: "col column justify-center" }, [
            props2.label !== void 0 ? h("div", { class: "q-uploader__title" }, [props2.label]) : null,
            h("div", { class: "q-uploader__subtitle" }, [
              uploadSizeLabel.value + " / " + uploadProgressLabel.value
            ])
          ]),
          getBtn(canAddFiles.value, "add"),
          getBtn(props2.hideUploadBtn === false && canUpload.value === true, "upload", state.upload),
          getBtn(state.isUploading.value, "clear", state.abort)
        ])
      ])
    ];
  }
  function getList() {
    if (slots.list !== void 0) {
      return slots.list(publicApi);
    }
    return state.files.value.map((file) => h("div", {
      key: file.__key,
      class: "q-uploader__file relative-position" + (props2.noThumbnails !== true && file.__img !== void 0 ? " q-uploader__file--img" : "") + (file.__status === "failed" ? " q-uploader__file--failed" : file.__status === "uploaded" ? " q-uploader__file--uploaded" : ""),
      style: props2.noThumbnails !== true && file.__img !== void 0 ? { backgroundImage: 'url("' + file.__img.src + '")' } : null
    }, [
      h("div", {
        class: "q-uploader__file-header row flex-center no-wrap"
      }, [
        file.__status === "failed" ? h(QIcon, {
          class: "q-uploader__file-status",
          name: $q.iconSet.type.negative,
          color: "negative"
        }) : null,
        h("div", { class: "q-uploader__file-header-content col" }, [
          h("div", { class: "q-uploader__title" }, [file.name]),
          h("div", {
            class: "q-uploader__subtitle row items-center no-wrap"
          }, [
            file.__sizeLabel + " / " + file.__progressLabel
          ])
        ]),
        file.__status === "uploading" ? h(QCircularProgress, {
          value: file.__progress,
          min: 0,
          max: 1,
          indeterminate: file.__progress === 0
        }) : h(QBtn, {
          round: true,
          dense: true,
          flat: true,
          icon: $q.iconSet.uploader[file.__status === "uploaded" ? "done" : "clear"],
          onClick: () => {
            removeFile(file);
          }
        })
      ])
    ]));
  }
  onBeforeUnmount(() => {
    state.isUploading.value === true && state.abort();
    state.files.value.length !== 0 && revokeImgURLs();
  });
  const publicApi = {};
  for (const key in state) {
    if (isRef(state[key]) === true) {
      injectProp(publicApi, key, () => state[key].value);
    } else {
      publicApi[key] = state[key];
    }
  }
  Object.assign(publicApi, {
    upload,
    reset,
    removeUploadedFiles,
    removeQueuedFiles,
    removeFile,
    pickFiles,
    addFiles
  });
  injectMultipleProps(publicApi, {
    canAddFiles: () => canAddFiles.value,
    canUpload: () => canUpload.value,
    uploadSizeLabel: () => uploadSizeLabel.value,
    uploadProgressLabel: () => uploadProgressLabel.value
  });
  expose({
    ...state,
    upload,
    reset,
    removeUploadedFiles,
    removeQueuedFiles,
    removeFile,
    pickFiles,
    addFiles,
    canAddFiles,
    canUpload,
    uploadSizeLabel,
    uploadProgressLabel
  });
  return () => {
    const children = [
      h("div", { class: colorClass.value }, getHeader()),
      h("div", { class: "q-uploader__list scroll" }, getList()),
      getDndNode("uploader")
    ];
    state.isBusy.value === true && children.push(
      h("div", {
        class: "q-uploader__overlay absolute-full flex flex-center"
      }, [h(QSpinner)])
    );
    const data = { ref: rootRef, class: classes.value };
    if (canAddFiles.value === true) {
      Object.assign(data, { onDragover, onDragleave });
    }
    return h("div", data, children);
  };
}
const trueFn = () => true;
function getEmitsObject(emitsArray) {
  const emitsObject = {};
  emitsArray.forEach((val) => {
    emitsObject[val] = trueFn;
  });
  return emitsObject;
}
const coreEmitsObject = getEmitsObject(coreEmits);
var createUploaderComponent = ({ name, props: props2, emits: emits2, injectPlugin: injectPlugin2 }) => createComponent({
  name,
  props: {
    ...coreProps,
    ...props2
  },
  emits: isObject(emits2) === true ? { ...coreEmitsObject, ...emits2 } : [...coreEmits, ...emits2],
  setup(_, { expose }) {
    return getRenderer(injectPlugin2, expose);
  }
});
function getFn(prop) {
  return typeof prop === "function" ? prop : () => prop;
}
const props = {
  url: [Function, String],
  method: {
    type: [Function, String],
    default: "POST"
  },
  fieldName: {
    type: [Function, String],
    default: () => {
      return (file) => file.name;
    }
  },
  headers: [Function, Array],
  formFields: [Function, Array],
  withCredentials: [Function, Boolean],
  sendRaw: [Function, Boolean],
  batch: [Function, Boolean],
  factory: Function
};
const emits = ["factoryFailed", "uploaded", "failed", "uploading"];
function injectPlugin({ props: props2, emit, helpers }) {
  const xhrs = ref([]);
  const promises = ref([]);
  const workingThreads = ref(0);
  const xhrProps = computed(() => ({
    url: getFn(props2.url),
    method: getFn(props2.method),
    headers: getFn(props2.headers),
    formFields: getFn(props2.formFields),
    fieldName: getFn(props2.fieldName),
    withCredentials: getFn(props2.withCredentials),
    sendRaw: getFn(props2.sendRaw),
    batch: getFn(props2.batch)
  }));
  const isUploading = computed(() => workingThreads.value > 0);
  const isBusy = computed(() => promises.value.length !== 0);
  let abortPromises;
  function abort() {
    xhrs.value.forEach((x) => {
      x.abort();
    });
    if (promises.value.length !== 0) {
      abortPromises = true;
    }
  }
  function upload() {
    const queue = helpers.queuedFiles.value.slice(0);
    helpers.queuedFiles.value = [];
    if (xhrProps.value.batch(queue)) {
      runFactory(queue);
    } else {
      queue.forEach((file) => {
        runFactory([file]);
      });
    }
  }
  function runFactory(files) {
    workingThreads.value++;
    if (typeof props2.factory !== "function") {
      performUpload(files, {});
      return;
    }
    const res = props2.factory(files);
    if (!res) {
      emit(
        "factoryFailed",
        new Error("QUploader: factory() does not return properly"),
        files
      );
      workingThreads.value--;
    } else if (typeof res.catch === "function" && typeof res.then === "function") {
      promises.value.push(res);
      const failed = (err) => {
        if (helpers.isAlive() === true) {
          promises.value = promises.value.filter((p) => p !== res);
          if (promises.value.length === 0) {
            abortPromises = false;
          }
          helpers.queuedFiles.value = helpers.queuedFiles.value.concat(files);
          files.forEach((f) => {
            helpers.updateFileStatus(f, "failed");
          });
          emit("factoryFailed", err, files);
          workingThreads.value--;
        }
      };
      res.then((factory) => {
        if (abortPromises === true) {
          failed(new Error("Aborted"));
        } else if (helpers.isAlive() === true) {
          promises.value = promises.value.filter((p) => p !== res);
          performUpload(files, factory);
        }
      }).catch(failed);
    } else {
      performUpload(files, res || {});
    }
  }
  function performUpload(files, factory) {
    const form = new FormData(), xhr = new XMLHttpRequest();
    const getProp = (name, arg) => {
      return factory[name] !== void 0 ? getFn(factory[name])(arg) : xhrProps.value[name](arg);
    };
    const url = getProp("url", files);
    if (!url) {
      console.error("q-uploader: invalid or no URL specified");
      workingThreads.value--;
      return;
    }
    const fields = getProp("formFields", files);
    fields !== void 0 && fields.forEach((field) => {
      form.append(field.name, field.value);
    });
    let uploadIndex = 0, uploadIndexSize = 0, localUploadedSize = 0, maxUploadSize = 0, aborted;
    xhr.upload.addEventListener("progress", (e) => {
      if (aborted === true) {
        return;
      }
      const loaded = Math.min(maxUploadSize, e.loaded);
      helpers.uploadedSize.value += loaded - localUploadedSize;
      localUploadedSize = loaded;
      let size = localUploadedSize - uploadIndexSize;
      for (let i = uploadIndex; size > 0 && i < files.length; i++) {
        const file = files[i], uploaded = size > file.size;
        if (uploaded) {
          size -= file.size;
          uploadIndex++;
          uploadIndexSize += file.size;
          helpers.updateFileStatus(file, "uploading", file.size);
        } else {
          helpers.updateFileStatus(file, "uploading", size);
          return;
        }
      }
    }, false);
    xhr.onreadystatechange = () => {
      if (xhr.readyState < 4) {
        return;
      }
      if (xhr.status && xhr.status < 400) {
        helpers.uploadedFiles.value = helpers.uploadedFiles.value.concat(files);
        files.forEach((f) => {
          helpers.updateFileStatus(f, "uploaded");
        });
        emit("uploaded", { files, xhr });
      } else {
        aborted = true;
        helpers.uploadedSize.value -= localUploadedSize;
        helpers.queuedFiles.value = helpers.queuedFiles.value.concat(files);
        files.forEach((f) => {
          helpers.updateFileStatus(f, "failed");
        });
        emit("failed", { files, xhr });
      }
      workingThreads.value--;
      xhrs.value = xhrs.value.filter((x) => x !== xhr);
    };
    xhr.open(
      getProp("method", files),
      url
    );
    if (getProp("withCredentials", files) === true) {
      xhr.withCredentials = true;
    }
    const headers = getProp("headers", files);
    headers !== void 0 && headers.forEach((head) => {
      xhr.setRequestHeader(head.name, head.value);
    });
    const sendRaw = getProp("sendRaw", files);
    files.forEach((file) => {
      helpers.updateFileStatus(file, "uploading", 0);
      if (sendRaw !== true) {
        form.append(getProp("fieldName", file), file, file.name);
      }
      file.xhr = xhr;
      file.__abort = () => {
        xhr.abort();
      };
      maxUploadSize += file.size;
    });
    emit("uploading", { files, xhr });
    xhrs.value.push(xhr);
    if (sendRaw === true) {
      xhr.send(new Blob(files));
    } else {
      xhr.send(form);
    }
  }
  return {
    isUploading,
    isBusy,
    abort,
    upload
  };
}
var xhrUploaderPlugin = {
  name: "QUploader",
  props,
  emits,
  injectPlugin
};
var QUploader = createUploaderComponent(xhrUploaderPlugin);
export { QUploader as Q };
