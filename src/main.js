import "./styles.css";
import "@fontsource/orbitron/700.css";
import "@fontsource/orbitron/900.css";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  GitBranch,
  Layers,
  Mail,
  Newspaper,
  Orbit,
  RadioTower,
  Send,
  Sparkles,
  TerminalSquare
} from "lucide";
import { createIcons } from "lucide";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { zh: "能力", en: "Profile", href: "#profile" },
  { zh: "动效", en: "Motion", href: "#geometry" },
  { zh: "作品", en: "Experiments", href: "#experiments" },
  { zh: "实习", en: "Internship", href: "#internship" },
  { zh: "技术", en: "Stack", href: "#stack" },
  { zh: "足迹", en: "Moments", href: "#moments" },
  { zh: "竞技", en: "Rank", href: "#gaming" },
  { zh: "频道", en: "Channel", href: "#channel" },
  { zh: "联系", en: "Contact", href: "#contact" }
];

const projects = [
  {
    code: "01",
    title: "Atlas 200DK A2 人脸识别自动门",
    label: "端侧 AI / Embedded system",
    copy:
      "围绕 Atlas 200DK A2 搭建人脸识别、门禁控制和语音播报流程，完成端侧 AI 到硬件执行的闭环。",
    accent: "cyan"
  },
  {
    code: "02",
    title: "物理增强型雷达重构框架",
    label: "Research / OAM radar",
    copy:
      "面向 OAM 雷达阵列病态性提出虚拟阵列平移方案，构建端到端网络并完成 PSNR 70.00 dB 的结果验证。",
    accent: "green"
  },
  {
    code: "03",
    title: "飞桨黑客松第十期",
    label: "PaddlePaddle Hackathon",
    copy:
      "参与 Intel 与沐曦赛道进阶任务，持续推进环境配置、模型/算子适配、测试验证与开源提交材料整理。",
    accent: "amber"
  }
];

const paperItems = [
  {
    code: "RP-01",
    title: "FPGA-BASED HARDWARE ACCELERATOR DESIGN FOR CONVOLUTIONAL NEURAL NETWORKS",
    venue: "ICMEEA 2025",
    label: "Conference Accepted Paper",
    author: "Jiayan Chen",
    preview: "/icmeea-acceptance-preview.png",
    meta: [
      ["Venue", "ICMEEA 2025"],
      ["Author", "Jiayan Chen"],
      ["Manuscript", "ICMEEA2583"],
      ["Status", "Accepted on April 8, 2025"]
    ],
    copy:
      "论文围绕卷积神经网络硬件加速器设计展开，体现 FPGA 与深度学习推理加速方向的工程实践。"
  },
  {
    code: "RP-02",
    title: "从新八股到量子隧穿：中国研究生选拔机制的内卷热力学分析及“饭碗奇点”的预测模型",
    venue: "S.H.*.T Space",
    label: "Public Research Essay",
    author: "Dryoung",
    preview: "/shit-paper-cover.png",
    visualTitle: "S.H.*.T",
    visualMeta: "4.7 / 83 ratings · 27 comments",
    link: "https://shitjournal.org/article/8397bdfc-0535-4a0c-9790-6f93414dedff?from=%2Fnotifications",
    meta: [
      ["Platform", "S.H.*.T Space"],
      ["Author", "Dryoung"],
      ["Category", "交叉学科 / 严谨论证"],
      ["Status", "Published on April 13, 2026"]
    ],
    copy:
      "一篇以学术化叙事分析研究生选拔、学历竞争和社会流动焦虑的公共研究写作，适合作为个人表达与跨学科观察的补充成果。"
  }
];

const hackathonMetrics = [
  ["2", "进阶 PR", "OpenVINO demo + Metax GPU optimization"],
  ["5-stage", "Doc2Prototype 链路", "Image -> model -> JSON -> artifact -> report"],
  ["-6.07%", "并发平均收益", "4x8 small concurrency average"],
  ["-9.73%", "P95 收益", "Metax GPU profile result"]
];

const hackathonCards = [
  {
    code: "HP-01",
    title: "Doc2Prototype OpenVINO demo",
    repo: "openvino_build_deploy#548",
    accent: "cyan",
    summary:
      "把技术文档图像接到 PaddleOCR-VL + OpenVINO，输出结构化 JSON、下游工件和单页视觉报告。",
    visual: [
      ["Input", "Doc image"],
      ["Model", "OCR-VL"],
      ["Core", "OpenVINO"],
      ["Output", "JSON"],
      ["Report", "HTML report"]
    ],
    bullets: [
      "API 文档 -> endpoint JSON + FastAPI skeleton",
      "Flowchart -> nodes/edges JSON + Mermaid diagram",
      "参考样例 -> structured JSON + Markdown summary"
    ],
    tags: ["OpenVINO IR", "CPU / GPU / NPU / AUTO", "visual report"],
    link: "https://github.com/openvinotoolkit/openvino_build_deploy/pull/548"
  },
  {
    code: "HP-02",
    title: "PaddleOCR-VL vision path optimization",
    repo: "FastDeploy#7619",
    accent: "green",
    summary:
      "在 Metax GPU 上压缩 PaddleOCR-VL vision path 的 host/device 同步和小 tensor 开销，保持语义不变。",
    metrics: [
      ["Single request", "7.4039s -> 7.3870s", "-0.23%"],
      ["4x8 avg", "small concurrency", "-6.07%"],
      ["P50", "small concurrency", "-5.97%"],
      ["P95", "small concurrency", "-9.73%"]
    ],
    bullets: [
      "projector packing flow 直接返回 packed image features",
      "复用 host-side grid_thw_lst 元数据，减少同步开销",
      "补 batch=1 fast path、float32 rotary embedding 和单测"
    ],
    tags: ["projector.py", "siglip.py", "siglip_ops.py", "Metax GPU"],
    link: "https://github.com/PaddlePaddle/FastDeploy/pull/7619"
  }
];

const stackItems = [
  ["AI 框架与模型", "MindSpore、MindSpore Lite、PyTorch、ONNX、MindIR、ViT、Transolver"],
  ["硬件与平台", "Ascend/GE 后端、Atlas 200DK A2、FPGA/AMD 赛道实践、RTK 卫星循迹"],
  ["工程协作", "Git/PR 协作、README、测试报告、训练日志、性能数据整理和开源社区沟通"],
  ["算法与信号", "数据结构与算法、数字信号处理、雷达成像重构、物理建模与端到端训练"]
];

const meaningfulMoments = [
  {
    code: "M-01",
    date: "2023.11",
    title: "人生第一次成都半程马拉松",
    label: "半程马拉松",
    copy: "第一次把 21.0975 公里跑完，记住了节奏、体能和终点线前的那一段坚持。",
    photos: [
      ["/moments/chengdu-marathon-01.jpg?v=20260520b", "人生第一次成都半程马拉松照片 1"],
      ["/moments/chengdu-marathon-02.jpg?v=20260520b", "人生第一次成都半程马拉松照片 2"]
    ]
  },
  {
    code: "M-02",
    date: "2024.7",
    title: "前往河南商丘睢县参与支教",
    label: "支教",
    copy: "在一段具体的乡土场景里讲课、沟通和协作，也重新理解教育、表达与陪伴的重量。",
    photos: [
      ["/moments/suixian-volunteer-01.jpg?v=20260520b", "河南商丘睢县支教照片 1"],
      ["/moments/suixian-volunteer-02.jpg?v=20260520b", "河南商丘睢县支教照片 2"]
    ]
  },
  {
    code: "M-03",
    date: "2026.5",
    title: "峨眉山登上金顶",
    label: "登山",
    copy: "从山路、云层到金顶，把一次登山变成对耐心、体力和方向感的完整校准。",
    photos: [
      ["/moments/emei-golden-summit-01.jpg?v=20260520b", "峨眉山金顶照片 1"],
      ["/moments/emei-golden-summit-02.jpg?v=20260520b", "峨眉山金顶照片 2"]
    ]
  }
];

const contentTracks = [
  {
    code: "01",
    title: "AI 工程落地",
    copy: "MindSpore 迁移、Lite 部署、FastDeploy 优化与 OpenVINO demo，把模型推进到可运行链路。"
  },
  {
    code: "02",
    title: "端侧与硬件",
    copy: "Atlas 200DK A2、FPGA CNN 加速、RTK 轨迹和嵌入式控制，连接模型与真实设备。"
  },
  {
    code: "03",
    title: "科研与开源",
    copy: "ICMEEA 2025 录用论文、OAM 雷达重构、飞桨黑客松 PR 和 MindSpore 开源实习。"
  },
  {
    code: "04",
    title: "创意自动化",
    copy: "个人主页动效、公众号自动工作流和 GPT image 2.0 生图，沉淀可发布的数字作品。"
  }
];

const profileSignals = [
  {
    code: "EDU",
    title: "西南交通大学",
    label: "电子信息科学与技术 · 本科大三",
    icon: "radio-tower",
    copy: "课程基础覆盖信号处理、半导体物理、电磁场、天线、微波、数据结构与算法。"
  },
  {
    code: "FRAME",
    title: "AI 框架与模型部署",
    label: "MindSpore / Lite / PyTorch / ONNX / MindIR",
    icon: "layers",
    copy: "能够把模型迁移、导出、转换、Ascend 推理、性能测试和文档交付串成闭环。"
  },
  {
    code: "EDGE",
    title: "端侧智能系统",
    label: "Atlas 200DK A2 / Embedded AI",
    icon: "cpu",
    copy: "做过端侧识别结果与门禁硬件执行联动，对 AI 模型部署和嵌入式控制链路有实践经验。"
  },
  {
    code: "RESEARCH",
    title: "科研与信号方向",
    label: "ICMEEA 2025 / OAM Radar",
    icon: "orbit",
    copy: "包含 ICMEEA 2025 录用论文、FPGA CNN 硬件加速器设计，以及 OAM 雷达重构研究。"
  }
];

const profileSkills = [
  ["AI Frameworks", "MindSpore / PyTorch / Transolver", "88%"],
  ["Deployment", "ONNX / MindIR / Ascend GE / FastDeploy", "84%"],
  ["Edge + Hardware", "Atlas 200DK A2 / FPGA / RTK", "74%"],
  ["Research Builder", "Radar imaging / GPT image 2.0 workflows", "78%"]
];

const resumeMilestones = [
  ["飞桨黑客松第十期", "Intel 与沐曦赛道进阶任务，进行中", "Open-source Hackathon"],
  ["嵌入式芯片与系统设计大赛", "ST 赛道西南赛区三等奖，AMD FPGA 赛道国赛三等奖", "Embedded / FPGA"],
  ["书生大模型公式识别打榜赛", "基于曦云 C 系列算力，排名第 21 名", "RL / SFT"],
  ["科研与会议论文", "ICMEEA 2025 录用论文，IEEE SPL 方向研究持续推进", "Research Writing"],
  ["社团与生态实践", "智能基座社团会长，代表西南交通大学参与华为全联接大会 2024", "Community"],
  ["语言与表达", "普通话二级甲等，CET-4/6，雅思 6.5", "Communication"]
];

