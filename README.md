# 🌐 科技共享 - 智能多功能响应式导航

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

一款极简、高颜值的单页面网址导航网站。采用纯 HTML + CSS + 原生 JavaScript 编写，结合 Tailwind CSS 实现了现代化的玻璃拟物（Glassmorphism）UI 设计。完全无需服务器，支持一键部署到 Cloudflare Pages 或 GitHub Pages。

## ✨ 核心功能

- 🎨 **自适应主题**：支持日间/夜间模式自由切换，且支持自定义任意图片作为全局毛玻璃背景。
- 🔍 **多引擎搜索**：内置 Google、Bing、Baidu、GitHub 快捷切换，支持下拉菜单选择。
- 🌤️ **智能地理与天气**：调用外部 API，自动定位用户所在城市并实时播报天气。
- 📅 **万年历与节气**：内置农历节气与常规节日问候语算法，根据时间动态变换问候。
- 🔐 **轻量级后台管理**：双击底部版权信息触发“隐藏后台”，输入密码后可自由增删自定义链接和友情链接。
- 💾 **本地存储持久化**：所有的自定义链接、背景配置、主题模式均保存在浏览器 `localStorage` 中，跨会话不丢失。
- 💰 **商业化预留**：已优化代码结构，并预留 Google AdSense 广告（`ads.txt`）接入方案。

---

## 🚀 部署教程 (保姆级)

本项目为纯静态前端页面，**无需购买服务器、无需配置数据库**，支持完全免费托管。以下提供两种最主流的免费部署方式：

### 方案一：部署到 Cloudflare Pages (强烈推荐 🎉)
Cloudflare 节点遍布全球，访问速度极快，且会自动为你配置免费的 HTTPS 安全证书。支持绑定你自己的专属域名。

**方法 A：通过 GitHub 自动构建（推荐，代码修改后会自动更新网站）**
1. 注册并登录 [GitHub](https://github.com/)，将本项目完整上传到一个新的仓库中（或者直接 Fork 本仓库）。
2. 注册并登录 [Cloudflare 控制面板](https://dash.cloudflare.com/)。
3. 在左侧菜单栏点击 **Workers & Pages**。
4. 在右侧点击蓝色的 **创建应用程序 (Create application)** 按钮，然后选择 **Pages** 选项卡。
5. 点击 **连接到 Git (Connect to Git)**，授权 Cloudflare 访问你的 GitHub 账号。
6. 在列表中选中你存放导航代码的仓库，点击 **开始设置 (Begin setup)**。
7. **【关键步骤】**：在“构建设置 (Build settings)”区域：
   - 框架预设 (Framework preset) 选择：`None`
   - 构建命令 (Build command)：**留空**
   - 构建输出目录 (Build output directory)：**留空**
8. 点击 **保存并部署 (Save and Deploy)**。等待十几秒钟，系统会为你生成一个 `xxx.pages.dev` 的官方免费域名，点击即可访问你的导航站！

**方法 B：直接拖拽上传（最简单，无需 GitHub）**
1. 在电脑本地新建一个文件夹，将 `index.html` 和 `ads.txt` 放进去。
2. 进入 Cloudflare 的 **Workers & Pages** -> **创建应用程序** -> **Pages**。
3. 选择 **上传资产 (Upload assets)**。
4. 为你的项目起一个英文名字（这将决定你的免费域名链接），然后将你刚才的文件夹直接拖拽到网页的虚线框里。
5. 等待文件识别后，点击底部的部署按钮即可大功告成。

---

### 方案二：部署到 GitHub Pages (经典方案)
依托 GitHub 官方提供的免费网页托管服务，适合所有 GitHub 用户。

1. 登录 GitHub，新建一个**公开的 (Public)** 仓库。
2. 将 `index.html` 和 `ads.txt` 上传到该仓库的根目录。
3. 在该仓库的主页，点击顶部的 **Settings (设置)** 选项卡。
4. 在左侧边栏往下划，找到并点击 **Pages** 菜单。
5. 在 `Build and deployment` (构建与部署) 区域：
   - `Source` 下拉菜单选择 **Deploy from a branch**。
   - `Branch` 下拉菜单选择 **main** (或 master) 分支，后面的文件夹选择 **/ (root)**。
   - 点击 **Save (保存)**。
6. 喝口水等待 1~3 分钟。刷新当前页面，顶部会出现一行提示：“Your site is live at...”，并提供类似于 `https://你的用户名.github.io/你的仓库名/` 的访问链接，点击即可访问！

---

## ⚙️ 个性化配置说明

### 1. 修改管理员密码
默认的后台管理密码是 `admin888`。
如需修改，请用文本编辑器打开 `index.html`，在第 262 行附近找到以下代码并修改：
```javascript
const ADMIN_PWD_HASH = "你的新密码";
