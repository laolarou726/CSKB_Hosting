import{_ as s,o as a,c as e,R as n}from"./chunks/framework.f0ad3fb5.js";const d=JSON.parse('{"title":"CurseForge 整合包安装器","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/projbobcat/installers/curseforge.md","filePath":"zhCN/projbobcat/installers/curseforge.md"}'),l={name:"zhCN/projbobcat/installers/curseforge.md"},r=n(`<h1 id="curseforge-整合包安装器" tabindex="-1">CurseForge 整合包安装器 <a class="header-anchor" href="#curseforge-整合包安装器" aria-label="Permalink to &quot;CurseForge 整合包安装器&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#curseforge-整合包安装器">CurseForge 整合包安装器</a><ul><li><a href="#实用资源">实用资源</a></li><li><a href="#初始化安装器">初始化安装器</a></li><li><a href="#开始安装">开始安装</a></li><li><a href="#报告安装进度">报告安装进度</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意，ProjBobcat 仅实现了 CurseForge 整合包的自动化安装流程，您仍然需要自己实现 CurseForge 整合包的搜索、下载、保存流程。</p></div><h2 id="实用资源" tabindex="-1">实用资源 <a class="header-anchor" href="#实用资源" aria-label="Permalink to &quot;实用资源&quot;">​</a></h2><ul><li><a href="https://www.curseforge.com/" target="_blank" rel="noreferrer">CurseForge 官方网站</a></li><li><a href="https://docs.curseforge.com/" target="_blank" rel="noreferrer">CurseForge API</a></li></ul><h2 id="初始化安装器" tabindex="-1">初始化安装器 <a class="header-anchor" href="#初始化安装器" aria-label="Permalink to &quot;初始化安装器&quot;">​</a></h2><p>初始化 CurseForge 安装器的方式非常简单：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">curseForgeInstaller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CurseForgeInstaller</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    GameId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[CUSTOM_INSTALL_GAME_ID]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ModPackPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[PATH_TO_YOUR_MODPACK]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    RootPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[GAME_ROOT_PATH]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">游戏根目录，通常为 .minecraft 文件夹的路径</td></tr><tr><td style="text-align:center;">[CUSTOM_INSTALL_GAME_ID]</td><td style="text-align:center;">可选项，自定义即将要安装的游戏的名称</td></tr><tr><td style="text-align:center;">[PATH_TO_YOUR_MODPACK]</td><td style="text-align:center;">CurseForge 整合包所在的路径</td></tr></tbody></table><h2 id="开始安装" tabindex="-1">开始安装 <a class="header-anchor" href="#开始安装" aria-label="Permalink to &quot;开始安装&quot;">​</a></h2><p>在您完成安装器的初始化后，您只需要调用 CurseForge 安装器的安装方法来完成安装。</p><p>在异步上下文中，使用 <strong>InstallTaskAsync</strong> 来完成安装：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">curseForgeInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InstallTaskAsync</span><span style="color:#89DDFF;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在同步上下文中，使用 <strong>Install</strong> 来完成安装：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curseForgeInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Install</span><span style="color:#89DDFF;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="报告安装进度" tabindex="-1">报告安装进度 <a class="header-anchor" href="#报告安装进度" aria-label="Permalink to &quot;报告安装进度&quot;">​</a></h2><p>在某些情况下，CurseForge 安装器可能会需要数分钟的时间来完成安装。 因此，您可能需要实时向用户汇报安装器目前的进度。 为此，CurseForge 安装器提供了 <strong>StageChangedEventDelegate</strong> 事件来帮助您实现任务汇报。 您只需要简单地在 <strong>开始安装之前</strong> 注册下面的事件：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curseForgeInstaller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">StageChangedEventDelegate </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">ReportProgress</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Progress</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CurrentStage</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>其中， <strong>args.Progress</strong> 指示了安装器当前的百分比进度。<strong>args.CurrentStage</strong> 则是安装器当前进度的文字描述。</p>`,20),t=[r];function o(p,c,i,F,D,C){return a(),e("div",null,t)}const y=s(l,[["render",o]]);export{d as __pageData,y as default};
