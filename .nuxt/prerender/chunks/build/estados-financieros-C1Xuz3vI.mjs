import { defineComponent, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/server-renderer/index.mjs';
import { FileSpreadsheet, Eye, Download, FileText } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './SectionHeader-BVQxLqRn.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "estados-financieros",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-b from-pink-50 to-purple-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              icon: unref(FileSpreadsheet),
              title: "Estados Financieros",
              subtitle: "Documentaci\xF3n financiera de la Corporaci\xF3n Ahora"
            }, null, _parent2, _scopeId));
            _push2(`<div class="max-w-4xl mx-auto"${_scopeId}><div class="mb-12"${_scopeId}><h3 class="text-2xl font-semibold text-gray-800 mb-6"${_scopeId}>A\xF1o 2024</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"${_scopeId}><div class="flex items-start space-x-4"${_scopeId}><div class="bg-green-100 p-3 rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FileSpreadsheet), { class: "w-8 h-8 text-green-600" }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-grow"${_scopeId}><h4 class="text-lg font-medium text-gray-800 mb-2"${_scopeId}>Balance General 2024</h4><p class="text-sm text-gray-600 mb-4"${_scopeId}>Formato Excel (.xlsx)</p><div class="flex items-center space-x-4"${_scopeId}><a href="#" class="inline-flex items-center space-x-2 text-sm text-green-600 hover:text-green-700"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Eye), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Vista Previa</span></a><a href="#" class="inline-flex items-center space-x-2 text-sm text-green-600 hover:text-green-700"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Descargar</span></a></div></div></div></div><div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"${_scopeId}><div class="flex items-start space-x-4"${_scopeId}><div class="bg-red-100 p-3 rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FileText), { class: "w-8 h-8 text-red-600" }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-grow"${_scopeId}><h4 class="text-lg font-medium text-gray-800 mb-2"${_scopeId}>Informe Financiero 2024</h4><p class="text-sm text-gray-600 mb-4"${_scopeId}>Formato PDF</p><div class="flex items-center space-x-4"${_scopeId}><a href="#" class="inline-flex items-center space-x-2 text-sm text-red-600 hover:text-red-700"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Eye), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Vista Previa</span></a><a href="#" class="inline-flex items-center space-x-2 text-sm text-red-600 hover:text-red-700"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Descargar</span></a></div></div></div></div></div></div><div${_scopeId}><h3 class="text-2xl font-semibold text-gray-800 mb-6"${_scopeId}>Hist\xF3rico</h3><div class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList([2023, 2022, 2021], (year) => {
              _push2(`<div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"${_scopeId}><h4 class="text-lg font-semibold text-gray-800 mb-4"${_scopeId}>A\xF1o ${ssrInterpolate(year)}</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div class="flex items-center space-x-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(FileSpreadsheet), { class: "w-6 h-6 text-green-600" }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><p class="font-medium text-gray-800"${_scopeId}>Balance General ${ssrInterpolate(year)}</p><div class="flex items-center space-x-4 mt-2"${_scopeId}><a href="#" class="text-sm text-green-600 hover:text-green-700 flex items-center space-x-1"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Eye), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Ver</span></a><a href="#" class="text-sm text-green-600 hover:text-green-700 flex items-center space-x-1"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Descargar</span></a></div></div></div><div class="flex items-center space-x-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(FileText), { class: "w-6 h-6 text-red-600" }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><p class="font-medium text-gray-800"${_scopeId}>Informe Financiero ${ssrInterpolate(year)}</p><div class="flex items-center space-x-4 mt-2"${_scopeId}><a href="#" class="text-sm text-red-600 hover:text-red-700 flex items-center space-x-1"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Eye), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Ver</span></a><a href="#" class="text-sm text-red-600 hover:text-red-700 flex items-center space-x-1"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Descargar</span></a></div></div></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                icon: unref(FileSpreadsheet),
                title: "Estados Financieros",
                subtitle: "Documentaci\xF3n financiera de la Corporaci\xF3n Ahora"
              }, null, 8, ["icon"]),
              createVNode("div", { class: "max-w-4xl mx-auto" }, [
                createVNode("div", { class: "mb-12" }, [
                  createVNode("h3", { class: "text-2xl font-semibold text-gray-800 mb-6" }, "A\xF1o 2024"),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                    createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg" }, [
                      createVNode("div", { class: "flex items-start space-x-4" }, [
                        createVNode("div", { class: "bg-green-100 p-3 rounded-lg" }, [
                          createVNode(unref(FileSpreadsheet), { class: "w-8 h-8 text-green-600" })
                        ]),
                        createVNode("div", { class: "flex-grow" }, [
                          createVNode("h4", { class: "text-lg font-medium text-gray-800 mb-2" }, "Balance General 2024"),
                          createVNode("p", { class: "text-sm text-gray-600 mb-4" }, "Formato Excel (.xlsx)"),
                          createVNode("div", { class: "flex items-center space-x-4" }, [
                            createVNode("a", {
                              href: "#",
                              class: "inline-flex items-center space-x-2 text-sm text-green-600 hover:text-green-700"
                            }, [
                              createVNode(unref(Eye), { class: "w-4 h-4" }),
                              createVNode("span", null, "Vista Previa")
                            ]),
                            createVNode("a", {
                              href: "#",
                              class: "inline-flex items-center space-x-2 text-sm text-green-600 hover:text-green-700"
                            }, [
                              createVNode(unref(Download), { class: "w-4 h-4" }),
                              createVNode("span", null, "Descargar")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg" }, [
                      createVNode("div", { class: "flex items-start space-x-4" }, [
                        createVNode("div", { class: "bg-red-100 p-3 rounded-lg" }, [
                          createVNode(unref(FileText), { class: "w-8 h-8 text-red-600" })
                        ]),
                        createVNode("div", { class: "flex-grow" }, [
                          createVNode("h4", { class: "text-lg font-medium text-gray-800 mb-2" }, "Informe Financiero 2024"),
                          createVNode("p", { class: "text-sm text-gray-600 mb-4" }, "Formato PDF"),
                          createVNode("div", { class: "flex items-center space-x-4" }, [
                            createVNode("a", {
                              href: "#",
                              class: "inline-flex items-center space-x-2 text-sm text-red-600 hover:text-red-700"
                            }, [
                              createVNode(unref(Eye), { class: "w-4 h-4" }),
                              createVNode("span", null, "Vista Previa")
                            ]),
                            createVNode("a", {
                              href: "#",
                              class: "inline-flex items-center space-x-2 text-sm text-red-600 hover:text-red-700"
                            }, [
                              createVNode(unref(Download), { class: "w-4 h-4" }),
                              createVNode("span", null, "Descargar")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("h3", { class: "text-2xl font-semibold text-gray-800 mb-6" }, "Hist\xF3rico"),
                  createVNode("div", { class: "space-y-4" }, [
                    (openBlock(), createBlock(Fragment, null, renderList([2023, 2022, 2021], (year) => {
                      return createVNode("div", {
                        key: year,
                        class: "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
                      }, [
                        createVNode("h4", { class: "text-lg font-semibold text-gray-800 mb-4" }, "A\xF1o " + toDisplayString(year), 1),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", { class: "flex items-center space-x-4" }, [
                            createVNode(unref(FileSpreadsheet), { class: "w-6 h-6 text-green-600" }),
                            createVNode("div", null, [
                              createVNode("p", { class: "font-medium text-gray-800" }, "Balance General " + toDisplayString(year), 1),
                              createVNode("div", { class: "flex items-center space-x-4 mt-2" }, [
                                createVNode("a", {
                                  href: "#",
                                  class: "text-sm text-green-600 hover:text-green-700 flex items-center space-x-1"
                                }, [
                                  createVNode(unref(Eye), { class: "w-4 h-4" }),
                                  createVNode("span", null, "Ver")
                                ]),
                                createVNode("a", {
                                  href: "#",
                                  class: "text-sm text-green-600 hover:text-green-700 flex items-center space-x-1"
                                }, [
                                  createVNode(unref(Download), { class: "w-4 h-4" }),
                                  createVNode("span", null, "Descargar")
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center space-x-4" }, [
                            createVNode(unref(FileText), { class: "w-6 h-6 text-red-600" }),
                            createVNode("div", null, [
                              createVNode("p", { class: "font-medium text-gray-800" }, "Informe Financiero " + toDisplayString(year), 1),
                              createVNode("div", { class: "flex items-center space-x-4 mt-2" }, [
                                createVNode("a", {
                                  href: "#",
                                  class: "text-sm text-red-600 hover:text-red-700 flex items-center space-x-1"
                                }, [
                                  createVNode(unref(Eye), { class: "w-4 h-4" }),
                                  createVNode("span", null, "Ver")
                                ]),
                                createVNode("a", {
                                  href: "#",
                                  class: "text-sm text-red-600 hover:text-red-700 flex items-center space-x-1"
                                }, [
                                  createVNode(unref(Download), { class: "w-4 h-4" }),
                                  createVNode("span", null, "Descargar")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]);
                    }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/estados-financieros.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=estados-financieros-C1Xuz3vI.mjs.map
