---
layout: page
title: Loom
permalink: /projects/loom/
description: Analytical neural computer architecture for executing compiled programs inside looped transformers.
img: assets/img/project_media/loom.webp
thumb: assets/img/project_thumbnails/loom.webp
importance: 10
category: language systems
topic: neural systems
github: https://github.com/mkturkcan/Loom
huggingface: https://huggingface.co/mehmetkeremturkcan/Loom
related_publications: turkcan2026loom
---

Loom explores a training-free neural computer built as a looped transformer with analytically derived weights that can execute compiled programs inside a fixed architecture.

<img class="img-fluid rounded z-depth-1 mb-3" src="{{ '/assets/img/project_media/loom.webp' | relative_url }}" alt="Loom browser demos and compiled-program examples" width="1200" height="675" decoding="async">

The public release connects systems research to usable artifacts. It includes a C-to-ISA compilation path, ONNX exports, Hugging Face model assets, WebGPU browser demos, FPGA verification, and a large regression test suite for validating programs under the same fixed-weight computational model.

- **Role:** Creator and maintainer
- **Artifacts:** GitHub implementation, browser demos, Hugging Face ONNX models, FPGA verification artifacts, and 140+ tests
- **Keywords:** Analytical weights, looped transformers, neural computers, C compilation, ONNX Runtime WebGPU, FPGA verification, client-side demos

Links: <a href="https://github.com/mkturkcan/Loom" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://arxiv.org/abs/2604.08816" target="_blank" rel="noopener noreferrer">arXiv</a>, <a href="https://mkturkcan.github.io/Loom/demos/" target="_blank" rel="noopener noreferrer">demos</a>, <a href="https://huggingface.co/mehmetkeremturkcan/Loom" target="_blank" rel="noopener noreferrer">Hugging Face</a>.
