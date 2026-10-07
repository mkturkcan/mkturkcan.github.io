---
layout: project
title: Loom
permalink: /projects/loom/
description: Analytical neural computer architecture for executing compiled programs inside looped transformers.
img: assets/img/project_media/loom.webp
img_alt: "Loom architecture: a C program compiled to a 21-opcode instruction set, held in a single state tensor and executed by eight analytically derived transformer layers"
img_width: 1600
img_height: 900
img_caption: C programs compile to a 21-opcode instruction set. The machine state is one fixed-size tensor, and every forward pass through eight analytically derived layers executes one instruction.
thumb: assets/img/project_thumbnails/loom.webp
importance: 10
category: language systems
topic: neural systems
github: https://github.com/mkturkcan/Loom
huggingface: https://huggingface.co/mehmetkeremturkcan/Loom
related_publications: turkcan2026loom
facts:
  - label: Role
    value: Creator and maintainer
  - label: Paper
    value: arXiv preprint, 2026
  - label: Testing
    value: 140+ regression tests
links:
  - label: GitHub
    url: https://github.com/mkturkcan/Loom
    icon: github
  - label: arXiv
    url: https://arxiv.org/abs/2604.08816
    icon: arxiv
  - label: Browser demos
    url: https://mkturkcan.github.io/Loom/demos/
    icon: demo
  - label: Hugging Face
    url: https://huggingface.co/mehmetkeremturkcan/Loom
    icon: huggingface
artifacts: GitHub implementation, browser demos, Hugging Face ONNX models, FPGA verification artifacts, and 140+ tests
keywords:
  - Analytical weights
  - Looped transformers
  - Neural computers
  - C compilation
  - ONNX Runtime WebGPU
  - FPGA verification
  - Client-side demos
---

Loom explores a training-free neural computer built as a looped transformer with analytically derived weights that can execute compiled programs inside a fixed architecture.

The public release connects systems research to usable artifacts. It includes a C-to-ISA compilation path, ONNX exports, Hugging Face model assets, WebGPU browser demos, FPGA verification, and a large regression test suite for validating programs under the same fixed-weight computational model.
