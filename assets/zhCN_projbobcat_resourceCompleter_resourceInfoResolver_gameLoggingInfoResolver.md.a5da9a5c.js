import{_ as s,o as a,c as n,R as l}from"./chunks/framework.f0ad3fb5.js";const g=JSON.parse('{"title":"log4j 日志格式化组件解析器","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/projbobcat/resourceCompleter/resourceInfoResolver/gameLoggingInfoResolver.md","filePath":"zhCN/projbobcat/resourceCompleter/resourceInfoResolver/gameLoggingInfoResolver.md"}'),e={name:"zhCN/projbobcat/resourceCompleter/resourceInfoResolver/gameLoggingInfoResolver.md"},o=l(`<h1 id="log4j-日志格式化组件解析器" tabindex="-1">log4j 日志格式化组件解析器 <a class="header-anchor" href="#log4j-日志格式化组件解析器" aria-label="Permalink to &quot;log4j 日志格式化组件解析器&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#log4j-日志格式化组件解析器">log4j 日志格式化组件解析器</a><ul><li><a href="#初始化解析器">初始化解析器</a></li></ul></li></ul></nav><p>log4j 日志格式化组件解析器提供了对游戏资产文件的解析和验证功能，这些文件存放在 <code>.minecraft/logging</code> 目录下</p><p>使用该资源解析器可以使 MineCraft 输出经过 log4j 格式化后的日志内容，类似于如下的内容：</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">log4j</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Event</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">logger</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ekb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">timestamp</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1676012129</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">level</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">INFO</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">thread</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Render thread</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">log4j</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Message</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;![CDATA[</span><span style="color:#C3E88D;">Created: 512x512x4 minecraft:textures/atlas/shulker_boxes.png-atlas</span><span style="color:#89DDFF;">]]&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">log4j</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Message</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">log4j</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">Event</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="初始化解析器" tabindex="-1">初始化解析器 <a class="header-anchor" href="#初始化解析器" aria-label="Permalink to &quot;初始化解析器&quot;">​</a></h2><p>你可以通过下面的代码来初始化 log4j 日志格式化组件解析器：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">resolver</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GameLoggingInfoResolver</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    BasePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[GAME_ROOT_PATH]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    VersionInfo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">SEARCHED_VERSION_INFO</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    CheckLocalFiles </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">CHECK_LOCAL_FILES</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">游戏根目录，通常为 .minecraft 文件夹的路径</td></tr><tr><td style="text-align:center;">[SEARCHED_VERSION_INFO]</td><td style="text-align:center;">要检查的版本的 VersionInfo （通过游戏定位器获得）</td></tr><tr><td style="text-align:center;">[CHECK_LOCAL_FILES]</td><td style="text-align:center;">检查本地文件（如果为 false，则跳过所有检查）</td></tr></tbody></table>`,10),p=[o];function t(r,c,D,F,i,y){return a(),n("div",null,p)}const d=s(e,[["render",t]]);export{g as __pageData,d as default};
