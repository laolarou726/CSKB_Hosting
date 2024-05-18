import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.DaZwPasY.js";const g=JSON.parse('{"title":"Assets 解析器","description":"","frontmatter":{},"headers":[],"relativePath":"zhTW/projbobcat/resourceCompleter/resourceInfoResolver/assetInfoResolver.md","filePath":"zhTW/projbobcat/resourceCompleter/resourceInfoResolver/assetInfoResolver.md"}'),e={name:"zhTW/projbobcat/resourceCompleter/resourceInfoResolver/assetInfoResolver.md"},t=n(`<h1 id="assets-解析器" tabindex="-1">Assets 解析器 <a class="header-anchor" href="#assets-解析器" aria-label="Permalink to &quot;Assets 解析器&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#assets-解析器">Assets 解析器</a><ul><li><a href="#獲取-version-manifest-versions-列表">獲取 Version Manifest Versions 列表</a><ul><li><a href="#將-json-返回轉換為-projbobcat-型別">將 JSON 返回轉換為 ProjBobcat 型別</a></li></ul></li><li><a href="#初始化解析器">初始化解析器</a></li></ul></li></ul></nav><p>Assets 解析器提供了對遊戲資產檔案的解析和驗證功能，這些檔案一般存放在 <code>.minecraft/assets</code> 目錄下</p><h2 id="獲取-version-manifest-versions-列表" tabindex="-1">獲取 Version Manifest Versions 列表 <a class="header-anchor" href="#獲取-version-manifest-versions-列表" aria-label="Permalink to &quot;獲取 Version Manifest Versions 列表&quot;">​</a></h2><p>首先，您需要向 <a href="https://launchermeta.mojang.com/mc/game/version_manifest.json" target="_blank" rel="noreferrer">https://launchermeta.mojang.com/mc/game/version_manifest.json</a> 傳送一個 <strong>HTTP GET</strong> 請求。</p><p>您將看到類似下面的返回內容：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;latest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;release&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.19.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;snapshot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;23w06a&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;versions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;23w06a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;snapshot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://piston-meta.mojang.com/v1/packages/92ed97b686fe8904d8ec00fd486c435582fd0155/23w06a.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2023-02-08T15:11:06+00:00&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;releaseTime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2023-02-08T15:00:04+00:00&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Mojang 伺服器將會返回一個 JSON 物件，<strong>versions</strong> 欄位則是我們所需要的 Versions 陣列</p><h3 id="將-json-返回轉換為-projbobcat-型別" tabindex="-1">將 JSON 返回轉換為 ProjBobcat 型別 <a class="header-anchor" href="#將-json-返回轉換為-projbobcat-型別" aria-label="Permalink to &quot;將 JSON 返回轉換為 ProjBobcat 型別&quot;">​</a></h3><p>如果您在您的專案中使用 <a href="https://www.newtonsoft.com/json" target="_blank" rel="noreferrer">JSON.NET</a>（Newtonsoft.JSON）。 您可以使用類似下面的程式碼來將您獲取到的伺服器響應轉換為對應的 ProjBobcat 型別：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 從 Mojang API 請求資料（示例，非實際程式碼）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> responseJson</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.Content.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ReadAsStringAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 將 JSON 響應轉換為 ProjBobcat 型別</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> manifest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JsonConvert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DeserializeObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VersionManifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(responseJson); </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 獲取 Versions 列表</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> versions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> manifest.Versions; </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>此處，<strong>versions</strong> 即是 Assets 解析器所需要的 <code>Versions</code> 陣列。</p><h2 id="初始化解析器" tabindex="-1">初始化解析器 <a class="header-anchor" href="#初始化解析器" aria-label="Permalink to &quot;初始化解析器&quot;">​</a></h2><p>你可以透過下面的程式碼來初始化 Assets 解析器：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AssetInfoResolver</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    AssetIndexUriRoot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://launchermeta.mojang.com/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    AssetUriRoot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://resources.download.minecraft.net/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BasePath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[GAME_ROOT_PATH]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    VersionInfo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [SEARCHED_VERSION_INFO],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CheckLocalFiles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [CHECK_LOCAL_FILES],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Versions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> versions </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在上一步獲取到的 Versions 陣列</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>在上述程式碼塊中，請將這些引數按照您的實際情況替換：</p><table><thead><tr><th style="text-align:center;">專案</th><th style="text-align:center;">說明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">遊戲根目錄，通常為 .minecraft 資料夾的路徑</td></tr><tr><td style="text-align:center;">[SEARCHED_VERSION_INFO]</td><td style="text-align:center;">要檢查的版本的 VersionInfo （透過遊戲定位器獲得）</td></tr><tr><td style="text-align:center;">[CHECK_LOCAL_FILES]</td><td style="text-align:center;">檢查本地檔案（如果為 false，則跳過所有檢查）</td></tr></tbody></table>`,17),l=[t];function p(r,h,k,o,c,E){return i(),a("div",null,l)}const u=s(e,[["render",p]]);export{g as __pageData,u as default};