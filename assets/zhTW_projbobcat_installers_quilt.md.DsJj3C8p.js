import{_ as a,c as i,a2 as n,o as l}from"./chunks/framework.DzmM640o.js";const o=JSON.parse('{"title":"Quilt 安裝器","description":"","frontmatter":{},"headers":[],"relativePath":"zhTW/projbobcat/installers/quilt.md","filePath":"zhTW/projbobcat/installers/quilt.md"}'),t={name:"zhTW/projbobcat/installers/quilt.md"};function e(p,s,r,h,k,d){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="quilt-安裝器" tabindex="-1">Quilt 安裝器 <a class="header-anchor" href="#quilt-安裝器" aria-label="Permalink to &quot;Quilt 安裝器&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#quilt-安裝器">Quilt 安裝器</a><ul><li><a href="#實用資源">實用資源</a></li><li><a href="#相容性檢查">相容性檢查</a></li><li><a href="#獲取-quilt-loader-model">獲取 Quilt Loader Model</a></li><li><a href="#初始化安裝器">初始化安裝器</a></li><li><a href="#開始安裝">開始安裝</a></li><li><a href="#報告安裝進度">報告安裝進度</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>請注意，ProjBobcat 僅實現了 Quilt 自動化安裝流程，您仍然需要自己實現 Quilt 安裝包的搜尋、下載、儲存流程。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Quilt 安裝器目前處於試驗階段，相關的 API 以及安裝流程可能會出現較大幅度的變更。</p></div><h2 id="實用資源" tabindex="-1">實用資源 <a class="header-anchor" href="#實用資源" aria-label="Permalink to &quot;實用資源&quot;">​</a></h2><ul><li><a href="https://quiltmc.org/en/" target="_blank" rel="noreferrer">Quilt 官方網站</a></li><li><a href="https://quiltmc.org/en/install/" target="_blank" rel="noreferrer">Quilt 安裝指南</a></li><li><a href="https://meta.quiltmc.org/" target="_blank" rel="noreferrer">Quilt Meta API</a></li></ul><h2 id="相容性檢查" tabindex="-1">相容性檢查 <a class="header-anchor" href="#相容性檢查" aria-label="Permalink to &quot;相容性檢查&quot;">​</a></h2><p>在開始安裝 Quilt 之前，您需要透過 Quilt Meta API 來查詢您將要修改的 MineCraft 版本是否受支援。</p><p>首先，您需要向 <a href="https://meta.quiltmc.org/v3/versions/game" target="_blank" rel="noreferrer">https://meta.quiltmc.org/v3/versions/game</a> 傳送一個 <strong>HTTP GET</strong> 請求。</p><p>您將看到類似下面的返回內容：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.19.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;stable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.19.3-rc3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;stable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>在這裡，您需要檢查您即將要安裝的遊戲版本是否出現在 Quilt 官方的支援列表當中。 您需要將遊戲版本與 JSON 物件中的 <code>version</code> 欄位作比較。 <strong>如果您的遊戲沒有出現在支援列表當中，安裝將無法繼續。</strong></p><h2 id="獲取-quilt-loader-model" tabindex="-1">獲取 Quilt Loader Model <a class="header-anchor" href="#獲取-quilt-loader-model" aria-label="Permalink to &quot;獲取 Quilt Loader Model&quot;">​</a></h2><p>由於 ProjBobcat 的 Quilt 安裝器要求您在初始化安裝器時提供來自 Quilt 的下載資訊。 因此，我們將在這裡簡要描述如何根據指定的 MineCraft 版本來獲取該資訊。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>在該示例中，我們將使用 MineCraft 1.19.2 來向您展示如何獲取。</p></div><p>首先，您需要向 <a href="https://meta.quiltmc.org/v3/versions/loader" target="_blank" rel="noreferrer">https://meta.quiltmc.org/v3/versions/loader</a> 傳送一個 <strong>HTTP GET</strong> 請求。</p><p>您將看到類似下面的返回內容：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;separator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;maven&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;org.quiltmc:quilt-loader:0.18.1-beta.25&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.18.1-beta.25&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Quilt Meta API 將返回一個 JSON 陣列，陣列中的每一個元素即是我們需要的 Loader Artifact。</p><h4 id="將-json-返回轉換為-projbobcat-型別" tabindex="-1">將 JSON 返回轉換為 ProjBobcat 型別 <a class="header-anchor" href="#將-json-返回轉換為-projbobcat-型別" aria-label="Permalink to &quot;將 JSON 返回轉換為 ProjBobcat 型別&quot;">​</a></h4><p>如果您在您的專案中使用 <a href="https://www.newtonsoft.com/json" target="_blank" rel="noreferrer">JSON.NET</a>（Newtonsoft.JSON）。 您可以使用類似下面的程式碼來將您獲取到的伺服器響應轉換為對應的 ProjBobcat 型別：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 從 Quilt Meta API 請求資料（示例，非實際程式碼）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> responseJson</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.Content.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ReadAsStringAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 將 JSON 響應轉換為 ProjBobcat 型別</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> artifacts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JsonConvert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DeserializeObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QuiltLoaderModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;(responseJson); </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 獲取使用者想要安裝的版本（示例，非實際程式碼）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> userSelect</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vm.SelectedArtifactIndex;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 獲取單個 Loader Artifact</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> selectedArtifact</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> artifacts[userSelect]; </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>此處，<strong>selectedArtifact</strong> 即是 Fabric 安裝器所需要的 <code>QuiltLoaderModel</code>。</p><h2 id="初始化安裝器" tabindex="-1">初始化安裝器 <a class="header-anchor" href="#初始化安裝器" aria-label="Permalink to &quot;初始化安裝器&quot;">​</a></h2><p>初始化 Quilt 安裝器的方式非常簡單。您需要使用到在先前步驟中取得的 <code>selectedArtifact</code> 來初始化安裝器：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> quiltInstaller</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QuiltInstaller</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    InheritsFrom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[MC_VERSION_OR_GAME_ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    RootPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[GAME_ROOT_PATH]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CustomId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    LoaderArtifact </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> selectedArtifact</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在上述程式碼塊中，請將這些引數按照您的實際情況替換：</p><table tabindex="0"><thead><tr><th style="text-align:center;">專案</th><th style="text-align:center;">說明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">遊戲根目錄，通常為 .minecraft 資料夾的路徑</td></tr><tr><td style="text-align:center;">[CUSTOM_INSTALL_GAME_ID]</td><td style="text-align:center;">可選項，自定義即將要安裝的遊戲的名稱</td></tr><tr><td style="text-align:center;">[MC_VERSION_OR_GAME_ID]</td><td style="text-align:center;">Forge 繼承的 MineCraft 原版遊戲版本，通常為遊戲版本。例如：1.19.2</td></tr></tbody></table><h2 id="開始安裝" tabindex="-1">開始安裝 <a class="header-anchor" href="#開始安裝" aria-label="Permalink to &quot;開始安裝&quot;">​</a></h2><p>在您完成安裝器的初始化後，您只需要呼叫 Fabric 安裝器的安裝方法來完成安裝。</p><p>在非同步上下文中，使用 <strong>InstallTaskAsync</strong> 來完成安裝：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> quiltInstaller.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InstallTaskAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在同步上下文中，使用 <strong>Install</strong> 來完成安裝：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">quiltInstaller.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="報告安裝進度" tabindex="-1">報告安裝進度 <a class="header-anchor" href="#報告安裝進度" aria-label="Permalink to &quot;報告安裝進度&quot;">​</a></h2><p>在某些情況下，Quilt 安裝器可能會需要數分鐘的時間來完成安裝。 因此，您可能需要實時向用戶彙報安裝器目前的進度。 為此，Quilt 安裝器提供了 <strong>StageChangedEventDelegate</strong> 事件來幫助您實現任務彙報。 您只需要簡單地在 <strong>開始安裝之前</strong> 註冊下面的事件：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">quiltInstaller.StageChangedEventDelegate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ReportProgress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(args.Progress, args.CurrentStage);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>其中， <strong>args.Progress</strong> 指示了安裝器當前的百分比進度。<strong>args.CurrentStage</strong> 則是安裝器當前進度的文字描述。</p>`,38)]))}const E=a(t,[["render",e]]);export{o as __pageData,E as default};