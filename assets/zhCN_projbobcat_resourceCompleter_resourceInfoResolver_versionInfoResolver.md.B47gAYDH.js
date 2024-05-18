import{_ as s,c as e,o as a,a4 as t}from"./chunks/framework.DaZwPasY.js";const _=JSON.parse('{"title":"版本信息解析器","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/projbobcat/resourceCompleter/resourceInfoResolver/versionInfoResolver.md","filePath":"zhCN/projbobcat/resourceCompleter/resourceInfoResolver/versionInfoResolver.md"}'),i={name:"zhCN/projbobcat/resourceCompleter/resourceInfoResolver/versionInfoResolver.md"},n=t(`<h1 id="版本信息解析器" tabindex="-1">版本信息解析器 <a class="header-anchor" href="#版本信息解析器" aria-label="Permalink to &quot;版本信息解析器&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#版本信息解析器">版本信息解析器</a><ul><li><a href="#初始化解析器">初始化解析器</a></li></ul></li></ul></nav><p>版本信息解析器提供了对游戏资产文件的解析和验证功能，这些文件存放在 <code>.minecraft/versions/{GAME_VERSION}/{GAME_VERSION}.jar</code> 目录下，这些文件是启动 MineCraft 所必需的核心文件。</p><h2 id="初始化解析器" tabindex="-1">初始化解析器 <a class="header-anchor" href="#初始化解析器" aria-label="Permalink to &quot;初始化解析器&quot;">​</a></h2><p>你可以通过下面的代码来初始化初始化解析器：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VersionInfoResolver</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BasePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[GAME_ROOT_PATH]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    VersionInfo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [SEARCHED_VERSION_INFO],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CheckLocalFiles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [CHECK_LOCAL_FILES]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">游戏根目录，通常为 .minecraft 文件夹的路径</td></tr><tr><td style="text-align:center;">[SEARCHED_VERSION_INFO]</td><td style="text-align:center;">要检查的版本的 VersionInfo （通过游戏定位器获得）</td></tr><tr><td style="text-align:center;">[CHECK_LOCAL_FILES]</td><td style="text-align:center;">检查本地文件（如果为 false，则跳过所有检查）</td></tr></tbody></table>`,8),l=[n];function r(p,o,h,c,d,k){return a(),e("div",null,l)}const u=s(i,[["render",r]]);export{_ as __pageData,u as default};