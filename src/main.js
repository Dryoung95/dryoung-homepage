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
  ["能力 Profile", "#profile"],
  ["竞技 Rank", "#gaming"],
  ["动效 Motion", "#geometry"],
  ["作品 Experiments", "#experiments"],
  ["实习 Internship", "#internship"],
  ["技术 Stack", "#stack"],
  ["频道 Channel", "#channel"],
  ["联系 Contact", "#contact"]
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
        ${navItems.map(([label, href]) => `<a href="${href}" data-nav-target="${href}">${label}</a>`).join("")}
      </nav>
      <a class="header-action" href="#contact" aria-label="Contact Dryoung">
        <i data-lucide="send"></i>
      </a>
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

      <section class="gaming section-band" id="gaming">
        <div class="section-heading">
          <div>
            <div class="section-kicker" data-reveal>竞技信号 Rank Signal</div>
            <h2 data-reveal>王者荣耀司马懿，市级银标战绩。</h2>
          </div>
          <p data-reveal>
            这部分作为个人主页里的兴趣切面：保留最高排名、英雄定位和竞技记忆点，
            司马懿形象使用官方素材切图，银标位置预留给官方截图素材。
          </p>
        </div>

        <div class="gaming-card" data-reveal>
          <div class="sima-stage" aria-label="司马懿官方形象切图动画">
            <div class="sima-grid" aria-hidden="true"></div>
            <div class="sima-moon" aria-hidden="true"></div>
            <div class="sima-ring ring-a" aria-hidden="true"></div>
            <div class="sima-ring ring-b" aria-hidden="true"></div>
            <div class="sima-rune rune-a">CITY</div>
            <div class="sima-rune rune-b">SILVER</div>
            <div class="sima-rune rune-c">89</div>
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
                <small>HONOR OF KINGS</small>
                <strong>银标</strong>
                <em>太原市</em>
              </span>
            </div>
            <span class="gaming-label">Official Rank Slot</span>
            <h3>司马懿 / Sima Yi</h3>
            <p>
              王者荣耀英雄池中的法刺代表位。个人最高记录为司马懿市级银标，
              最高排名太原市第 89 名。
            </p>
            <div class="rank-grid" aria-label="司马懿战绩信息">
              <div class="rank-tile">
                <span>Hero</span>
                <strong>司马懿</strong>
              </div>
              <div class="rank-tile">
                <span>Badge</span>
                <strong>市级银标</strong>
              </div>
              <div class="rank-tile rank-highlight">
                <span>Best Rank</span>
                <strong>太原市第 89</strong>
              </div>
              <div class="rank-tile">
                <span>Role</span>
                <strong>法刺 / Burst</strong>
              </div>
            </div>
          </div>
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
  ["#home", "Home"],
  ...navItems.map(([label, href]) => [href, label])
]);

function setActiveSection(sectionId) {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === sectionId);
  });

  if (progressLabel) {
    progressLabel.textContent = sectionLabels.get(sectionId) || "Home";
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

[["#home", "Home"], ...navItems.map(([label, href]) => [href, label])].forEach(([href]) => {
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
      ".project-card, .paper-card, .hackathon-card, .overview-card, .profile-lead, .profile-radar, .profile-signal, .milestone, .gaming-card, .rank-tile, .internship-task, .metric-card, .showcase-panel, .stack-card, .channel-card, .signal-panel, .contact-panel"
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
