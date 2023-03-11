import{_ as s,o as a,c as n,a as l}from"./app.82833893.js";const C=JSON.parse('{"title":"LiteLoader 安装器","description":"","frontmatter":{},"headers":[{"level":2,"title":"实用资源","slug":"实用资源","link":"#实用资源","children":[]},{"level":2,"title":"获取 LiteLoader Download Version Model","slug":"获取-liteloader-download-version-model","link":"#获取-liteloader-download-version-model","children":[]},{"level":2,"title":"获取 RawVersionModel","slug":"获取-rawversionmodel","link":"#获取-rawversionmodel","children":[]},{"level":2,"title":"初始化安装器","slug":"初始化安装器","link":"#初始化安装器","children":[]},{"level":2,"title":"开始安装","slug":"开始安装","link":"#开始安装","children":[]},{"level":2,"title":"报告安装进度","slug":"报告安装进度","link":"#报告安装进度","children":[]}],"relativePath":"ruRU/projbobcat/installers/liteloader.md"}'),e={name:"ruRU/projbobcat/installers/liteloader.md"},o=l(`<h1 id="liteloader-安装器" tabindex="-1">LiteLoader 安装器 <a class="header-anchor" href="#liteloader-安装器" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#liteloader-安装器">LiteLoader 安装器</a><ul><li><a href="#实用资源">实用资源</a></li><li><a href="#获取-liteloader-download-version-model">获取 LiteLoader Download Version Model</a></li><li><a href="#获取-rawversionmodel">获取 RawVersionModel</a></li><li><a href="#初始化安装器">初始化安装器</a></li><li><a href="#开始安装">开始安装</a></li><li><a href="#报告安装进度">报告安装进度</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意，ProjBobcat 仅实现了 LiteLoader 自动化安装流程，您仍然需要自己实现 LiteLoader 安装包的搜索、下载、保存流程。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>LiteLoader 作为早期 MineCraft 的模组系统，已经长期缺乏维护和后续支持。 因此，我们可能会在后续的版本中移除对 LiteLoader 安装的支持。</p></div><h2 id="实用资源" tabindex="-1">实用资源 <a class="header-anchor" href="#实用资源" aria-hidden="true">#</a></h2><ul><li><a href="https://dl.liteloader.com/versions/versions.json" target="_blank" rel="noreferrer">LiteLoader Versions API</a></li><li><a href="https://bmclapidoc.bangbang93.com/" target="_blank" rel="noreferrer">BMCLAPI 开发文档</a></li></ul><h2 id="获取-liteloader-download-version-model" tabindex="-1">获取 LiteLoader Download Version Model <a class="header-anchor" href="#获取-liteloader-download-version-model" aria-hidden="true">#</a></h2><p>由于 ProjBobcat 的 LiteLoader 安装器要求您在初始化安装器时提供来自 LiteLoader 的下载信息。 因此，我们将在这里简要描述如何根据指定的 MineCraft 版本来获取该信息。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>在该示例中，我们将使用 MineCraft 1.7.10 来向您展示如何获取。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>由于 LiteLoader 官方没有提供公开的 API 文档。因此，在本流程中，我们需要使用第三方的镜像源来完成数据的获取。 在这里，我们使用 <a href="https://bmclapidoc.bangbang93.com/" target="_blank" rel="noreferrer">BMCLAPI</a> 来获取相关的版本信息。</p></div><p>首先，您需要向 <a href="https://bmclapi2.bangbang93.com/liteloader/list?mcversion=1.7.10" target="_blank" rel="noreferrer">https://bmclapi2.bangbang93.com/liteloader/list?mcversion=[MC_VERSION]</a> 发送一个 <strong>HTTP GET</strong> 请求。 将 <code>[MC_VERSION]</code> 替换为您想要安装的 MineCraft 版本。在这里，我们将使用 1.7.10。</p><p>您将看到类似下面的返回内容：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">59685511433f993503c1c879</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">mcversion</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.7.10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">tweakClass</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.mumfrey.liteloader.launch.LiteLoaderTweaker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">libraries</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">stream</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RELEASE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">liteloader-1.7.10.jar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.7.10_04</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">md5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">63ada46e033d0cb6782bada09ad5ca4e</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">timestamp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1414368553</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">srcJar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">liteloader-1.7.10_04-mcpnames-sources.jar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">mcpJar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">liteloader-1.7.10_04-mcpnames.jar</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">hash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">63ada46e033d0cb6782bada09ad5ca4e</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RELEASE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.7.10_04</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">__v</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>BMCLAPI 将返回一个 JSON 对象，将该对象反序列化为 ProjBobcat 类型即是我们需要的 <code>LiteLoaderDownloadVersionModel</code>。</p><h4 id="将-json-返回转换为-projbobcat-类型" tabindex="-1">将 JSON 返回转换为 ProjBobcat 类型 <a class="header-anchor" href="#将-json-返回转换为-projbobcat-类型" aria-hidden="true">#</a></h4><p>如果您在您的项目中使用 <a href="https://www.newtonsoft.com/json" target="_blank" rel="noreferrer">JSON.NET</a>（Newtonsoft.JSON）。 您可以使用类似下面的代码来将您获取到的服务器响应转换为对应的 ProjBobcat 类型：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight has-focused-lines" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 从 BMCLAPI 请求数据（示例，非实际代码）</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">responseJson</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Content</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ReadAsStringAsync</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#676E95;font-style:italic;">// 将 JSON 响应转换为 ProjBobcat 类型 </span></span>
<span class="line has-focus"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">versionModel</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JsonConvert</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DeserializeObject</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">LiteLoaderDownloadVersionModel</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">responseJson</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>此处，<strong>versionModel</strong> 即是 Fabric 安装器所需要的 <code>LiteLoaderDownloadVersionMode</code>。</p><h2 id="获取-rawversionmodel" tabindex="-1">获取 RawVersionModel <a class="header-anchor" href="#获取-rawversionmodel" aria-hidden="true">#</a></h2><p>在初始化 LiteLoader 安装器时，安装器需要使用 LiteLoader 对应的 MineCraft 游戏版本的原始 JSON 内容。 即 <code>[ROOT_PATH]/versions/[MC_VERSION]/[MC_VERSION].json</code> 文件的内容。</p><p>如果您已经安装了 LiteLoader 对应的原版游戏，您可以通过下面的代码获取到 <code>RawVersionModel</code>：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取版本 JSON 文件所在的路径</span></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">jsonPath</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> GamePathHelper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetGameJsonPath</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rP</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 读取该文件的内容</span></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">jsonContent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> File</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ReadAllTextAsync</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">jsonPath</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将 JSON 内容转换为 RawVersionModel</span></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">baseVersionModel</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JsonConvert</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DeserializeObject</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RawVersionModel</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">jsonContent</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>此处，<strong>baseVersionModel</strong> 即是 LiteLoader 安装器所需要的 <code>RawVersionModel</code>。</p><h2 id="初始化安装器" tabindex="-1">初始化安装器 <a class="header-anchor" href="#初始化安装器" aria-hidden="true">#</a></h2><p>初始化 LiteLoader 安装器的方式非常简单。 您需要使用到在先前步骤中取得的 <code>versionModel</code> 和 <code>baseVersionModel</code> 来初始化安装器：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">liteLoaderInstaller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LiteLoaderInstaller</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    InheritVersion </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> baseVersionModel</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    InheritsFrom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[MC_VERSION_OR_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    RootPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[GAME_ROOT_PATH]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    VersionModel </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> versionModel</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    CustomId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[CUSTOM_INSTALL_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">游戏根目录，通常为 .minecraft 文件夹的路径</td></tr><tr><td style="text-align:center;">[CUSTOM_INSTALL_GAME_ID]</td><td style="text-align:center;">可选项，自定义即将要安装的游戏的名称</td></tr><tr><td style="text-align:center;">[MC_VERSION_OR_GAME_ID]</td><td style="text-align:center;">Forge 继承的 MineCraft 原版游戏版本，通常为游戏版本。例如：1.19.2</td></tr><tr><td style="text-align:center;">[VERSION_LOCATOR_INST]</td><td style="text-align:center;">游戏版本定位器实例，即初始化游戏核心时的 <strong>VersionLocator</strong> 属性</td></tr></tbody></table><h2 id="开始安装" tabindex="-1">开始安装 <a class="header-anchor" href="#开始安装" aria-hidden="true">#</a></h2><p>在您完成安装器的初始化后，您只需要调用 LiteLoader 安装器的安装方法来完成安装。</p><p>在异步上下文中，使用 <strong>InstallTaskAsync</strong> 来完成安装：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">liteLoaderInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InstallTaskAsync</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在同步上下文中，使用 <strong>Install</strong> 来完成安装：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">liteLoaderInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Install</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="报告安装进度" tabindex="-1">报告安装进度 <a class="header-anchor" href="#报告安装进度" aria-hidden="true">#</a></h2><p>在某些情况下，LiteLoader 安装器可能会需要数分钟的时间来完成安装。 因此，您可能需要实时向用户汇报安装器目前的进度。 为此，LiteLoader 安装器提供了 <strong>StageChangedEventDelegate</strong> 事件来帮助您实现任务汇报。 您只需要简单地在 <strong>开始安装之前</strong> 注册下面的事件：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">liteLoaderInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">StageChangedEventDelegate </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">ReportProgress</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Progress</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CurrentStage</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>其中， <strong>args.Progress</strong> 指示了安装器当前的百分比进度。<strong>args.CurrentStage</strong> 则是安装器当前进度的文字描述。</p>`,38),p=[o];function r(t,c,i,D,F,y){return a(),n("div",null,p)}const A=s(e,[["render",r]]);export{C as __pageData,A as default};