const internshipStats = [
  ["100", "开源实习积分", "MindSpore Community", "100%"],
  ["3", "代表任务", "训练迁移 / 推理部署 / 验证缓存", "75%"],
  ["0.0149", "Transolver 训练 Loss", "RMSE 2.3048e-04 / 相对误差约 3.00%", "62%"],
  ["146.35ms", "ViT 平均推理时延", "1749.28 FPS / 目标 < 410ms", "86%"]
];

const internshipTasks = [
  {
    code: "MS-01",
    title: "MindFlow Transolver 模型迁移补充",
    group: "MindFlow / MindScience",
    points: "30 分",
    issue: "https://gitcode.com/mindspore/community/issues/1841",
    pr: "https://atomgit.com/mindspore-lab/mindscience/pull/2536",
    icon: "orbit",
    accent: "cyan",
    metric: "测试 RMSE 2.3048e-04",
    bullets: [
      "梳理论文、参考实现和 MindFlow 新架构案例结构。",
      "重构 Structured Mesh 训练逻辑，引入 GaussianNormalizer 稳定收敛。",
      "将部分 einsum 改写为 matmul，修复 Ascend float64 到 Tensor 兼容问题。"
    ]
  },
  {
    code: "MS-02",
    title: "MindSpore Lite ViT 高性能推理部署",
    group: "MindSpore Lite / Ascend",
    points: "30 分",
    issue: "https://gitcode.com/mindspore/community/issues/2083",
    pr: "https://gitcode.com/mindspore/mindspore-lite/pull/688",
    icon: "cpu",
    accent: "green",
    metric: "146.35ms / 1749.28 FPS",
    bullets: [
      "完成 ViT 模型 ONNX 导出，并转换为 MindIR 部署到 MindSpore Lite。",
      "采用通用 MindIR + GE 在线编译方案，规避布局冲突并提升稳定性。",
      "开启 enforce_fp16 与 GE 自动格式调优，时延显著低于 410ms 目标。"
    ]
  },
  {
    code: "MS-03",
    title: "AKG Agents Verifier Data Cache 能力开发",
    group: "MindSpore AKG / Verifier",
    points: "40 分",
    issue: "https://gitcode.com/mindspore/community/issues/2090",
    pr: "https://gitcode.com/mindspore/akg/pull/1973",
    icon: "layers",
    accent: "amber",
    metric: "Reference / Baseline 双缓存",
    bullets: [
      "设计 verifier/data_cache.py，封装配置解析、cache key、元信息和并发写入锁。",
      "缓存 reference data 与 baseline profile，命中后复用输入、输出和平均耗时。",
      "适配 RemoteWorker、SOL-ExecBench，并补充 Triton Ascend 端到端示例和单测。"
    ]
  }
];

