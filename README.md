# 🌐 科技共享 - 智能多功能响应式全栈导航

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat&logo=cloudflare&logoColor=white)

一款极简、高颜值的多功能网址导航网站。现已重构升级为 **Serverless 全栈架构**！采用 HTML + Tailwind CSS + 原生 JS 构建精美前端，结合 Cloudflare Pages Functions 与 KV 数据库提供云端 API 支持。

样本：https://smart-nav-main-test.pages.dev/

## ✨ 核心亮点

- ☁️ **云端全站同步 (全新升级)**：接入 Cloudflare KV 数据库。管理员设置的“全站壁纸”和“站长推荐”链接将永久保存在云端，所有用户、所有设备打开网站均能实时同步！
- 🛡️ **优雅降级容灾**：即使云端数据库未配置或接口挂掉，系统会自动无缝切换回浏览器的 `localStorage` 本地缓存模式，保证网站永不崩溃。
- 🌍 **智能中英双语 (i18n)**：一键切换全局语言，不仅外壳 UI 改变，连同内置数据库中的默认链接也会根据语言智能映射翻译。
- 🌤️ **智能地理与天气**：自动定位用户所在城市，精准呈现多语言天气图标与温度。
- 📅 **万年历与节气**：内置农历节气与常规节日动态问候语。
- 🔐 **轻量级后台管理**：双击底部版权信息触发隐藏后台，凭密码解锁云端数据修改权限。

---

## 🚀 部署教程 (Cloudflare Pages 全栈保姆级)

为了让“云端数据同步”功能正常工作，请严格按照以下顺序操作。**全程免费，无需购买服务器！**

### 📦 第一阶段：准备代码
1. 注册并登录 [GitHub](https://github.com/)。
2. 将本项目的全部代码（包含 `index.html`, `ads.txt`, `README.md` 以及最关键的 **`functions` 文件夹**）上传到你的 GitHub 仓库中。
   *⚠️ 注意：请确保 `index.html` 和 `functions` 文件夹直接在仓库的最外层（根目录），不要套在别的文件夹里！*

### 🗄️ 第二阶段：创建云端数据库 (KV)
1. 登录 [Cloudflare 控制面板](https://dash.cloudflare.com/)。
2. 在左侧菜单栏点击 **Workers & Pages** -> **KV**。
3. 点击右侧的 **创建命名空间 (Create a namespace)**。
4. 命名空间名称填入：`NAV_DATABASE`（或者你喜欢的任何名字），点击**添加**。

### 🌐 第三阶段：部署前端页面
1. 在 Cloudflare 控制面板左侧点击 **Workers & Pages**。
2. 点击蓝色按钮 **创建应用程序 (Create application)** -> 选择 **Pages** 选项卡 -> **连接到 Git (Connect to Git)**。
3. 选中你刚才存放代码的 GitHub 仓库，点击 **开始设置 (Begin setup)**。
4. **【关键检查】**：在“构建设置 (Build settings)”区域：
   - 框架预设 (Framework preset)：选择 `None`
   - 构建命令 (Build command)：**留空**
   - 构建输出目录 (Build output directory)：**留空**
   - **根目录 (Root directory)**：**留空**（非常重要，否则找不到 API！）
5. 点击 **保存并部署 (Save and Deploy)**。等待几十秒钟，网页会初步部署成功。

### 🔗 第四阶段：绑定数据库以激活云端功能 (最重要！)
1. 部署成功后，点击 **继续处理项目 (Continue to project)** 返回项目管理页面。
2. 依次点击顶部的 **设置 (Settings)** -> 左侧的 **函数 (Functions)** 菜单。
3. 往下滚动找到 **KV 命名空间绑定 (KV namespace bindings)** 区域，点击 **添加绑定**。
4. **变量名称 (Variable name)** 严格填入：`NAV_DB` （必须大写，一字不差，这是代码里呼叫数据库的接头暗号）。
5. **KV 命名空间** 的下拉菜单中，选择你在“第二阶段”创建的那个数据库（比如 `NAV_DATABASE`）。
6. 点击 **保存**。

### 🔄 第五阶段：重新部署以生效
1. 绑定完数据库后，点击顶部的 **部署 (Deployments)** 选项卡。
2. 找到列表里最新的一次部署，点击右侧的 **重试部署 (Retry deployment)**。
3. 等待重新构建完成。此时，你的前端界面就和云端数据库彻底打通了！

🎉 **大功告成！** 点击 Cloudflare 提供的 `xxx.pages.dev` 域名打开网站，双击底部版权文字登录后台，尝试修改壁纸和链接并点击“应用”。换个浏览器刷新，见证云端同步的魔法吧！

---

## ⚙️ 进阶配置说明

### 1. 修改管理员密码
默认的后台管理密码是 `admin888`。登录后可自行修改
如忘记密码
登录 Cloudflare 控制面板。

在左侧菜单栏点击 Workers & Pages -> 然后点击下拉菜单里的 KV。

在右侧的列表中，找到你之前创建的那个数据库名称（比如 NAV_DATABASE），点击它进入查看。

在下方的数据列表里，你会看到一个名为 site_config 的键（Key）。

点击这个键右侧的 “查看” (View) 或 “编辑” (Edit)。

你会看到一段类似于这样的代码：


JSON
{"wallpaper":"xxx","dynamicSections":[],"adminPwd":"你忘记的那个密码"}


👉 "adminPwd" 后面的内容就是你的当前密码！ 看完记住它，直接回去登录就行了。
