import{u as p,k as r,M as s,a4 as u,a5 as c,a6 as l,a7 as f,a8 as d,a9 as m,aa as h,ab as A,ac as g,ad as v,J as P,d as C,p as w,ae as y,af as _,ag as R,ah as b}from"./chunks/framework.f0ad3fb5.js";import{t as D}from"./chunks/theme.286b5834.js";const E={...D,enhanceApp({app:e,router:a,siteData:t}){},setup(){const{lang:e}=p();r(()=>{s&&(document.cookie=`nf_lang=${e.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`)})}};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=i(E),T=C({name:"VitePressApp",setup(){const{site:e}=p();return w(()=>{r(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),y(),_(),R(),n.setup&&n.setup(),()=>b(n.Layout)}});async function x(){const e=S(),a=O();a.provide(c,e);const t=l(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function O(){return A(T)}function S(){let e=s,a;return g(t=>{let o=v(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),P(()=>import(o),[])},n.NotFound)}s&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{x as createApp};
