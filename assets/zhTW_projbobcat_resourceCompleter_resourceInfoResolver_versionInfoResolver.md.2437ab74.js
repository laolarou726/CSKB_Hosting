import{_ as s,o as e,c as a,R as n}from"./chunks/framework.f0ad3fb5.js";const _=JSON.parse('{"title":"版本資訊解析器","description":"","frontmatter":{},"headers":[],"relativePath":"zhTW/projbobcat/resourceCompleter/resourceInfoResolver/versionInfoResolver.md","filePath":"zhTW/projbobcat/resourceCompleter/resourceInfoResolver/versionInfoResolver.md"}'),t={name:"zhTW/projbobcat/resourceCompleter/resourceInfoResolver/versionInfoResolver.md"},l=n(`<h1 id="版本資訊解析器" tabindex="-1">版本資訊解析器 <a class="header-anchor" href="#版本資訊解析器" aria-label="Permalink to &quot;版本資訊解析器&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#版本資訊解析器">版本資訊解析器</a><ul><li><a href="#初始化解析器">初始化解析器</a></li></ul></li></ul></nav><p>版本資訊解析器提供了對遊戲資產檔案的解析和驗證功能，這些檔案存放在 <code>.minecraft/versions/{GAME_VERSION}/{GAME_VERSION}.jar</code> 目錄下，這些檔案是啟動 MineCraft 所必需的核心檔案。</p><h2 id="初始化解析器" tabindex="-1">初始化解析器 <a class="header-anchor" href="#初始化解析器" aria-label="Permalink to &quot;初始化解析器&quot;">​</a></h2><p>你可以透過下面的程式碼來初始化初始化解析器：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">resolver</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VersionInfoResolver</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    BasePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[GAME_ROOT_PATH]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    VersionInfo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">SEARCHED_VERSION_INFO</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    CheckLocalFiles </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">CHECK_LOCAL_FILES</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在上述程式碼塊中，請將這些引數按照您的實際情況替換：</p><table><thead><tr><th style="text-align:center;">專案</th><th style="text-align:center;">說明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">遊戲根目錄，通常為 .minecraft 資料夾的路徑</td></tr><tr><td style="text-align:center;">[SEARCHED_VERSION_INFO]</td><td style="text-align:center;">要檢查的版本的 VersionInfo （透過遊戲定位器獲得）</td></tr><tr><td style="text-align:center;">[CHECK_LOCAL_FILES]</td><td style="text-align:center;">檢查本地檔案（如果為 false，則跳過所有檢查）</td></tr></tbody></table>`,8),o=[l];function r(p,c,i,C,d,D){return e(),a("div",null,o)}const A=s(t,[["render",r]]);export{_ as __pageData,A as default};
