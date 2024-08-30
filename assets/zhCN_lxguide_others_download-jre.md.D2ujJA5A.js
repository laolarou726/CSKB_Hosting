import{_ as a}from"./chunks/azul-website.DZT0TgXR.js";import{_ as r,c as e,o as t,a4 as o}from"./chunks/framework.DcpqW5_U.js";const w=JSON.parse('{"title":"下载合适的Java运行时","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/lxguide/others/download-jre.md","filePath":"zhCN/lxguide/others/download-jre.md"}'),n={name:"zhCN/lxguide/others/download-jre.md"},s=o('<h1 id="下载合适的java运行时" tabindex="-1">下载合适的Java运行时 <a class="header-anchor" href="#下载合适的java运行时" aria-label="Permalink to &quot;下载合适的Java运行时&quot;">​</a></h1><p>一般而言, 我们建议使用来自 <strong>Azul Zulu</strong> 的JDK构建（根据部分反馈，不再推荐Alibaba Dragonwell，除非环境一定需要它）用于游戏. 在LauncherX的“设置-全局游戏设置-启动设置-资源下载” 中提供了三个版本基于x64平台的JRE下载. 这些下载是由Mojang选择的用于游戏的JRE, 一般都是来自OpenJDK的构建. 但是, 目前(2024-03-17)为止, Mojang尚未为ARM平台选择JDK. 因此, 对于ARM平台用户或想要通过更换JRE来优化游戏的用户, 我们建议使用Azul Zulu JDK, 因为它是面向服务端优化的版本, 应对高频内存I/O、高负载计算时能有更好的性能, 且都有面向ARM平台(aarch)的构建可供下载. 以下是这几种JDK的官方下载链接, 您需要打开后选择需要的版本:</p><p><br>= <a href="https://www.azul.com/downloads/#zulu" target="_blank" rel="noreferrer">Azul Zulu官方下载(英文)</a>: 提供各种版本的JDK构建, 可选包含JavaFX运行时<br>= <a href="https://dragonwell-jdk.io/#/index" target="_blank" rel="noreferrer">Alibaba Dragonwell(怎么也是英文)</a>: 提供Java8、11、17、21(Standard) 或Java8、11(Extended)<br>= <a href="https://www.oracle.com/cn/java/technologies/downloads/archive/" target="_blank" rel="noreferrer">Oracle Java SE Runtime 下载(英文)</a>: Oracle的Java下载归档站<br>= <a href="https://openjdk.org/" target="_blank" rel="noreferrer">OpenJDK</a>: 就是OpenJDK而已</p><p>接下来, 我们以Azul Zulu为例展示如何下载, 以及下载后应该如何让LauncherX找到.</p><div class="warning custom-block"><p class="custom-block-title">请注意</p><p>由于仅Windows版本的LauncherX支持深度搜索, 且深度搜索获取结果较慢, 故此接下来的教程中只使用一般搜索和手动添加.<br>并且这里只介绍下载打包为.zip的二进制文件的用法. 如果Linux用户在下载后出现问题, 请尝试下载.tar.gz, 这个格式的归档保留了权限设置.</p></div><h3 id="访问官网的下载页面" tabindex="-1">访问官网的下载页面 <a class="header-anchor" href="#访问官网的下载页面" aria-label="Permalink to &quot;访问官网的下载页面&quot;">​</a></h3><p>访问 <a href="https://www.azul.com/downloads/#zulu" target="_blank" rel="noreferrer">https://www.azul.com/downloads/#zulu</a> , 找到<strong>下载区域</strong>. 如图所示的是版本筛选框.</p><p><img src="'+a+'" alt="azul-website"></p><p>在 <strong>Operating System</strong> 处选择 Windows/macOS/Linux(请自行选择子版本/发行版)，<br>在 <strong>Architecture</strong> 处选择 <strong>x86 64-bit或ARM 64-bit</strong> (前者是一般的amd64/x86-64架构, 后者是ARM架构. ) <br>在<strong>Java Package</strong>选择「JRE」或「JDK」(如果有需要的话, 可以选择带有FX字样的体积更大的选项. 它附带JavaFX支持)<br>在<strong>Java Version</strong>选择您需要的版本(Java17/Java8). 如果右侧的<strong>Include Older Versions</strong>开关没有开启, 这里则不会显示用于1.17的Java16, 或其他非LTS版本.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请前往系统设置确认您的处理器架构, 或借助LauncherX的判断: x64架构无法运行ARM架构版本LauncherX, 而ARM架构LauncherX可能可以运行x64架构版本LauncherX, 但是会有明显的警告.</p></div><p>在您每一步的筛选器操作结束时, 该页面的可用下载列表都会依据您的条件更新.</p><p>一般而言, 建议您选择列表最开头的项目 (只要您严格地完成了系统和架构选择). 在您打算下载的项目右侧的 <strong>Download</strong> 按钮中选择 <code>.zip</code> 格式的运行时并点击，等待下载完成后将其解压到任意一处本地文件夹 (最好新创建一个). 随后在 LauncherX 中选择 <strong>搜索Java</strong>. 如果搜索不到您新解压的JRE, 请点击<strong>手动添加</strong>，并选择刚才解压的文件夹 <strong>bin/</strong> 目录下的 <strong>java</strong> 可执行文件即可 (对于Windows, 如果开启了<strong>显示已知文件扩展名</strong> , 则您要选择的项目名为java.exe)。</p><h3 id="参考更多相关文章" tabindex="-1">参考更多相关文章 <a class="header-anchor" href="#参考更多相关文章" aria-label="Permalink to &quot;参考更多相关文章&quot;">​</a></h3><ul><li>来自NitWikit：<a href="https://yizhan.wiki/NitWikit/preparation/choose-and-download-and-install-java" target="_blank" rel="noreferrer">选择、下载和安装 Java | 笨蛋 MC 开服教程 (yizhan.wiki)</a></li></ul>',14),l=[s];function i(d,c,h,u,p,g){return t(),e("div",null,l)}const J=r(n,[["render",i]]);export{w as __pageData,J as default};
