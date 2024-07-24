import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.BG3MB88J.js";const b=JSON.parse('{"title":"安装并配置 ProjBobcat","description":"","frontmatter":{},"headers":[],"relativePath":"ruRU/projbobcat/installationAndConfig.md","filePath":"ruRU/projbobcat/installationAndConfig.md"}'),t={name:"ruRU/projbobcat/installationAndConfig.md"},n=e(`<h1 id="安装并配置-projbobcat" tabindex="-1">安装并配置 ProjBobcat <a class="header-anchor" href="#安装并配置-projbobcat" aria-label="Permalink to &quot;安装并配置 ProjBobcat&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#安装并配置-projbobcat">安装并配置 ProjBobcat</a><ul><li><a href="#从发行包安装">从发行包安装</a><ul><li><a href="#nuget">Nuget</a></li><li><a href="#net-cli">.NET CLI</a></li><li><a href="#packagereference">PackageReference</a></li></ul></li><li><a href="#从源码引用">从源码引用</a><ul><li><a href="#克隆-projbobcat-仓库">克隆 ProjBobcat 仓库</a></li><li><a href="#使用-git-submodule-子模块-的方式拉取-projbobcat">使用 Git Submodule（子模块）的方式拉取 ProjBobcat</a></li><li><a href="#添加对-projbobcat-的引用">添加对 ProjBobcat 的引用</a></li></ul></li><li><a href="#使用前配置">使用前配置</a><ul><li><a href="#修改默认连接数">修改默认连接数</a></li><li><a href="#注册并初始化基础服务">注册并初始化基础服务</a></li><li><a href="#配置微软登录验证器">配置微软登录验证器</a></li></ul></li></ul></li></ul></nav><h2 id="从发行包安装" tabindex="-1">从发行包安装 <a class="header-anchor" href="#从发行包安装" aria-label="Permalink to &quot;从发行包安装&quot;">​</a></h2><h3 id="nuget" tabindex="-1">Nuget <a class="header-anchor" href="#nuget" aria-label="Permalink to &quot;Nuget&quot;">​</a></h3><p>目前，您可以方便的从 Nuget 上搜索并下载 ProjBobcat 的软件包，您可以在 Visual Studio 的包管理器中搜索 ProjBobcat 并将其添加到您的项目中。</p><p>或者，您也可以手动在 “程序包管理器控制台” 中执行下面的命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NuGet\\Install-Package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ProjBobcat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.16.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="net-cli" tabindex="-1">.NET CLI <a class="header-anchor" href="#net-cli" aria-label="Permalink to &quot;.NET CLI&quot;">​</a></h3><p>要通过 .NET CLI 来安装 ProjBobcat，您只需要将终端切换到包含 .csproj 文件的项目目录，并在终端中执行：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ProjBobcat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.16.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="packagereference" tabindex="-1">PackageReference <a class="header-anchor" href="#packagereference" aria-label="Permalink to &quot;PackageReference&quot;">​</a></h3><p>PackageReference 是微软为现代 .NET 项目推出的一种新的软件包管理规范， 详细信息可以在 <a href="https://learn.microsoft.com/en-us/nuget/consume-packages/package-references-in-project-files" target="_blank" rel="noreferrer">MSDN</a> 中查看</p><p>您只需在项目的 <strong>[项目名].csproj</strong> 文件中添加：</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PackageReference</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Include</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ProjBobcat&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.16.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>其中，<strong>1.16.0</strong> 为 ProjBobcat 的版本号，您可以将其替换为其他的版本号， 所有的发行版本都可以在 <a href="https://www.nuget.org/packages/ProjBobcat#versions-body-tab" target="_blank" rel="noreferrer">ProjBobcat - Nuget</a> 中查看。</p></div><h2 id="从源码引用" tabindex="-1">从源码引用 <a class="header-anchor" href="#从源码引用" aria-label="Permalink to &quot;从源码引用&quot;">​</a></h2><p>另外一种使用 ProjBobcat 的方法是直接添加代码仓库到您的项目引用。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>在执行下面的命令前，您可能需要先安装 <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git CLI</a></p></div><h3 id="克隆-projbobcat-仓库" tabindex="-1">克隆 ProjBobcat 仓库 <a class="header-anchor" href="#克隆-projbobcat-仓库" aria-label="Permalink to &quot;克隆 ProjBobcat 仓库&quot;">​</a></h3><p>使用命令行切换到项目解决方案的根目录，并在命令行中执行下面的代码来完成仓库的克隆：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/Corona-Studio/ProjBobcat.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="使用-git-submodule-子模块-的方式拉取-projbobcat" tabindex="-1">使用 Git Submodule（子模块）的方式拉取 ProjBobcat <a class="header-anchor" href="#使用-git-submodule-子模块-的方式拉取-projbobcat" aria-label="Permalink to &quot;使用 Git Submodule（子模块）的方式拉取 ProjBobcat&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Git Submodule 是一个非常实用的功能，在这里我们只展示了其最基本的用例。 在 <a href="https://git-scm.com/book/en/v2/Git-Tools-Submodules" target="_blank" rel="noreferrer">Git 官方文档</a> 中您可以查看到更多的使用案例。</p></div><p>使用命令行切换到项目解决方案的根目录，并在命令行中执行下面的代码来完成仓库的克隆：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/Corona-Studio/ProjBobcat.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="添加对-projbobcat-的引用" tabindex="-1">添加对 ProjBobcat 的引用 <a class="header-anchor" href="#添加对-projbobcat-的引用" aria-label="Permalink to &quot;添加对 ProjBobcat 的引用&quot;">​</a></h3><p>接下来，在 Visual Studio 的 <strong>解决方案资源管理器</strong> 视图中，右键点击位于树状图顶层的解决方案名称。 并选择 <strong>“添加”-“现有项目”</strong>，并在文件浏览窗口中找到刚刚克隆的 ProjBobcat 项目文件夹中的 <strong>ProjBobcat.csproj</strong>。</p><p>接着，在 <strong>解决方案资源管理器</strong> 找到您需要引用 ProjBobcat 的项目，并右键单击，选择 <strong>“添加”-“项目引用”</strong>。 最后在弹出窗口中勾选 ProjBobcat 即可完成对其的引用。</p><h2 id="使用前配置" tabindex="-1">使用前配置 <a class="header-anchor" href="#使用前配置" aria-label="Permalink to &quot;使用前配置&quot;">​</a></h2><h3 id="修改默认连接数" tabindex="-1">修改默认连接数 <a class="header-anchor" href="#修改默认连接数" aria-label="Permalink to &quot;修改默认连接数&quot;">​</a></h3><p>在使用 ProjBobcat 之前，您需要在程序的入口点（通常是 <strong>App.xaml.cs</strong> 或 <strong>Program.cs</strong>） 中添加一些代码来初始化 ProjBobcat 的相关服务。</p><p>由于 .NET 运行时默认的最大连接数限制，在使用 ProjBobcat 下载模块时可能会遭遇性能瓶颈。 因此，您需要在入口处添加下面的代码来修改默认的最大连接数：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> System</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Net</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ServicePointManager.DefaultConnectionLimit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 512</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="注册并初始化基础服务" tabindex="-1">注册并初始化基础服务 <a class="header-anchor" href="#注册并初始化基础服务" aria-label="Permalink to &quot;注册并初始化基础服务&quot;">​</a></h3><p>接下来，您需要在入口点添加这些代码来完成 ProjBobcat 服务的初始化：</p><h4 id="初始化服务容器" tabindex="-1">初始化服务容器 <a class="header-anchor" href="#初始化服务容器" aria-label="Permalink to &quot;初始化服务容器&quot;">​</a></h4><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ServiceHelper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="初始化-curseforge-api-服务-可选" tabindex="-1">初始化 CurseForge API 服务（可选） <a class="header-anchor" href="#初始化-curseforge-api-服务-可选" aria-label="Permalink to &quot;初始化 CurseForge API 服务（可选）&quot;">​</a></h4><p>该服务为可选项目，如果您没有使用任何 CurseForge 相关服务，您可以忽略这个步骤。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在注册 CurseForge 服务前，您需要准备 CurseForge 官方下发的 API KEY。 如果您还没有，请前往 <a href="https://support.curseforge.com/en/support/solutions/articles/9000208346-about-the-curseforge-api-and-how-to-apply-for-a-key" target="_blank" rel="noreferrer">申请页面 - CurseForge</a> 来获得您的 API KEY。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>API KEY 为敏感的个人凭据，请妥善保存 API KEY 并不要将其泄露给其他人。</p></div><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CurseForgeAPIHelper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SetApiKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[YOUR API KEY]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将 <strong>[YOUR API KEY]</strong> 替换为您从 CurseForge 官方获取的 API KEY。</p><h4 id="初始化下载服务" tabindex="-1">初始化下载服务 <a class="header-anchor" href="#初始化下载服务" aria-label="Permalink to &quot;初始化下载服务&quot;">​</a></h4><p>在初始化下载服务时您可以选择自定义请求时所使用的 User Agent（默认为 &quot;ProjBobcat&quot;）。</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HttpClientHelper.Ua </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[YOUR UA]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可选</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HttpClientHelper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="配置微软登录验证器" tabindex="-1">配置微软登录验证器 <a class="header-anchor" href="#配置微软登录验证器" aria-label="Permalink to &quot;配置微软登录验证器&quot;">​</a></h3><p>关于 Azure Active Directory 应用具体的注册方法请移步： <a href="/ruRU/projbobcat/createNewAzureApp.html">如何注册 Azure 应用</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在配置微软验证器前，您需要在 Azure 注册您的应用，并对其进行正确的配置。 在您完成配置之后，您会获得一串 Client ID。</p><p>相关资料：</p><ul><li><a href="https://azure.microsoft.com/en-us/" target="_blank" rel="noreferrer">Azure 官网</a></li><li><a href="https://learn.microsoft.com/en-us/azure/active-directory/develop/scenario-desktop-acquire-token-device-code-flow?tabs=dotnet" target="_blank" rel="noreferrer">Device code flow</a></li></ul></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>CLIENT ID 为敏感的个人凭据，请妥善保存 CLIENT ID 并不要将其泄露给其他人。</p></div><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MicrosoftAuthenticator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Configure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MicrosoftAuthenticatorAPISettings</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ClientId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[YOUR CLIENT ID]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    TenentId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;consumers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Scopes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;XboxLive.signin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;offline_access&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;openid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;profile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在取得 Client ID 后，将 <strong>[YOUR CLIENT ID]</strong> 替换为您的 Client ID。</p>`,52),l=[n];function r(p,o,h,c,d,k){return i(),a("div",null,l)}const g=s(t,[["render",r]]);export{b as __pageData,g as default};
