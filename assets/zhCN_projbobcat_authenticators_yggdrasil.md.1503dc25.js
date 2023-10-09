import{_ as s,o as a,c as t,Q as n}from"./chunks/framework.87481dfd.js";const E=JSON.parse('{"title":"Yggdrasil 验证模型","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/projbobcat/authenticators/yggdrasil.md","filePath":"zhCN/projbobcat/authenticators/yggdrasil.md"}'),e={name:"zhCN/projbobcat/authenticators/yggdrasil.md"},l=n(`<h1 id="yggdrasil-验证模型" tabindex="-1">Yggdrasil 验证模型 <a class="header-anchor" href="#yggdrasil-验证模型" aria-label="Permalink to &quot;Yggdrasil 验证模型&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#yggdrasil-验证模型">Yggdrasil 验证模型</a><ul><li><a href="#初始化验证器">初始化验证器</a></li><li><a href="#获取验证结果">获取验证结果</a></li><li><a href="#解读验证结果">解读验证结果</a><ul><li><a href="#失败的验证结果">失败的验证结果</a></li><li><a href="#成功的验证结果">成功的验证结果</a></li></ul></li></ul></li></ul></nav><p>该验证模型实现了旧版 Mojang 的验证方案，目前该方案已经被弃用。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>继续使用该模型进行官方账户的验证将被视为无效的请求。 但该模型仍然可以用于登录使用第三方验证服务的服务器（例如 <a href="https://github.com/yushijinhun/authlib-injector" target="_blank" rel="noreferrer">AuthLib-Injector</a>）。</p></div><h2 id="初始化验证器" tabindex="-1">初始化验证器 <a class="header-anchor" href="#初始化验证器" aria-label="Permalink to &quot;初始化验证器&quot;">​</a></h2><p>您可以通过下面的代码初始化离线验证器：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">yggdrasilAuthenticator</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">YggdrasilAuthenticator</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    AuthServer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[CUSTOM_AUTH_SERVER]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    Email </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[EMAIL]</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    LauncherAccountParser </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> launcherAccountParser,</span></span>
<span class="line"><span style="color:#E1E4E8;">    Password </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;[PASSWORD]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">yggdrasilAuthenticator</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">YggdrasilAuthenticator</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    AuthServer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[CUSTOM_AUTH_SERVER]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    Email </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[EMAIL]</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#24292E;">    LauncherAccountParser </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> launcherAccountParser,</span></span>
<span class="line"><span style="color:#24292E;">    Password </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;[PASSWORD]&quot;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在上述代码块中，请将这些参数按照您的实际情况替换：</p><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">launcherAccountParser</td><td style="text-align:center;">对于启动器账户解析器的初始化，详见此处</td></tr><tr><td style="text-align:center;">[CUSTOM_AUTH_SERVER]</td><td style="text-align:center;">可选字段，自定义验证服务器地址，这个字段通常由第三方验证服务提供商提供，不填则使用 Mojang 官方的验证服务器地址</td></tr><tr><td style="text-align:center;">[EMAIL]</td><td style="text-align:center;">验证账户的邮箱地址</td></tr><tr><td style="text-align:center;">[PASSWORD]</td><td style="text-align:center;">验证账户的密码</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>对于 <strong>launcherAccountParser</strong>（游戏档案解析器）的初始化，请参考<a href="/zhCN/projbobcat/additionalParsers/gameProfileParser.html">游戏档案解析器</a>页面</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>在使用第三方验证服务器时，请使用 <strong>https://</strong> 而非 <strong>http://</strong> 协议连接到验证服务器。 使用不安全的验证服务器可能会导致敏感数据泄露等问题。</p></div><h2 id="获取验证结果" tabindex="-1">获取验证结果 <a class="header-anchor" href="#获取验证结果" aria-label="Permalink to &quot;获取验证结果&quot;">​</a></h2><p>在您完成验证模型的初始化后，您只需要调用离线验证器的验证方法来完成账户验证。</p><p>在异步上下文中，使用 <strong>AuthTaskAsync</strong> 来完成验证：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">authResult</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> offlineAuthenticator.</span><span style="color:#B392F0;">AuthTaskAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">authResult</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> offlineAuthenticator.</span><span style="color:#6F42C1;">AuthTaskAsync</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在同步上下文中，使用 <strong>Auth</strong> 来完成验证：</p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">authResult</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> offlineAuthenticator.</span><span style="color:#B392F0;">Auth</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">authResult</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> offlineAuthenticator.</span><span style="color:#6F42C1;">Auth</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="解读验证结果" tabindex="-1">解读验证结果 <a class="header-anchor" href="#解读验证结果" aria-label="Permalink to &quot;解读验证结果&quot;">​</a></h2><p>在验证方法完成之后，验证模型会返回验证结果，这是父类型为 <a href="https://github.com/Corona-Studio/ProjBobcat/blob/master/ProjBobcat/ProjBobcat/Class/Model/Auth/AuthResultBase.cs" target="_blank" rel="noreferrer">AuthResultBase</a> 的对象。 所有的验证结果都包含一个枚举值 <strong>AuthStatus</strong>，该枚举值直接指示了验证结果的成功或是失败。 在下面您可以看到对验证结果的解读：</p><h3 id="失败的验证结果" tabindex="-1">失败的验证结果 <a class="header-anchor" href="#失败的验证结果" aria-label="Permalink to &quot;失败的验证结果&quot;">​</a></h3><p>通过判断 <strong>Error</strong> 是否为空，您可以很轻松的判断验证模型返回的验证结果是否是有效的， <strong>Error</strong> 对象会包含以下字段来告诉您一些细节：</p><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">authResult.Error.Cause</td><td style="text-align:center;">导致问题的具体原因</td></tr><tr><td style="text-align:center;">authResult.Error.Error</td><td style="text-align:center;">错误名称</td></tr><tr><td style="text-align:center;">authResult.Error.ErrorMessage</td><td style="text-align:center;">错误的详细信息，可能包含解决方案</td></tr></tbody></table><h3 id="成功的验证结果" tabindex="-1">成功的验证结果 <a class="header-anchor" href="#成功的验证结果" aria-label="Permalink to &quot;成功的验证结果&quot;">​</a></h3><p>如果验证结果中的 <strong>Error</strong> 字段为空，则表示本次验证是有效的，成功的验证结果会包含下面的信息：</p><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">authResult.Id</td><td style="text-align:center;">该用户名的唯一标识符，ProjBobcat 使用特定的生成方式来生成这个标识符</td></tr><tr><td style="text-align:center;">authResult.AccessToken</td><td style="text-align:center;">用户账户的授权凭据</td></tr><tr><td style="text-align:center;">authResult.Profiles</td><td style="text-align:center;">用户可用的角色列表，可能包含多个可用角色</td></tr><tr><td style="text-align:center;">authResult.SelectedProfile</td><td style="text-align:center;">用户当前选择的角色，该字段可能为空。如果为空则需要提示用户进行手动选择。</td></tr><tr><td style="text-align:center;">authResult.User</td><td style="text-align:center;">用户账户信息摘要，包含一些基础的账户信息</td></tr><tr><td style="text-align:center;">authResult.LocalId</td><td style="text-align:center;">本地 ID，通常为随机生成的 UUID</td></tr><tr><td style="text-align:center;">authResult.RemoteId</td><td style="text-align:center;">验证服务器返回的远程 ID，通常为该用户的唯一标识符</td></tr></tbody></table>`,25),r=[l];function o(p,c,i,d,y,u){return a(),t("div",null,r)}const g=s(e,[["render",o]]);export{E as __pageData,g as default};
