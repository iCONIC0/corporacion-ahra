import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/server-renderer/index.mjs';
import { UserCircle } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DirectoryCard",
  __ssrInlineRender: true,
  props: {
    name: {},
    position: {},
    period: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white/80 backdrop-blur-sm rounded-md p-6 shadow-lg hover:shadow-xl transition-all" }, _attrs))}><div class="flex items-start space-x-4">`);
      _push(ssrRenderComponent(unref(UserCircle), { class: "w-12 h-12 text-pink-500 flex-shrink-0" }, null, _parent));
      _push(`<div><h3 class="text-lg font-semibold text-gray-800">${ssrInterpolate(_ctx.name)}</h3><p class="text-pink-600 font-medium">${ssrInterpolate(_ctx.position)}</p><p class="text-sm text-gray-500 mt-1">Per\xEDodo: ${ssrInterpolate(_ctx.period)}</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DirectoryCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=DirectoryCard-BZYT3jCy.mjs.map
