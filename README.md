## 目录结构
```
├── node_modules # 第三⽅包存储⽬录
├── public # 静态资源⽬录，任何放置在 public ⽂件夹的静态资源都会被简单的复 制，⽽不经过 webpack 
│ ├── favicon.ico 
│ └── index.html 
├── src 
│ ├── assets # 公共资源⽬录，放图⽚等资源 
│ ├── components # 公共组件⽬录 
│ ├── router # 路由相关模块 
│ ├── store # 容器相关模块 
│ ├── views # 路由⻚⾯组件存储⽬录 
│ ├── App.vue # 根组件，最终被替换渲染到 index.html ⻚⾯中 #app ⼊⼝ 节点
│ ├── main.ts # 整个项⽬的启动⼊⼝模块
│ ├── shims-tsx.d.ts # ⽀持以 .tsc 结尾的⽂件，在 Vue 项⽬中编写 jsx 代码
│ └── shims-vue.d.ts # 让 TypeScript 识别 .vue 模块 
├── .browserslistrc # 指定了项⽬的⽬标浏览器的范围。这个值会被 @babel/pre set-env 和 Autoprefixer ⽤来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀 
├── .editorconfig # EditorConfig 帮助开发⼈员定义和维护跨编辑器（或IDE） 的统⼀的代码⻛格 ├── .eslintrc.js # ESLint 的配置⽂件 
├── .gitignore # Git 的忽略配置⽂件，告诉Git项⽬中要忽略的⽂件或⽂件夹
├── README.md # 说明⽂档
├── babel.config.js # Babel 配置⽂件
├── package-lock.json # 记录安装时的包的版本号，以保证⾃⼰或其他⼈在 npm i nstall 时⼤家的依赖能保证⼀致
├── package.json # 包说明⽂件，记录了项⽬中使⽤到的第三⽅包依赖信息等内容
└── tsconfig.json # TypeScript 配置⽂件
```
