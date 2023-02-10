import{_ as s,c as n,o as a,a as l}from"./app.60bc5914.js";const d=JSON.parse('{"title":"创建和配置补全器","description":"","frontmatter":{},"headers":[{"level":2,"title":"初始化补全器","slug":"初始化补全器","link":"#初始化补全器","children":[]},{"level":2,"title":"补全游戏资源","slug":"补全游戏资源","link":"#补全游戏资源","children":[]},{"level":2,"title":"报告进度","slug":"报告进度","link":"#报告进度","children":[{"level":3,"title":"报告资源检查器的进度","slug":"报告资源检查器的进度","link":"#报告资源检查器的进度","children":[]},{"level":3,"title":"报告补全器文件下载进度","slug":"报告补全器文件下载进度","link":"#报告补全器文件下载进度","children":[]},{"level":3,"title":"报告下载中的文件的进度信息","slug":"报告下载中的文件的进度信息","link":"#报告下载中的文件的进度信息","children":[]}]}],"relativePath":"projbobcat/resourceCompleter/createAndConfigCompleter.md"}'),e={name:"projbobcat/resourceCompleter/createAndConfigCompleter.md"},p=l(`<h1 id="创建和配置补全器" tabindex="-1">创建和配置补全器 <a class="header-anchor" href="#创建和配置补全器" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#创建和配置补全器">创建和配置补全器</a><ul><li><a href="#初始化补全器">初始化补全器</a></li><li><a href="#补全游戏资源">补全游戏资源</a></li><li><a href="#报告进度">报告进度</a><ul><li><a href="#报告资源检查器的进度">报告资源检查器的进度</a></li><li><a href="#报告补全器文件下载进度">报告补全器文件下载进度</a></li><li><a href="#报告下载中的文件的进度信息">报告下载中的文件的进度信息</a></li></ul></li></ul></li></ul></nav><h2 id="初始化补全器" tabindex="-1">初始化补全器 <a class="header-anchor" href="#初始化补全器" aria-hidden="true">#</a></h2><p>创建一个资源补全器的方法非常简单，您只需要使用下面的代码即可完成补全器的初始化：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">completer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DefaultResourceCompleter</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    MaxDegreeOfParallelism </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">MAX_DEGREE_OF_PARALLELISM</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    ResourceInfoResolvers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IResourceInfoResolver</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        ... </span><span style="color:#676E95;font-style:italic;">// 资源信息解析器的初始化</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    TotalRetry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">NUMBER_OF_TOTAL_RETRY</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    CheckFile </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">CHECK_FILE_AFTER_DOWNLOADED</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    DownloadParts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">TOTAL_DOWNLOAD_SEGMENTS_FOR_LARGE_FILE</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>资源信息解析器的初始化相关教程请参见 <a href="/projbobcat/resourceCompleter/resourceInfoResolver/index.html">资源信息解析器</a> 章节</p></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:left;">数据类型</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[MAX_DEGREE_OF_PARALLELISM]</td><td style="text-align:left;">INT</td><td style="text-align:center;">资源检查并行程度（同时检查游戏资源的数量）</td></tr><tr><td style="text-align:center;">[CHECK_FILE_AFTER_DOWNLOADED]</td><td style="text-align:left;">BOOLEAN</td><td style="text-align:center;">在文件下载完成后检查文件完整性（如果存在资源校检码）</td></tr><tr><td style="text-align:center;">[TOTAL_DOWNLOAD_SEGMENTS_FOR_LARGE_FILE]</td><td style="text-align:left;">INT</td><td style="text-align:center;">大文件下载时的分片数量</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>[MAX_DEGREE_OF_PARALLELISM]</strong> 和 <strong>[TOTAL_DOWNLOAD_SEGMENTS_FOR_LARGE_FILE]</strong> 的数值大小请视硬件性能酌情调整，设置过大的数值可能会导致会导致吞吐量的下降。</p></div><h2 id="补全游戏资源" tabindex="-1">补全游戏资源 <a class="header-anchor" href="#补全游戏资源" aria-hidden="true">#</a></h2><p>在完成资源补全器的初始化操作后，您只需要调用补全方法即可开始执行检查和补全操作：</p><p>在异步上下文中，使用 <strong>CheckAndDownloadTaskAsync</strong> 来完成安装：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight has-focused-lines" tabindex="0"><code><span class="line"></span>
<span class="line has-focus"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">result</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> completer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CheckAndDownloadTaskAsync</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">TaskStatus </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> TaskResultStatus</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Error </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Value</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">IsLibDownloadFailed </span><span style="color:#89DDFF;">??</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 在完成补全后，资源检查器会返回执行结果。</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 您可以检查 result 中的属性值来确定补全是否完成</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// IsLibDownloadFailed 会反映启动必须的库文件是否已经成功补全</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 通常来说，如果库文件的补全失败，很有可能会导致游戏的启动失败</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>在同步上下文中，使用 <strong>CheckAndDownload</strong> 来完成安装：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight has-focused-lines" tabindex="0"><code><span class="line"></span>
<span class="line has-focus"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">result</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> completer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CheckAndDownload</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="报告进度" tabindex="-1">报告进度 <a class="header-anchor" href="#报告进度" aria-hidden="true">#</a></h2><p>在某些情况下，资源补全器可能会需要数分钟的时间来完成资源的检查和下载。 因此，您可能需要实时向用户汇报补全器目前的进度。</p><h3 id="报告资源检查器的进度" tabindex="-1">报告资源检查器的进度 <a class="header-anchor" href="#报告资源检查器的进度" aria-hidden="true">#</a></h3><p>您可以通过注册事件 <strong>GameResourceInfoResolveStatus</strong> 来获取实时的检查进度：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">completer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">GameResourceInfoResolveStatus </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ReportProgress</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Progress</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Status</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>其中， <strong>args.Progress</strong> 指示了检查器当前的百分比进度。<strong>args.Status</strong> 则是检查器当前进度的文字描述。</p><h3 id="报告补全器文件下载进度" tabindex="-1">报告补全器文件下载进度 <a class="header-anchor" href="#报告补全器文件下载进度" aria-hidden="true">#</a></h3><p>您可以通过注册事件 <strong>DownloadFileCompletedEvent</strong> 来获取实时的检查进度：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">completer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DownloadFileCompletedEvent </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// sender 参数为补全器上一个成功下载的文件，类型为 DownloadFile</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// args 返回了该文件的下载状态（成功 / 失败），以及文件的重试计数，</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 类型为 DownloadFileCompletedEventArgs</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><a href="https://github.com/Corona-Studio/ProjBobcat/blob/master/ProjBobcat/ProjBobcat/Class/Model/DownloadFile.cs" target="_blank" rel="noreferrer">DownloadFile 类结构</a></li><li><a href="https://github.com/Corona-Studio/ProjBobcat/blob/master/ProjBobcat/ProjBobcat/Event/DownloadFileCompletedEventArgs.cs" target="_blank" rel="noreferrer">DownloadFileCompletedEventArgs 事件结构</a></li></ul></div><h3 id="报告下载中的文件的进度信息" tabindex="-1">报告下载中的文件的进度信息 <a class="header-anchor" href="#报告下载中的文件的进度信息" aria-hidden="true">#</a></h3><p>您可以通过注册事件 <strong>DownloadFileChangedEvent</strong> 来获取实时的检查进度：</p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">rC</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DownloadFileChangedEvent </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// args 返回了下载中的文件的具体信息（已接收的字节数、总共的字节数、当前速度、百分比进度）</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 类型为 DownloadFileChangedEventArgs</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><a href="https://github.com/Corona-Studio/ProjBobcat/blob/master/ProjBobcat/ProjBobcat/Event/DownloadFileChangedEventArgs.cs" target="_blank" rel="noreferrer">DownloadFileChangedEventArgs 事件结构</a></li></ul></div>`,29),o=[p];function t(r,c,i,D,F,y){return a(),n("div",null,o)}const A=s(e,[["render",t]]);export{d as __pageData,A as default};
