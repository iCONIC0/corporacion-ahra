import { a as buildAssetsURL } from '../_/renderer.mjs';
import { defineComponent, mergeProps, unref, ref, withCtx, createVNode, createTextVNode, useSSRContext } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/server-renderer/index.mjs';
import { MapPin, Mail, Phone, ChevronDown, Heart, Menu, X } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { _ as __nuxt_component_0 } from './nuxt-link-BJjwR1_u.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/h3/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/devalue/index.js';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/ufo/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/@unhead/ssr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/destr/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/hookable/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/ofetch/dist/node.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/klona/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/defu/dist/defu.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/scule/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/unstorage/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/radix3/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/pathe/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/ohash/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/unhead/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/@unhead/shared/dist/index.mjs';
import './server.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TopHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-800 text-white py-2" }, _attrs))}><div class="container mx-auto px-6"><div class="flex flex-col md:flex-row justify-between items-center text-sm"><div class="flex items-center space-x-4 mb-2 md:mb-0"><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4 text-pink-400" }, null, _parent));
      _push(`<span>Oficina Valdivia: Runca N\xB0 590, Valdivia</span></div><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-4 h-4 text-pink-400" }, null, _parent));
      _push(`<a href="mailto:residenciaahora@gmail.com" class="hover:text-pink-400 transition-colors"> residenciaahora@gmail.com </a></div></div><div class="flex items-center space-x-4"><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(unref(Phone), { class: "w-4 h-4 text-pink-400" }, null, _parent));
      _push(`<span>+56956984103 / 632-411511</span></div><div class="hidden md:block border-l border-gray-600 h-4"></div><div class="hidden md:flex items-center space-x-2"><span class="text-gray-400">RUT:</span><span>72043.400-8</span></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _imports_0 = "" + buildAssetsURL("logo-corp.DnPm4-gC.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isNosotrosOpen = ref(false);
    const isMobileMenuOpen = ref(false);
    const isMobileNosotrosOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white/80 backdrop-blur-sm w-full z-10" }, _attrs))}><nav class="container mx-auto px-6 py-4"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center space-x-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Corporaci\xF3n Ahora Logo" class="w-12 h-12"${_scopeId}><span class="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"${_scopeId}> Corporaci\xF3n Ahora </span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Corporaci\xF3n Ahora Logo",
                class: "w-12 h-12"
              }),
              createVNode("span", { class: "text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent" }, " Corporaci\xF3n Ahora ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center space-x-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-gray-600 hover:text-pink-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Inicio`);
          } else {
            return [
              createTextVNode("Inicio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative group"><button class="flex items-center space-x-1 text-gray-600 hover:text-pink-500 transition-colors"><span>Nosotros</span>`);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4" }, null, _parent));
      _push(`</button><div class="${ssrRenderClass([[isNosotrosOpen.value ? "block" : "hidden", "group-hover:block"], "absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/historia",
        class: "block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Historia `);
          } else {
            return [
              createTextVNode(" Historia ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/mision-vision",
        class: "block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Misi\xF3n y Visi\xF3n `);
          } else {
            return [
              createTextVNode(" Misi\xF3n y Visi\xF3n ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/talleres-proyectos",
        class: "block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Talleres y Proyectos `);
          } else {
            return [
              createTextVNode(" Talleres y Proyectos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/modelo-prevencion",
        class: "block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Modelo de Prevenci\xF3n de Delitos `);
          } else {
            return [
              createTextVNode(" Modelo de Prevenci\xF3n de Delitos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/equipo",
        class: "text-gray-600 hover:text-pink-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Equipo`);
          } else {
            return [
              createTextVNode("Equipo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/estados-financieros",
        class: "text-gray-600 hover:text-pink-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Estados Financieros`);
          } else {
            return [
              createTextVNode("Estados Financieros")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacto",
        class: "text-gray-600 hover:text-pink-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contacto`);
          } else {
            return [
              createTextVNode("Contacto")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/apoyanos",
        class: "bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity flex items-center space-x-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Heart), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Ap\xF3yanos</span>`);
          } else {
            return [
              createVNode(unref(Heart), { class: "w-4 h-4" }),
              createVNode("span", null, "Ap\xF3yanos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="md:hidden">`);
      if (!isMobileMenuOpen.value) {
        _push(ssrRenderComponent(unref(Menu), { class: "w-6 h-6 text-gray-600" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(X), { class: "w-6 h-6 text-gray-600" }, null, _parent));
      }
      _push(`</button></div>`);
      if (isMobileMenuOpen.value) {
        _push(`<div class="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 space-y-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "block text-gray-600 hover:text-pink-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Inicio`);
            } else {
              return [
                createTextVNode("Inicio")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div><button class="flex items-center justify-between w-full text-gray-600"><span>Nosotros</span>`);
        _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4" }, null, _parent));
        _push(`</button>`);
        if (isMobileNosotrosOpen.value) {
          _push(`<div class="pl-4 mt-2 space-y-2">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/historia",
            class: "block text-gray-600 hover:text-pink-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Historia `);
              } else {
                return [
                  createTextVNode(" Historia ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/mision-vision",
            class: "block text-gray-600 hover:text-pink-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Misi\xF3n y Visi\xF3n `);
              } else {
                return [
                  createTextVNode(" Misi\xF3n y Visi\xF3n ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/talleres-proyectos",
            class: "block text-gray-600 hover:text-pink-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Talleres y Proyectos `);
              } else {
                return [
                  createTextVNode(" Talleres y Proyectos ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/modelo-prevencion",
            class: "block text-gray-600 hover:text-pink-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Modelo de Prevenci\xF3n de Delitos `);
              } else {
                return [
                  createTextVNode(" Modelo de Prevenci\xF3n de Delitos ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/equipo",
          class: "block text-gray-600 hover:text-pink-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Equipo`);
            } else {
              return [
                createTextVNode("Equipo")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/estados-financieros",
          class: "block text-gray-600 hover:text-pink-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Estados Financieros`);
            } else {
              return [
                createTextVNode("Estados Financieros")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contacto",
          class: "block text-gray-600 hover:text-pink-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contacto`);
            } else {
              return [
                createTextVNode("Contacto")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/apoyanos",
          class: "block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity text-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Ap\xF3yanos `);
            } else {
              return [
                createTextVNode(" Ap\xF3yanos ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-800 text-white py-12" }, _attrs))}><div class="container mx-auto px-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="flex flex-col items-center md:items-start"><div class="flex items-center space-x-3 mb-4"><img${ssrRenderAttr("src", _imports_0)} alt="Corporaci\xF3n Ahora Logo" class="w-12 h-12 brightness-0 invert"><span class="text-2xl font-bold">Corporaci\xF3n Ahora</span></div><p class="text-gray-400 text-center md:text-left"> Brindando esperanza y protecci\xF3n a la ni\xF1ez y adolescencia </p></div><div class="space-y-4"><h3 class="text-xl font-semibold mb-4 text-center md:text-left">Contacto</h3><div class="flex items-center space-x-3">`);
      _push(ssrRenderComponent(unref(MapPin), { class: "w-5 h-5 text-pink-500 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-300">Runca 590, Villa Rucahue, Valdivia, Los R\xEDos, Chile</span></div><div class="flex items-center space-x-3">`);
      _push(ssrRenderComponent(unref(Phone), { class: "w-5 h-5 text-pink-500 flex-shrink-0" }, null, _parent));
      _push(`<div class="flex flex-col"><span class="text-gray-300">Celular: +56 9 56984103</span><span class="text-gray-300">Tel\xE9fono fijo: 632-411511</span></div></div><div class="flex items-center space-x-3">`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-5 h-5 text-pink-500 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-gray-300">residenciaahora@gmail.com</span></div></div><div class="flex flex-col items-center md:items-start"><h3 class="text-xl font-semibold mb-4">Organismo colaborador:</h3><img src="https://www.mejor-ninez.cl/wp-content/uploads/2021/10/Logo-MejorNinez.png" alt="Mejor Ni\xF1ez Logo" class="h-24 object-contain"></div></div><div class="mt-8 pt-8 border-t border-gray-700"><div class="flex flex-col md:flex-row justify-between items-center"><div class="flex space-x-6 mb-4 md:mb-0"><a href="#" class="text-gray-400 hover:text-pink-500 transition-colors">Facebook</a><a href="#" class="text-gray-400 hover:text-pink-500 transition-colors">Instagram</a><a href="#" class="text-gray-400 hover:text-pink-500 transition-colors">Twitter</a></div><div class="text-gray-400 text-center md:text-right"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Corporaci\xF3n Ahora. Todos los derechos reservados. </div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}><div class="fixed w-full z-50">`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div><main class="flex-grow pt-32">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CuyepO6I.mjs.map
