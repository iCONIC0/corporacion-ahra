import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './SectionHeader-BVQxLqRn.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BJjwR1_u.mjs';
import { _ as _sfc_main$3 } from './DirectoryCard-BZYT3jCy.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, createBlock, openBlock, Fragment, renderList, toDisplayString, ref, useSSRContext } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue/server-renderer/index.mjs';
import { Heart, Coffee, Star, History, BookOpen, Users, Rocket, CheckCircle, GraduationCap, Brain, Handshake, Target, ChevronLeft, ChevronRight, Calendar } from 'file:///home/iCONIC0/corporacion-ahra/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { _ as _sfc_main$4 } from './Card-Cya0fanM.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/h3/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/devalue/index.js';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/@unhead/ssr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/destr/dist/index.mjs';
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/hookable/dist/index.mjs';
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
import 'file:///home/iCONIC0/corporacion-ahra/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectSlider",
  __ssrInlineRender: true,
  props: {
    projects: {},
    type: {}
  },
  setup(__props) {
    const currentSlide = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><button class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-pink-50 transition-colors" aria-label="Previous slide">`);
      _push(ssrRenderComponent(unref(ChevronLeft), { class: "w-6 h-6 text-pink-500" }, null, _parent));
      _push(`</button><button class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-pink-50 transition-colors" aria-label="Next slide">`);
      _push(ssrRenderComponent(unref(ChevronRight), { class: "w-6 h-6 text-pink-500" }, null, _parent));
      _push(`</button><div class="overflow-hidden"><div class="flex transition-transform duration-300 ease-in-out" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value * 100}%)` })}"><!--[-->`);
      ssrRenderList(_ctx.projects, (project, index) => {
        _push(`<div class="w-full flex-shrink-0 px-4"><div class="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="w-full h-48 object-cover">`);
        if (_ctx.type === "current") {
          _push(`<!--[--><div class="grid grid-cols-4 divide-x divide-gray-100 bg-gradient-to-r from-pink-50 to-purple-50"><!--[-->`);
          ssrRenderList(project.stats, (stat, idx) => {
            _push(`<div class="p-4 text-center"><p class="text-2xl font-bold text-pink-500">${ssrInterpolate(stat.value)}</p><p class="text-xs text-gray-600">${ssrInterpolate(stat.label)}</p></div>`);
          });
          _push(`<!--]--></div><div class="p-6"><div class="flex items-center space-x-2 text-purple-600 mb-4">`);
          _push(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5" }, null, _parent));
          _push(`<span class="text-sm font-medium">${ssrInterpolate(project.period)}</span></div><h3 class="text-xl font-semibold text-gray-800 mb-4">${ssrInterpolate(project.title)}</h3><p class="text-gray-700 leading-relaxed mb-4">${ssrInterpolate(project.population)}</p><div class="mb-6"><h4 class="text-lg font-semibold text-pink-600 mb-2">Objetivo General</h4><p class="text-gray-700">${ssrInterpolate(project.generalObjective)}</p></div>`);
          if (project.specificObjectives && project.specificObjectives.length > 0) {
            _push(`<div><h4 class="text-lg font-semibold text-pink-600 mb-2">Objetivos Espec\xEDficos</h4><ul class="space-y-2"><!--[-->`);
            ssrRenderList(project.specificObjectives, (objective, idx) => {
              _push(`<li class="flex items-start space-x-2">`);
              _push(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-pink-500 flex-shrink-0 mt-1" }, null, _parent));
              _push(`<span class="text-gray-700">${ssrInterpolate(objective)}</span></li>`);
            });
            _push(`<!--]--></ul></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><!--]-->`);
        } else {
          _push(`<div class="p-6"><div class="flex items-center space-x-2 text-purple-600 mb-4">`);
          _push(ssrRenderComponent(unref(Calendar), { class: "w-5 h-5" }, null, _parent));
          _push(`<span class="text-sm font-medium">${ssrInterpolate(project.date)}</span></div><h3 class="text-xl font-semibold text-gray-800 mb-4">${ssrInterpolate(project.title)}</h3><p class="text-gray-700 leading-relaxed">${ssrInterpolate(project.content)}</p></div>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><div class="flex justify-center mt-6 space-x-2"><!--[-->`);
      ssrRenderList(_ctx.projects, (_, index) => {
        _push(`<button class="${ssrRenderClass([currentSlide.value === index ? "bg-pink-500" : "bg-gray-300 hover:bg-pink-300", "w-3 h-3 rounded-full transition-colors"])}"${ssrRenderAttr("aria-label", `Go to slide ${index + 1}`)}></button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentProjects = [
      {
        title: "Residencia Transitoria para Ni\xF1os y Adolescentes",
        period: "Octubre 2021 - Abril 2023",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800",
        population: "Usuarios de sexo masculino, entre 6 y 17 a\xF1os de edad, a quienes se les brindar\xE1 est\xE1ndares de calidad que contribuyan a su desarrollo integral.",
        generalObjective: "Contribuir a la restituci\xF3n de derechos de ni\xF1os y adolescentes gravemente vulnerados, mediante una intervenci\xF3n residencial transitoria.",
        specificObjectives: [
          "Asegurar calidad de vida y bienestar integral.",
          "Realizar acciones para la re-significaci\xF3n de experiencias.",
          "Desarrollar intervenciones con las familias.",
          "Preparar para la vida independiente."
        ],
        stats: [
          { value: "21", label: "Ni\xF1os actuales" },
          { value: "18", label: "Meses" },
          { value: "6-17", label: "Edad" },
          { value: "100%", label: "Compromiso" }
        ]
      },
      {
        title: "Programa de Apoyo Educativo",
        period: "Enero 2023 - Diciembre 2023",
        image: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?auto=format&fit=crop&w=800",
        population: "Ni\xF1os y adolescentes en edad escolar que requieren apoyo acad\xE9mico especializado.",
        generalObjective: "Fortalecer el desarrollo educativo y asegurar la continuidad escolar de nuestros residentes.",
        specificObjectives: [
          "Proporcionar apoyo acad\xE9mico personalizado",
          "Desarrollar habilidades de estudio",
          "Coordinar con instituciones educativas",
          "Monitorear el progreso acad\xE9mico"
        ],
        stats: [
          { value: "100%", label: "Asistencia" },
          { value: "15", label: "Tutores" },
          { value: "90%", label: "Aprobaci\xF3n" },
          { value: "24/7", label: "Soporte" }
        ]
      }
    ];
    const completedProjects = [
      {
        title: "Modalidad Residencial de Protecci\xF3n Simple",
        content: "Proyecto ejecutado en la ciudad de Valdivia como colaborador acreditado, enfocado en brindar protecci\xF3n y cuidado integral a ni\xF1os y adolescentes.",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800",
        date: "2005 - 2011"
      },
      {
        title: "Proyecto REM-PER",
        content: "Proyecto para mayores REM con programa adosado de Protecci\xF3n en Intervenci\xF3n Especializada Modalidad PER, ejecutado en la comuna de M\xE1fil.",
        image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=800",
        date: "2011 - 2021"
      }
    ];
    const specificObjectives = [
      {
        title: "Orientaciones Conceptuales",
        description: "Establecer las orientaciones conceptuales, pedag\xF3gicas y tem\xE1ticas de contingencias que afecten a ni\xF1os y adolescentes.",
        icon: BookOpen
      },
      {
        title: "Desarrollo de Habilidades",
        description: "Dotar a los funcionarios de los conocimientos y habilidades necesarios para desempe\xF1arse con eficiencia y eficacia.",
        icon: Brain
      },
      {
        title: "Compromiso Institucional",
        description: "Elevar el nivel de compromiso de los funcionarios en los proyectos, procesos y procedimientos de la instituci\xF3n.",
        icon: Heart
      },
      {
        title: "Fortalecimiento Profesional",
        description: "Fortalecer el recurso humano profesional en \xE1reas sociales y de intervenci\xF3n en infancia vulnerada en sus derechos.",
        icon: Users
      },
      {
        title: "V\xEDnculos Terap\xE9uticos",
        description: "Generar v\xEDnculos terap\xE9uticos con las familias de los ni\xF1os y adolescentes.",
        icon: Handshake
      },
      {
        title: "Alianzas Familiares",
        description: "Fortalecer alianzas terap\xE9uticas con las familias en post del trabajo en habilidades parentales.",
        icon: Users
      }
    ];
    const roles = [
      "Profesionales",
      "T\xE9cnicos profesionales",
      "Educadores de trato directo",
      "Manipuladores de alimento",
      "Auxiliar de aseo"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = _sfc_main$1$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SectionHeader = _sfc_main$2;
      const _component_DirectoryCard = _sfc_main$3;
      const _component_ProjectSlider = _sfc_main$1;
      const _component_Card = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-b from-pink-50 to-purple-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Section, {
        gradient: "from-white to-pink-50",
        className: "pt-20"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"${_scopeId}><div${_scopeId}><h1 class="text-4xl md:text-6xl font-bold mb-6"${_scopeId}><span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"${_scopeId}> Protegiendo el Futuro </span><br${_scopeId}><span class="text-gray-800"${_scopeId}>de Nuestra Ni\xF1ez</span></h1><p class="text-xl text-gray-600 mb-8"${_scopeId}> Desde 1995, brindando esperanza, protecci\xF3n y oportunidades para el desarrollo integral de ni\xF1os y adolescentes en la regi\xF3n de Los R\xEDos. </p><div class="flex flex-wrap gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/contacto",
              class: "bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cont\xE1ctanos `);
                } else {
                  return [
                    createTextVNode(" Cont\xE1ctanos ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/historia",
              class: "border-2 border-pink-500 text-pink-500 px-6 py-3 rounded-md hover:bg-pink-50 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Conoce m\xE1s `);
                } else {
                  return [
                    createTextVNode(" Conoce m\xE1s ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="relative"${_scopeId}><img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&amp;fit=crop&amp;w=1170&amp;q=80" alt="Ni\xF1os jugando" class="rounded-lg shadow-2xl"${_scopeId}><div class="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg"${_scopeId}><p class="text-pink-500 font-semibold"${_scopeId}>+25 a\xF1os de experiencia</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center" }, [
                createVNode("div", null, [
                  createVNode("h1", { class: "text-4xl md:text-6xl font-bold mb-6" }, [
                    createVNode("span", { class: "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent" }, " Protegiendo el Futuro "),
                    createVNode("br"),
                    createVNode("span", { class: "text-gray-800" }, "de Nuestra Ni\xF1ez")
                  ]),
                  createVNode("p", { class: "text-xl text-gray-600 mb-8" }, " Desde 1995, brindando esperanza, protecci\xF3n y oportunidades para el desarrollo integral de ni\xF1os y adolescentes en la regi\xF3n de Los R\xEDos. "),
                  createVNode("div", { class: "flex flex-wrap gap-4" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/contacto",
                      class: "bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cont\xE1ctanos ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, {
                      to: "/historia",
                      class: "border-2 border-pink-500 text-pink-500 px-6 py-3 rounded-md hover:bg-pink-50 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Conoce m\xE1s ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "relative" }, [
                  createVNode("img", {
                    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1170&q=80",
                    alt: "Ni\xF1os jugando",
                    class: "rounded-lg shadow-2xl"
                  }),
                  createVNode("div", { class: "absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg" }, [
                    createVNode("p", { class: "text-pink-500 font-semibold" }, "+25 a\xF1os de experiencia")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, { gradient: "from-pink-50 to-white" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SectionHeader, {
              icon: unref(Heart),
              title: "Apoya Nuestra Causa",
              subtitle: "Tu donaci\xF3n hace la diferencia en la vida de nuestros ni\xF1os y adolescentes"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6"${_scopeId}><div class="bg-white/80 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"${_scopeId}><div class="text-center mb-4"${_scopeId}><div class="bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Coffee), { class: "w-8 h-8 text-pink-500" }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-2xl font-bold text-gray-800"${_scopeId}>$1,000</h3><p class="text-gray-600 mt-2"${_scopeId}>Aporte Mensual</p></div><ul class="space-y-3 mb-6"${_scopeId}></ul>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/apoyanos",
              class: "block text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Donar $1,000 `);
                } else {
                  return [
                    createTextVNode(" Donar $1,000 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform scale-105"${_scopeId}><div class="absolute -top-3 right-4"${_scopeId}><span class="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm py-1 px-3 rounded-full"${_scopeId}> M\xE1s Popular </span></div><div class="text-center mb-4"${_scopeId}><div class="bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Heart), { class: "w-8 h-8 text-pink-500" }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-2xl font-bold text-gray-800"${_scopeId}>$5,000</h3><p class="text-gray-600 mt-2"${_scopeId}>Aporte Mensual</p></div><ul class="space-y-3 mb-6"${_scopeId}></ul>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/apoyanos",
              class: "block text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Donar $5,000 `);
                } else {
                  return [
                    createTextVNode(" Donar $5,000 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"${_scopeId}><div class="text-center mb-4"${_scopeId}><div class="bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Star), { class: "w-8 h-8 text-pink-500" }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-2xl font-bold text-gray-800"${_scopeId}>$10,000</h3><p class="text-gray-600 mt-2"${_scopeId}>Aporte Mensual</p></div><ul class="space-y-3 mb-6"${_scopeId}></ul>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/apoyanos",
              class: "block text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Donar $10,000 `);
                } else {
                  return [
                    createTextVNode(" Donar $10,000 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto" }, [
                createVNode(_component_SectionHeader, {
                  icon: unref(Heart),
                  title: "Apoya Nuestra Causa",
                  subtitle: "Tu donaci\xF3n hace la diferencia en la vida de nuestros ni\xF1os y adolescentes"
                }, null, 8, ["icon"]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
                  createVNode("div", { class: "bg-white/80 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all" }, [
                    createVNode("div", { class: "text-center mb-4" }, [
                      createVNode("div", { class: "bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" }, [
                        createVNode(unref(Coffee), { class: "w-8 h-8 text-pink-500" })
                      ]),
                      createVNode("h3", { class: "text-2xl font-bold text-gray-800" }, "$1,000"),
                      createVNode("p", { class: "text-gray-600 mt-2" }, "Aporte Mensual")
                    ]),
                    createVNode("ul", { class: "space-y-3 mb-6" }),
                    createVNode(_component_NuxtLink, {
                      to: "/apoyanos",
                      class: "block text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Donar $1,000 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform scale-105" }, [
                    createVNode("div", { class: "absolute -top-3 right-4" }, [
                      createVNode("span", { class: "bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm py-1 px-3 rounded-full" }, " M\xE1s Popular ")
                    ]),
                    createVNode("div", { class: "text-center mb-4" }, [
                      createVNode("div", { class: "bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" }, [
                        createVNode(unref(Heart), { class: "w-8 h-8 text-pink-500" })
                      ]),
                      createVNode("h3", { class: "text-2xl font-bold text-gray-800" }, "$5,000"),
                      createVNode("p", { class: "text-gray-600 mt-2" }, "Aporte Mensual")
                    ]),
                    createVNode("ul", { class: "space-y-3 mb-6" }),
                    createVNode(_component_NuxtLink, {
                      to: "/apoyanos",
                      class: "block text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Donar $5,000 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all" }, [
                    createVNode("div", { class: "text-center mb-4" }, [
                      createVNode("div", { class: "bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" }, [
                        createVNode(unref(Star), { class: "w-8 h-8 text-pink-500" })
                      ]),
                      createVNode("h3", { class: "text-2xl font-bold text-gray-800" }, "$10,000"),
                      createVNode("p", { class: "text-gray-600 mt-2" }, "Aporte Mensual")
                    ]),
                    createVNode("ul", { class: "space-y-3 mb-6" }),
                    createVNode(_component_NuxtLink, {
                      to: "/apoyanos",
                      class: "block text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Donar $10,000 ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, { gradient: "from-pink-50 to-purple-50" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SectionHeader, {
              icon: unref(History),
              title: "Fundaci\xF3n de la Corporaci\xF3n",
              subtitle: "Nuestra historia comenz\xF3 con un sue\xF1o de protecci\xF3n y esperanza"
            }, null, _parent2, _scopeId));
            _push2(`<div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"${_scopeId}><p class="text-gray-700 leading-relaxed mb-6"${_scopeId}> En el a\xF1o 1995, el vicepresidente de la &quot;Corporaci\xF3n de Menores de la Calle Ahora&quot;, don Dirk Bartelsman, consigue fondos de una instituci\xF3n ben\xE9fica en Suiza, para financiar la construcci\xF3n de un nuevo hogar en terreno adquirido por la Corporaci\xF3n en la comuna de M\xE1fil. Don Dirk dedic\xF3 todo su esfuerzo en sacar adelante esta obra, la cual finaliz\xF3 a fines del a\xF1o 1997. Por lo tanto, en honor a sus fundadores se otorga el nombre de &quot;Casa Dirk Bartelsman&quot;. </p><div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/historia",
              class: "inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(BookOpen), { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Ver Historia Completa</span>`);
                } else {
                  return [
                    createVNode(unref(BookOpen), { class: "w-5 h-5" }),
                    createVNode("span", null, "Ver Historia Completa")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto" }, [
                createVNode(_component_SectionHeader, {
                  icon: unref(History),
                  title: "Fundaci\xF3n de la Corporaci\xF3n",
                  subtitle: "Nuestra historia comenz\xF3 con un sue\xF1o de protecci\xF3n y esperanza"
                }, null, 8, ["icon"]),
                createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg" }, [
                  createVNode("p", { class: "text-gray-700 leading-relaxed mb-6" }, ' En el a\xF1o 1995, el vicepresidente de la "Corporaci\xF3n de Menores de la Calle Ahora", don Dirk Bartelsman, consigue fondos de una instituci\xF3n ben\xE9fica en Suiza, para financiar la construcci\xF3n de un nuevo hogar en terreno adquirido por la Corporaci\xF3n en la comuna de M\xE1fil. Don Dirk dedic\xF3 todo su esfuerzo en sacar adelante esta obra, la cual finaliz\xF3 a fines del a\xF1o 1997. Por lo tanto, en honor a sus fundadores se otorga el nombre de "Casa Dirk Bartelsman". '),
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/historia",
                      class: "inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(BookOpen), { class: "w-5 h-5" }),
                        createVNode("span", null, "Ver Historia Completa")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, { gradient: "from-purple-50 to-white" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SectionHeader, {
              icon: unref(Users),
              title: "Directorio Actual",
              subtitle: "Nuestro equipo directivo comprometido con la misi\xF3n de la Corporaci\xF3n"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DirectoryCard, {
              name: "Luis Ricardo Valverde Casanova",
              position: "Presidente",
              period: "R.U.N: 6.372.563-3"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DirectoryCard, {
              name: "Claudia Giubergia Veloso",
              position: "Vice-Presidente",
              period: "R.U.N: 12.383.683-9"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DirectoryCard, {
              name: "Claudio Andr\xE9s Carrasco Walker",
              position: "Secretario",
              period: "R.U.N: 8.672.893-1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DirectoryCard, {
              name: "Betty Selman Barrientos",
              position: "Tesorera",
              period: "R.U.N: 15.381.039-7"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DirectoryCard, {
              name: "Nelson Mendoza Jara",
              position: "Director",
              period: "R.U.N: 8.754.574-1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DirectoryCard, {
              name: "Anna Bonan",
              position: "Directora",
              period: "R.U.N: 27.439.385-8"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DirectoryCard, {
              name: "Carla Romeny Kunstmann",
              position: "Directora",
              period: "R.U.N: 14.417.692-8"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto" }, [
                createVNode(_component_SectionHeader, {
                  icon: unref(Users),
                  title: "Directorio Actual",
                  subtitle: "Nuestro equipo directivo comprometido con la misi\xF3n de la Corporaci\xF3n"
                }, null, 8, ["icon"]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode(_component_DirectoryCard, {
                    name: "Luis Ricardo Valverde Casanova",
                    position: "Presidente",
                    period: "R.U.N: 6.372.563-3"
                  }),
                  createVNode(_component_DirectoryCard, {
                    name: "Claudia Giubergia Veloso",
                    position: "Vice-Presidente",
                    period: "R.U.N: 12.383.683-9"
                  }),
                  createVNode(_component_DirectoryCard, {
                    name: "Claudio Andr\xE9s Carrasco Walker",
                    position: "Secretario",
                    period: "R.U.N: 8.672.893-1"
                  }),
                  createVNode(_component_DirectoryCard, {
                    name: "Betty Selman Barrientos",
                    position: "Tesorera",
                    period: "R.U.N: 15.381.039-7"
                  }),
                  createVNode(_component_DirectoryCard, {
                    name: "Nelson Mendoza Jara",
                    position: "Director",
                    period: "R.U.N: 8.754.574-1"
                  }),
                  createVNode(_component_DirectoryCard, {
                    name: "Anna Bonan",
                    position: "Directora",
                    period: "R.U.N: 27.439.385-8"
                  }),
                  createVNode(_component_DirectoryCard, {
                    name: "Carla Romeny Kunstmann",
                    position: "Directora",
                    period: "R.U.N: 14.417.692-8"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, { gradient: "from-purple-50 to-white" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SectionHeader, {
              icon: unref(Rocket),
              title: "Proyectos en Ejecuci\xF3n",
              subtitle: "Conoce los proyectos actuales que llevamos a cabo para cumplir nuestra misi\xF3n"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ProjectSlider, {
              projects: currentProjects,
              type: "current"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto" }, [
                createVNode(_component_SectionHeader, {
                  icon: unref(Rocket),
                  title: "Proyectos en Ejecuci\xF3n",
                  subtitle: "Conoce los proyectos actuales que llevamos a cabo para cumplir nuestra misi\xF3n"
                }, null, 8, ["icon"]),
                createVNode(_component_ProjectSlider, {
                  projects: currentProjects,
                  type: "current"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, { gradient: "from-white to-pink-50" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SectionHeader, {
              icon: unref(CheckCircle),
              title: "Proyectos Ejecutados",
              subtitle: "Nuestra trayectoria y experiencia en el cuidado de la ni\xF1ez"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ProjectSlider, {
              projects: completedProjects,
              type: "completed"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto" }, [
                createVNode(_component_SectionHeader, {
                  icon: unref(CheckCircle),
                  title: "Proyectos Ejecutados",
                  subtitle: "Nuestra trayectoria y experiencia en el cuidado de la ni\xF1ez"
                }, null, 8, ["icon"]),
                createVNode(_component_ProjectSlider, {
                  projects: completedProjects,
                  type: "completed"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, { gradient: "from-pink-50 to-purple-50" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SectionHeader, {
              icon: unref(GraduationCap),
              title: "Proceso de Capacitaci\xF3n",
              subtitle: "Formaci\xF3n continua para nuestro equipo"
            }, null, _parent2, _scopeId));
            _push2(`<div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8"${_scopeId}><h3 class="text-2xl font-semibold text-pink-600 mb-4"${_scopeId}>Objetivo General</h3><p class="text-gray-700 leading-relaxed"${_scopeId}> Elaborar un Plan Anual de Capacitaci\xF3n, dirigido a quienes se desempe\xF1en en Corporaci\xF3n Ahora, considerando un \xF3ptimo ejercicio de las competencias propias en trabajo con ni\xF1os y adolescentes. Por otro lado permitir\xE1 subsanar las deficiencias detectadas en las evaluaciones de desempe\xF1o. </p></div><div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8"${_scopeId}><h3 class="text-2xl font-semibold text-pink-600 mb-6"${_scopeId}>Objetivos Espec\xEDficos</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(specificObjectives, (objective, index) => {
              _push2(ssrRenderComponent(_component_Card, {
                key: index,
                title: objective.title,
                description: objective.description,
                icon: objective.icon,
                gradient: "from-pink-50 to-pink-100"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"${_scopeId}><div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"${_scopeId}><div class="flex items-center space-x-3 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Users), { class: "w-8 h-8 text-pink-500" }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-2xl font-semibold text-gray-800"${_scopeId}>Aplicaci\xF3n</h3></div><p class="text-gray-700 leading-relaxed"${_scopeId}> El Plan de Capacitaci\xF3n es aplicable a todo el personal en tem\xE1ticas que afecten a los ni\xF1os y adolescentes, incluyendo: </p><ul class="mt-4 space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(roles, (role, index) => {
              _push2(`<li class="flex items-center space-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(CheckCircle), { class: "w-5 h-5 text-pink-500 flex-shrink-0" }, null, _parent2, _scopeId));
              _push2(`<span class="text-gray-700"${_scopeId}>${ssrInterpolate(role)}</span></li>`);
            });
            _push2(`<!--]--></ul><p class="text-gray-700 leading-relaxed mt-4"${_scopeId}> Se aplicar\xE1 una diferenciaci\xF3n seg\xFAn perfil y v\xEDnculos contractuales. La corporaci\xF3n se compromete a la realizaci\xF3n de capacitaci\xF3n semestral. </p></div><div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"${_scopeId}><div class="flex items-center space-x-3 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Target), { class: "w-8 h-8 text-pink-500" }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-2xl font-semibold text-gray-800"${_scopeId}>Metas</h3></div><p class="text-gray-700 leading-relaxed"${_scopeId}> Capacitar al 100% de los funcionarios que se desempe\xF1en en Corporaci\xF3n Ahora, concibiendo la capacitaci\xF3n como una herramienta para mejorar las atenciones e intervenciones de ni\xF1os y adolescentes que han sido vulnerados en sus derechos fundamentales. </p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto" }, [
                createVNode(_component_SectionHeader, {
                  icon: unref(GraduationCap),
                  title: "Proceso de Capacitaci\xF3n",
                  subtitle: "Formaci\xF3n continua para nuestro equipo"
                }, null, 8, ["icon"]),
                createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8" }, [
                  createVNode("h3", { class: "text-2xl font-semibold text-pink-600 mb-4" }, "Objetivo General"),
                  createVNode("p", { class: "text-gray-700 leading-relaxed" }, " Elaborar un Plan Anual de Capacitaci\xF3n, dirigido a quienes se desempe\xF1en en Corporaci\xF3n Ahora, considerando un \xF3ptimo ejercicio de las competencias propias en trabajo con ni\xF1os y adolescentes. Por otro lado permitir\xE1 subsanar las deficiencias detectadas en las evaluaciones de desempe\xF1o. ")
                ]),
                createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8" }, [
                  createVNode("h3", { class: "text-2xl font-semibold text-pink-600 mb-6" }, "Objetivos Espec\xEDficos"),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(specificObjectives, (objective, index) => {
                      return createVNode(_component_Card, {
                        key: index,
                        title: objective.title,
                        description: objective.description,
                        icon: objective.icon,
                        gradient: "from-pink-50 to-pink-100"
                      }, null, 8, ["title", "description", "icon"]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [
                  createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg" }, [
                    createVNode("div", { class: "flex items-center space-x-3 mb-4" }, [
                      createVNode(unref(Users), { class: "w-8 h-8 text-pink-500" }),
                      createVNode("h3", { class: "text-2xl font-semibold text-gray-800" }, "Aplicaci\xF3n")
                    ]),
                    createVNode("p", { class: "text-gray-700 leading-relaxed" }, " El Plan de Capacitaci\xF3n es aplicable a todo el personal en tem\xE1ticas que afecten a los ni\xF1os y adolescentes, incluyendo: "),
                    createVNode("ul", { class: "mt-4 space-y-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(roles, (role, index) => {
                        return createVNode("li", {
                          key: index,
                          class: "flex items-center space-x-2"
                        }, [
                          createVNode(unref(CheckCircle), { class: "w-5 h-5 text-pink-500 flex-shrink-0" }),
                          createVNode("span", { class: "text-gray-700" }, toDisplayString(role), 1)
                        ]);
                      }), 64))
                    ]),
                    createVNode("p", { class: "text-gray-700 leading-relaxed mt-4" }, " Se aplicar\xE1 una diferenciaci\xF3n seg\xFAn perfil y v\xEDnculos contractuales. La corporaci\xF3n se compromete a la realizaci\xF3n de capacitaci\xF3n semestral. ")
                  ]),
                  createVNode("div", { class: "bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg" }, [
                    createVNode("div", { class: "flex items-center space-x-3 mb-4" }, [
                      createVNode(unref(Target), { class: "w-8 h-8 text-pink-500" }),
                      createVNode("h3", { class: "text-2xl font-semibold text-gray-800" }, "Metas")
                    ]),
                    createVNode("p", { class: "text-gray-700 leading-relaxed" }, " Capacitar al 100% de los funcionarios que se desempe\xF1en en Corporaci\xF3n Ahora, concibiendo la capacitaci\xF3n como una herramienta para mejorar las atenciones e intervenciones de ni\xF1os y adolescentes que han sido vulnerados en sus derechos fundamentales. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DEngX4ah.mjs.map
