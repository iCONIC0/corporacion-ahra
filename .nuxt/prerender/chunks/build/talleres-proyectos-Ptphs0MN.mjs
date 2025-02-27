import { _ as _sfc_main$1, a as _sfc_main$2 } from './SectionHeader-BVQxLqRn.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/server-renderer/index.mjs';
import { Rocket, Calendar } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "talleres-proyectos",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Taller de Arte y Expresi\xF3n",
        description: "Espacio creativo donde los ni\xF1os y adolescentes pueden expresar sus emociones a trav\xE9s de diferentes t\xE9cnicas art\xEDsticas, incluyendo pintura, dibujo y manualidades.",
        date: "Marzo 2024 - Diciembre 2024",
        image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        title: "Proyecto de Huerto Comunitario",
        description: "Iniciativa que busca conectar a los participantes con la naturaleza y ense\xF1ar sobre sostenibilidad a trav\xE9s del cultivo de vegetales y hierbas.",
        date: "Abril 2024 - Octubre 2024",
        image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        title: "Taller de M\xFAsica y Percusi\xF3n",
        description: "Actividad que fomenta el desarrollo de habilidades musicales y trabajo en equipo a trav\xE9s del aprendizaje de instrumentos y ritmos.",
        date: "Mayo 2024 - Noviembre 2024",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        title: "Proyecto de Apoyo Escolar",
        description: "Programa de refuerzo acad\xE9mico personalizado para mejorar el rendimiento escolar y desarrollar h\xE1bitos de estudio efectivos.",
        date: "Marzo 2024 - Diciembre 2024",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        title: "Taller de Deportes y Vida Saludable",
        description: "Actividades deportivas y educaci\xF3n en h\xE1bitos saludables para promover el bienestar f\xEDsico y mental de los participantes.",
        date: "Abril 2024 - Noviembre 2024",
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = _sfc_main$1;
      const _component_SectionHeader = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-b from-pink-50 to-purple-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Section, { gradient: "from-white to-pink-50" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionHeader, {
              icon: unref(Rocket),
              title: "Talleres y Proyectos",
              subtitle: "Conoce nuestras actividades y programas en desarrollo"
            }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-8"${_scopeId}><!--[-->`);
            ssrRenderList(items, (item, index) => {
              _push2(`<div class="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"${_scopeId}><div class="flex flex-col md:flex-row"${_scopeId}><div class="md:w-1/3"${_scopeId}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="w-full h-64 object-cover"${_scopeId}></div><div class="flex-grow p-6"${_scopeId}><div class="flex flex-col h-full"${_scopeId}><div class="flex-grow"${_scopeId}><h3 class="text-xl font-semibold text-pink-600 mb-2"${_scopeId}>${ssrInterpolate(item.title)}</h3><p class="text-gray-700 leading-relaxed"${_scopeId}>${ssrInterpolate(item.description)}</p></div><div class="flex items-center space-x-2 text-sm text-gray-500 mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(item.date)}</span></div></div></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(_component_SectionHeader, {
                icon: unref(Rocket),
                title: "Talleres y Proyectos",
                subtitle: "Conoce nuestras actividades y programas en desarrollo"
              }, null, 8, ["icon"]),
              createVNode("div", { class: "space-y-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(items, (item, index) => {
                  return createVNode("div", {
                    key: index,
                    class: "bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  }, [
                    createVNode("div", { class: "flex flex-col md:flex-row" }, [
                      createVNode("div", { class: "md:w-1/3" }, [
                        createVNode("img", {
                          src: item.image,
                          alt: item.title,
                          class: "w-full h-64 object-cover"
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "flex-grow p-6" }, [
                        createVNode("div", { class: "flex flex-col h-full" }, [
                          createVNode("div", { class: "flex-grow" }, [
                            createVNode("h3", { class: "text-xl font-semibold text-pink-600 mb-2" }, toDisplayString(item.title), 1),
                            createVNode("p", { class: "text-gray-700 leading-relaxed" }, toDisplayString(item.description), 1)
                          ]),
                          createVNode("div", { class: "flex items-center space-x-2 text-sm text-gray-500 mt-4" }, [
                            createVNode(unref(Calendar), { class: "w-4 h-4" }),
                            createVNode("span", null, toDisplayString(item.date), 1)
                          ])
                        ])
                      ])
                    ])
                  ]);
                }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/talleres-proyectos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=talleres-proyectos-Ptphs0MN.mjs.map
