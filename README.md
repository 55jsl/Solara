# 🎶 Solara（光域）

> 🌐 由轻量后端服务支撑的现代化网页音乐播放器，整合多种音乐聚合接口，覆盖搜索、播放、歌词同步与音频下载全流程。

![Review-ezgif com-optimize](https://github.com/user-attachments/assets/487157de-bf71-4bc9-9e49-16a4f0a14472)
<p align="center">
  <img src="https://github.com/user-attachments/assets/54d1ed31-da1d-427f-ad11-66a26788c838" height="1450" />
  <img src="https://github.com/user-attachments/assets/bb092569-0a7f-47f6-b7e9-c07ea56949cf" height="1450" />
  <img src="https://github.com/user-attachments/assets/02b830e3-292f-4880-91f2-86ec818b877a" height="1450" />
</p>




## 🌟 主要特性

- 🔍 跨站曲库检索：一键切换数据源，支持分页浏览并批量导入播放队列。
- 📻 队列管理灵活：新增、删除、清空操作即时生效，并自动持久化到浏览器 localStorage。
- 🔁 丰富的播放模式：列表循环、单曲循环与随机播放随手切换，记忆上次偏好。
- 📱 竖屏移动端：全新竖屏布局匹配移动端手势与屏幕比例，按钮、列表与歌词均针对单手操作优化。
- 📝 动态歌词视图：逐行滚动高亮，当前行自动聚焦，手动滚动后短暂锁定视图。
- 📥 多码率下载：可挑选 128K / 192K / 320K / FLAC 等品质并直接获取音频文件。
- ☁️ 轻量后端代理：通过 Cloudflare Pages Functions 统一聚合各数据源并处理酷我音频跨域，摆脱浏览器直接访问的限制。
- 🎨 主题美学：内置亮/暗模式与玻璃拟态界面，桌面与移动端均具备沉浸体验。
- 📱 竖屏移动端：全新竖屏布局匹配移动端手势与屏幕比例，按钮、列表与歌词均针对单手操作优化。
- 🖼️ 沉浸式背景：根据当前曲目封面自动取色，实时渲染模糊背景，氛围与音乐保持一致。
- 🌊 青绿基调：参考 Emby 等播放器打造统一青绿色视觉体系。
- 🛠️ 调试控制台：按下 Ctrl + D 呼出实时日志面板，便于排查接口或交互异常。

## 🚀 快速上手
1. 📦 克隆仓库
   ```bash
   git clone https://github.com/akudamatata/Music-Player.git
   cd Music-Player
   ```
2. 🖥️ 启动任意静态服务器
   - 使用 VS Code Live Server 扩展
   - 或执行 Python 简易服务器：
     ```bash
     python3 -m http.server 8080
     ```
3. 🌍 打开浏览器访问 `http://localhost:8080/index.html`，即可体验播放器。

> 💡 由于浏览器同源策略限制，直接双击 index.html 可能产生跨域请求错误，建议通过本地服务器访问。

## ☁️ 后端部署
1. Fork 或克隆本仓库到你自己的 Cloudflare Pages 项目。

## ⚙️ 配置提示
- 🔗 API 基地址定义在 index.html 中的 `API.baseUrl`（约 1300 行），可替换为自建接口域名。
- 🎚️ 默认主题、播放模式等偏好可在 `state` 初始化逻辑中按需调整。

## 🎵 使用流程
1. 输入关键词并选择想要的曲库后发起搜索。
2. 在结果列表中可试听、播放、下载或加入播放队列。
3. 右侧播放列表展示当前队列，可拖动播放、移除或一键清空。
4. 底部控制栏提供播放控制、播放模式切换、进度条与音量滑块。
5. 打开歌词面板即可查看实时滚动的高亮歌词。

## 📱 移动端体验提示
- 将网页添加到手机主屏或通过移动浏览器访问，即可自动切换至竖屏布局；
- 底栏控件重新排布，保证竖向滑动不遮挡核心信息；
- 歌词面板默认贴合屏幕底部，可通过手势展开/收起。

## ❓ 常见问题解答
- **搜索没有结果怎么办？** 检查浏览器控制台日志，如接口被阻挡可尝试切换数据源或更新 `API.baseUrl` 至可用服务。
- **如何重置本地数据？** 在浏览器开发者工具的 Application / Storage 面板清理 `localStorage`，即可恢复默认播放列表和配置。

## 🗂️ 项目结构
```
Music-Player/
├── functions/   # Cloudflare Pages Functions 后端代理
├── index.html   # 主界面、样式与业务逻辑
└── README.md    # 项目说明
```

## 🤝 参与贡献
欢迎通过 Issue 或 Pull Request 分享想法，提交前请确认：
- ✅ 核心流程（搜索、播放、下载等）均可正常运作；
- 🖼️ 新增特性附带必要说明与截图，便于审核与测试。

## 📄 许可证
本项目采用 MIT License 发布，如仓库尚未附带 LICENSE 文件，可按需自行补充。
