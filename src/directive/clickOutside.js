export function attachedRoot(node) {
  if (typeof node.getRootNode !== "function") {
    while (node.parentNode) node = node.parentNode;
    if (node !== document) return null;

    return document;
  }

  const root = node.getRootNode();
  if (root !== document && root.getRootNode({ composed: true }) !== document)
    return null;

  return root;
}

function defaultConditional() {
  return true;
}

function checkEvent(e, el, binding) {
  if (!e || checkIsActive(e, binding) === false) return false;
  const root = attachedRoot(el);
  if (
    typeof ShadowRoot !== "undefined" &&
    root instanceof ShadowRoot &&
    root.host === e.target
  )
    return false;

  const elements =
    typeof binding.value === "object" ? binding.value.include() : [];
  elements.push(el);
  return !elements.some((el) => el.contains(e.target));
}

function checkIsActive(e, binding) {
  const isActive =
    (typeof binding.value === "object" && binding.value.closeConditional) ||
    defaultConditional;

  return isActive(e);
}

function directive(e, el, binding) {
  const handler =
    typeof binding.value === "function" ? binding.value : binding.value.handler;

  el._clickOutside.lastMousedownWasOutside &&
    checkEvent(e, el, binding) &&
    setTimeout(() => {
      checkIsActive(e, binding) && handler && handler(e);
    }, 0);
}

function handleShadow(el, callback) {
  const root = attachedRoot(el);

  callback(document);

  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) {
    callback(root);
  }
}

export const ClickOutside = {
  // obs. Testar suporte para IOS
  bind(el, binding, vnode) {
    const onClick = (e) => directive(e, el, binding);
    const onMousedown = (e) => {
      el._clickOutside.lastMousedownWasOutside = checkEvent(e, el, binding);
    };

    handleShadow(el, (app) => {
      app.addEventListener("click", onClick, true);
      app.addEventListener("mousedown", onMousedown, true);
    });

    if (!el._clickOutside) {
      el._clickOutside = {
        lastMousedownWasOutside: true,
      };
    }
    el._clickOutside[vnode.context._uid] = {
      onClick,
      onMousedown,
    };
  },

  unbind(el, binding, vnode) {
    if (!el._clickOutside) return;

    handleShadow(el, (app) => {
      if (!app || !el._clickOutside?.[vnode.context._uid]) return;

      const { onClick, onMousedown } = el._clickOutside[vnode.context._uid];

      app.removeEventListener("click", onClick, true);
      app.removeEventListener("mousedown", onMousedown, true);
    });

    delete el._clickOutside[vnode.context._uid];
  },
};

export default ClickOutside;