document.querySelector("#app").innerHTML = `
  <div class="site-shell">
    <div class="grain" aria-hidden="true"></div>
    <div class="motion-progress" aria-hidden="true">
      <span class="motion-progress-label">Home</span>
      <span class="motion-progress-track">
        <span class="motion-progress-fill"></span>
      </span>
    </div>
    <div class="cursor-reticle" aria-hidden="true">
      <span class="reticle-dot"></span>
      <span class="cursor-star star-a"></span>
      <span class="cursor-star star-b"></span>
      <span class="cursor-star star-c"></span>
      <span class="cursor-star star-d"></span>
    </div>
    <header class="site-header" data-reveal>
      <a class="brand" href="#home" aria-label="Dryoung OS home">
        <span class="brand-mark"></span>
        <span>Dryoung OS</span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        ${navItems.map(({ zh, href }) => `<a href="${href}" data-nav-target="${href}">${zh}</a>`).join("")}
      </nav>
      <div class="header-tools">
        <button class="language-toggle" type="button" data-language-toggle aria-label="Switch to English">
          <span class="lang-option lang-zh">中</span>
          <span class="lang-divider" aria-hidden="true"></span>
          <span class="lang-option lang-en">EN</span>
        </button>
        <a class="header-action" href="#contact" aria-label="Contact Dryoung">
          <i data-lucide="send"></i>
        </a>
      </div>
    </header>

    <main>
      <section class="hero" id="home">
        <canvas id="space-canvas" class="space-canvas" aria-hidden="true"></canvas>
        <div class="hero-mesh" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow" data-reveal>
            <i data-lucide="sparkles"></i>
            Builder Up 启发 / Vibe Coding 创作者
          </p>
          <h1 class="wordmark signature-mark" data-reveal aria-label="Chen Jiayan Dryoung Chan">
            <span class="signature-frame" aria-hidden="true"></span>
            <img class="signature-asset signature-cn-image" src="/signature-jiayan.png" alt="&#38472;&#22025;&#34893; signature" />
            <img class="signature-asset signature-en-image" src="/signature-dryoung.png" alt="Dryoung signature" />
            <span class="wordmark-cn signature-cn" data-text="&#38472;&#22025;&#34893;">&#38472;&#22025;&#34893;</span>
            <span class="wordmark-en" data-text="Dryoung Chan">Dryoung Chan</span>
          </h1>
          <p class="hero-copy">
            一名 Vibe Coding 创作者与 AI Builder<br />
            以热情浇筑于灵感，于码间架构万象。
          </p>
        </div>

        <aside class="signal-panel" aria-label="Builder status">
          <div class="panel-topline">
            <span class="live-dot"></span>
            当前聚焦 / Current Focus
          </div>
          <div class="signal-grid">
            <div>
              <span>方向 Focus</span>
              <strong>AI Infra / Embedded AI<br />VLM / Inference</strong>
            </div>
          </div>
        </aside>

        <div class="scroll-cue" aria-hidden="true">
          <span></span>
        </div>
      </section>

      <section class="identity section-band">
        <div class="section-kicker" data-reveal>身份 Identity</div>
        <div class="identity-layout">
          <h2 data-reveal>把 AI 框架、端侧系统和创意工具做成可运行作品。</h2>
          <p data-reveal>
            已完成 MindSpore 模型迁移与 Lite 部署、OpenVINO / FastDeploy 黑客松 PR、
            Atlas 200DK A2 端侧项目、公众号自动化发布和 GPT image 2.0 生图流程。
            科研侧覆盖 FPGA CNN 硬件加速论文与 OAM 雷达重构。
          </p>
        </div>
        <div class="identity-tags" data-reveal>
          <span>Vibe Coding</span>
          <span>AI Builder</span>
          <span>创意工程</span>
          <span>开源协作</span>
        </div>
        <div class="content-overview" data-reveal aria-label="主页内容总览">
          ${contentTracks
            .map(
              (track) => `
                <article class="overview-card">
                  <span>${track.code}</span>
                  <strong>${track.title}</strong>
                  <p>${track.copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="profile section-band" id="profile">
        <div class="section-heading">
          <div>
            <div class="section-kicker" data-reveal>能力档案 Profile</div>
            <h2 data-reveal>AI 框架、模型部署、端侧智能与自动化内容工具。</h2>
          </div>
          <p data-reveal>
            目前的 focus 是把模型从论文、框架或文档推进到可运行原型：
            完成迁移、推理部署、性能验证，再把结果整理成 PR、报告或可展示的交互作品。
          </p>
        </div>

        <div class="profile-layout">
          <article class="profile-lead" data-reveal>
            <span>Resume Signal</span>
            <h3>电子信息科学与技术背景，面向 AI 工程落地。</h3>
            <p>
              从信号处理与硬件课程出发，实践延伸到 MindSpore 生态、
              Ascend/Atlas 部署、模型迁移优化和开源任务交付。
            </p>
            <div class="profile-meta">
              <div><small>当前阶段</small><strong>本科大三</strong></div>
              <div><small>方向</small><strong>AI 框架与模型部署</strong></div>
              <div><small>补充标签</small><strong>嵌入式智能系统</strong></div>
            </div>
          </article>

          <aside class="profile-radar" data-reveal aria-label="能力分布">
            <div class="radar-title">
              <span>Focus Radar</span>
              <strong>Builder Range</strong>
            </div>
            <div class="skill-bars">
              ${profileSkills
                .map(
                  ([title, copy, fill]) => `
                    <div class="skill-row">
                      <div>
                        <strong>${title}</strong>
                        <span>${copy}</span>
                      </div>
                      <div class="skill-track" aria-hidden="true">
                        <span class="skill-fill" style="--fill: ${fill}"></span>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </aside>
        </div>

        <div class="profile-signal-grid">
          ${profileSignals
            .map(
              (signal) => `
                <article class="profile-signal" data-reveal>
                  <div class="signal-code">${signal.code}</div>
                  <div class="profile-signal-icon"><i data-lucide="${signal.icon}"></i></div>
                  <p>${signal.label}</p>
                  <h3>${signal.title}</h3>
                  <span>${signal.copy}</span>
                </article>
              `
            )
            .join("")}
        </div>

        <div class="milestone-grid">
          ${resumeMilestones
            .map(
              ([title, copy, label], index) => `
                <article class="milestone" data-reveal>
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <small>${label}</small>
                  <h3>${title}</h3>
                  <p>${copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="geometry section-band" id="geometry">
        <div class="section-heading">
          <div>
            <div class="section-kicker" data-reveal>动效系统 Motion System</div>
            <h2 data-reveal>从 AI Infra 到端侧作品的构建路径。</h2>
          </div>
          <p data-reveal>
            这组滚动几何对应我的技术主线：以 AI Infra 组织模型部署，以 VLM 处理文档与视觉信息，
            以 Edge 验证端侧和硬件场景，最终沉淀为 PR、Demo、论文或个人作品。
          </p>
        </div>
        <div class="geometry-layout">
          <div class="geometry-stage" data-reveal aria-label="滚动驱动的几何变化">
            <div class="geo-grid" aria-hidden="true"></div>
            <div class="geo-axis axis-x" aria-hidden="true"></div>
            <div class="geo-axis axis-y" aria-hidden="true"></div>
            <div class="geo-route route-a" aria-hidden="true"></div>
            <div class="geo-route route-b" aria-hidden="true"></div>
            <div class="geo-route route-c" aria-hidden="true"></div>
            <div class="geo-route route-d" aria-hidden="true"></div>
            <div class="geo-shape geo-core" aria-hidden="true"></div>
            <div class="geo-shape geo-ring" aria-hidden="true"></div>
            <div class="geo-shape geo-slab slab-a" aria-hidden="true"></div>
            <div class="geo-shape geo-slab slab-b" aria-hidden="true"></div>
            <div class="geo-shape geo-slab slab-c" aria-hidden="true"></div>
            <div class="geo-node node-a"><span>Infra</span></div>
            <div class="geo-node node-b"><span>VLM</span></div>
            <div class="geo-node node-c"><span>Edge</span></div>
            <div class="geo-node node-d"><span>Ship</span></div>
          </div>
          <div class="geometry-copy" data-reveal>
            <article>
              <span>01</span>
              <strong>AI Infra / 推理基础设施</strong>
              <p>OpenVINO Doc2Prototype、FastDeploy PaddleOCR-VL、MindSpore Lite ViT 部署，聚焦模型导出、运行时适配和推理性能。</p>
            </article>
            <article>
              <span>02</span>
              <strong>VLM / 文档智能链路</strong>
              <p>围绕 OCR-VL、多模态输入、文档图像理解、结构化 JSON 输出，把模型能力转成可用工具。</p>
            </article>
            <article>
              <span>03</span>
              <strong>Edge / 端侧与硬件验证</strong>
              <p>Atlas 200DK A2、Ascend GE、FPGA CNN 加速和嵌入式控制，把模型推进到真实设备或可交付 PR。</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section-band experiments" id="experiments">
        <div class="section-heading">
          <div>
            <div class="section-kicker" data-reveal>作品实验 Experiments</div>
            <h2 data-reveal>项目与开源成果</h2>
          </div>
          <p data-reveal>
            精选端侧 AI、雷达重构、飞桨黑客松和 MindSpore 实习等代表经历，
            保留 PR、指标和可复现链路。
          </p>
        </div>
        <div class="project-grid">
          ${projects
            .map(
              (project) => `
                <article class="project-card ${project.accent}" data-reveal>
                  <div class="project-index">${project.code}</div>
                  <div class="project-orbit" aria-hidden="true">
                    <i data-lucide="orbit"></i>
                  </div>
                  <p>${project.label}</p>
                  <h3>${project.title}</h3>
                  <span>${project.copy}</span>
                  <a href="#contact" aria-label="Discuss ${project.title}">
                    联系交流
                    <i data-lucide="arrow-up-right"></i>
                  </a>
                </article>
              `
            )
            .join("")}
        </div>

        <div class="paper-block" data-reveal>
          <div class="section-kicker">论文成果 Research</div>
          ${paperItems
            .map(
              (paper) => `
                <article class="paper-card ${paper.link ? "paper-card-public" : ""}">
                  <div class="paper-preview">
                    ${
                      paper.preview
                        ? `<img src="${paper.preview}" alt="${paper.title} preview" />`
                        : `
                          <div class="paper-signal-visual">
                            <span>${paper.visualTitle}</span>
                            <strong>Public Research Essay</strong>
                            <small>${paper.visualMeta}</small>
                          </div>
                        `
                    }
                  </div>
                  <div class="paper-content">
                    <div class="paper-topline">
                      <span>${paper.code}</span>
                      <small>${paper.label}</small>
                    </div>
                    <h3>${paper.title}</h3>
                    <p>${paper.copy}</p>
                    <div class="paper-meta">
                      ${paper.meta
                        .map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`)
                        .join("")}
                    </div>
                    ${
                      paper.link
                        ? `
                          <a class="paper-link" href="${paper.link}" target="_blank" rel="noreferrer">
                            查看原文
                            <i data-lucide="arrow-up-right"></i>
                          </a>
                        `
                        : ""
                    }
                  </div>
                </article>
              `
            )
            .join("")}
        </div>

        <div class="hackathon-block">
          <div class="hackathon-header" data-reveal>
            <div>
              <div class="section-kicker">飞桨黑客松 Hackathon</div>
              <h3>两个进阶任务 PR：文档生成链路与视觉路径优化。</h3>
            </div>
            <p>
              Intel 与沐曦方向的两个 PR 分别覆盖文档结构化生成和 PaddleOCR-VL 视觉路径性能优化。
              内容包含流程节点、性能指标和源码入口。
            </p>
          </div>

          <div class="hackathon-metrics" data-reveal>
            ${hackathonMetrics
              .map(
                ([value, label, meta]) => `
                  <article>
                    <strong>${value}</strong>
                    <span>${label}</span>
                    <small>${meta}</small>
                  </article>
                `
              )
              .join("")}
          </div>

          <div class="hackathon-grid">
            ${hackathonCards
              .map(
                (card) => `
                  <article class="hackathon-card ${card.accent}" data-reveal>
                    <div class="hackathon-card-head">
                      <span>${card.code}</span>
                      <small>${card.repo}</small>
                    </div>
                    <h3>${card.title}</h3>
                    <p>${card.summary}</p>

                    ${
                      card.visual
                        ? `
                          <div class="doc-flow" aria-label="Doc2Prototype workflow">
                            ${card.visual
                              .map(
                                ([label, value]) => `
                                  <div>
                                    <span>${label}</span>
                                    <strong>${value}</strong>
                                  </div>
                                `
                              )
                              .join("")}
                          </div>
                        `
                        : `
                          <div class="perf-board" aria-label="FastDeploy performance profile">
                            ${card.metrics
                              .map(
                                ([label, meta, value], index) => `
                                  <div class="perf-row">
                                    <span>${label}</span>
                                    <small>${meta}</small>
                                    <strong>${value}</strong>
                                    <i style="--fill: ${[44, 70, 68, 86][index]}%"></i>
                                  </div>
                                `
                              )
                              .join("")}
                          </div>
                        `
                    }

                    <ul>
                      ${card.bullets.map((item) => `<li>${item}</li>`).join("")}
                    </ul>

                    <div class="hackathon-tags">
                      ${card.tags.map((tag) => `<span>${tag}</span>`).join("")}
                    </div>

                    <a href="${card.link}" target="_blank" rel="noreferrer">
                      查看 PR
                      <i data-lucide="arrow-up-right"></i>
                    </a>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="internship section-band" id="internship">
        <div class="section-heading">
          <div>
            <div class="section-kicker" data-reveal>开源实习 Internship</div>
            <h2 data-reveal>从模型迁移、推理部署到验证系统优化。</h2>
          </div>
          <p data-reveal>
            MindSpore 开源实习覆盖 MindFlow、MindSpore Lite 和 AKG 三条技术线。
            任务成果包含模型训练迁移、ViT 高性能推理部署、AKG Verifier Data Cache，并以 PR、文档、测试材料交付。
          </p>
        </div>

        <div class="internship-hero" data-reveal>
          <div class="internship-visual" aria-label="MindSpore 开源实习任务可视化">
            <div class="visual-grid" aria-hidden="true"></div>
            <div class="visual-title">
              <span>MindSpore Open Source</span>
              <strong>Internship Map</strong>
            </div>
            <div class="visual-orbit orbit-a" aria-hidden="true"></div>
            <div class="visual-orbit orbit-b" aria-hidden="true"></div>
            <div class="visual-orbit orbit-c" aria-hidden="true"></div>
            <div class="visual-core">
              <span>100</span>
              <strong>积分</strong>
              <small>2025.11 - 2026.05</small>
            </div>
            <div class="visual-node node-flow">
              <i data-lucide="orbit"></i>
              <strong>MindFlow</strong>
              <span>Transolver 迁移</span>
            </div>
            <div class="visual-node node-lite">
              <i data-lucide="cpu"></i>
              <strong>Lite</strong>
              <span>ViT 推理部署</span>
            </div>
            <div class="visual-node node-akg">
              <i data-lucide="layers"></i>
              <strong>AKG</strong>
              <span>Verifier Cache</span>
            </div>
          </div>

          <div class="internship-summary">
            <div class="summary-line">
              <span>学校 / 专业</span>
              <strong>西南交通大学 · 电子信息科学与技术</strong>
            </div>
            <div class="summary-line">
              <span>实习 SIG</span>
              <strong>MindFlow / MindSpore Lite / MindSpore AKG</strong>
            </div>
            <div class="summary-line">
              <span>实习周期</span>
              <strong>2025.11.15 - 2026.05.15</strong>
            </div>
            <div class="summary-line">
              <span>工程关键词</span>
              <strong>模型迁移、收敛优化、Ascend 部署、验证缓存</strong>
            </div>
          </div>
        </div>

        <div class="ongoing-internships" data-reveal>
          <div class="ongoing-intro">
            <span>当前进行中</span>
            <strong>openUBMC / openEuler 双线开源实习</strong>
            <p>
              在 MindSpore 开源实习之外，目前同步推进 openUBMC 与 openEuler 两条开源实习线，
              继续把基础软件、系统生态和工程协作经验往更底层延展。
            </p>
          </div>
          <article class="ongoing-card ongoing-ubmc">
            <div class="ongoing-card-head">
              <span>01</span>
              <em>进行中</em>
            </div>
            <div class="ongoing-icon"><i data-lucide="cpu"></i></div>
            <h3>openUBMC 开源实习</h3>
            <p>
              面向服务器管理与 BMC 基础设施生态，持续参与开源实习任务，补充系统软件与硬件管理方向的实践。
            </p>
          </article>
          <article class="ongoing-card ongoing-euler">
            <div class="ongoing-card-head">
              <span>02</span>
              <em>进行中</em>
            </div>
            <div class="ongoing-icon"><i data-lucide="layers"></i></div>
            <h3>openEuler 开源实习</h3>
            <p>
              面向 Linux 操作系统生态与基础软件协作，持续参与 openEuler 开源实习任务，拓展工程交付边界。
            </p>
          </article>
        </div>

        <div class="internship-metrics" data-reveal>
          ${internshipStats
            .map(
              ([value, label, meta, fill], index) => `
                <article class="metric-card">
                  <span class="stat-index">${String(index + 1).padStart(2, "0")}</span>
                  <strong>${value}</strong>
                  <p>${label}</p>
                  <small>${meta}</small>
                  <div class="metric-bar" aria-hidden="true"><span style="--fill: ${fill}"></span></div>
                </article>
              `
            )
            .join("")}
        </div>

        <div class="internship-tasks">
          ${internshipTasks
            .map(
              (task) => `
                <article class="internship-task ${task.accent}" data-reveal>
                  <div class="task-head">
                    <span>${task.code}</span>
                    <em>${task.points}</em>
                  </div>
                  <div class="task-icon">
                    <i data-lucide="${task.icon}"></i>
                  </div>
                  <p>${task.group}</p>
                  <h3>${task.title}</h3>
                  <strong>${task.metric}</strong>
                  <ul>
                    ${task.bullets.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                  <div class="task-links">
                    <a href="${task.issue}" target="_blank" rel="noreferrer">
                      Issue
                      <i data-lucide="arrow-up-right"></i>
                    </a>
                    <a href="${task.pr}" target="_blank" rel="noreferrer">
                      PR
                      <i data-lucide="arrow-up-right"></i>
                    </a>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>

        <div class="internship-showcase" data-reveal aria-label="开源实习成果可视化快照">
          <article class="showcase-panel">
            <div class="showcase-graphic training-graphic" aria-hidden="true">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <h3>训练迁移 / Training</h3>
            <p>Transolver 从论文和参考实现走向 MindFlow 新架构案例，重点解决收敛、算子兼容和 Ascend 数据类型问题。</p>
          </article>
          <article class="showcase-panel">
            <div class="showcase-graphic inference-graphic" aria-hidden="true">
              <span>ONNX</span><span>MindIR</span><span>GE</span><span>FP16</span>
            </div>
            <h3>推理部署 / Inference</h3>
            <p>ViT-Base 在 batch size 256、224×224 输入下完成高性能部署，平均时延 146.35ms。</p>
          </article>
          <article class="showcase-panel">
            <div class="showcase-graphic cache-graphic" aria-hidden="true">
              <span>miss</span><span>write</span><span>hit</span><span>reuse</span>
            </div>
            <h3>验证缓存 / Verifier</h3>
            <p>Data Cache 复用 reference data 与 baseline profile，覆盖缓存命中、损坏重建、RemoteWorker 和 SOL baseline cache 适配。</p>
          </article>
        </div>
      </section>

      <section class="stack section-band" id="stack">
        <div class="section-heading">
          <div>
            <div class="section-kicker" data-reveal>技术栈 Stack</div>
            <h2 data-reveal>支撑 AI 工程与创意实现的技术栈</h2>
          </div>
          <p data-reveal>
            覆盖模型迁移、端侧部署、开源协作、信号处理和创意前端等已实践方向。
          </p>
        </div>
        <div class="stack-grid">
          ${stackItems
            .map(
              ([title, copy], index) => `
              <article class="stack-card" data-reveal>
                <div class="stack-icon">
                  <i data-lucide="${["code-2", "terminal-square", "layers", "cpu"][index]}"></i>
                </div>
                <h3>${title}</h3>
                <p>${copy}</p>
              </article>
            `
            )
            .join("")}
        </div>
      </section>

      <section class="moments section-band" id="moments">
        <div class="section-heading">
          <div>
            <div class="section-kicker" data-reveal>有意义的事情 Moments</div>
            <h2 data-reveal>一些有意义的事情</h2>
          </div>
        </div>

        <div class="moment-timeline">
          ${meaningfulMoments
            .map(
              (moment) => `
                <article class="moment-card" data-reveal tabindex="0">
                  <div class="moment-date">
                    <span>${moment.code}</span>
                    <strong>${moment.date}</strong>
                  </div>
                  <div class="moment-body">
                    <span>${moment.label}</span>
                    <h3>${moment.title}</h3>
                    <p>${moment.copy}</p>
                  </div>
                  <div class="moment-photos" aria-label="${moment.title}照片预览">
                    ${moment.photos
                      .map(
                        ([src, alt], index) => `
                          <figure class="moment-photo photo-${index + 1}">
                            <img
                              src="${src}"
                              alt="${alt}"
                              onload="this.nextElementSibling.hidden=true;"
                              onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
                            />
                            <span class="moment-photo-placeholder" hidden>
                              <small>照片 ${String(index + 1).padStart(2, "0")}</small>
                              <strong>待补充</strong>
                            </span>
                          </figure>
                        `
                      )
                      .join("")}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="gaming section-band" id="gaming">
        <div class="section-heading">
          <div>
            <div class="section-kicker" data-reveal>竞技信号</div>
            <h2 data-reveal>王者荣耀司马懿，市级银标战绩。</h2>
          </div>
          <p data-reveal>
            黑暗无边无际，人类却妄想光明的胜利。
          </p>
        </div>

        <div class="gaming-card" data-reveal>
          <div class="sima-stage" aria-label="司马懿官方形象切图动画">
            <div class="sima-grid" aria-hidden="true"></div>
            <div class="sima-moon" aria-hidden="true"></div>
            <div class="sima-ring ring-a" aria-hidden="true"></div>
            <div class="sima-ring ring-b" aria-hidden="true"></div>
            <div class="sima-rune rune-a">太原市</div>
            <div class="sima-rune rune-b">银标</div>
            <div class="sima-rune rune-c">89</div>
            <div class="sima-mobile-rank" aria-hidden="true">
              <span class="mobile-rank-medal">银标</span>
              <span class="mobile-rank-copy">
                <em>最高排名</em>
                <strong>太原市第 89</strong>
              </span>
            </div>
            <div class="sima-cutout" aria-hidden="true">
              <img class="sima-official-art" src="/sima-yi-official-cutout.png" alt="王者荣耀司马懿官方形象切图" />
              <span class="sima-shadow shadow-a"></span>
              <span class="sima-shadow shadow-b"></span>
              <span class="sima-robe"></span>
              <span class="sima-shoulder shoulder-a"></span>
              <span class="sima-shoulder shoulder-b"></span>
              <span class="sima-head"></span>
              <span class="sima-eye"></span>
              <span class="sima-blade blade-a"></span>
              <span class="sima-blade blade-b"></span>
            </div>
          </div>

          <div class="gaming-copy">
            <div class="silver-badge" aria-label="王者荣耀官方银标截图位">
              <img
                class="silver-badge-image"
                src="/hok-silver-badge.png"
                alt="王者荣耀官方银标截图"
                onerror="this.hidden=true; this.closest('.silver-badge').querySelector('.badge-core').hidden=false;"
              />
              <span class="badge-wing wing-left"></span>
              <span class="badge-wing wing-right"></span>
              <span class="badge-core" hidden>
                <small>王者荣耀</small>
                <strong>银标</strong>
                <em>太原市</em>
              </span>
            </div>
            <span class="gaming-label">官方银标素材位</span>
            <h3>司马懿</h3>
            <p>
              王者荣耀英雄池中的法刺代表位。个人最高记录为司马懿市级银标，
              最高排名太原市第 89 名。
            </p>
            <div class="rank-grid" aria-label="司马懿战绩信息">
              <div class="rank-tile">
                <span>英雄</span>
                <strong>司马懿</strong>
              </div>
              <div class="rank-tile">
                <span>标识</span>
                <strong>市级银标</strong>
              </div>
              <div class="rank-tile rank-highlight">
                <span>最高排名</span>
                <strong>太原市第 89</strong>
              </div>
              <div class="rank-tile">
                <span>定位</span>
                <strong>法刺</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="channel section-band" id="channel">
        <div class="section-heading">
          <div>
            <div class="section-kicker" data-reveal>内容频道 Channel</div>
            <h2 data-reveal>岩烧鸡腿堡：每日 AI 新闻自动化发布。</h2>
          </div>
          <p data-reveal>
            已实现公众号内容自动工作流，接入 GPT image 2.0 自动生成封面与配图，
            支撑每日 AI 新闻更新。
          </p>
        </div>
        <div class="channel-card" data-reveal>
          <div class="channel-identity">
            <div class="channel-avatar-shell">
              <img class="channel-avatar" src="/channel-avatar.jpg" alt="岩烧鸡腿堡公众号头像" />
            </div>
            <div>
              <p>WeChat Official Account</p>
              <h3>岩烧鸡腿堡</h3>
              <span>Daily AI News / Auto Publishing Lab</span>
            </div>
          </div>
          <div class="channel-pipeline" aria-label="公众号自动化发布流程">
            <div><span>01</span><strong>已实现自动工作流</strong><p>从新闻整理到内容输出形成稳定链路。</p></div>
            <div><span>02</span><strong>GPT image 2.0 自动生图</strong><p>为每日 AI 新闻生成封面与配图素材。</p></div>
          </div>
          <div class="channel-link channel-link-static" aria-label="微信公众号入口说明">
            <span>Channel Active</span>
            <strong>微信内搜索</strong>
            <small>公众号名：岩烧鸡腿堡</small>
            <i data-lucide="newspaper"></i>
          </div>
        </div>
      </section>

      <section class="contact section-band" id="contact">
        <div class="contact-panel" data-reveal>
          <div>
            <div class="section-kicker">联系 Contact</div>
            <h2>一起构建下一个原型。</h2>
            <p>
              欢迎交流创意前端、AI 辅助开发、Vibe Coding 工作流和 builder 方向的项目。
              可通过邮箱、GitHub 或 AtomGit 联系。
            </p>
          </div>
          <div class="contact-actions">
            <a href="mailto:3241347200@qq.com">
              <i data-lucide="mail"></i>
              Email
            </a>
            <a href="https://github.com/Dryoung95" target="_blank" rel="noreferrer">
              <i data-lucide="git-branch"></i>
              GitHub
            </a>
            <a href="https://atomgit.com/chenjiayan2025" target="_blank" rel="noreferrer">
              <i data-lucide="radio-tower"></i>
              AtomGit
            </a>
            <a href="#channel">
              <i data-lucide="newspaper"></i>
              公众号
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
`;

createIcons({
  icons: {
    ArrowUpRight,
    Code2,
    Cpu,
    GitBranch,
    Layers,
    Mail,
    Newspaper,
    Orbit,
    RadioTower,
    Send,
    Sparkles,
    TerminalSquare
  }
});

const textTranslations = {
  "能力": "Profile",
  "动效": "Motion",
  "作品": "Experiments",
  "实习": "Internship",
  "技术": "Stack",
  "足迹": "Moments",
  "竞技": "Rank",
  "频道": "Channel",
  "联系": "Contact",
  "Builder Up 启发 / Vibe Coding 创作者": "Inspired by Builder Up / Vibe Coding Creator",
  "一名 Vibe Coding 创作者与 AI Builder": "A Vibe Coding creator and AI Builder",
  "以热情浇筑于灵感，于码间架构万象。": "Shaping inspiration with passion, and building worlds between lines of code.",
  "当前聚焦 / Current Focus": "Current Focus",
  "方向 Focus": "Direction",
  "身份 Identity": "Identity",
  "把 AI 框架、端侧系统和创意工具做成可运行作品。": "Turning AI frameworks, edge systems, and creative tools into runnable work.",
  "已完成 MindSpore 模型迁移与 Lite 部署、OpenVINO / FastDeploy 黑客松 PR、 Atlas 200DK A2 端侧项目、公众号自动化发布和 GPT image 2.0 生图流程。 科研侧覆盖 FPGA CNN 硬件加速论文与 OAM 雷达重构。": "Completed MindSpore model migration and Lite deployment, OpenVINO / FastDeploy hackathon PRs, an Atlas 200DK A2 edge project, automated WeChat publishing, and a GPT image 2.0 image-generation workflow. Research work covers FPGA CNN hardware acceleration and OAM radar reconstruction.",
  "创意工程": "Creative Engineering",
  "开源协作": "Open Source Collaboration",
  "AI 工程落地": "AI Engineering Delivery",
  "MindSpore 迁移、Lite 部署、FastDeploy 优化与 OpenVINO demo，把模型推进到可运行链路。": "MindSpore migration, Lite deployment, FastDeploy optimization, and OpenVINO demos that move models into runnable pipelines.",
  "端侧与硬件": "Edge and Hardware",
  "Atlas 200DK A2、FPGA CNN 加速、RTK 轨迹和嵌入式控制，连接模型与真实设备。": "Atlas 200DK A2, FPGA CNN acceleration, RTK trajectories, and embedded control connect models to real devices.",
  "科研与开源": "Research and Open Source",
  "ICMEEA 2025 录用论文、OAM 雷达重构、飞桨黑客松 PR 和 MindSpore 开源实习。": "ICMEEA 2025 accepted paper, OAM radar reconstruction, PaddlePaddle hackathon PRs, and MindSpore open-source internship.",
  "创意自动化": "Creative Automation",
  "个人主页动效、公众号自动工作流和 GPT image 2.0 生图，沉淀可发布的数字作品。": "Personal homepage motion, automated publishing workflows, and GPT image 2.0 generation turned into publishable digital work.",
  "能力档案 Profile": "Profile",
  "AI 框架、模型部署、端侧智能与自动化内容工具。": "AI frameworks, model deployment, edge intelligence, and automated content tools.",
  "目前的 focus 是把模型从论文、框架或文档推进到可运行原型： 完成迁移、推理部署、性能验证，再把结果整理成 PR、报告或可展示的交互作品。": "My current focus is turning models from papers, frameworks, or documents into runnable prototypes: migration, inference deployment, performance validation, and delivery as PRs, reports, or interactive work.",
  "电子信息科学与技术背景，面向 AI 工程落地。": "Electronics and information science background, focused on AI engineering delivery.",
  "从信号处理与硬件课程出发，实践延伸到 MindSpore 生态、 Ascend/Atlas 部署、模型迁移优化和开源任务交付。": "Starting from signal processing and hardware coursework, my practice extends into the MindSpore ecosystem, Ascend/Atlas deployment, model migration, optimization, and open-source delivery.",
  "当前阶段": "Current Stage",
  "本科大三": "Junior Undergraduate",
  "方向": "Direction",
  "AI 框架与模型部署": "AI Frameworks and Model Deployment",
  "补充标签": "Additional Focus",
  "嵌入式智能系统": "Embedded Intelligent Systems",
  "西南交通大学": "Southwest Jiaotong University",
  "电子信息科学与技术 · 本科大三": "Electronic Information Science and Technology · Junior undergraduate",
  "课程基础覆盖信号处理、半导体物理、电磁场、天线、微波、数据结构与算法。": "Coursework covers signal processing, semiconductor physics, electromagnetic fields, antennas, microwave engineering, data structures, and algorithms.",
  "能够把模型迁移、导出、转换、Ascend 推理、性能测试和文档交付串成闭环。": "Able to connect model migration, export, conversion, Ascend inference, performance testing, and documentation into a complete delivery loop.",
  "端侧智能系统": "Edge Intelligent Systems",
  "做过端侧识别结果与门禁硬件执行联动，对 AI 模型部署和嵌入式控制链路有实践经验。": "Built edge recognition linked to access-control hardware, with practical experience in AI deployment and embedded control pipelines.",
  "科研与信号方向": "Research and Signal Processing",
  "包含 ICMEEA 2025 录用论文、FPGA CNN 硬件加速器设计，以及 OAM 雷达重构研究。": "Includes an ICMEEA 2025 accepted paper, FPGA CNN hardware accelerator design, and OAM radar reconstruction research.",
  "飞桨黑客松第十期": "PaddlePaddle Hackathon Season 10",
  "Intel 与沐曦赛道进阶任务，进行中": "Advanced tasks in the Intel and Metax tracks, in progress.",
  "嵌入式芯片与系统设计大赛": "Embedded Chip and System Design Competition",
  "ST 赛道西南赛区三等奖，AMD FPGA 赛道国赛三等奖": "Third prize in the ST Southwest regional track and national third prize in the AMD FPGA track.",
  "书生大模型公式识别打榜赛": "InternLM Formula Recognition Leaderboard",
  "基于曦云 C 系列算力，排名第 21 名": "Ranked 21st using Xiyun C-series compute.",
  "科研与会议论文": "Research and Conference Papers",
  "ICMEEA 2025 录用论文，IEEE SPL 方向研究持续推进": "ICMEEA 2025 accepted paper, with IEEE SPL-oriented research ongoing.",
  "社团与生态实践": "Community and Ecosystem Practice",
  "智能基座社团会长，代表西南交通大学参与华为全联接大会 2024": "President of the Intelligent Base club; represented Southwest Jiaotong University at Huawei Connect 2024.",
  "语言与表达": "Language and Communication",
  "普通话二级甲等，CET-4/6，雅思 6.5": "Mandarin Level 2-A, CET-4/6, IELTS 6.5.",
  "动效系统 Motion System": "Motion System",
  "从 AI Infra 到端侧作品的构建路径。": "A build path from AI Infra to edge-side work.",
  "这组滚动几何对应我的技术主线：以 AI Infra 组织模型部署，以 VLM 处理文档与视觉信息， 以 Edge 验证端侧和硬件场景，最终沉淀为 PR、Demo、论文或个人作品。": "This scrolling geometry maps to my technical path: AI Infra for model deployment, VLM for documents and visual information, and Edge for device and hardware validation, eventually becoming PRs, demos, papers, or personal work.",
  "AI Infra / 推理基础设施": "AI Infra / Inference Infrastructure",
  "OpenVINO Doc2Prototype、FastDeploy PaddleOCR-VL、MindSpore Lite ViT 部署，聚焦模型导出、运行时适配和推理性能。": "OpenVINO Doc2Prototype, FastDeploy PaddleOCR-VL, and MindSpore Lite ViT deployment, focused on model export, runtime adaptation, and inference performance.",
  "VLM / 文档智能链路": "VLM / Document Intelligence Pipeline",
  "围绕 OCR-VL、多模态输入、文档图像理解、结构化 JSON 输出，把模型能力转成可用工具。": "Built around OCR-VL, multimodal input, document-image understanding, and structured JSON output, turning model capability into usable tools.",
  "Edge / 端侧与硬件验证": "Edge / Device and Hardware Validation",
  "Atlas 200DK A2、Ascend GE、FPGA CNN 加速和嵌入式控制，把模型推进到真实设备或可交付 PR。": "Atlas 200DK A2, Ascend GE, FPGA CNN acceleration, and embedded control move models toward real devices or deliverable PRs.",
  "作品实验 Experiments": "Experiments",
  "项目与开源成果": "Projects and Open-source Results",
  "精选端侧 AI、雷达重构、飞桨黑客松和 MindSpore 实习等代表经历， 保留 PR、指标和可复现链路。": "Selected work across edge AI, radar reconstruction, PaddlePaddle hackathon, and MindSpore internship, keeping PRs, metrics, and reproducible paths visible.",
  "Atlas 200DK A2 人脸识别自动门": "Atlas 200DK A2 Face-recognition Door",
  "端侧 AI / Embedded system": "Edge AI / Embedded System",
  "围绕 Atlas 200DK A2 搭建人脸识别、门禁控制和语音播报流程，完成端侧 AI 到硬件执行的闭环。": "Built a face-recognition, access-control, and voice-feedback flow around Atlas 200DK A2, completing the loop from edge AI to hardware execution.",
  "物理增强型雷达重构框架": "Physics-enhanced Radar Reconstruction Framework",
  "面向 OAM 雷达阵列病态性提出虚拟阵列平移方案，构建端到端网络并完成 PSNR 70.00 dB 的结果验证。": "Proposed virtual array translation for ill-conditioned OAM radar arrays, built an end-to-end network, and validated a PSNR result of 70.00 dB.",
  "参与 Intel 与沐曦赛道进阶任务，持续推进环境配置、模型/算子适配、测试验证与开源提交材料整理。": "Worked on advanced Intel and Metax track tasks, covering environment setup, model/operator adaptation, testing, validation, and open-source submission materials.",
  "联系交流": "Contact",
  "论文成果 Research": "Research",
  "论文围绕卷积神经网络硬件加速器设计展开，体现 FPGA 与深度学习推理加速方向的工程实践。": "This paper focuses on CNN hardware accelerator design and reflects engineering practice in FPGA-based deep-learning inference acceleration.",
  "一篇以学术化叙事分析研究生选拔、学历竞争和社会流动焦虑的公共研究写作，适合作为个人表达与跨学科观察的补充成果。": "A public research essay using academic-style argumentation to analyze graduate selection, credential competition, and anxiety around social mobility.",
  "查看原文": "Read Article",
  "飞桨黑客松 Hackathon": "PaddlePaddle Hackathon",
  "两个进阶任务 PR：文档生成链路与视觉路径优化。": "Two advanced PRs: document-generation pipeline and vision-path optimization.",
  "Intel 与沐曦方向的两个 PR 分别覆盖文档结构化生成和 PaddleOCR-VL 视觉路径性能优化。 内容包含流程节点、性能指标和源码入口。": "Two PRs in the Intel and Metax directions cover document-structure generation and PaddleOCR-VL vision-path performance optimization, including workflow nodes, metrics, and source entry points.",
  "进阶 PR": "Advanced PRs",
  "Doc2Prototype 链路": "Doc2Prototype Pipeline",
  "并发平均收益": "Average Concurrency Gain",
  "P95 收益": "P95 Gain",
  "把技术文档图像接到 PaddleOCR-VL + OpenVINO，输出结构化 JSON、下游工件和单页视觉报告。": "Connected technical document images to PaddleOCR-VL + OpenVINO, producing structured JSON, downstream artifacts, and a one-page visual report.",
  "API 文档 -> endpoint JSON + FastAPI skeleton": "API docs -> endpoint JSON + FastAPI skeleton",
  "Flowchart -> nodes/edges JSON + Mermaid diagram": "Flowchart -> nodes/edges JSON + Mermaid diagram",
  "参考样例 -> structured JSON + Markdown summary": "Reference sample -> structured JSON + Markdown summary",
  "在 Metax GPU 上压缩 PaddleOCR-VL vision path 的 host/device 同步和小 tensor 开销，保持语义不变。": "Reduced host/device synchronization and small-tensor overhead in the PaddleOCR-VL vision path on Metax GPU while preserving semantics.",
  "projector packing flow 直接返回 packed image features": "Projector packing flow directly returns packed image features.",
  "复用 host-side grid_thw_lst 元数据，减少同步开销": "Reused host-side grid_thw_lst metadata to reduce synchronization overhead.",
  "补 batch=1 fast path、float32 rotary embedding 和单测": "Added batch=1 fast path, float32 rotary embedding, and tests.",
  "查看 PR": "View PR",
  "开源实习 Internship": "Open-source Internship",
  "从模型迁移、推理部署到验证系统优化。": "From model migration and inference deployment to verifier-system optimization.",
  "MindSpore 开源实习覆盖 MindFlow、MindSpore Lite 和 AKG 三条技术线。 任务成果包含模型训练迁移、ViT 高性能推理部署、AKG Verifier Data Cache，并以 PR、文档、测试材料交付。": "The MindSpore open-source internship covered MindFlow, MindSpore Lite, and AKG. Deliverables included model-training migration, high-performance ViT inference deployment, AKG Verifier Data Cache, and PR/document/test materials.",
  "积分": "Points",
  "学校 / 专业": "School / Major",
  "西南交通大学 · 电子信息科学与技术": "Southwest Jiaotong University · Electronic Information Science and Technology",
  "实习 SIG": "Internship SIG",
  "实习周期": "Internship Period",
  "工程关键词": "Engineering Keywords",
  "模型迁移、收敛优化、Ascend 部署、验证缓存": "Model migration, convergence optimization, Ascend deployment, verifier cache",
  "当前进行中": "In Progress",
  "进行中": "In Progress",
  "openUBMC / openEuler 双线开源实习": "Dual open-source internships: openUBMC / openEuler",
  "在 MindSpore 开源实习之外，目前同步推进 openUBMC 与 openEuler 两条开源实习线， 继续把基础软件、系统生态和工程协作经验往更底层延展。": "Beyond the MindSpore open-source internship, I am currently advancing two open-source internship tracks with openUBMC and openEuler, extending my practice into lower-level infrastructure, system ecosystems, and engineering collaboration.",
  "openUBMC 开源实习": "openUBMC Open-source Internship",
  "面向服务器管理与 BMC 基础设施生态，持续参与开源实习任务，补充系统软件与硬件管理方向的实践。": "Focused on server management and the BMC infrastructure ecosystem, continuing open-source internship work while building practice in system software and hardware management.",
  "openEuler 开源实习": "openEuler Open-source Internship",
  "面向 Linux 操作系统生态与基础软件协作，持续参与 openEuler 开源实习任务，拓展工程交付边界。": "Focused on the Linux operating-system ecosystem and foundational software collaboration, continuing openEuler internship work and extending my engineering delivery boundary.",
  "开源实习积分": "Open-source Internship Points",
  "代表任务": "Representative Tasks",
  "训练迁移 / 推理部署 / 验证缓存": "Training migration / Inference deployment / Verifier cache",
  "Transolver 训练 Loss": "Transolver Training Loss",
  "RMSE 2.3048e-04 / 相对误差约 3.00%": "RMSE 2.3048e-04 / relative error about 3.00%",
  "ViT 平均推理时延": "ViT Average Inference Latency",
  "1749.28 FPS / 目标 < 410ms": "1749.28 FPS / target < 410ms",
  "MindFlow Transolver 模型迁移补充": "MindFlow Transolver Model Migration",
  "30 分": "30 pts",
  "测试 RMSE 2.3048e-04": "Test RMSE 2.3048e-04",
  "梳理论文、参考实现和 MindFlow 新架构案例结构。": "Reviewed the paper, reference implementation, and new MindFlow case structure.",
  "重构 Structured Mesh 训练逻辑，引入 GaussianNormalizer 稳定收敛。": "Refactored Structured Mesh training logic and introduced GaussianNormalizer for stable convergence.",
  "将部分 einsum 改写为 matmul，修复 Ascend float64 到 Tensor 兼容问题。": "Rewrote some einsum operations as matmul and fixed Ascend float64-to-Tensor compatibility issues.",
  "MindSpore Lite ViT 高性能推理部署": "MindSpore Lite ViT High-performance Inference Deployment",
  "完成 ViT 模型 ONNX 导出，并转换为 MindIR 部署到 MindSpore Lite。": "Exported the ViT model to ONNX and converted it to MindIR for MindSpore Lite deployment.",
  "采用通用 MindIR + GE 在线编译方案，规避布局冲突并提升稳定性。": "Used a general MindIR + GE online compilation approach to avoid layout conflicts and improve stability.",
  "开启 enforce_fp16 与 GE 自动格式调优，时延显著低于 410ms 目标。": "Enabled enforce_fp16 and GE automatic format tuning, with latency well below the 410ms target.",
  "AKG Agents Verifier Data Cache 能力开发": "AKG Agents Verifier Data Cache Development",
  "40 分": "40 pts",
  "Reference / Baseline 双缓存": "Reference / Baseline dual cache",
  "设计 verifier/data_cache.py，封装配置解析、cache key、元信息和并发写入锁。": "Designed verifier/data_cache.py, encapsulating config parsing, cache keys, metadata, and concurrent write locks.",
  "缓存 reference data 与 baseline profile，命中后复用输入、输出和平均耗时。": "Cached reference data and baseline profiles, reusing inputs, outputs, and average runtime on cache hits.",
  "适配 RemoteWorker、SOL-ExecBench，并补充 Triton Ascend 端到端示例和单测。": "Adapted RemoteWorker and SOL-ExecBench, adding Triton Ascend end-to-end examples and unit tests.",
  "训练迁移 / Training": "Training Migration",
  "Transolver 从论文和参考实现走向 MindFlow 新架构案例，重点解决收敛、算子兼容和 Ascend 数据类型问题。": "Transolver moved from paper and reference implementation into the new MindFlow case architecture, focusing on convergence, operator compatibility, and Ascend dtype issues.",
  "推理部署 / Inference": "Inference Deployment",
  "ViT-Base 在 batch size 256、224×224 输入下完成高性能部署，平均时延 146.35ms。": "ViT-Base achieved high-performance deployment with batch size 256 and 224×224 input, reaching 146.35ms average latency.",
  "验证缓存 / Verifier": "Verifier Cache",
  "Data Cache 复用 reference data 与 baseline profile，覆盖缓存命中、损坏重建、RemoteWorker 和 SOL baseline cache 适配。": "Data Cache reuses reference data and baseline profiles, covering cache hits, corruption rebuilds, RemoteWorker, and SOL baseline cache adaptation.",
  "技术栈 Stack": "Stack",
  "支撑 AI 工程与创意实现的技术栈": "The stack supporting AI engineering and creative implementation",
  "覆盖模型迁移、端侧部署、开源协作、信号处理和创意前端等已实践方向。": "Covers model migration, edge deployment, open-source collaboration, signal processing, and creative frontend work.",
  "AI 框架与模型": "AI Frameworks and Models",
  "MindSpore、MindSpore Lite、PyTorch、ONNX、MindIR、ViT、Transolver": "MindSpore, MindSpore Lite, PyTorch, ONNX, MindIR, ViT, Transolver",
  "硬件与平台": "Hardware and Platforms",
  "Ascend/GE 后端、Atlas 200DK A2、FPGA/AMD 赛道实践、RTK 卫星循迹": "Ascend/GE backend, Atlas 200DK A2, FPGA/AMD track practice, RTK satellite tracking",
  "工程协作": "Engineering Collaboration",
  "Git/PR 协作、README、测试报告、训练日志、性能数据整理和开源社区沟通": "Git/PR collaboration, README, test reports, training logs, performance data organization, and open-source community communication",
  "算法与信号": "Algorithms and Signals",
  "数据结构与算法、数字信号处理、雷达成像重构、物理建模与端到端训练": "Data structures and algorithms, digital signal processing, radar imaging reconstruction, physics modeling, and end-to-end training",
  "有意义的事情 Moments": "Meaningful Moments",
  "一些有意义的事情": "Some meaningful moments",
  "人生第一次成都半程马拉松": "My first Chengdu half marathon",
  "半程马拉松": "Half Marathon",
  "第一次把 21.0975 公里跑完，记住了节奏、体能和终点线前的那一段坚持。": "The first time I finished 21.0975 km, remembering the rhythm, stamina, and persistence before the finish line.",
  "前往河南商丘睢县参与支教": "Volunteer teaching in Suixian, Shangqiu, Henan",
  "支教": "Volunteer Teaching",
  "在一段具体的乡土场景里讲课、沟通和协作，也重新理解教育、表达与陪伴的重量。": "Teaching, communicating, and collaborating in a concrete local setting reshaped my understanding of education, expression, and presence.",
  "峨眉山登上金顶": "Reached the Golden Summit of Mount Emei",
  "登山": "Summit",
  "从山路、云层到金顶，把一次登山变成对耐心、体力和方向感的完整校准。": "From mountain paths and clouds to the Golden Summit, the climb became a full calibration of patience, stamina, and direction.",
  "照片 01": "Photo 01",
  "照片 02": "Photo 02",
  "待补充": "Pending",
  "竞技信号": "Rank Signal",
  "王者荣耀司马懿，市级银标战绩。": "Honor of Kings 司马懿, municipal silver badge record.",
  "黑暗无边无际，人类却妄想光明的胜利。": "Darkness is boundless, yet humanity still dreams of victory in the light.",
  "太原市": "Taiyuan",
  "银标": "Silver Badge",
  "官方银标素材位": "Official Silver Badge Asset Slot",
  "王者荣耀英雄池中的法刺代表位。个人最高记录为司马懿市级银标， 最高排名太原市第 89 名。": "A representative mage-assassin pick in Honor of Kings. My personal best record is a municipal silver badge for 司马懿, ranking No. 89 in Taiyuan.",
  "英雄": "Hero",
  "标识": "Badge",
  "市级银标": "Municipal Silver Badge",
  "最高排名": "Best Rank",
  "太原市第 89": "Taiyuan No. 89",
  "定位": "Role",
  "法刺": "Mage Assassin",
  "内容频道 Channel": "Channel",
  "岩烧鸡腿堡：每日 AI 新闻自动化发布。": "岩烧鸡腿堡: automated daily AI news publishing.",
  "已实现公众号内容自动工作流，接入 GPT image 2.0 自动生成封面与配图， 支撑每日 AI 新闻更新。": "Implemented an automated WeChat official-account workflow with GPT image 2.0 for covers and supporting visuals, enabling daily AI news updates.",
  "已实现自动工作流": "Automated workflow implemented",
  "从新闻整理到内容输出形成稳定链路。": "A stable pipeline from news collection to content output.",
  "GPT image 2.0 自动生图": "GPT image 2.0 automated image generation",
  "为每日 AI 新闻生成封面与配图素材。": "Generates cover and supporting visuals for daily AI news.",
  "微信内搜索": "Search in WeChat",
  "公众号名：岩烧鸡腿堡": "Official account: 岩烧鸡腿堡",
  "联系 Contact": "Contact",
  "一起构建下一个原型。": "Build the next prototype together.",
  "欢迎交流创意前端、AI 辅助开发、Vibe Coding 工作流和 builder 方向的项目。 可通过邮箱、GitHub 或 AtomGit 联系。": "Open to conversations around creative frontend, AI-assisted development, Vibe Coding workflows, and builder-oriented projects. Reach me by email, GitHub, or AtomGit.",
  "公众号": "WeChat"
};

const attributeTranslations = {
  "Primary navigation": "Primary navigation",
  "Contact Dryoung": "Contact Dryoung",
  "主页内容总览": "Homepage content overview",
  "能力分布": "Skill distribution",
  "滚动驱动的几何变化": "Scroll-driven geometric motion",
  "Doc2Prototype workflow": "Doc2Prototype workflow",
  "FastDeploy performance profile": "FastDeploy performance profile",
  "MindSpore 开源实习任务可视化": "MindSpore open-source internship visualization",
  "开源实习成果可视化快照": "Open-source internship result snapshots",
  "人生第一次成都半程马拉松照片预览": "First Chengdu half marathon photo preview",
  "人生第一次成都半程马拉松照片 1": "First Chengdu half marathon photo 1",
  "人生第一次成都半程马拉松照片 2": "First Chengdu half marathon photo 2",
  "前往河南商丘睢县参与支教照片预览": "Volunteer teaching in Suixian photo preview",
  "河南商丘睢县支教照片 1": "Suixian volunteer teaching photo 1",
  "河南商丘睢县支教照片 2": "Suixian volunteer teaching photo 2",
  "峨眉山登上金顶照片预览": "Mount Emei Golden Summit photo preview",
  "峨眉山金顶照片 1": "Mount Emei Golden Summit photo 1",
  "峨眉山金顶照片 2": "Mount Emei Golden Summit photo 2",
  "司马懿官方形象切图动画": "Official 司马懿 artwork cutout animation",
  "王者荣耀司马懿官方形象切图": "Official Honor of Kings 司马懿 artwork cutout",
  "王者荣耀官方银标截图位": "Official Honor of Kings silver badge slot",
  "王者荣耀官方银标截图": "Official Honor of Kings silver badge screenshot",
  "司马懿战绩信息": "司马懿 rank information",
  "岩烧鸡腿堡公众号头像": "岩烧鸡腿堡 account avatar",
  "公众号自动化发布流程": "Official account automation workflow",
  "微信公众号入口说明": "WeChat official account entry instructions"
};

const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();
let currentLanguage = getStoredLanguage();
let currentSectionId = "#home";

function normalizeCopy(value) {
  return value.replace(/\s+/g, " ").trim();
}

function preserveWhitespace(original, replacement) {
  const leading = original.match(/^\s*/)?.[0] || "";
  const trailing = original.match(/\s*$/)?.[0] || "";
  return `${leading}${replacement}${trailing}`;
}

function getStoredLanguage() {
  try {
    return window.localStorage.getItem("dryoung-language") === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem("dryoung-language", language);
  } catch {
    // Storage may be unavailable in strict privacy modes.
  }
}

function translateTextNodes(language) {
  const root = document.querySelector("#app");

  if (!root) {
    return;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      const parent = node.parentElement;

      if (parent?.closest(".signature-mark, .language-toggle")) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  let node = walker.nextNode();

  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }

  nodes.forEach((textNode) => {
    if (!originalTextNodes.has(textNode)) {
      originalTextNodes.set(textNode, textNode.nodeValue);
    }

    const original = originalTextNodes.get(textNode);
    const replacement = textTranslations[normalizeCopy(original)];

    textNode.nodeValue = language === "en" && replacement ? preserveWhitespace(original, replacement) : original;
  });
}

function translateAttributes(language) {
  document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
    if (element.closest(".language-toggle")) {
      return;
    }

    ["aria-label", "alt", "title"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) {
        return;
      }

      let attributes = originalAttributes.get(element);

      if (!attributes) {
        attributes = {};
        originalAttributes.set(element, attributes);
      }

      if (!attributes[attribute]) {
        attributes[attribute] = element.getAttribute(attribute);
      }

      const original = attributes[attribute];
      const replacement = attributeTranslations[normalizeCopy(original)];
      element.setAttribute(attribute, language === "en" && replacement ? replacement : original);
    });
  });
}

function updateLanguageToggle(language) {
  const toggle = document.querySelector("[data-language-toggle]");

  if (!toggle) {
    return;
  }

  toggle.setAttribute("aria-pressed", String(language === "en"));
  toggle.setAttribute("aria-label", language === "en" ? "切换到中文" : "Switch to English");
}

function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "zh";
  document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
  document.body.classList.toggle("lang-en", currentLanguage === "en");
  translateTextNodes(currentLanguage);
  translateAttributes(currentLanguage);
  updateLanguageToggle(currentLanguage);
  saveLanguage(currentLanguage);
  setActiveSection(currentSectionId);
  ScrollTrigger.refresh();
}

function bindLanguageToggle() {
  document.querySelector("[data-language-toggle]")?.addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "zh" : "en");
  });
}

const signatureImages = [
  [".signature-cn-image", "has-signature-cn"],
  [".signature-en-image", "has-signature-en"]
];

signatureImages.forEach(([selector, className]) => {
  const image = document.querySelector(selector);

  if (!image) {
    return;
  }

  const markLoaded = () => document.body.classList.add(className);
  const markMissing = () => document.body.classList.remove(className);

  image.addEventListener("load", markLoaded);
  image.addEventListener("error", markMissing);

  if (image.complete && image.naturalWidth > 0) {
    markLoaded();
  }
});

const lenis = new Lenis({
  duration: 1.1,
  smoothWheel: true,
  wheelMultiplier: 0.85
});

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

const progressLabel = document.querySelector(".motion-progress-label");
const navLinks = gsap.utils.toArray(".nav-links a");
const sectionLabels = new Map([
  ["#home", { zh: "首页", en: "Home" }],
  ...navItems.map(({ zh, en, href }) => [href, { zh, en }])
]);

function setActiveSection(sectionId) {
  currentSectionId = sectionId;

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === sectionId);
  });

  if (progressLabel) {
    const label = sectionLabels.get(sectionId);
    progressLabel.textContent = label?.[currentLanguage] || "Home";
  }
}

ScrollTrigger.create({
  start: 0,
  end: "max",
  onUpdate: (self) => {
    document.documentElement.style.setProperty("--page-progress", self.progress.toFixed(4));
    document.body.classList.toggle("page-scrolled", self.progress > 0.015);
  }
});

["#home", ...navItems.map(({ href }) => href)].forEach((href) => {
  const section = document.querySelector(href);

  if (!section) {
    return;
  }

  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => setActiveSection(href),
    onEnterBack: () => setActiveSection(href)
  });
});

setActiveSection("#home");
bindLanguageToggle();
applyLanguage(currentLanguage);

gsap.utils.toArray("[data-reveal]").forEach((element) => {
  gsap.fromTo(
    element,
    { y: 28, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 88%"
      }
    }
  );
});

gsap.fromTo(
  [".hero-copy", ".signal-panel"],
  { y: 18, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.9,
    delay: 0.35,
    ease: "power3.out"
  }
);

const signatureExitTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "36% top",
    scrub: true
  }
});

signatureExitTimeline
  .to(
    ".signature-cn-image, .wordmark-cn",
    {
      x: -420,
      y: -18,
      scale: 0.88,
      opacity: 0,
      ease: "none"
    },
    0
  )
  .to(
    ".signature-en-image, .wordmark-en",
    {
      x: 420,
      y: -8,
      scale: 0.86,
      opacity: 0,
      ease: "none"
    },
    0
  )
  .to(
    ".signature-mark",
    {
      "--signature-decor-opacity": 0,
      y: -10,
      scale: 0.96,
      ease: "none"
    },
    0
  )
  .to(
    ".scroll-cue",
    {
      y: 18,
      opacity: 0,
      ease: "none"
    },
    0
  );

const heroInfoExitTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "28% top",
    end: "78% top",
    scrub: true
  }
});

heroInfoExitTimeline
  .to(
    ".hero-copy",
    {
      y: -28,
      opacity: 0,
      ease: "none"
    },
    0
  )
  .to(
    ".signal-panel",
    {
      y: -58,
      scale: 0.97,
      opacity: 0,
      ease: "none"
    },
    0.08
  );

const reticle = document.querySelector(".cursor-reticle");
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (reticle && canHover) {
  gsap.set(reticle, { xPercent: -50, yPercent: -50 });
}

const moveReticleX =
  reticle && canHover ? gsap.quickTo(reticle, "x", { duration: 0.22, ease: "power3.out" }) : null;
const moveReticleY =
  reticle && canHover ? gsap.quickTo(reticle, "y", { duration: 0.22, ease: "power3.out" }) : null;

function updatePointer(event) {
  targetPointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
  targetPointer.y = -(event.clientY / window.innerHeight - 0.5) * 2;

  if (!canHover) {
    return;
  }

  document.body.classList.add("cursor-active");
  moveReticleX(event.clientX);
  moveReticleY(event.clientY);
}

window.addEventListener("pointermove", updatePointer);

if (canHover) {
  gsap.utils
    .toArray(
      ".project-card, .paper-card, .hackathon-card, .overview-card, .profile-lead, .profile-radar, .profile-signal, .milestone, .moment-card, .gaming-card, .rank-tile, .ongoing-card, .ongoing-intro, .internship-task, .metric-card, .showcase-panel, .stack-card, .channel-card, .signal-panel, .contact-panel"
    )
    .forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;
      const rotateY = (localX / rect.width - 0.5) * 7;
      const rotateX = (0.5 - localY / rect.height) * 7;

      element.style.setProperty("--mx", `${localX}px`);
      element.style.setProperty("--my", `${localY}px`);
      element.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    element.addEventListener("pointerenter", () => {
      document.body.classList.add("cursor-engaged");
    });

    element.addEventListener("pointerleave", () => {
      document.body.classList.remove("cursor-engaged");
      element.style.transform = "";
      element.style.setProperty("--mx", "50%");
      element.style.setProperty("--my", "50%");
    });
  });
}

const geoMotion = window.matchMedia("(max-width: 640px)").matches
  ? {
      slabA: { x: -92, y: -88, rotate: -11 },
      slabB: { x: 84, y: 6, rotate: 10 },
      slabC: { x: -14, y: 96, rotate: -3 },
      nodeA: { x: -118, y: 120 },
      nodeB: { x: 118, y: 106 },
      nodeC: { x: -96, y: -132 },
      nodeD: { x: 100, y: -126 }
    }
  : {
      slabA: { x: -184, y: -106, rotate: -14 },
      slabB: { x: 174, y: -4, rotate: 11 },
      slabC: { x: -28, y: 138, rotate: -4 },
      nodeA: { x: -230, y: 150 },
      nodeB: { x: 236, y: 130 },
      nodeC: { x: -168, y: -176 },
      nodeD: { x: 196, y: -170 }
    };

const profileTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".profile",
    start: "top 76%",
    end: "bottom 42%",
    scrub: 1
  }
});

profileTimeline
  .fromTo(
    ".skill-fill",
    { scaleX: 0.16 },
    { scaleX: 1, stagger: 0.05, ease: "none" },
    0
  )
  .fromTo(
    ".profile-signal-icon",
    { rotate: -18, scale: 0.78 },
    { rotate: 0, scale: 1, stagger: 0.05, ease: "none" },
    0.08
  )
  .fromTo(
    ".milestone",
    { y: 26, opacity: 0.58 },
    { y: 0, opacity: 1, stagger: 0.04, ease: "none" },
    0.16
  );

const gamingTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".gaming",
    start: "top 76%",
    end: "bottom 34%",
    scrub: 1
  }
});

gamingTimeline
  .fromTo(
    ".sima-cutout",
    { x: -92, rotateY: -18, scale: 0.82, opacity: 0.36 },
    { x: 0, rotateY: 0, scale: 1, opacity: 1, ease: "none" },
    0
  )
  .fromTo(
    ".sima-ring",
    { scale: 0.72, rotate: -48, opacity: 0.28 },
    { scale: 1.08, rotate: 64, opacity: 0.92, stagger: 0.05, ease: "none" },
    0.04
  )
  .fromTo(
    ".silver-badge",
    { y: 42, rotate: -16, scale: 0.72, opacity: 0.42 },
    { y: 0, rotate: 0, scale: 1, opacity: 1, ease: "none" },
    0.08
  )
  .fromTo(
    ".rank-tile",
    { y: 34, opacity: 0.42 },
    { y: 0, opacity: 1, stagger: 0.045, ease: "none" },
    0.18
  )
  .fromTo(
    ".sima-rune",
    { y: 32, opacity: 0.18 },
    { y: 0, opacity: 0.78, stagger: 0.04, ease: "none" },
    0.12
  );

const geometryTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".geometry",
    start: "top 72%",
    end: "bottom 30%",
    scrub: 1
  }
});

geometryTimeline
  .fromTo(
    ".geometry-stage",
    { rotateX: 8, rotateY: -8 },
    { rotateX: 0, rotateY: 0, ease: "none" },
    0
  )
  .fromTo(
    ".geo-grid",
    { opacity: 0.44, backgroundSize: "64px 64px" },
    { opacity: 0.9, backgroundSize: "32px 32px", ease: "none" },
    0
  )
  .fromTo(
    ".geo-core",
    {
      scale: 0.62,
      rotate: -36,
      clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"
    },
    {
      scale: 1.15,
      rotate: 54,
      clipPath: "polygon(28% 0, 72% 0, 100% 28%, 100% 72%, 72% 100%, 28% 100%, 0 72%, 0 28%)",
      ease: "none"
    },
    0
  )
  .fromTo(
    ".geo-ring",
    { scale: 0.58, rotate: -80, opacity: 0.42 },
    { scale: 1.08, rotate: 120, opacity: 1, ease: "none" },
    0
  )
  .fromTo(
    ".slab-a",
    { x: -260, y: -200, rotate: -28, opacity: 0.5 },
    { x: geoMotion.slabA.x, y: geoMotion.slabA.y, rotate: geoMotion.slabA.rotate, opacity: 1, ease: "none" },
    0.05
  )
  .fromTo(
    ".slab-b",
    { x: 260, y: -120, rotate: 28, opacity: 0.5 },
    { x: geoMotion.slabB.x, y: geoMotion.slabB.y, rotate: geoMotion.slabB.rotate, opacity: 1, ease: "none" },
    0.05
  )
  .fromTo(
    ".slab-c",
    { x: -40, y: 230, rotate: -18, opacity: 0.5 },
    { x: geoMotion.slabC.x, y: geoMotion.slabC.y, rotate: geoMotion.slabC.rotate, opacity: 1, ease: "none" },
    0.05
  )
  .fromTo(
    ".node-a",
    { x: -40, y: 40, scale: 0.45, opacity: 0 },
    { x: geoMotion.nodeA.x, y: geoMotion.nodeA.y, scale: 1, opacity: 1, ease: "none" },
    0.18
  )
  .fromTo(
    ".node-b",
    { x: 40, y: 50, scale: 0.45, opacity: 0 },
    { x: geoMotion.nodeB.x, y: geoMotion.nodeB.y, scale: 1, opacity: 1, ease: "none" },
    0.24
  )
  .fromTo(
    ".node-c",
    { x: 0, y: -30, scale: 0.45, opacity: 0 },
    { x: geoMotion.nodeC.x, y: geoMotion.nodeC.y, scale: 1, opacity: 1, ease: "none" },
    0.3
  )
  .fromTo(
    ".geo-axis",
    { scaleX: 0.2, opacity: 0.18 },
    { scaleX: 1, opacity: 1, ease: "none" },
    0
  )
  .fromTo(
    ".geo-route",
    { scaleX: 0.08, opacity: 0.1 },
    { scaleX: 1, opacity: 0.78, stagger: 0.035, ease: "none" },
    0.08
  )
  .fromTo(
    ".node-d",
    { x: 0, y: -30, scale: 0.45, opacity: 0 },
    { x: geoMotion.nodeD.x, y: geoMotion.nodeD.y, scale: 1, opacity: 1, ease: "none" },
    0.3
  );

const internshipTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".internship",
    start: "top 76%",
    end: "bottom 34%",
    scrub: 1
  }
});

internshipTimeline
  .fromTo(
    ".visual-orbit",
    { rotate: -18, opacity: 0.38 },
    { rotate: 42, opacity: 1, stagger: 0.08, ease: "none" },
    0
  )
  .fromTo(
    ".visual-node",
    { y: 34, opacity: 0.52 },
    { y: 0, opacity: 1, stagger: 0.08, ease: "none" },
    0.04
  )
  .fromTo(
    ".metric-bar span",
    { scaleX: 0.18 },
    { scaleX: 1, stagger: 0.04, ease: "none" },
    0.1
  )
  .fromTo(
    ".showcase-graphic span",
    { scaleY: 0.36, opacity: 0.45 },
    { scaleY: 1, opacity: 1, stagger: 0.025, ease: "none" },
    0.16
  );

const canvas = document.querySelector("#space-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 100);
camera.position.set(0, 0.7, 9);

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true,
  preserveDrawingBuffer: true
});
renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));

const pointer = new THREE.Vector2();
const targetPointer = new THREE.Vector2();
const heroState = {
  scroll: 0
};

const particleCount = 1500;
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);
const basePalette = [
  new THREE.Color("#70d9ff"),
  new THREE.Color("#f2f7ff"),
  new THREE.Color("#b9f26d"),
  new THREE.Color("#ffb86b")
];

for (let index = 0; index < particleCount; index += 1) {
  const radius = 2.2 + Math.random() * 5.2;
  const angle = Math.random() * Math.PI * 2;
  const layer = (Math.random() - 0.5) * 4.4;
  const i3 = index * 3;
  positions[i3] = Math.cos(angle) * radius;
  positions[i3 + 1] = layer + Math.sin(angle * 2.2) * 0.35;
  positions[i3 + 2] = Math.sin(angle) * radius - Math.random() * 7;

  const color = basePalette[index % basePalette.length];
  colors[i3] = color.r;
  colors[i3 + 1] = color.g;
  colors[i3 + 2] = color.b;
}

const particleGeometry = new THREE.BufferGeometry();
particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

const particleMaterial = new THREE.PointsMaterial({
  size: 0.035,
  vertexColors: true,
  transparent: true,
  opacity: 0.86,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});

const particles = new THREE.Points(particleGeometry, particleMaterial);
particles.position.set(0.4, 0.15, 0);
scene.add(particles);

const rings = new THREE.Group();
const ringMaterial = new THREE.LineBasicMaterial({
  color: 0x6bdcff,
  transparent: true,
  opacity: 0.28,
  blending: THREE.AdditiveBlending
});

for (let index = 0; index < 5; index += 1) {
  const curve = new THREE.EllipseCurve(0, 0, 1.6 + index * 0.55, 0.55 + index * 0.2, 0, Math.PI * 2);
  const points = curve.getPoints(96).map((point) => new THREE.Vector3(point.x, point.y, 0));
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const ring = new THREE.LineLoop(geometry, ringMaterial);
  ring.rotation.x = 1.15 + index * 0.08;
  ring.rotation.z = index * 0.32;
  rings.add(ring);
}

rings.position.set(2.4, -0.1, -1.8);
scene.add(rings);

const beamGroup = new THREE.Group();
const beamMaterial = new THREE.LineBasicMaterial({
  color: 0xb9f26d,
  transparent: true,
  opacity: 0.22,
  blending: THREE.AdditiveBlending
});

for (let index = 0; index < 34; index += 1) {
  const start = new THREE.Vector3(-6 + Math.random() * 4, -2.8 + Math.random() * 5.6, -3 - Math.random() * 4);
  const end = start.clone().add(new THREE.Vector3(3.2 + Math.random() * 4.5, 0.05 + Math.random() * 0.7, -0.4));
  const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
  beamGroup.add(new THREE.Line(geometry, beamMaterial));
}

scene.add(beamGroup);

function resize() {
  const { innerWidth, innerHeight } = window;
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight;
  camera.position.z = innerWidth < 720 ? 10.5 : 9;
  camera.updateProjectionMatrix();
}

resize();
window.addEventListener("resize", resize);

ScrollTrigger.create({
  trigger: ".hero",
  start: "top top",
  end: "bottom top",
  scrub: true,
  onUpdate: (self) => {
    heroState.scroll = self.progress;
  }
});

const sceneStart = performance.now();

function animate(now = performance.now()) {
  const elapsed = (now - sceneStart) / 1000;
  pointer.lerp(targetPointer, 0.04);

  particles.rotation.y = elapsed * 0.035 + pointer.x * 0.11;
  particles.rotation.x = -0.08 + pointer.y * 0.045 + heroState.scroll * 0.12;
  particles.position.y = 0.1 - heroState.scroll * 0.8;
  particleMaterial.opacity = 0.86 - heroState.scroll * 0.3;

  rings.rotation.y = elapsed * 0.1 + pointer.x * 0.14;
  rings.rotation.z = elapsed * 0.055;
  beamGroup.position.x = Math.sin(elapsed * 0.32) * 0.22 + pointer.x * 0.18;
  beamGroup.rotation.z = pointer.y * 0.03;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

window.__dryoungScene = {
  getState() {
    return {
      particleRotation: particles.rotation.y,
      ringRotation: rings.rotation.z,
      width: renderer.domElement.width,
      height: renderer.domElement.height
    };
  }
};
