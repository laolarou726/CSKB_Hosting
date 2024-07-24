import{_ as a,c as e,o as l,a4 as i,ai as t}from"./chunks/framework.BG3MB88J.js";const k=JSON.parse('{"title":"提交本地化翻译贡献","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/guide/general/contribute-to-i18n.md","filePath":"zhCN/guide/general/contribute-to-i18n.md"}'),s={name:"zhCN/guide/general/contribute-to-i18n.md"},r=i('<h1 id="提交本地化翻译贡献" tabindex="-1">提交本地化翻译贡献 <a class="header-anchor" href="#提交本地化翻译贡献" aria-label="Permalink to &quot;提交本地化翻译贡献&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">感谢您的无私工作！</p><p>本文将以LauncherX i18n提交为例，通过 <code>Github Desktop</code> 提交贡献内容。</p><p>简而述之，大体的步骤为：确认提交贡献的项目仓库-fork-提交修改-提交Pull Request-等待合并</p></div><nav class="table-of-contents"><ul><li><a href="#提交本地化翻译贡献">提交本地化翻译贡献</a><ul><li><a href="#准备工作">准备工作</a></li><li><a href="#开始操作">开始操作</a><ul><li><a href="#提交到名下的fork">=提交到名下的fork</a></li><li><a href="#将名下的fork仓库内容提交到我们的上游仓库">=将名下的fork仓库内容提交到我们的上游仓库</a></li><li><a href="#同步我们的上游仓库">=同步我们的上游仓库</a></li></ul></li><li><a href="#跋-注意事项">跋&amp;注意事项</a></li></ul></li></ul></nav><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">先决条件</p><ul><li>您持有一个Github账户， 且具备连接到Github的方法与能力</li><li>您当然可以是个Git新手。或许您可以去查看：<a href="https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests" target="_blank" rel="noreferrer">协作处理拉取请求 - GitHub 文档</a> 来了解一般的工作模式</li><li>您下载了Github Desktop并且在上面登陆了您的Github账户</li></ul></div><p>与其他我们公开征集贡献的仓库一样，您需要先登陆好您的Github账户，然后打开<a href="https://github.com/Corona-Studio/LauncherX-i18n" target="_blank" rel="noreferrer">Corona-Studio/LauncherX-i18n: The i18n project for LauncherX (github.com)</a>，找到【fork】按键，点击它。</p><p>接下来可以按照默认的设置，直接点击【Create Fork】进行下一步。一切正常的话，您此时应该会被导航到您名下的fork仓库。您的提交都需要先暂存在这里。</p><h2 id="开始操作" tabindex="-1">开始操作 <a class="header-anchor" href="#开始操作" aria-label="Permalink to &quot;开始操作&quot;">​</a></h2><h3 id="提交到名下的fork" tabindex="-1">=提交到名下的fork <a class="header-anchor" href="#提交到名下的fork" aria-label="Permalink to &quot;=提交到名下的fork&quot;">​</a></h3><ol><li><p>在您名下的fork仓库页面，点击【Code】按钮，它一般具有特别的颜色</p></li><li><p>点击【Open in Github Desktop】。如果浏览器询问您是否允许此网站打开Github Desktop，请允许</p></li><li><p>确保连接可用性，然后在您方便使用的路径下，点击【Clone】然后等待完成</p></li><li><p>完成后，您可以通过诸如Visual Studio Code之类的编辑器进行编辑。变更产生后，您将可以将内容提交到您的fork仓库。</p><p><img src="'+t+`" alt="githubDesktopUI"></p><p>左侧您可以看到作出更改的文件，左下方的第一个输入框是必填的，这里概述您此次提交做了什么；而第二个可用于对第一个输入框的补充说明。完成了这方面的填写，即可点击下方的【Commit to xxx】提交更改。</p></li><li><p>此时，如图中显示为 “Pull origin” 的按钮处会变为 “Push origin”，点击它将可以把本地仓库的变更同步到Github上托管的您名下的fork仓库。</p></li></ol><h3 id="将名下的fork仓库内容提交到我们的上游仓库" tabindex="-1">=将名下的fork仓库内容提交到我们的上游仓库 <a class="header-anchor" href="#将名下的fork仓库内容提交到我们的上游仓库" aria-label="Permalink to &quot;=将名下的fork仓库内容提交到我们的上游仓库&quot;">​</a></h3><p>在您的变更提交到您名下的fork仓库之后，还没完：</p><ol><li>打开我们的上游仓库（在您名下的仓库会显示 “<strong>forked from xxx</strong>”，点击这个链接可以前往我们的上游仓库）</li><li>点击【Pull Requests】（这个按钮和Code、Issues等标签类按钮同级）</li><li>点击【New pull request】</li><li>点击【compare across forks】</li><li>点击切换【head repository: 】中的内容，切换到您名下的fork仓库，然后点击【Create pull request】</li><li>填写简要的说明[1]和详细的说明[2]（如有必要），然后点击【Create pull request】</li><li>等待我们进行审核、编辑和合并即可！在通过之后，您会收到邮件提醒（取决于您的Github设置）</li></ol><h3 id="同步我们的上游仓库" tabindex="-1">=同步我们的上游仓库 <a class="header-anchor" href="#同步我们的上游仓库" aria-label="Permalink to &quot;=同步我们的上游仓库&quot;">​</a></h3><p>我们的上游仓库时不时会有内容更新，这可能来自管理员，也可能来自其他贡献者。</p><h4 id="同步仓库" tabindex="-1">+同步仓库 <a class="header-anchor" href="#同步仓库" aria-label="Permalink to &quot;+同步仓库&quot;">​</a></h4><ol><li>在浏览器中打开您名下的fork仓库</li><li>点击Sync with upstream（或其他文字链接，类似于此）</li><li>请注意：这可能导致您的未提交修改内容丢失。但是好在Git会保存您的历史记录。</li><li>在Github Desktop中，点击Fetch Origin以从Github获取仓库最新信息。如果有更新变更，此处会变为【Pull origin】按钮可供点击。</li><li>点击【Pull origin】以将仓库的新变更拉取到本地。</li></ol><h4 id="处理冲突" tabindex="-1">+处理冲突 <a class="header-anchor" href="#处理冲突" aria-label="Permalink to &quot;+处理冲突&quot;">​</a></h4><p>来自各方的修改都可能引发冲突，即便绝大多数情况下冲突都由我们来辨识和处理解决。但是当您遇到冲突，请按照Github Desktop的提示和冲突检查器找到冲突的行。一般而言，冲突与原文可能以以下格式展示：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; </span></span>
<span class="line"><span>冲突，来自上游</span></span>
<span class="line"><span>========</span></span>
<span class="line"><span>原文，您的内容</span></span>
<span class="line"><span>&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 请以实际情况为准</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>您需要自行确认哪些内容是您需要保留的。将不需要的内容包括<strong>冲突标识符</strong>（）一并删除后，在Github Desktop中mark as resolved（或等待它自行检查）</p><p>参考文章：<a href="https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github" target="_blank" rel="noreferrer">在 GitHub 上解决合并冲突 - GitHub 文档</a></p><h2 id="跋-注意事项" tabindex="-1">跋&amp;注意事项 <a class="header-anchor" href="#跋-注意事项" aria-label="Permalink to &quot;跋&amp;注意事项&quot;">​</a></h2><ul><li><p>测试您的语言文档，参见：<a href="/zhCN/lxguide/features/tricks/debug-lang-file.html">我想贡献多语言了！ | 日冕知识库</a></p></li><li><p>您可能在此期间遇到各种问题。欢迎来到我们任何一个交流群中就您遇到的问题提问，但是我们更希望您可以自己先去使用搜索引擎或聚合类AI查询相关的解决方法。</p></li><li><div class="warning custom-block"><p class="custom-block-title">不要修改别人的内容</p><p>您应该专心于自己主要贡献的部分。如果您认为其他人的什么地方写的有问题，可以先通过issue提交您的意见和建议。</p></div></li></ul>`,24),n=[r];function o(p,u,h,c,d,b){return l(),e("div",null,n)}const m=a(s,[["render",o]]);export{k as __pageData,m as default};
