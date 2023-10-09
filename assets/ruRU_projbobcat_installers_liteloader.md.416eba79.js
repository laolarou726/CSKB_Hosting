import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.87481dfd.js";const b=JSON.parse('{"title":"LiteLoader 安装器","description":"","frontmatter":{},"headers":[],"relativePath":"ruRU/projbobcat/installers/liteloader.md","filePath":"ruRU/projbobcat/installers/liteloader.md"}'),o={name:"ruRU/projbobcat/installers/liteloader.md"},e=l(`<h1 id="liteloader-安装器" tabindex="-1">LiteLoader 安装器 <a class="header-anchor" href="#liteloader-安装器" aria-label="Permalink to &quot;LiteLoader 安装器&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#liteloader-安装器">LiteLoader 安装器</a><ul><li><a href="#实用资源">实用资源</a></li><li><a href="#获取-liteloader-download-version-model">获取 LiteLoader Download Version Model</a></li><li><a href="#获取-rawversionmodel">获取 RawVersionModel</a></li><li><a href="#初始化安装器">初始化安装器</a></li><li><a href="#开始安装">开始安装</a></li><li><a href="#报告安装进度">报告安装进度</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意，ProjBobcat 仅实现了 LiteLoader 自动化安装流程，您仍然需要自己实现 LiteLoader 安装包的搜索、下载、保存流程。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>LiteLoader 作为早期 MineCraft 的模组系统，已经长期缺乏维护和后续支持。 因此，我们可能会在后续的版本中移除对 LiteLoader 安装的支持。</p></div><h2 id="实用资源" tabindex="-1">实用资源 <a class="header-anchor" href="#实用资源" aria-label="Permalink to &quot;实用资源&quot;">​</a></h2><ul><li><a href="https://dl.liteloader.com/versions/versions.json" target="_blank" rel="noreferrer">LiteLoader Versions API</a></li><li><a href="https://bmclapidoc.bangbang93.com/" target="_blank" rel="noreferrer">BMCLAPI 开发文档</a></li></ul><h2 id="获取-liteloader-download-version-model" tabindex="-1">获取 LiteLoader Download Version Model <a class="header-anchor" href="#获取-liteloader-download-version-model" aria-label="Permalink to &quot;获取 LiteLoader Download Version Model&quot;">​</a></h2><p>由于 ProjBobcat 的 LiteLoader 安装器要求您在初始化安装器时提供来自 LiteLoader 的下载信息。 因此，我们将在这里简要描述如何根据指定的 MineCraft 版本来获取该信息。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>在该示例中，我们将使用 MineCraft 1.7.10 来向您展示如何获取。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>由于 LiteLoader 官方没有提供公开的 API 文档。因此，在本流程中，我们需要使用第三方的镜像源来完成数据的获取。 在这里，我们使用 <a href="https://bmclapidoc.bangbang93.com/" target="_blank" rel="noreferrer">BMCLAPI</a> 来获取相关的版本信息。</p></div><p>首先，您需要向 <a href="https://bmclapi2.bangbang93.com/liteloader/list?mcversion=1.7.10" target="_blank" rel="noreferrer">https://bmclapi2.bangbang93.com/liteloader/list?mcversion=[MC_VERSION]</a> 发送一个 <strong>HTTP GET</strong> 请求。 将 <code>[MC_VERSION]</code> 替换为您想要安装的 MineCraft 版本。在这里，我们将使用 1.7.10。</p><p>您将看到类似下面的返回内容：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;_id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;59685511433f993503c1c879&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;mcversion&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.7.10&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;build&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;tweakClass&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;com.mumfrey.liteloader.launch.LiteLoaderTweaker&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;libraries&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#FDAEB7;font-style:italic;">...</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;stream&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;RELEASE&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;file&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;liteloader-1.7.10.jar&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.7.10_04&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;md5&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;63ada46e033d0cb6782bada09ad5ca4e&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;timestamp&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1414368553&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;srcJar&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;liteloader-1.7.10_04-mcpnames-sources.jar&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;mcpJar&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;liteloader-1.7.10_04-mcpnames.jar&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;hash&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;63ada46e033d0cb6782bada09ad5ca4e&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;RELEASE&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.7.10_04&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;__v&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;_id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;59685511433f993503c1c879&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;mcversion&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1.7.10&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;build&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;tweakClass&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;com.mumfrey.liteloader.launch.LiteLoaderTweaker&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;libraries&quot;</span><span style="color:#24292E;">: [</span><span style="color:#B31D28;font-style:italic;">...</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;stream&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;RELEASE&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;file&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;liteloader-1.7.10.jar&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1.7.10_04&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;md5&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;63ada46e033d0cb6782bada09ad5ca4e&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;timestamp&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1414368553&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;srcJar&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;liteloader-1.7.10_04-mcpnames-sources.jar&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;mcpJar&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;liteloader-1.7.10_04-mcpnames.jar&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;hash&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;63ada46e033d0cb6782bada09ad5ca4e&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;RELEASE&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1.7.10_04&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;__v&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>BMCLAPI 将返回一个 JSON 对象，将该对象反序列化为 ProjBobcat 类型即是我们需要的 <code>LiteLoaderDownloadVersionModel</code>。</p><h4 id="将-json-返回转换为-projbobcat-类型" tabindex="-1">将 JSON 返回转换为 ProjBobcat 类型 <a class="header-anchor" href="#将-json-返回转换为-projbobcat-类型" aria-label="Permalink to &quot;将 JSON 返回转换为 ProjBobcat 类型&quot;">​</a></h4><p>如果您在您的项目中使用 <a href="https://www.newtonsoft.com/json" target="_blank" rel="noreferrer">JSON.NET</a>（Newtonsoft.JSON）。 您可以使用类似下面的代码来将您获取到的服务器响应转换为对应的 ProjBobcat 类型：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 从 BMCLAPI 请求数据（示例，非实际代码）</span></span>
<span class="line"><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">responseJson</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> res.Content.</span><span style="color:#B392F0;">ReadAsStringAsync</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#6A737D;">// 将 JSON 响应转换为 ProjBobcat 类型 </span></span>
<span class="line has-focus"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">versionModel</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> JsonConvert.</span><span style="color:#B392F0;">DeserializeObject</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">LiteLoaderDownloadVersionModel</span><span style="color:#E1E4E8;">&gt;(responseJson); </span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 从 BMCLAPI 请求数据（示例，非实际代码）</span></span>
<span class="line"><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">responseJson</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> res.Content.</span><span style="color:#6F42C1;">ReadAsStringAsync</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#6A737D;">// 将 JSON 响应转换为 ProjBobcat 类型 </span></span>
<span class="line has-focus"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">versionModel</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> JsonConvert.</span><span style="color:#6F42C1;">DeserializeObject</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">LiteLoaderDownloadVersionModel</span><span style="color:#24292E;">&gt;(responseJson); </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>此处，<strong>versionModel</strong> 即是 Fabric 安装器所需要的 <code>LiteLoaderDownloadVersionMode</code>。</p><h2 id="获取-rawversionmodel" tabindex="-1">获取 RawVersionModel <a class="header-anchor" href="#获取-rawversionmodel" aria-label="Permalink to &quot;获取 RawVersionModel&quot;">​</a></h2><p>在初始化 LiteLoader 安装器时，安装器需要使用 LiteLoader 对应的 MineCraft 游戏版本的原始 JSON 内容。 即 <code>[ROOT_PATH]/versions/[MC_VERSION]/[MC_VERSION].json</code> 文件的内容。</p><p>如果您已经安装了 LiteLoader 对应的原版游戏，您可以通过下面的代码获取到 <code>RawVersionModel</code>：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取版本 JSON 文件所在的路径</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jsonPath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> GamePathHelper.</span><span style="color:#B392F0;">GetGameJsonPath</span><span style="color:#E1E4E8;">(rP, id);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 读取该文件的内容</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jsonContent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> File.</span><span style="color:#B392F0;">ReadAllTextAsync</span><span style="color:#E1E4E8;">(jsonPath);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 将 JSON 内容转换为 RawVersionModel</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">baseVersionModel</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> JsonConvert.</span><span style="color:#B392F0;">DeserializeObject</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">RawVersionModel</span><span style="color:#E1E4E8;">&gt;(jsonContent);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取版本 JSON 文件所在的路径</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jsonPath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> GamePathHelper.</span><span style="color:#6F42C1;">GetGameJsonPath</span><span style="color:#24292E;">(rP, id);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 读取该文件的内容</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jsonContent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> File.</span><span style="color:#6F42C1;">ReadAllTextAsync</span><span style="color:#24292E;">(jsonPath);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 将 JSON 内容转换为 RawVersionModel</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">baseVersionModel</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> JsonConvert.</span><span style="color:#6F42C1;">DeserializeObject</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">RawVersionModel</span><span style="color:#24292E;">&gt;(jsonContent);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>此处，<strong>baseVersionModel</strong> 即是 LiteLoader 安装器所需要的 <code>RawVersionModel</code>。</p><h2 id="初始化安装器" tabindex="-1">初始化安装器 <a class="header-anchor" href="#初始化安装器" aria-label="Permalink to &quot;初始化安装器&quot;">​</a></h2><p>初始化 LiteLoader 安装器的方式非常简单。 您需要使用到在先前步骤中取得的 <code>versionModel</code> 和 <code>baseVersionModel</code> 来初始化安装器：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">liteLoaderInstaller</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LiteLoaderInstaller</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    InheritVersion </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> baseVersionModel,</span></span>
<span class="line"><span style="color:#E1E4E8;">    InheritsFrom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[MC_VERSION_OR_GAME_ID]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    RootPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[GAME_ROOT_PATH]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    VersionModel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> versionModel,</span></span>
<span class="line"><span style="color:#E1E4E8;">    CustomId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">liteLoaderInstaller</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LiteLoaderInstaller</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    InheritVersion </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> baseVersionModel,</span></span>
<span class="line"><span style="color:#24292E;">    InheritsFrom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[MC_VERSION_OR_GAME_ID]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    RootPath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[GAME_ROOT_PATH]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    VersionModel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> versionModel,</span></span>
<span class="line"><span style="color:#24292E;">    CustomId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">游戏根目录，通常为 .minecraft 文件夹的路径</td></tr><tr><td style="text-align:center;">[CUSTOM_INSTALL_GAME_ID]</td><td style="text-align:center;">可选项，自定义即将要安装的游戏的名称</td></tr><tr><td style="text-align:center;">[MC_VERSION_OR_GAME_ID]</td><td style="text-align:center;">Forge 继承的 MineCraft 原版游戏版本，通常为游戏版本。例如：1.19.2</td></tr><tr><td style="text-align:center;">[VERSION_LOCATOR_INST]</td><td style="text-align:center;">游戏版本定位器实例，即初始化游戏核心时的 <strong>VersionLocator</strong> 属性</td></tr></tbody></table><h2 id="开始安装" tabindex="-1">开始安装 <a class="header-anchor" href="#开始安装" aria-label="Permalink to &quot;开始安装&quot;">​</a></h2><p>在您完成安装器的初始化后，您只需要调用 LiteLoader 安装器的安装方法来完成安装。</p><p>在异步上下文中，使用 <strong>InstallTaskAsync</strong> 来完成安装：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> liteLoaderInstaller.</span><span style="color:#B392F0;">InstallTaskAsync</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> liteLoaderInstaller.</span><span style="color:#6F42C1;">InstallTaskAsync</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在同步上下文中，使用 <strong>Install</strong> 来完成安装：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">liteLoaderInstaller.</span><span style="color:#B392F0;">Install</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">liteLoaderInstaller.</span><span style="color:#6F42C1;">Install</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="报告安装进度" tabindex="-1">报告安装进度 <a class="header-anchor" href="#报告安装进度" aria-label="Permalink to &quot;报告安装进度&quot;">​</a></h2><p>在某些情况下，LiteLoader 安装器可能会需要数分钟的时间来完成安装。 因此，您可能需要实时向用户汇报安装器目前的进度。 为此，LiteLoader 安装器提供了 <strong>StageChangedEventDelegate</strong> 事件来帮助您实现任务汇报。 您只需要简单地在 <strong>开始安装之前</strong> 注册下面的事件：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">liteLoaderInstaller.StageChangedEventDelegate </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReportProgress</span><span style="color:#E1E4E8;">(args.Progress, args.CurrentStage);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">liteLoaderInstaller.StageChangedEventDelegate </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">_</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">args</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReportProgress</span><span style="color:#24292E;">(args.Progress, args.CurrentStage);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>其中， <strong>args.Progress</strong> 指示了安装器当前的百分比进度。<strong>args.CurrentStage</strong> 则是安装器当前进度的文字描述。</p>`,38),p=[e];function t(r,c,i,E,y,d){return a(),n("div",null,p)}const m=s(o,[["render",t]]);export{b as __pageData,m as default};
