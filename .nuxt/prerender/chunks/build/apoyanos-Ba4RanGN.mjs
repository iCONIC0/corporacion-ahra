import { _ as _sfc_main$1, a as _sfc_main$2 } from './SectionHeader-BVQxLqRn.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/server-renderer/index.mjs';
import { Heart, Building2, Building, CreditCard, FileText, Mail, CheckCircle, Home, GraduationCap, Users } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "apoyanos",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = _sfc_main$1;
      const _component_SectionHeader = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-b from-pink-50 to-purple-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Section, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionHeader, {
              icon: unref(Heart),
              title: "Ap\xF3yanos",
              subtitle: "Tu apoyo hace posible nuestra labor de protecci\xF3n a la ni\xF1ez"
            }, null, _parent2, _scopeId));
            _push2(`<div class="max-w-4xl mx-auto"${_scopeId}><div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8"${_scopeId}><p class="text-gray-700 leading-relaxed"${_scopeId}> En Corporaci\xF3n Ahora, cada donaci\xF3n contribuye directamente a mejorar la vida de ni\xF1os y adolescentes. Tu apoyo nos permite continuar brindando protecci\xF3n, educaci\xF3n y oportunidades de desarrollo. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"${_scopeId}><div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"${_scopeId}><div class="flex items-center space-x-3 mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Building2), { class: "w-8 h-8 text-pink-500" }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-2xl font-semibold text-gray-800"${_scopeId}>Transferencia Bancaria</h3></div><div class="space-y-4"${_scopeId}><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Building), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Nombre</p><p class="text-gray-600"${_scopeId}>Corporaci\xF3n Ahora</p></div></div><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CreditCard), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Cuenta Corriente</p><p class="text-gray-600"${_scopeId}>N\xB0 123456789</p></div></div><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Building2), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Banco</p><p class="text-gray-600"${_scopeId}>Banco Estado</p></div></div><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>RUT</p><p class="text-gray-600"${_scopeId}>72.043.400-8</p></div></div><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Mail), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Correo para comprobante</p><p class="text-gray-600"${_scopeId}>residenciaahora@gmail.com</p></div></div></div></div><div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"${_scopeId}><div class="flex items-center space-x-3 mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CreditCard), { class: "w-8 h-8 text-pink-500" }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-2xl font-semibold text-gray-800"${_scopeId}>Pago con Flow</h3></div><p class="text-gray-700 mb-6"${_scopeId}> Realiza tu donaci\xF3n de manera segura y r\xE1pida utilizando Flow, que acepta diferentes medios de pago: </p><ul class="space-y-3 mb-8"${_scopeId}><li class="flex items-center space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-pink-500" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Tarjetas de cr\xE9dito y d\xE9bito</span></li><li class="flex items-center space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-pink-500" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>WebPay</span></li><li class="flex items-center space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-pink-500" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Transferencia bancaria</span></li></ul><button class="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CreditCard), { class: "w-5 h-5" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Donar con Flow</span></button></div></div><div class="mt-8 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"${_scopeId}><h3 class="text-2xl font-semibold text-pink-600 mb-4"${_scopeId}>\xBFPor qu\xE9 donar?</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-6"${_scopeId}><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Home), { class: "w-6 h-6 text-pink-500 flex-shrink-0" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><h4 class="font-medium mb-2"${_scopeId}>Hogar Seguro</h4><p class="text-gray-600 text-sm"${_scopeId}>Proporcionamos un ambiente seguro y acogedor para ni\xF1os y adolescentes.</p></div></div><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(GraduationCap), { class: "w-6 h-6 text-pink-500 flex-shrink-0" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><h4 class="font-medium mb-2"${_scopeId}>Educaci\xF3n</h4><p class="text-gray-600 text-sm"${_scopeId}>Apoyamos su desarrollo acad\xE9mico y personal.</p></div></div><div class="flex items-start space-x-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Users), { class: "w-6 h-6 text-pink-500 flex-shrink-0" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><h4 class="font-medium mb-2"${_scopeId}>Apoyo Integral</h4><p class="text-gray-600 text-sm"${_scopeId}>Brindamos atenci\xF3n psicosocial y acompa\xF1amiento continuo.</p></div></div></div></div></div>`);
          } else {
            return [
              createVNode(_component_SectionHeader, {
                icon: unref(Heart),
                title: "Ap\xF3yanos",
                subtitle: "Tu apoyo hace posible nuestra labor de protecci\xF3n a la ni\xF1ez"
              }, null, 8, ["icon"]),
              createVNode("div", { class: "max-w-4xl mx-auto" }, [
                createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8" }, [
                  createVNode("p", { class: "text-gray-700 leading-relaxed" }, " En Corporaci\xF3n Ahora, cada donaci\xF3n contribuye directamente a mejorar la vida de ni\xF1os y adolescentes. Tu apoyo nos permite continuar brindando protecci\xF3n, educaci\xF3n y oportunidades de desarrollo. ")
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [
                  createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg" }, [
                    createVNode("div", { class: "flex items-center space-x-3 mb-6" }, [
                      createVNode(unref(Building2), { class: "w-8 h-8 text-pink-500" }),
                      createVNode("h3", { class: "text-2xl font-semibold text-gray-800" }, "Transferencia Bancaria")
                    ]),
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "flex items-start space-x-3" }, [
                        createVNode(unref(Building), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }),
                        createVNode("div", null, [
                          createVNode("p", { class: "font-medium" }, "Nombre"),
                          createVNode("p", { class: "text-gray-600" }, "Corporaci\xF3n Ahora")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-start space-x-3" }, [
                        createVNode(unref(CreditCard), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }),
                        createVNode("div", null, [
                          createVNode("p", { class: "font-medium" }, "Cuenta Corriente"),
                          createVNode("p", { class: "text-gray-600" }, "N\xB0 123456789")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-start space-x-3" }, [
                        createVNode(unref(Building2), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }),
                        createVNode("div", null, [
                          createVNode("p", { class: "font-medium" }, "Banco"),
                          createVNode("p", { class: "text-gray-600" }, "Banco Estado")
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
                        createVNode(unref(Mail), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }),
                        createVNode("div", null, [
                          createVNode("p", { class: "font-medium" }, "Correo para comprobante"),
                          createVNode("p", { class: "text-gray-600" }, "residenciaahora@gmail.com")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg" }, [
                    createVNode("div", { class: "flex items-center space-x-3 mb-6" }, [
                      createVNode(unref(CreditCard), { class: "w-8 h-8 text-pink-500" }),
                      createVNode("h3", { class: "text-2xl font-semibold text-gray-800" }, "Pago con Flow")
                    ]),
                    createVNode("p", { class: "text-gray-700 mb-6" }, " Realiza tu donaci\xF3n de manera segura y r\xE1pida utilizando Flow, que acepta diferentes medios de pago: "),
                    createVNode("ul", { class: "space-y-3 mb-8" }, [
                      createVNode("li", { class: "flex items-center space-x-2" }, [
                        createVNode(unref(CheckCircle), { class: "w-5 h-5 text-pink-500" }),
                        createVNode("span", null, "Tarjetas de cr\xE9dito y d\xE9bito")
                      ]),
                      createVNode("li", { class: "flex items-center space-x-2" }, [
                        createVNode(unref(CheckCircle), { class: "w-5 h-5 text-pink-500" }),
                        createVNode("span", null, "WebPay")
                      ]),
                      createVNode("li", { class: "flex items-center space-x-2" }, [
                        createVNode(unref(CheckCircle), { class: "w-5 h-5 text-pink-500" }),
                        createVNode("span", null, "Transferencia bancaria")
                      ])
                    ]),
                    createVNode("button", { class: "w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center space-x-2" }, [
                      createVNode(unref(CreditCard), { class: "w-5 h-5" }),
                      createVNode("span", null, "Donar con Flow")
                    ])
                  ])
                ]),
                createVNode("div", { class: "mt-8 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg" }, [
                  createVNode("h3", { class: "text-2xl font-semibold text-pink-600 mb-4" }, "\xBFPor qu\xE9 donar?"),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
                    createVNode("div", { class: "flex items-start space-x-3" }, [
                      createVNode(unref(Home), { class: "w-6 h-6 text-pink-500 flex-shrink-0" }),
                      createVNode("div", null, [
                        createVNode("h4", { class: "font-medium mb-2" }, "Hogar Seguro"),
                        createVNode("p", { class: "text-gray-600 text-sm" }, "Proporcionamos un ambiente seguro y acogedor para ni\xF1os y adolescentes.")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-start space-x-3" }, [
                      createVNode(unref(GraduationCap), { class: "w-6 h-6 text-pink-500 flex-shrink-0" }),
                      createVNode("div", null, [
                        createVNode("h4", { class: "font-medium mb-2" }, "Educaci\xF3n"),
                        createVNode("p", { class: "text-gray-600 text-sm" }, "Apoyamos su desarrollo acad\xE9mico y personal.")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-start space-x-3" }, [
                      createVNode(unref(Users), { class: "w-6 h-6 text-pink-500 flex-shrink-0" }),
                      createVNode("div", null, [
                        createVNode("h4", { class: "font-medium mb-2" }, "Apoyo Integral"),
                        createVNode("p", { class: "text-gray-600 text-sm" }, "Brindamos atenci\xF3n psicosocial y acompa\xF1amiento continuo.")
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apoyanos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=apoyanos-Ba4RanGN.mjs.map
