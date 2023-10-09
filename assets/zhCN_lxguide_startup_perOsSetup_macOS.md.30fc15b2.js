import{_ as a,o as e,c as t,Q as r}from"./chunks/framework.87481dfd.js";const m=JSON.parse('{"title":"针对 macOS 系统的特殊设置","description":"","frontmatter":{},"headers":[],"relativePath":"zhCN/lxguide/startup/perOsSetup/macOS.md","filePath":"zhCN/lxguide/startup/perOsSetup/macOS.md"}'),c={name:"zhCN/lxguide/startup/perOsSetup/macOS.md"},o=r('<h1 id="针对-macos-系统的特殊设置" tabindex="-1">针对 macOS 系统的特殊设置 <a class="header-anchor" href="#针对-macos-系统的特殊设置" aria-label="Permalink to &quot;针对 macOS 系统的特殊设置&quot;">​</a></h1><p>对于 macOS 用户, 若您在打开 LauncherX 时候出现“已损坏”相关的错误弹窗，请执行以下操作：</p><ul><li>打开 “终端.app”</li><li>打开您的访达窗口, 并找您的LauncherX执行文件 (LauncherX.app 或 LauncherX.Avalonia.app)</li><li>在终端输入 <code>sudo xattr -d com.apple.quarantine</code></li><li>在上述指令末尾有一个空格的前提下, 将您的 <strong>LauncherX APP</strong> 拖入到终端窗口</li><li>运行. 终端将会要求您输入管理员账户的密码. 请凭感觉如实输入，终端不会在显示区域呈现您任何的输入记录</li><li>在键入密码之后按下键盘上的 <code>Enter</code> 确认，执行成功不会有任何提示。</li><li>然后再次尝试启动 LauncherX，如果再次失败，请务必前往 <a href="https://github.com/Corona-Studio/LXIT" target="_blank" rel="noreferrer">LXIT (GitHub)</a> 向我们反馈。</li></ul>',3),i=[o];function l(n,s,p,u,_,d){return e(),t("div",null,i)}const S=a(c,[["render",l]]);export{m as __pageData,S as default};
