import{_ as s,o as a,c as n,R as l}from"./chunks/framework.f0ad3fb5.js";const A=JSON.parse('{"title":"Fabric 安装器","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/projbobcat/installers/fabric.md","filePath":"zhCN/projbobcat/installers/fabric.md"}'),p={name:"zhCN/projbobcat/installers/fabric.md"},e=l(`<h1 id="fabric-安装器" tabindex="-1">Fabric 安装器 <a class="header-anchor" href="#fabric-安装器" aria-label="Permalink to &quot;Fabric 安装器&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#fabric-安装器">Fabric 安装器</a><ul><li><a href="#实用资源">实用资源</a></li><li><a href="#获取-fabric-loader-artifact">获取 Fabric Loader Artifact</a><ul><li><a href="#向-fabric-meta-api-发送请求">向 Fabric Meta API 发送请求</a></li></ul></li><li><a href="#初始化安装器">初始化安装器</a></li><li><a href="#开始安装">开始安装</a></li><li><a href="#报告安装进度">报告安装进度</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意，ProjBobcat 仅实现了 Fabric 自动化安装流程，您仍然需要自己实现 Fabric 安装包的搜索、下载、保存流程。</p></div><h2 id="实用资源" tabindex="-1">实用资源 <a class="header-anchor" href="#实用资源" aria-label="Permalink to &quot;实用资源&quot;">​</a></h2><ul><li><a href="https://fabricmc.net/" target="_blank" rel="noreferrer">Fabric 官方网站</a></li><li><a href="https://meta.fabricmc.net/" target="_blank" rel="noreferrer">Fabric Meta API</a></li></ul><h2 id="获取-fabric-loader-artifact" tabindex="-1">获取 Fabric Loader Artifact <a class="header-anchor" href="#获取-fabric-loader-artifact" aria-label="Permalink to &quot;获取 Fabric Loader Artifact&quot;">​</a></h2><p>由于 ProjBobcat 的 Fabric 安装器要求您在初始化安装器时提供来自 Fabric 官方的 Loader Artifact 信息。 因此，我们将在这里简要描述如何根据指定的 MineCraft 版本来获取该信息。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>在该示例中，我们将使用 MineCraft 1.19.2 来向您展示如何获取。</p></div><h3 id="向-fabric-meta-api-发送请求" tabindex="-1">向 Fabric Meta API 发送请求 <a class="header-anchor" href="#向-fabric-meta-api-发送请求" aria-label="Permalink to &quot;向 Fabric Meta API 发送请求&quot;">​</a></h3><p>首先，您需要向 <a href="https://meta.fabricmc.net/v2/versions/loader/1.19.2" target="_blank" rel="noreferrer">https://meta.fabricmc.net/v2/versions/loader/[MC_VERSION]</a> 发送一个 <strong>HTTP GET</strong> 请求。 将 <code>[MC_VERSION]</code> 替换为您想要安装的 MineCraft 版本。在这里，我们将使用 1.19.2。</p><p>您将看到类似下面的返回内容：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">separator</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">maven</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">net.fabricmc:fabric-loader:0.14.11</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.14.11</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">stable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">intermediary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">maven</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">net.fabricmc:intermediary:1.19.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.19.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">stable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">launcherMeta</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">libraries</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">mainClass</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>Fabric Meta API 将返回一个 JSON 数组，数组中的每一个元素即是我们需要的 Loader Artifact。</p><h4 id="将-json-返回转换为-projbobcat-类型" tabindex="-1">将 JSON 返回转换为 ProjBobcat 类型 <a class="header-anchor" href="#将-json-返回转换为-projbobcat-类型" aria-label="Permalink to &quot;将 JSON 返回转换为 ProjBobcat 类型&quot;">​</a></h4><p>如果您在您的项目中使用 <a href="https://www.newtonsoft.com/json" target="_blank" rel="noreferrer">JSON.NET</a>（Newtonsoft.JSON）。 您可以使用类似下面的代码来将您获取到的服务器响应转换为对应的 ProjBobcat 类型：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 从 Fabric Meta API 请求数据（示例，非实际代码）</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">responseJson</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Content</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ReadAsStringAsync</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#676E95;font-style:italic;">// 将 JSON 响应转换为 ProjBobcat 类型 </span></span>
<span class="line has-focus"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">artifacts</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JsonConvert</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DeserializeObject</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">FabricLoaderArtifactModel</span><span style="color:#89DDFF;">&gt;&gt;(</span><span style="color:#A6ACCD;">responseJson</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取用户想要安装的版本（示例，非实际代码）</span></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">userSelect</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SelectedArtifactIndex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#676E95;font-style:italic;">// 获取单个 Loader Artifact </span></span>
<span class="line has-focus"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">selectedArtifact</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> artifacts</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">userSelect</span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>此处，<strong>selectedArtifact</strong> 即是 Fabric 安装器所需要的 <code>FabricLoaderArtifactModel</code>。</p><h2 id="初始化安装器" tabindex="-1">初始化安装器 <a class="header-anchor" href="#初始化安装器" aria-label="Permalink to &quot;初始化安装器&quot;">​</a></h2><p>初始化 Fabric 安装器的方式非常简单。您需要使用到在先前步骤中取得的 <code>selectedArtifact</code> 来初始化安装器：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">fabricInstaller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FabricInstaller</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    LoaderArtifact </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> selectedArtifact</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    VersionLocator </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">VERSION_LOCATOR_INST</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    RootPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[GAME_ROOT_PATH]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    CustomId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[CUSTOM_INSTALL_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    InheritsFrom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[MC_VERSION_OR_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">游戏根目录，通常为 .minecraft 文件夹的路径</td></tr><tr><td style="text-align:center;">[CUSTOM_INSTALL_GAME_ID]</td><td style="text-align:center;">可选项，自定义即将要安装的游戏的名称</td></tr><tr><td style="text-align:center;">[MC_VERSION_OR_GAME_ID]</td><td style="text-align:center;">Forge 继承的 MineCraft 原版游戏版本，通常为游戏版本。例如：1.19.2</td></tr><tr><td style="text-align:center;">[VERSION_LOCATOR_INST]</td><td style="text-align:center;">游戏版本定位器实例，即初始化游戏核心时的 <strong>VersionLocator</strong> 属性</td></tr></tbody></table><h2 id="开始安装" tabindex="-1">开始安装 <a class="header-anchor" href="#开始安装" aria-label="Permalink to &quot;开始安装&quot;">​</a></h2><p>在您完成安装器的初始化后，您只需要调用 Fabric 安装器的安装方法来完成安装。</p><p>在异步上下文中，使用 <strong>InstallTaskAsync</strong> 来完成安装：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">fabricInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InstallTaskAsync</span><span style="color:#89DDFF;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在同步上下文中，使用 <strong>Install</strong> 来完成安装：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fabricInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Install</span><span style="color:#89DDFF;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="报告安装进度" tabindex="-1">报告安装进度 <a class="header-anchor" href="#报告安装进度" aria-label="Permalink to &quot;报告安装进度&quot;">​</a></h2><p>在某些情况下，Fabric 安装器可能会需要数分钟的时间来完成安装。 因此，您可能需要实时向用户汇报安装器目前的进度。 为此，Fabric 安装器提供了 <strong>StageChangedEventDelegate</strong> 事件来帮助您实现任务汇报。 您只需要简单地在 <strong>开始安装之前</strong> 注册下面的事件：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fabricInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">StageChangedEventDelegate </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">ReportProgress</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Progress</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CurrentStage</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>其中， <strong>args.Progress</strong> 指示了安装器当前的百分比进度。<strong>args.CurrentStage</strong> 则是安装器当前进度的文字描述。</p>`,32),o=[e];function r(t,c,i,D,F,y){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{A as __pageData,b as default};
