import { defineComponent, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderVNode, ssrInterpolate } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/server-renderer/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Section",
  __ssrInlineRender: true,
  props: {
    className: {},
    gradient: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `py-20 bg-gradient-to-b ${_ctx.gradient} ${_ctx.className}`
      }, _attrs))}><div class="container mx-auto px-6"><div class="max-w-4xl mx-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SectionHeader",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    subtitle: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mb-12" }, _attrs))}><div class="flex items-center justify-center space-x-4">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.icon), { class: "w-10 h-10 text-pink-500" }, null), _parent);
      _push(`<h2 class="text-3xl md:text-4xl font-bold">${ssrInterpolate(_ctx.title)}</h2></div>`);
      if (_ctx.subtitle) {
        _push(`<p class="mt-4 text-gray-600 max-w-2xl mx-auto">${ssrInterpolate(_ctx.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=SectionHeader-BVQxLqRn.mjs.map
