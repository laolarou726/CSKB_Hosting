import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.87481dfd.js";const F=JSON.parse('{"title":"Forge 安装器","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/projbobcat/installers/forge.md","filePath":"zhCN/projbobcat/installers/forge.md"}'),p={name:"zhCN/projbobcat/installers/forge.md"},o=l(`<h1 id="forge-安装器" tabindex="-1">Forge 安装器 <a class="header-anchor" href="#forge-安装器" aria-label="Permalink to &quot;Forge 安装器&quot;">​</a></h1><p>在 ProjBobcat 中，我们支持了几乎所有主流 MineCraft 版本的 Forge 自动化安装。</p><nav class="table-of-contents"><ul><li><a href="#forge-安装器">Forge 安装器</a><ul><li><a href="#判断应该使用哪一种-forge-安装器">判断应该使用哪一种 Forge 安装器</a></li><li><a href="#初始化旧版安装器">初始化旧版安装器</a></li><li><a href="#初始化新版安装器">初始化新版安装器</a></li><li><a href="#根据-islegacy-值进行统一初始化">根据 isLegacy 值进行统一初始化</a></li><li><a href="#开始安装">开始安装</a></li><li><a href="#报告安装进度">报告安装进度</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请注意，ProjBobcat 仅实现了 Forge 自动化安装流程，您仍然需要自己实现 Forge 安装包的搜索、下载、保存流程。</p></div><h2 id="判断应该使用哪一种-forge-安装器" tabindex="-1">判断应该使用哪一种 Forge 安装器 <a class="header-anchor" href="#判断应该使用哪一种-forge-安装器" aria-label="Permalink to &quot;判断应该使用哪一种 Forge 安装器&quot;">​</a></h2><p>由于 Forge 团队在后续的版本中修改了 Forge 的打包规范以及安装流程。因此，您需要手动判断应该使用哪一种安装器。 在 ProjBobcat 中，我们已经为您实现了相关的判断逻辑。您只需要简单地调用下面的方法：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mcVersion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[MC_VERSION]&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">forgeJarPath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">forgeVersion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ForgeInstallerFactory.</span><span style="color:#B392F0;">GetForgeArtifactVersion</span><span style="color:#E1E4E8;">(mcVersion, </span><span style="color:#9ECBFF;">&quot;[FORGE_VERSION]&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isLegacy</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ForgeInstallerFactory.</span><span style="color:#B392F0;">IsLegacyForgeInstaller</span><span style="color:#E1E4E8;">(forgeJarPath, forgeVersion);  </span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mcVersion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[MC_VERSION]&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">forgeJarPath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">forgeVersion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ForgeInstallerFactory.</span><span style="color:#6F42C1;">GetForgeArtifactVersion</span><span style="color:#24292E;">(mcVersion, </span><span style="color:#032F62;">&quot;[FORGE_VERSION]&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isLegacy</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ForgeInstallerFactory.</span><span style="color:#6F42C1;">IsLegacyForgeInstaller</span><span style="color:#24292E;">(forgeJarPath, forgeVersion);  </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[MC_VERSION]</td><td style="text-align:center;">将 Forge 安装到的 MineCraft 版本，例如：1.19.2</td></tr><tr><td style="text-align:center;">[PATH_TO_YOUR_FORGE_INSTALLER]</td><td style="text-align:center;">Forge 安装器 .jar 文件所在的路径</td></tr><tr><td style="text-align:center;">[FORGE_VERSION]</td><td style="text-align:center;">Forge 的具体版本，通常为 XX.X.X，例如：43.2.0</td></tr></tbody></table><p>在您完成替换并成功执行上述的代码片段之后，<strong>isLegacy</strong> 会指示当前 Forge 安装器应当使用哪一种 Forge 安装器。</p><h2 id="初始化旧版安装器" tabindex="-1">初始化旧版安装器 <a class="header-anchor" href="#初始化旧版安装器" aria-label="Permalink to &quot;初始化旧版安装器&quot;">​</a></h2><p>如果在上面的流程中，<strong>isLegacy</strong> 的值为 <strong>true</strong>，这意味着您需要使用旧版安装器来完成 Forge 的安装。 要初始化旧版安装器，只需实例化 <strong>LegacyForgeInstaller</strong> 并提供相应的参数：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#B392F0;">IForgeInstaller</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">forgeInstaller</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LegacyForgeInstaller</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                ForgeExecutablePath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                RootPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[GAME_ROOT_PATH]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                CustomId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                ForgeVersion </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[FORGE_VERSION]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                InheritsFrom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6F42C1;">IForgeInstaller</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">forgeInstaller</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LegacyForgeInstaller</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                ForgeExecutablePath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                RootPath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[GAME_ROOT_PATH]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                CustomId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                ForgeVersion </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[FORGE_VERSION]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                InheritsFrom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line"><span style="color:#24292E;">            };</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[GAME_ROOT_PATH]</td><td style="text-align:center;">游戏根目录，通常为 .minecraft 文件夹的路径</td></tr><tr><td style="text-align:center;">[CUSTOM_INSTALL_GAME_ID]</td><td style="text-align:center;">可选项，自定义即将要安装的游戏的名称</td></tr><tr><td style="text-align:center;">[MC_VERSION_OR_GAME_ID]</td><td style="text-align:center;">Forge 继承的 MineCraft 原版游戏版本，通常为游戏版本。例如：1.19.2</td></tr></tbody></table><h2 id="初始化新版安装器" tabindex="-1">初始化新版安装器 <a class="header-anchor" href="#初始化新版安装器" aria-label="Permalink to &quot;初始化新版安装器&quot;">​</a></h2><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#B392F0;">IForgeInstaller</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">forgeInstaller</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HighVersionForgeInstaller</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                ForgeExecutablePath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                JavaExecutablePath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[PATH_TO_YOUR_JAVA_RUNTIME]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                RootPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[GAME_ROOT_PATH]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                VersionLocator </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [VERSION_LOCATOR_INST],</span></span>
<span class="line"><span style="color:#E1E4E8;">                DownloadUrlRoot </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> “[LIBRARIES_URL_ROOT]”,</span></span>
<span class="line"><span style="color:#E1E4E8;">                CustomId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                MineCraftVersion </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[MC_VERSION]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                MineCraftVersionId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[ACTUAL_MC_GAME_ID]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                InheritsFrom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6F42C1;">IForgeInstaller</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">forgeInstaller</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HighVersionForgeInstaller</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                ForgeExecutablePath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                JavaExecutablePath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[PATH_TO_YOUR_JAVA_RUNTIME]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                RootPath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[GAME_ROOT_PATH]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                VersionLocator </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [VERSION_LOCATOR_INST],</span></span>
<span class="line"><span style="color:#24292E;">                DownloadUrlRoot </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> “[LIBRARIES_URL_ROOT]”,</span></span>
<span class="line"><span style="color:#24292E;">                CustomId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                MineCraftVersion </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[MC_VERSION]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                MineCraftVersionId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[ACTUAL_MC_GAME_ID]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                InheritsFrom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line"><span style="color:#24292E;">            };</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">[PATH_TO_YOUR_JAVA_RUNTIME]</td><td style="text-align:center;">Java （javaw.exe） 运行时所在的路径</td></tr><tr><td style="text-align:center;">[LIBRARIES_URL_ROOT]</td><td style="text-align:center;">下载源的根 URL，例如：&quot;<a href="https://bmclapi2.bangbang93.com/" target="_blank" rel="noreferrer">https://bmclapi2.bangbang93.com/</a>&quot;</td></tr><tr><td style="text-align:center;">[VERSION_LOCATOR_INST]</td><td style="text-align:center;">游戏版本定位器实例，即初始化游戏核心时的 <strong>VersionLocator</strong> 属性</td></tr><tr><td style="text-align:center;">[ACTUAL_MC_GAME_ID]</td><td style="text-align:center;">实际的 MineCraft 游戏名称，即原版游戏在 <strong>version</strong> 文件夹下的名称。一般情况下，这个值和 <strong>[MC_VERSION]</strong> 一致。</td></tr></tbody></table><h2 id="根据-islegacy-值进行统一初始化" tabindex="-1">根据 <strong>isLegacy</strong> 值进行统一初始化 <a class="header-anchor" href="#根据-islegacy-值进行统一初始化" aria-label="Permalink to &quot;根据 **isLegacy** 值进行统一初始化&quot;">​</a></h2><p>由于 <strong>LegacyForgeInstaller</strong> 和 <strong>HighVersionForgeInstaller</strong> 同时实现了 <strong>IForgeInstaller</strong> 接口。 因此，您可以很方便的使用一个三元运算符来选择性的初始化对应的安装器：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isLegacy</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ForgeInstallerFactory.</span><span style="color:#B392F0;">IsLegacyForgeInstaller</span><span style="color:#E1E4E8;">(forgeJarPath, forgeVersion);</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#B392F0;">IForgeInstaller</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">forgeInstaller</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> isLegacy</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LegacyForgeInstaller</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                ForgeExecutablePath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                RootPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[GAME_ROOT_PATH]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                CustomId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                ForgeVersion </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[FORGE_VERSION]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                InheritsFrom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HighVersionForgeInstaller</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                ForgeExecutablePath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                JavaExecutablePath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[PATH_TO_YOUR_JAVA_RUNTIME]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                RootPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[GAME_ROOT_PATH]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                VersionLocator </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [VERSION_LOCATOR_INST],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                DownloadUrlRoot </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> “[LIBRARIES_URL_ROOT]”,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                CustomId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                MineCraftVersion </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[MC_VERSION]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                MineCraftVersionId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[ACTUAL_MC_GAME_ID]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                InheritsFrom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            };</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isLegacy</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ForgeInstallerFactory.</span><span style="color:#6F42C1;">IsLegacyForgeInstaller</span><span style="color:#24292E;">(forgeJarPath, forgeVersion);</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6F42C1;">IForgeInstaller</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">forgeInstaller</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> isLegacy</span></span>
<span class="line highlighted"><span style="color:#24292E;">            </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LegacyForgeInstaller</span></span>
<span class="line highlighted"><span style="color:#24292E;">            {</span></span>
<span class="line highlighted"><span style="color:#24292E;">                ForgeExecutablePath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                RootPath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[GAME_ROOT_PATH]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                CustomId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                ForgeVersion </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[FORGE_VERSION]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                InheritsFrom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line highlighted"><span style="color:#24292E;">            }</span></span>
<span class="line highlighted"><span style="color:#24292E;">            </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HighVersionForgeInstaller</span></span>
<span class="line highlighted"><span style="color:#24292E;">            {</span></span>
<span class="line highlighted"><span style="color:#24292E;">                ForgeExecutablePath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[PATH_TO_YOUR_FORGE_INSTALLER]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                JavaExecutablePath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[PATH_TO_YOUR_JAVA_RUNTIME]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                RootPath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[GAME_ROOT_PATH]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                VersionLocator </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [VERSION_LOCATOR_INST],</span></span>
<span class="line highlighted"><span style="color:#24292E;">                DownloadUrlRoot </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> “[LIBRARIES_URL_ROOT]”,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                CustomId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[CUSTOM_INSTALL_GAME_ID]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                MineCraftVersion </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[MC_VERSION]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                MineCraftVersionId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[ACTUAL_MC_GAME_ID]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                InheritsFrom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[MC_VERSION_OR_GAME_ID]&quot;</span></span>
<span class="line highlighted"><span style="color:#24292E;">            };</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="开始安装" tabindex="-1">开始安装 <a class="header-anchor" href="#开始安装" aria-label="Permalink to &quot;开始安装&quot;">​</a></h2><p>在您完成安装器的初始化后，您只需要调用 Forge 安装器的安装方法来完成安装。</p><p>在异步上下文中，使用 <strong>InstallForgeTaskAsync</strong> 来完成安装：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> forgeInstaller.</span><span style="color:#B392F0;">InstallForgeTaskAsync</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> forgeInstaller.</span><span style="color:#6F42C1;">InstallForgeTaskAsync</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在同步上下文中，使用 <strong>InstallForge</strong> 来完成安装：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">forgeInstaller.</span><span style="color:#B392F0;">InstallForge</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">forgeInstaller.</span><span style="color:#6F42C1;">InstallForge</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="报告安装进度" tabindex="-1">报告安装进度 <a class="header-anchor" href="#报告安装进度" aria-label="Permalink to &quot;报告安装进度&quot;">​</a></h2><p>在某些情况下，Forge 安装器可能会需要数分钟的时间来完成安装。 因此，您可能需要实时向用户汇报安装器目前的进度。 为此，Forge 安装器提供了 <strong>StageChangedEventDelegate</strong> 事件来帮助您实现任务汇报。 您只需要简单地在 <strong>开始安装之前</strong> 注册下面的事件：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">((</span><span style="color:#B392F0;">InstallerBase</span><span style="color:#E1E4E8;">)forgeInstaller).StageChangedEventDelegate </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReportProgress</span><span style="color:#E1E4E8;">(args.Progress </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, args.CurrentStage);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">((</span><span style="color:#6F42C1;">InstallerBase</span><span style="color:#24292E;">)forgeInstaller).StageChangedEventDelegate </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">_</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">args</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReportProgress</span><span style="color:#24292E;">(args.Progress </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, args.CurrentStage);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>其中， <strong>args.Progress</strong> 指示了安装器当前的百分比进度。<strong>args.CurrentStage</strong> 则是安装器当前进度的文字描述。</p>`,32),e=[o];function t(r,c,E,i,y,g){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{F as __pageData,u as default};
