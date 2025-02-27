import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, withModifiers, withDirectives, vModelText, vModelSelect, useSSRContext } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/server-renderer/index.mjs';
import { Mail, Building, MapPin, Phone, Send } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './SectionHeader-BVQxLqRn.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contacto",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      name: "",
      email: "",
      type: "",
      subject: "",
      message: ""
    });
    const handleSubmit = () => {
      console.log("Form submitted:", formData.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-b from-pink-50 to-purple-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              icon: unref(Mail),
              title: "Cont\xE1ctanos",
              subtitle: "En este formulario puedes dejarnos tu Consulta, Reclamo o Sugerencia."
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-12"${_scopeId}><div class="space-y-8"${_scopeId}><div${_scopeId}><h3 class="text-2xl font-semibold mb-4"${_scopeId}>Informaci\xF3n de Contacto</h3><div class="space-y-6"${_scopeId}><div class="flex items-start space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Building), { class: "w-6 h-6 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Organizaci\xF3n</p><p class="text-gray-600"${_scopeId}>Corporaci\xF3n sin fines de lucro</p><p class="text-gray-600"${_scopeId}>RUT: 72043.400-8</p><p class="text-gray-600"${_scopeId}>Personalidad Jur\xEDdica N\xB012188 (30-11-1995)</p></div></div><div class="flex items-start space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MapPin), { class: "w-6 h-6 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Sede en Valdivia</p><p class="text-gray-600"${_scopeId}>Runca N\xB0 590, Valdivia</p></div></div><div class="flex items-start space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Phone), { class: "w-6 h-6 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Tel\xE9fonos</p><p class="text-gray-600"${_scopeId}>Celular: +56956984103</p><p class="text-gray-600"${_scopeId}>Fijo: 632-411511</p></div></div><div class="flex items-start space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Mail), { class: "w-6 h-6 text-pink-500 flex-shrink-0 mt-1" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-medium"${_scopeId}>Correo Electr\xF3nico</p><a href="mailto:residenciaahora@gmail.com" class="text-gray-600 hover:text-pink-500 transition-colors"${_scopeId}> residenciaahora@gmail.com </a></div></div></div></div></div><div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"${_scopeId}><h3 class="text-2xl font-semibold mb-6"${_scopeId}>Env\xEDanos un Mensaje</h3><form class="space-y-6"${_scopeId}><div${_scopeId}><label for="name" class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}> Tu nombre </label><input type="text" id="name"${ssrRenderAttr("value", formData.value.name)} required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"${_scopeId}></div><div${_scopeId}><label for="email" class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}> Tu correo electr\xF3nico </label><input type="email" id="email"${ssrRenderAttr("value", formData.value.email)} required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"${_scopeId}></div><div${_scopeId}><label for="type" class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}> Tipo de Consulta </label><select id="type" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(formData.value.type) ? ssrLooseContain(formData.value.type, "") : ssrLooseEqual(formData.value.type, "")) ? " selected" : ""}${_scopeId}>Selecciona una opci\xF3n</option><option value="consulta"${ssrIncludeBooleanAttr(Array.isArray(formData.value.type) ? ssrLooseContain(formData.value.type, "consulta") : ssrLooseEqual(formData.value.type, "consulta")) ? " selected" : ""}${_scopeId}>Consulta</option><option value="reclamo"${ssrIncludeBooleanAttr(Array.isArray(formData.value.type) ? ssrLooseContain(formData.value.type, "reclamo") : ssrLooseEqual(formData.value.type, "reclamo")) ? " selected" : ""}${_scopeId}>Reclamo</option><option value="sugerencia"${ssrIncludeBooleanAttr(Array.isArray(formData.value.type) ? ssrLooseContain(formData.value.type, "sugerencia") : ssrLooseEqual(formData.value.type, "sugerencia")) ? " selected" : ""}${_scopeId}>Sugerencia</option><option value="denuncia"${ssrIncludeBooleanAttr(Array.isArray(formData.value.type) ? ssrLooseContain(formData.value.type, "denuncia") : ssrLooseEqual(formData.value.type, "denuncia")) ? " selected" : ""}${_scopeId}>Denuncia</option><option value="aporte"${ssrIncludeBooleanAttr(Array.isArray(formData.value.type) ? ssrLooseContain(formData.value.type, "aporte") : ssrLooseEqual(formData.value.type, "aporte")) ? " selected" : ""}${_scopeId}>Apoyo</option></select></div><div${_scopeId}><label for="subject" class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}> Asunto </label><input type="text" id="subject"${ssrRenderAttr("value", formData.value.subject)} required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"${_scopeId}></div><div${_scopeId}><label for="message" class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}> Tu mensaje </label><textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"${_scopeId}>${ssrInterpolate(formData.value.message)}</textarea></div><button type="submit" class="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Send), { class: "w-5 h-5" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Enviar Mensaje</span></button></form></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                icon: unref(Mail),
                title: "Cont\xE1ctanos",
                subtitle: "En este formulario puedes dejarnos tu Consulta, Reclamo o Sugerencia."
              }, null, 8, ["icon"]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-12" }, [
                createVNode("div", { class: "space-y-8" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-2xl font-semibold mb-4" }, "Informaci\xF3n de Contacto"),
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", { class: "flex items-start space-x-4" }, [
                        createVNode(unref(Building), { class: "w-6 h-6 text-pink-500 flex-shrink-0 mt-1" }),
                        createVNode("div", null, [
                          createVNode("p", { class: "font-medium" }, "Organizaci\xF3n"),
                          createVNode("p", { class: "text-gray-600" }, "Corporaci\xF3n sin fines de lucro"),
                          createVNode("p", { class: "text-gray-600" }, "RUT: 72043.400-8"),
                          createVNode("p", { class: "text-gray-600" }, "Personalidad Jur\xEDdica N\xB012188 (30-11-1995)")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-start space-x-4" }, [
                        createVNode(unref(MapPin), { class: "w-6 h-6 text-pink-500 flex-shrink-0 mt-1" }),
                        createVNode("div", null, [
                          createVNode("p", { class: "font-medium" }, "Sede en Valdivia"),
                          createVNode("p", { class: "text-gray-600" }, "Runca N\xB0 590, Valdivia")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-start space-x-4" }, [
                        createVNode(unref(Phone), { class: "w-6 h-6 text-pink-500 flex-shrink-0 mt-1" }),
                        createVNode("div", null, [
                          createVNode("p", { class: "font-medium" }, "Tel\xE9fonos"),
                          createVNode("p", { class: "text-gray-600" }, "Celular: +56956984103"),
                          createVNode("p", { class: "text-gray-600" }, "Fijo: 632-411511")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-start space-x-4" }, [
                        createVNode(unref(Mail), { class: "w-6 h-6 text-pink-500 flex-shrink-0 mt-1" }),
                        createVNode("div", null, [
                          createVNode("p", { class: "font-medium" }, "Correo Electr\xF3nico"),
                          createVNode("a", {
                            href: "mailto:residenciaahora@gmail.com",
                            class: "text-gray-600 hover:text-pink-500 transition-colors"
                          }, " residenciaahora@gmail.com ")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg" }, [
                  createVNode("h3", { class: "text-2xl font-semibold mb-6" }, "Env\xEDanos un Mensaje"),
                  createVNode("form", {
                    onSubmit: withModifiers(handleSubmit, ["prevent"]),
                    class: "space-y-6"
                  }, [
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "name",
                        class: "block text-sm font-medium text-gray-700 mb-1"
                      }, " Tu nombre "),
                      withDirectives(createVNode("input", {
                        type: "text",
                        id: "name",
                        "onUpdate:modelValue": ($event) => formData.value.name = $event,
                        required: "",
                        class: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, formData.value.name]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "email",
                        class: "block text-sm font-medium text-gray-700 mb-1"
                      }, " Tu correo electr\xF3nico "),
                      withDirectives(createVNode("input", {
                        type: "email",
                        id: "email",
                        "onUpdate:modelValue": ($event) => formData.value.email = $event,
                        required: "",
                        class: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, formData.value.email]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "type",
                        class: "block text-sm font-medium text-gray-700 mb-1"
                      }, " Tipo de Consulta "),
                      withDirectives(createVNode("select", {
                        id: "type",
                        "onUpdate:modelValue": ($event) => formData.value.type = $event,
                        required: "",
                        class: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      }, [
                        createVNode("option", { value: "" }, "Selecciona una opci\xF3n"),
                        createVNode("option", { value: "consulta" }, "Consulta"),
                        createVNode("option", { value: "reclamo" }, "Reclamo"),
                        createVNode("option", { value: "sugerencia" }, "Sugerencia"),
                        createVNode("option", { value: "denuncia" }, "Denuncia"),
                        createVNode("option", { value: "aporte" }, "Apoyo")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, formData.value.type]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "subject",
                        class: "block text-sm font-medium text-gray-700 mb-1"
                      }, " Asunto "),
                      withDirectives(createVNode("input", {
                        type: "text",
                        id: "subject",
                        "onUpdate:modelValue": ($event) => formData.value.subject = $event,
                        required: "",
                        class: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, formData.value.subject]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "message",
                        class: "block text-sm font-medium text-gray-700 mb-1"
                      }, " Tu mensaje "),
                      withDirectives(createVNode("textarea", {
                        id: "message",
                        "onUpdate:modelValue": ($event) => formData.value.message = $event,
                        rows: "4",
                        class: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, formData.value.message]
                      ])
                    ]),
                    createVNode("button", {
                      type: "submit",
                      class: "w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                    }, [
                      createVNode(unref(Send), { class: "w-5 h-5" }),
                      createVNode("span", null, "Enviar Mensaje")
                    ])
                  ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=contacto-CftGpAyv.mjs.map
