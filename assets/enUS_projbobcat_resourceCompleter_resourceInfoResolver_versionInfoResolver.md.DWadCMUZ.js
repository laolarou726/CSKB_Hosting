import{_ as e,c as s,o as i,a4 as a}from"./chunks/framework.DaZwPasY.js";const f=JSON.parse('{"title":"Version information resolver","description":"","frontmatter":{},"headers":[],"relativePath":"enUS/projbobcat/resourceCompleter/resourceInfoResolver/versionInfoResolver.md","filePath":"enUS/projbobcat/resourceCompleter/resourceInfoResolver/versionInfoResolver.md"}'),t={name:"enUS/projbobcat/resourceCompleter/resourceInfoResolver/versionInfoResolver.md"},n=a(`<h1 id="version-information-resolver" tabindex="-1">Version information resolver <a class="header-anchor" href="#version-information-resolver" aria-label="Permalink to &quot;Version information resolver&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#version-information-resolver">Version information resolver</a><ul><li><a href="#initialize-the-parser">Initialize the parser</a></li></ul></li></ul></nav><p>The version information resolver provides parsing and verification functions for game asset files. These files are stored in <code>.minecraft/versions/{GAME_VERSION}/{GAME_VERSION}.jar</code> directory. These files are the core files necessary to start MineCraft.</p><h2 id="initialize-the-parser" tabindex="-1">Initialize the parser <a class="header-anchor" href="#initialize-the-parser" aria-label="Permalink to &quot;Initialize the parser&quot;">​</a></h2><p>You can initialize the initialization parser with the following code:</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VersionInfoResolver</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BasePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[GAME_ROOT_PATH]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    VersionInfo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [SEARCHED_VERSION_INFO],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CheckLocalFiles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [CHECK_LOCAL_FILES]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>In the above code block, please replace these parameters according to your actual situation:</p><table><thead><tr><th style="text-align:center;">Project</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">The game root directory, usually the path to the .minecraft folder</td></tr><tr><td style="text-align:center;">[SEARCHED_VERSION_INFO]</td><td style="text-align:center;">VersionInfo of the version to check (obtained via game locator)</td></tr><tr><td style="text-align:center;">[CHECK_LOCAL_FILES]</td><td style="text-align:center;">Check local files (if false, skip all checks)</td></tr></tbody></table>`,8),r=[n];function l(o,p,h,c,d,k){return i(),s("div",null,r)}const u=e(t,[["render",l]]);export{f as __pageData,u as default};