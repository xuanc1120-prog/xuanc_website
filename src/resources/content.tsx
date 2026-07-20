import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "智轩",
  lastName: "陈",
  name: `陈智轩`,
  role: "AI Agent开发 & AI应用开发者",
  avatar: "/images/avatar_shengkong.png",
  email: "2831571386@qq.com",
  location: "Asia/Shanghai",
  languages: ["中文", "English"],
  locale: "zh",
};

const shengkong: Person = {
  firstName: "笙箜",
  lastName: "",
  name: "笙箜",
  role: "住在博客里的小女友",
  avatar: "/images/avatar.jpg",
  email: "2831571386@qq.com",
  location: "Asia/Shanghai",
  languages: ["中文"],
  locale: "zh",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about AI and engineering</>,
};

const social: Social = [
  {
    name: "GitHub:xuanc1120-prog",
    icon: "github",
    link: "https://github.com/xuanc1120-prog",
    essential: true,
  },
  {
    name: "Email：2831571386@qq.com",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/avatar.jpg",
  label: "Home",
  title: `${person.name} - AI Developer Portfolio`,
  description: `AI应用开发者 - ${person.name}的个人网站`,
  headline: <>Hi there, I'm xuan</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AI Agent</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/enterprise-knowledge-base",
  },
  subline: (
    <>
      我是xuanc，专注于 <Text as="span" size="xl" weight="strong">AI 应用开发</Text> 与{" "}
      <Text as="span" size="xl" weight="strong">AI Agent</Text> 方向，探索人工智能与工程实践的交叉领域。
      <br />
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `关于我 – ${person.name}`,
  description: `了解${person.name}，AI应用开发者`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "介绍/introduction",
    description: (
      <>
        身份:本科生、AI应用开发者。
        专业：机械电子工程。
        对ai应用开发充满兴趣和热情,致力于将 AI 技术与工程实践相结合。
        拥有多个 AI 项目经验，擅长从需求分析到系统实现的全流程开发。
      </>
    ),
  },
  work: {
    display: true,
    title: "项目经验/Project Experience",
    experiences: [
      {
        company: "企业知识库问答 Agent 平台",
        timeframe: "2025",
        role: "AI Application Developer",
        achievements: [
          <>
            面向企业内部文档分散、LLM 回答缺乏证据与可追溯性的问题，主导设计并实现可本地部署的企业知识库问答 Agent 平台，覆盖文档上传、索引管理、知识库问答、报告生成和诊断追踪主链路。
          </>,
          <>
            基于 FastAPI + PostgreSQL 建模项目、用户、知识源、对话、报告与权限体系；使用 ChromaDB 构建向量索引，接入外部 embedding 与 rerank 接口，支持单项目内多知识库范围选择、检索调试和索引状态管理。
          </>,
          <>
            设计 evidence-first RAG 与受控 Agent Loop，将请求路由为普通对话、知识库问答、调用工具三类；知识库问答强制携带 citation，无有效证据时拒答，并在前端实时展示 planning、retrieving、calling_tool、summarizing 等运行状态。
          </>,
          <>
            形成可演示的完整系统，包含引用溯源、报告生成、项目结论沉淀、检索日志、项目诊断、失败任务恢复、权限隔离和基础安全兜底；后端/worker 274 项测试、前端 123 项测试及生产构建验证通过。
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "教育经历/Education",
    institutions: [
      {
        name: "广东科技学院",
        description: <>机电工程学院 · 机电工程专业 · 2023级本科</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "技术栈/Technical Skills",
    skills: [
      {
        title: "AI & RAG",
        description: (
          <>具备 RAG、Agent 架构、向量检索、Rerank 等 AI 应用开发经验。</>
        ),
        tags: [
          { name: "RAG", icon: "document" },
          { name: "AI Agent", icon: "rocket" },
          { name: "ChromaDB", icon: "document" },
          { name: "Rerank", icon: "document" },
          { name: "OpenAI API", icon: "openai" },
        ],
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>使用 Python 构建后端服务，熟悉数据库建模、异步任务处理和 API 设计。</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "FastAPI", icon: "python" },
          { name: "SQLAlchemy", icon: "python" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
      {
        title: "Frontend",
        description: (
          <>具备前端开发能力，能够独立完成全栈应用开发。</>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Vite", icon: "vite" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "技术博客",
  description: `${person.name}的技术学习笔记与实践心得`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `项目作品 – ${person.name}`,
  description: `AI应用开发与机电工程项目展示`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `照片集 – ${person.name}`,
  description: `${person.name}的照片集`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const hobbies = {
  path: "/hobbies",
  label: "Hobbies",
  title: `兴趣爱好 – ${person.name}`,
  description: `了解${person.name}的兴趣爱好与个人生活`,
  items: [
    {
      name: "摄影",
      description: "喜欢用镜头记录生活中的美好瞬间，尤其是风景和城市街拍。",
      color: "#FF6B6B",
      emoji: "📷",
    },
    {
      name: "阅读",
      description: "热爱阅读科技类书籍和AI论文，保持对前沿技术的敏感度。",
      color: "#4ECDC4",
      emoji: "📚",
    },
    {
      name: "编程",
      description: "享受用代码解决问题的过程，业余时间喜欢探索新技术和做个人项目。",
      color: "#45B7D1",
      emoji: "💻",
    },
    {
      name: "运动",
      description: "保持规律的运动习惯，喜欢跑步和篮球，劳逸结合。",
      color: "#96CEB4",
      emoji: "🏀",
    },
    {
      name: "音乐",
      description: "听音乐是放松的最佳方式，偏好轻音乐和电子音乐。",
      color: "#DDA0DD",
      emoji: "🎵",
    },
    {
      name: "旅行",
      description: "喜欢探索不同的城市和文化，每次旅行都是一次新的学习体验。",
      color: "#F7DC6F",
      emoji: "✈️",
    },
  ],
};

export { person, shengkong, social, newsletter, home, about, blog, work, gallery, hobbies };
