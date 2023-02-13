import{_ as s,o as n,c as a,a as l}from"./app.e1345196.js";const C=JSON.parse('{"title":"log4j 日誌格式化元件解析器","description":"","frontmatter":{},"headers":[{"level":2,"title":"初始化解析器","slug":"初始化解析器","link":"#初始化解析器","children":[]}],"relativePath":"zhTW/projbobcat/resourceCompleter/resourceInfoResolver/gameLoggingInfoResolver.md"}'),e={name:"zhTW/projbobcat/resourceCompleter/resourceInfoResolver/gameLoggingInfoResolver.md"},p=l(`<h1 id="log4j-日誌格式化元件解析器" tabindex="-1">log4j 日誌格式化元件解析器 <a class="header-anchor" href="#log4j-日誌格式化元件解析器" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#log4j-日誌格式化元件解析器">log4j 日誌格式化元件解析器</a><ul><li><a href="#初始化解析器">初始化解析器</a></li></ul></li></ul></nav><p>log4j 日誌格式化元件解析器提供了對遊戲資產檔案的解析和驗證功能，這些檔案存放在 <code>.minecraft/logging</code> 目錄下</p><p>使用該資源解析器可以使 MineCraft 輸出經過 log4j 格式化後的日誌內容，類似於如下的內容：</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">log4j</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Event</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">logger</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ekb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">timestamp</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1676012129</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">level</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">INFO</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">thread</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Render thread</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">log4j</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Message</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;![CDATA[</span><span style="color:#C3E88D;">Created: 512x512x4 minecraft:textures/atlas/shulker_boxes.png-atlas</span><span style="color:#89DDFF;">]]&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">log4j</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Message</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">log4j</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Event</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="初始化解析器" tabindex="-1">初始化解析器 <a class="header-anchor" href="#初始化解析器" aria-hidden="true">#</a></h2><p>你可以透過下面的程式碼來初始化 log4j 日誌格式化元件解析器：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">resolver</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GameLoggingInfoResolver</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    BasePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[GAME_ROOT_PATH]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    VersionInfo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">SEARCHED_VERSION_INFO</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    CheckLocalFiles </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">CHECK_LOCAL_FILES</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在上述程式碼塊中，請將這些引數按照您的實際情況替換：</p><table><thead><tr><th style="text-align:center;">專案</th><th style="text-align:center;">說明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">遊戲根目錄，通常為 .minecraft 資料夾的路徑</td></tr><tr><td style="text-align:center;">[SEARCHED_VERSION_INFO]</td><td style="text-align:center;">要檢查的版本的 VersionInfo （透過遊戲定位器獲得）</td></tr><tr><td style="text-align:center;">[CHECK_LOCAL_FILES]</td><td style="text-align:center;">檢查本地檔案（如果為 false，則跳過所有檢查）</td></tr></tbody></table>`,10),o=[p];function t(r,c,D,i,F,y){return n(),a("div",null,o)}const g=s(e,[["render",t]]);export{C as __pageData,g as default};