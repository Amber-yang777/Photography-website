# 📸 Photography Portfolio Website

一个现代化的响应式摄影作品集网站，展示高质量的专业摄影作品。

## ✨ 特性

### 🎨 设计特点
- 现代化响应式设计
- 优雅的渐变配色方案
- 流畅的动画效果
- 专业的排版布局

### 📱 用户体验
- 完全响应式设计，适配所有设备
- 快速加载的图片画廊
- 直观的分类筛选功能
- 全屏灯箱展示效果
- 平滑滚动导航

### 🖼️ 摄影作品分类
- **风景摄影** - 壮丽的自然风光
- **人像摄影** - 专业的肖像作品
- **街拍摄影** - 真实的街头生活
- **建筑摄影** - 现代建筑美学
- **自然摄影** - 野生动物与自然

### 🛠️ 技术特性
- 纯HTML/CSS/JavaScript实现
- 无需后端依赖
- SEO友好
- 性能优化
- 可访问性支持

## 🚀 功能

- **响应式画廊**: 自适应网格布局展示摄影作品
- **分类筛选**: 快速筛选不同类型的摄影作品
- **灯箱模式**: 全屏查看高清图片，支持键盘导航
- **懒加载**: 优化图片加载性能
- **平滑导航**: 页面内平滑滚动导航
- **联系表单**: 访客留言和咨询功能
- **加载更多**: 分页加载避免页面过长

## 📁 项目结构

```
Photography-website/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   ├── data.js        # 摄影作品数据
│   └── main.js        # 主要JavaScript功能
├── images/            # 本地图片资源
└── README.md          # 项目说明
```

## 🎯 摄影作品来源

所有展示的摄影作品均来自高质量的免费图库：

- **Pexels** - 专业免费摄影作品
- **Unsplash** - 高质量创意图片
- **Pixabay** - 免费图片和视频
- **Negative Space** - CC0许可图片
- **PxHere** - 免费公共领域图片

## 🌐 在线预览

网站部署在GitHub Pages：[https://amber-yang777.github.io/Photography-website/](https://amber-yang777.github.io/Photography-website/)

## 💻 本地运行

1. 克隆项目到本地：
```bash
git clone https://github.com/Amber-yang777/Photography-website.git
```

2. 进入项目目录：
```bash
cd Photography-website
```

3. 使用任意HTTP服务器运行，例如：
```bash
# 使用Python
python -m http.server 8000

# 使用Node.js
npx serve .

# 使用Live Server (VS Code扩展)
右键 index.html → Open with Live Server
```

4. 在浏览器中访问 `http://localhost:8000`

## 🎨 定制化

### 修改摄影作品
编辑 `js/data.js` 文件中的 `galleryData` 数组：

```javascript
const galleryData = [
    {
        id: 1,
        title: '作品标题',
        description: '作品描述',
        category: 'landscape', // 分类：landscape, portrait, street, architecture, nature
        image: '图片URL',
        alt: '图片描述'
    },
    // 添加更多作品...
];
```

### 修改样式
在 `css/style.css` 中自定义：
- 颜色主题
- 字体样式
- 布局间距
- 动画效果

### 添加新分类
1. 在 `js/data.js` 的 `categories` 对象中添加新分类
2. 在HTML中添加对应的筛选按钮
3. 为新分类创建作品数据

## 📱 响应式设计

网站完美适配：
- 📱 手机设备 (320px+)
- 📱 平板设备 (768px+)
- 💻 桌面设备 (1024px+)
- 🖥️ 大屏设备 (1440px+)

## ⚡ 性能优化

- 图片懒加载减少初始加载时间
- CSS和JavaScript代码压缩
- 响应式图片优化
- 平滑滚动和动画性能优化
- 现代浏览器API支持

## 🔧 浏览器支持

- ✅ Chrome (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE 11+ (部分功能有限)

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个项目！

## 📧 联系

如果您有任何问题或建议，请通过以下方式联系：

- GitHub: [@Amber-yang777](https://github.com/Amber-yang777)
- Email: photography@example.com

---

**🎯 用途说明**

这个摄影作品集网站适用于：
- 📷 摄影师个人作品展示
- 🎨 艺术家作品集网站
- 🏢 摄影工作室官网
- 📚 摄影教育和学习
- 🌟 创意灵感展示

**❤️ 致谢**

感谢所有提供免费高质量摄影作品的创作者和图库网站，让这个项目得以展现丰富多彩的视觉内容。