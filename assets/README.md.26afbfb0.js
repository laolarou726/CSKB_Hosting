import{_ as s,o as a,c as n,a as l}from"./app.82833893.js";const h=JSON.parse('{"title":"docs","description":"","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"帮助我们添加一个新语言支持？","slug":"帮助我们添加一个新语言支持","link":"#帮助我们添加一个新语言支持","children":[]},{"level":2,"title":"贡献","slug":"贡献","link":"#贡献","children":[{"level":3,"title":"多语言贡献者","slug":"多语言贡献者","link":"#多语言贡献者","children":[]}]}],"relativePath":"README.md"}'),o={name:"README.md"},p=l(`<h1 id="docs" tabindex="-1">docs <a href="https://github.com/Corona-Studio/CSKB_Hosting/actions/workflows/deploy.yml" target="_blank" rel="noreferrer"><img src="https://github.com/Corona-Studio/CSKB_Hosting/actions/workflows/deploy.yml/badge.svg" alt="Deploy"></a> <a class="header-anchor" href="#docs" aria-hidden="true">#</a></h1><p>日冕知识库文档，使用 Markdown 撰写。</p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h2><p>这里是日冕知识库官方仓库，里面包含了有关于团队项目的详细介绍以及开发文档。同时也包含部分 MineCraft 游戏内容的相关规范。 目前已经支持包括 简体中文、繁体中文、俄罗斯语等语言。项目使用 MIT 协议开源，欢迎广大热心网友帮助我们支持更多的语言！</p><img width="1031" alt="image" src="https://user-images.githubusercontent.com/25716486/218275312-68e63c3b-97d8-49d7-ae07-bc86f6e68fb0.png"><h2 id="帮助我们添加一个新语言支持" tabindex="-1">帮助我们添加一个新语言支持？ <a class="header-anchor" href="#帮助我们添加一个新语言支持" aria-hidden="true">#</a></h2><ol><li>首先，您需要点击右上方的 <code>Fork</code> 来取得可修改的仓库副本</li><li>将项目克隆到本地，使用您常用的 IDE 打开项目</li><li><a href="https://segmentfault.com/a/1190000019287972" target="_blank" rel="noreferrer">确定您即将翻译的语言的 i18n 缩写</a>。假如您即将翻译的语言是 <strong>繁体中文（台湾）</strong>，您在之后使用到的名称则是 <strong>zhTW</strong>，呈现在页面中的语言名称必须对应的是“繁体中文（台湾）”（或“台湾繁体”）。“繁体中文（香港）”、简体中文（新加坡）与Español(Mexico)、Русский(Украина)同理。 <strong>请注意, 您将要为一个或多个地区适配适合当地语言习惯的本地化文本。您首先需要考虑的即是国际承认和地区习惯之间的平衡。任何我们认为会造成不良影响的内容均会被移除, 且制造此内容者将会被移出贡献者列表。</strong></li><li>跳转到项目目录下的 <code>docs/.vitepress</code> 文件夹，您将在这个目录下找到如下内容：</li></ol><ul><li>navBar（用于存放顶部导航条的翻译内容）</li><li>searchBar（用于存放搜索条的翻译内容）</li><li>sideBar（用于存放侧边导航栏的翻译内容）</li><li><code>i18n 缩写</code>.ts（用于整合上述翻译内容）</li><li>config.ts（配置文件总成）</li></ul><ol start="5"><li>您需要分别在 <code>navBar</code>、<code>searchBar</code>、<code>sideBar</code> 下创建新的翻译配置文件，代码定义参照各目录下的 <code>zhCN.ts</code>，<strong>部分代码变量名可能包含 i18n 字段</strong>，请将其修改为您将要翻译的语言的 i18n 缩写！</li><li>在完成上一步的文件创建和翻译工作后，您需要在 <code>docs/.vitepress</code> 目录下创建 <code>i18n 缩写</code>.ts<code>，代码定义参照与同目录下的 </code>zhCN.ts\` 保持一致，<strong>代码变量名包含 i18n 字段</strong>，请将其修改为您将要翻译的语言的 i18n 缩写！</li><li>在 <code>docs/.vitepress/sharedConfig.ts</code> 文件中找到如下内容：</li></ol><p><strong>注意在顶部添加相应的 import</strong></p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">algolia</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">appId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">apiKey</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">indexName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">kb-corona</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">locales</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">root</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">zhSearchBarLocale</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">ruRU</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ruSearchBarLocale</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">zhTW</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">zhTWSearchBarLocale</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/* 在此处添加您的搜索条的翻译内容 */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="8"><li>在 <code>docs/.vitepress/config.ts</code> 中找到如下内容：</li></ol><p><strong>注意在顶部添加相应的 import</strong></p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">locales</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">root</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">简体中文</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">lang</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-CN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">zhConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">ruRU</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Русский</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">lang</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ru-RU</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">ruConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">zhTW</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">繁體中文(台)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">lang</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-TW</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">zhTWConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/* 在此处添加您的翻译内容整合 */</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="9"><li>最后，在 <code>docs</code> 目录下创建一个新的文件夹，文件夹名称为您将要翻译的语言的 <strong>i18n 缩写</strong>，并将同目录下 <code>zhCN</code> 文件夹中的内容 <strong>复制</strong> 到您刚刚创建的文件夹中。 <strong>请注意：翻译文稿命名需要符合国际公认的标准。</strong></li><li>同时，将 <code>docs</code> 目录下的 <a href="http://index.md" target="_blank" rel="noreferrer">index.md</a> 也复制到在上一步创建的文件夹中。</li><li>将文件夹中的所有内容翻译为目标语言。在完成后，您即可向本仓库提交 PR！</li><li>在我们审核完成后，将会决定是否合并到主分支。感谢您的参与！</li></ol><h2 id="贡献" tabindex="-1">贡献 <a class="header-anchor" href="#贡献" aria-hidden="true">#</a></h2><p>感谢每一位翻译作者的无私奉献！</p><h3 id="多语言贡献者" tabindex="-1">多语言贡献者 <a class="header-anchor" href="#多语言贡献者" aria-hidden="true">#</a></h3><a href="https://github.com/Corona-Studio/docs/graphs/contributors"><img src="https://contrib.rocks/image?repo=Corona-Studio/docs"></a><br><br><ul><li><a href="https://github.com/fr1g" target="_blank" rel="noreferrer">法棍面包</a><ul><li>俄罗斯语（ru-RU）</li><li>西班牙语（es-US）</li></ul></li><li><a href="https://github.com/KormiMeiko" target="_blank" rel="noreferrer">KormiMeiko</a><ul><li>繁体中文（zh-TW）</li></ul></li></ul><p><br><br></p><p><img src="https://repobeats.axiom.co/api/embed/243ea556dfcaf8738e432d5347cbcf91855f6ddd.svg" alt="Alt" title="Repobeats analytics image"></p>`,24),e=[p];function r(t,c,i,F,y,D){return a(),n("div",null,e)}const b=s(o,[["render",r]]);export{h as __pageData,b as default};