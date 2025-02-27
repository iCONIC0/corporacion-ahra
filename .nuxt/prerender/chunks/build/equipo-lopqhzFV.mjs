import { defineComponent, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/server-renderer/index.mjs';
import { Building, FileText, Calendar, UserCircle, Mail, MapPin } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './SectionHeader-BVQxLqRn.mjs';
import { _ as _sfc_main$3 } from './DirectoryCard-BZYT3jCy.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "equipo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-b from-pink-50 to-purple-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, { gradient: "from-white to-pink-50" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              icon: unref(Building),
              title: "Identificaci\xF3n de la Entidad",
              subtitle: "Corporaci\xF3n Ahora"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"${_scopeId}><div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"${_scopeId}><h3 class="text-xl font-semibold text-pink-600 mb-4"${_scopeId}>Informaci\xF3n General</h3><div class="space-y-3"${_scopeId}><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Building), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Organizaci\xF3n</p><p class="text-gray-600"${_scopeId}>Corporaci\xF3n sin fines de lucro</p></div></div><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>RUT</p><p class="text-gray-600"${_scopeId}>72.043.400-8</p></div></div><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Personalidad Jur\xEDdica</p><p class="text-gray-600"${_scopeId}>N\xB012188 con fecha 30-11-1995</p></div></div></div></div><div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"${_scopeId}><h3 class="text-xl font-semibold text-pink-600 mb-4"${_scopeId}>Representante Legal</h3><div class="space-y-3"${_scopeId}><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(UserCircle), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Nombre</p><p class="text-gray-600"${_scopeId}>Luis Ricardo Valverde Casanova</p></div></div><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Mail), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Correo electr\xF3nico</p><a href="mailto:l.ricardovalverde@gmail.com" class="text-gray-600 hover:text-pink-500 transition-colors"${_scopeId}> l.ricardovalverde@gmail.com </a></div></div><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MapPin), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Sede en Valdivia</p><p class="text-gray-600"${_scopeId}>Runca 590, Villa Rucahue, Valdivia</p></div></div></div></div></div><div class="mt-12"${_scopeId}><h2 class="text-3xl font-bold text-center mb-12"${_scopeId}>Organigrama</h2><div class="max-w-4xl mx-auto"${_scopeId}><div class="flex justify-center mb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "Luis Ricardo Valverde Casanova",
              position: "Presidente",
              period: "R.U.N: 6.372.563-3",
              className: "w-80"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "Claudia Giubergia Veloso",
              position: "Vice-Presidente",
              period: "R.U.N: 12.383.683-9"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "Claudio Andr\xE9s Carrasco Walker",
              position: "Secretario",
              period: "R.U.N: 8.672.893-1"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "Betty Selman Barrientos",
              position: "Tesorera",
              period: "R.U.N: 15.381.039-7"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "Nelson Mendoza Jara",
              position: "Director",
              period: "R.U.N: 8.754.574-1"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "Anna Bonan",
              position: "Directora",
              period: "R.U.N: 27.439.385-8"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "Carla Romeny Kunstmann",
              position: "Directora",
              period: "R.U.N: 14.417.692-8"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "Daniel Vaccaro Bartelsman",
              position: "Socio Colaborador del Directorio",
              period: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "Josefina Zerene Bustamante",
              position: "Socia Colaboradora del Directorio",
              period: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                icon: unref(Building),
                title: "Identificaci\xF3n de la Entidad",
                subtitle: "Corporaci\xF3n Ahora"
              }, null, 8, ["icon"]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" }, [
                createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg" }, [
                  createVNode("h3", { class: "text-xl font-semibold text-pink-600 mb-4" }, "Informaci\xF3n General"),
                  createVNode("div", { class: "space-y-3" }, [
                    createVNode("div", { class: "flex items-start space-x-3" }, [
                      createVNode(unref(Building), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }),
                      createVNode("div", null, [
                        createVNode("p", { class: "font-medium" }, "Organizaci\xF3n"),
                        createVNode("p", { class: "text-gray-600" }, "Corporaci\xF3n sin fines de lucro")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-start space-x-3" }, [
                      createVNode(unref(FileText), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }),
                      createVNode("div", null, [
                        createVNode("p", { class: "font-medium" }, "RUT"),
                        createVNode("p", { class: "text-gray-600" }, "72.043.400-8")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-start space-x-3" }, [
                      createVNode(unref(Calendar), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }),
                      createVNode("div", null, [
                        createVNode("p", { class: "font-medium" }, "Personalidad Jur\xEDdica"),
                        createVNode("p", { class: "text-gray-600" }, "N\xB012188 con fecha 30-11-1995")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg" }, [
                  createVNode("h3", { class: "text-xl font-semibold text-pink-600 mb-4" }, "Representante Legal"),
                  createVNode("div", { class: "space-y-3" }, [
                    createVNode("div", { class: "flex items-start space-x-3" }, [
                      createVNode(unref(UserCircle), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }),
                      createVNode("div", null, [
                        createVNode("p", { class: "font-medium" }, "Nombre"),
                        createVNode("p", { class: "text-gray-600" }, "Luis Ricardo Valverde Casanova")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-start space-x-3" }, [
                      createVNode(unref(Mail), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }),
                      createVNode("div", null, [
                        createVNode("p", { class: "font-medium" }, "Correo electr\xF3nico"),
                        createVNode("a", {
                          href: "mailto:l.ricardovalverde@gmail.com",
                          class: "text-gray-600 hover:text-pink-500 transition-colors"
                        }, " l.ricardovalverde@gmail.com ")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-start space-x-3" }, [
                      createVNode(unref(MapPin), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }),
                      createVNode("div", null, [
                        createVNode("p", { class: "font-medium" }, "Sede en Valdivia"),
                        createVNode("p", { class: "text-gray-600" }, "Runca 590, Villa Rucahue, Valdivia")
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "mt-12" }, [
                createVNode("h2", { class: "text-3xl font-bold text-center mb-12" }, "Organigrama"),
                createVNode("div", { class: "max-w-4xl mx-auto" }, [
                  createVNode("div", { class: "flex justify-center mb-8" }, [
                    createVNode(_sfc_main$3, {
                      name: "Luis Ricardo Valverde Casanova",
                      position: "Presidente",
                      period: "R.U.N: 6.372.563-3",
                      className: "w-80"
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" }, [
                    createVNode(_sfc_main$3, {
                      name: "Claudia Giubergia Veloso",
                      position: "Vice-Presidente",
                      period: "R.U.N: 12.383.683-9"
                    }),
                    createVNode(_sfc_main$3, {
                      name: "Claudio Andr\xE9s Carrasco Walker",
                      position: "Secretario",
                      period: "R.U.N: 8.672.893-1"
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" }, [
                    createVNode(_sfc_main$3, {
                      name: "Betty Selman Barrientos",
                      position: "Tesorera",
                      period: "R.U.N: 15.381.039-7"
                    }),
                    createVNode(_sfc_main$3, {
                      name: "Nelson Mendoza Jara",
                      position: "Director",
                      period: "R.U.N: 8.754.574-1"
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" }, [
                    createVNode(_sfc_main$3, {
                      name: "Anna Bonan",
                      position: "Directora",
                      period: "R.U.N: 27.439.385-8"
                    }),
                    createVNode(_sfc_main$3, {
                      name: "Carla Romeny Kunstmann",
                      position: "Directora",
                      period: "R.U.N: 14.417.692-8"
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                    createVNode(_sfc_main$3, {
                      name: "Daniel Vaccaro Bartelsman",
                      position: "Socio Colaborador del Directorio",
                      period: ""
                    }),
                    createVNode(_sfc_main$3, {
                      name: "Josefina Zerene Bustamante",
                      position: "Socia Colaboradora del Directorio",
                      period: ""
                    })
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/equipo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=equipo-lopqhzFV.mjs.map
