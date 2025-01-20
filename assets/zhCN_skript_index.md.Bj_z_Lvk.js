import{_ as t,c as e,a2 as s,o as r}from"./chunks/framework.DzmM640o.js";const h=JSON.parse('{"title":"Skript脚本语言入门指南: 准备工作","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/skript/index.md","filePath":"zhCN/skript/index.md"}'),i={name:"zhCN/skript/index.md"};function p(n,a,l,o,c,d){return r(),e("div",null,a[0]||(a[0]=[s(`<h1 id="skript脚本语言入门指南-准备工作" tabindex="-1">Skript脚本语言入门指南: 准备工作 <a class="header-anchor" href="#skript脚本语言入门指南-准备工作" aria-label="Permalink to &quot;Skript脚本语言入门指南: 准备工作&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">本文将指引您构建一个编写和调试Skript的环境.</p></div><nav class="table-of-contents"><ul><li><a href="#skript脚本语言入门指南-准备工作">Skript脚本语言入门指南: 准备工作</a><ul><li><a href="#介绍">介绍</a><ul><li><a href="#关于skript">关于Skript</a></li><li><a href="#安装">安装</a></li><li><a href="#skript文件">Skript文件</a></li></ul></li><li><a href="#搭建调试环境">搭建调试环境</a><ul><li><a href="#编辑器">编辑器</a></li><li><a href="#用于调试脚本的服务端">用于调试脚本的服务端</a></li></ul></li><li><a href="#其他">其他</a></li></ul></li></ul></nav><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><h3 id="关于skript" tabindex="-1">关于Skript <a class="header-anchor" href="#关于skript" aria-label="Permalink to &quot;关于Skript&quot;">​</a></h3><p>Skript(简称sk)：作为一种十分接近英语这一自然语言的脚本语言，一定程度上降低了服主们发挥创意的门槛。而总还是有的：首先你要对你的英语水平很有自信——能看懂文档的范例即可；其次就是在逻辑上能够理解之——作为脚本语言，并不是能用交际英语就可以解决一切问题；也不是Siri，和它描述需求它就能为你实现（Siri也不能）。所以，要想在Sk的世界随心徜徉，首先要记住，你如何与sk交流，Skript(的解释器)才能 “听懂” (实际上所有编程语言都是这样)。</p><p>与此同时，Minecraft的各个概念（实体、区块、规则之类）还有一些计算机基础知识与名词（string字符串、integer整数之类, 不过skript应该说是弱类型语言吧? 有最基本的区分: string对应text, player是玩家类型, number默认是long但是可以直接无感地变成double, 很多类型都可以通过parse as语法进行转换. ）也是必不可少的，但是由于其容易通过搜索引擎了解，故不在此赘述。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>首先需要一个基于Bukkit的Minecraft服务端, 并且已经初始化. 然后前往<a href="https://github.com/SkriptLang/Skript/releases" target="_blank" rel="noreferrer">SkriptLang Github Release</a>下载最新版Skript插件构建, 将下载好的.jar文件放置在<code>~&lt;server_root&gt;/plugins/</code>下, 然后重新启动服务端. 在将插件放置在此位置并启动服务端后, Skript将在plugins目录下创建自己的工作目录<code>skript</code>.</p><p>使用服务端命令<code>/sk info</code> 来确认Skript是否已安装, 以及版本信息和附属插件版本信息.</p><h3 id="skript文件" tabindex="-1">Skript文件 <a class="header-anchor" href="#skript文件" aria-label="Permalink to &quot;Skript文件&quot;">​</a></h3><p>Skript脚本的文件存放在它的<strong>工作目录</strong> 的子文件夹<code>scripts</code> 下, 内容是纯文本. 所有Skript脚本文件它的文件扩展名是<code>.sk</code>, 手动在文件名的最前方添加符号<code>-</code>将会使其内容不被加载(与命令<code>/sk disable &lt;script_name&gt;.Skript</code>是同样的效果)</p><p>在这个文件夹下新建文本文档并修改扩展名为<code>.sk</code>以创建你的第一个Skript脚本文件.</p><h2 id="搭建调试环境" tabindex="-1">搭建调试环境 <a class="header-anchor" href="#搭建调试环境" aria-label="Permalink to &quot;搭建调试环境&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">为了更好地编写和调试脚本, 建议自行搭建一个独立于运营服务端的环境.</p></div><p>在最开始, 请先自行寻找一个地方创建文件夹, 命名最好让自己看得懂. 以后我们称呼这个文件夹为「Skript 目录」</p><h3 id="编辑器" tabindex="-1">编辑器 <a class="header-anchor" href="#编辑器" aria-label="Permalink to &quot;编辑器&quot;">​</a></h3><p>我们推荐使用 <strong>Visual Studio Code</strong> 来编写Skript. 但是实际上, 可以用任意一个文本文件编辑器来编辑Skript脚本. 只是根据笔者经验, VSCode是最方便的.</p><p>前往<a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">VSCode 下载页面</a> 选择适合自己电脑的版本下载并安装. 安装完成后打开VSCode, 在左侧找到一个「四个方块」组成的图标 (有点类似 ), 鼠标悬浮后若提示「扩展(Extension)」, 则点击它.</p><p>在它的搜索框内搜索「Skript + SkriptInsight」, 选择作者为「NickAc」的项目, 点击「安装(Install)」</p><p>按需重启VSCode.</p><p>找到先前创建的Skript目录, 右键点击它, 点击“在VSCode打开” (Windows11目前貌似要先点击「显示更多选项」), 现在你的VSCode就已经将 Skript 目录作为一个项目打开了.</p><p>点击VSC窗口右上角的「上白下黑」的按钮 (切换面板, 图标类似于), 以打开下方命令行面板. 这个面板中命令行的起始点即为Skript目录.</p><h3 id="用于调试脚本的服务端" tabindex="-1">用于调试脚本的服务端 <a class="header-anchor" href="#用于调试脚本的服务端" aria-label="Permalink to &quot;用于调试脚本的服务端&quot;">​</a></h3><p>在Skript 目录中放置一个Bukkit/Spigot/Paper/… 服务端, 然后在上文中打开的命令行面板中操作控制台, 像正常开服一样将其初始化.</p><p>初始化后, 为其安装 <strong>兼容的</strong> Skript.</p><p>在VSC左侧的竖列图标中, 确保选中了从上往下数的第一个图标 (资源管理器), 然后选择到scripts文件夹. 使用「新建文件…」按钮(图标类似  但是右下角有个+符号) 在当前选中的目录下创建新文件.</p><p>运行服务端命令 <code>/sk help</code> 来查看skript帮助.</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>可以创建一个新的脚本然后粘贴以下内容来简化执行<code>/sk reload scripts</code> 命令.</p><div class="language-skript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>command /skr:</span></span>
<span class="line"><span>		trigger:</span></span>
<span class="line"><span>				if sender has permission &quot;admin&quot;:</span></span>
<span class="line"><span>						broadcast &quot;脚本将在3秒内开始重载, 可能带来卡顿&quot; # 可选, 用于提示其他玩家. 如果在专用测试环境中调试, 则可删除此行.</span></span>
<span class="line"><span>						wait 3 second # 配合上一条.</span></span>
<span class="line"><span>						make sender execute command &quot;/sk reload scripts&quot;</span></span>
<span class="line"><span>						broadcast &quot;完成重载&quot;</span></span>
<span class="line"><span>						stop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这样就可以使用新注册的命令<code>/skr</code>来重载所有脚本了.</p>`,32)]))}const u=t(i,[["render",p]]);export{h as __pageData,u as default};