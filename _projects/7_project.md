---
layout: project
title: Loom
permalink: /projects/loom/
description: Analytical neural computer architecture for executing compiled programs inside looped transformers.
img: assets/img/project_media/loom.svg
img_alt: "A bubble sort in C compiled to 49 Loom instructions; the real 155 by 1024 state tensor with the program counter and the current instruction highlighted; the eight fixed-weight layers that execute one instruction per forward pass; the instruction executed at each of the 486 forward passes; and the three model sizes"
img_width: 1600
img_height: 900
img_caption: A real run of the bubble sort demo on the 155 × 1024 model. The C program compiles to 49 instructions from the 21-opcode ISA, held in the state tensor, shown here after 16 forward passes with the program counter at SUB 37, 36. Each pass through the eight fixed-weight layers executes one instruction, and the sort finishes after 486 passes.
thumb: assets/img/project_thumbnails/loom.webp
og_image: assets/img/og/loom.jpg
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
