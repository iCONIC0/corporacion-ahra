import { defineComponent, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderVNode, ssrInterpolate } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    icon: {},
    gradient: {},
    className: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `bg-gradient-to-br ${_ctx.gradient} rounded-md p-6 shadow-lg hover:shadow-xl transition-shadow ${_ctx.className}`
      }, _attrs))}>`);
      if (_ctx.icon) {
        _push(`<div class="flex items-center space-x-3 mb-4">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.icon), { class: "w-6 h-6 text-pink-500" }, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h4 class="font-semibold text-lg mb-3 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">${ssrInterpolate(_ctx.title)}</h4><p class="text-gray-700">${ssrInterpolate(_ctx.description)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=Card-Cya0fanM.mjs.map
