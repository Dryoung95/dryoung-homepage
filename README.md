# Dryoung Chan Homepage

Personal homepage for Chen Jiayan / Dryoung Chan, a Vibe Coding creator and AI Builder focused on AI infra, VLM/document intelligence, edge deployment, open-source practice, and interactive digital work.

Live site: https://dryoung.top

## Overview

This site is built as a Chinese-first personal homepage with bilingual UI support. It collects selected signals from projects, open-source contributions, internship work, papers, personal milestones, and creator channels.

Core sections include:

- AI infra and edge deployment direction
- Micius-Agent open-source project showcase
- PaddlePaddle / OpenVINO / MindSpore-related practice
- Research and paper cards
- Personal milestones and visual moments
- Contact and public profile links

## Tech Stack

- Vite
- Vanilla JavaScript
- CSS animations and responsive layout
- Three.js
- GSAP
- Lenis
- Lucide icons
- Playwright visual checks
- Cloudflare Pages deployment

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Run visual checks:

```bash
npm run check:visual
```

## Deployment

The production site is deployed on Cloudflare Pages.

Recommended Cloudflare Pages settings:

- Framework preset: none / Vite-compatible static build
- Build command: `npm run build`
- Output directory: `dist`
- Production domain: `dryoung.top`

## License

The source code is released under the MIT License. Personal identity materials, paper previews, photos, signatures, and third-party brand/game assets are not covered by the MIT License. See [ASSET_LICENSE.md](./ASSET_LICENSE.md).

---

# 陈嘉衍个人主页

这是陈嘉衍 / Dryoung Chan 的个人主页源码。页面以中文为主体，支持中英文切换，用来展示 AI Infra、VLM 文档智能、端侧部署、开源实习、论文、项目和个人经历。

线上地址：https://dryoung.top

## 本地运行

```bash
npm install
npm run dev
```

## 构建与检查

```bash
npm run build
npm run check:visual
```

## 授权说明

代码部分采用 MIT License。仓库中的个人照片、签名、论文预览、公众号头像、第三方品牌或游戏素材不包含在代码开源授权中，不建议直接复用。
