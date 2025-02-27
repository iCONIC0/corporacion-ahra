import { _ as _sfc_main$1, a as _sfc_main$2 } from './SectionHeader-BVQxLqRn.mjs';
import { _ as _sfc_main$3 } from './Card-Cya0fanM.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/server-renderer/index.mjs';
import { Target, Rocket, Eye, Heart, Shield, Award } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mision-vision",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = _sfc_main$1;
      const _component_SectionHeader = _sfc_main$2;
      const _component_Card = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-b from-pink-50 to-purple-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Section, { gradient: "from-white to-pink-50" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionHeader, {
              icon: unref(Target),
              title: "Misi\xF3n y Visi\xF3n",
              subtitle: "Nuestro prop\xF3sito y aspiraciones"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-12"${_scopeId}><div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"${_scopeId}><div class="flex items-center space-x-3 mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Rocket), { class: "w-8 h-8 text-pink-500" }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-2xl font-semibold text-gray-800"${_scopeId}>Misi\xF3n</h3></div><p class="text-gray-700 leading-relaxed"${_scopeId}> En la Corporacion &quot;Ahora&quot; buscamos brindar una atenci\xF3n integral a ni\xF1os y adolescentes con vulneraci\xF3n de derechos de car\xE1cter grave y que han sido separados de sus familias de origen. </p><p class="text-gray-700 leading-relaxed mt-4"${_scopeId}> Mediante un equipo multidisciplinario, con el fin de impulsar su desarrollo utilizando programas para la prevenci\xF3n, el acogimiento y el fortalecimiento de sus redes familiares y sociales. </p></div><div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"${_scopeId}><div class="flex items-center space-x-3 mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Eye), { class: "w-8 h-8 text-pink-500" }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-2xl font-semibold text-gray-800"${_scopeId}>Visi\xF3n</h3></div><p class="text-gray-700 leading-relaxed"${_scopeId}> La Instituci\xF3n Corporaci\xF3n Ahora pretende revertir la situaci\xF3n de los ni\xF1os y adolescentes vulnerados en sus derechos y restituir principalmente el derecho de vivir en familia bajo est\xE1ndares de calidad y de protecci\xF3n integradora, con valores y principios humanos que aseguren procesos de intervenci\xF3n protectores de derechos a infancia. </p></div></div><div class="mt-12"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Card, {
              title: "Compromiso",
              description: "Dedicaci\xF3n total a la protecci\xF3n y desarrollo integral de cada ni\xF1o y adolescente",
              icon: unref(Heart),
              gradient: "from-pink-50 to-pink-100"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Card, {
              title: "Integridad",
              description: "Actuamos con transparencia y \xE9tica en todos nuestros procesos",
              icon: unref(Shield),
              gradient: "from-purple-50 to-purple-100"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Card, {
              title: "Excelencia",
              description: "Buscamos los m\xE1s altos est\xE1ndares de calidad en nuestra atenci\xF3n",
              icon: unref(Award),
              gradient: "from-pink-50 to-pink-100"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_component_SectionHeader, {
                icon: unref(Target),
                title: "Misi\xF3n y Visi\xF3n",
                subtitle: "Nuestro prop\xF3sito y aspiraciones"
              }, null, 8, ["icon"]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-12" }, [
                createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow" }, [
                  createVNode("div", { class: "flex items-center space-x-3 mb-6" }, [
                    createVNode(unref(Rocket), { class: "w-8 h-8 text-pink-500" }),
                    createVNode("h3", { class: "text-2xl font-semibold text-gray-800" }, "Misi\xF3n")
                  ]),
                  createVNode("p", { class: "text-gray-700 leading-relaxed" }, ' En la Corporacion "Ahora" buscamos brindar una atenci\xF3n integral a ni\xF1os y adolescentes con vulneraci\xF3n de derechos de car\xE1cter grave y que han sido separados de sus familias de origen. '),
                  createVNode("p", { class: "text-gray-700 leading-relaxed mt-4" }, " Mediante un equipo multidisciplinario, con el fin de impulsar su desarrollo utilizando programas para la prevenci\xF3n, el acogimiento y el fortalecimiento de sus redes familiares y sociales. ")
                ]),
                createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow" }, [
                  createVNode("div", { class: "flex items-center space-x-3 mb-6" }, [
                    createVNode(unref(Eye), { class: "w-8 h-8 text-pink-500" }),
                    createVNode("h3", { class: "text-2xl font-semibold text-gray-800" }, "Visi\xF3n")
                  ]),
                  createVNode("p", { class: "text-gray-700 leading-relaxed" }, " La Instituci\xF3n Corporaci\xF3n Ahora pretende revertir la situaci\xF3n de los ni\xF1os y adolescentes vulnerados en sus derechos y restituir principalmente el derecho de vivir en familia bajo est\xE1ndares de calidad y de protecci\xF3n integradora, con valores y principios humanos que aseguren procesos de intervenci\xF3n protectores de derechos a infancia. ")
                ])
              ]),
              createVNode("div", { class: "mt-12" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
                  createVNode(_component_Card, {
                    title: "Compromiso",
                    description: "Dedicaci\xF3n total a la protecci\xF3n y desarrollo integral de cada ni\xF1o y adolescente",
                    icon: unref(Heart),
                    gradient: "from-pink-50 to-pink-100"
                  }, null, 8, ["icon"]),
                  createVNode(_component_Card, {
                    title: "Integridad",
                    description: "Actuamos con transparencia y \xE9tica en todos nuestros procesos",
                    icon: unref(Shield),
                    gradient: "from-purple-50 to-purple-100"
                  }, null, 8, ["icon"]),
                  createVNode(_component_Card, {
                    title: "Excelencia",
                    description: "Buscamos los m\xE1s altos est\xE1ndares de calidad en nuestra atenci\xF3n",
                    icon: unref(Award),
                    gradient: "from-pink-50 to-pink-100"
                  }, null, 8, ["icon"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mision-vision.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=mision-vision-DgdzBHQG.mjs.map
