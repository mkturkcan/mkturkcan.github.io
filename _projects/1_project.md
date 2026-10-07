---
layout: project
title: DART
permalink: /projects/dart/
description: Real-time open-vocabulary object detection from frontier vision models.
img: assets/img/project_media/dart.webp
img_alt: Diagram comparing SAM3 per-class inference with DART's shared backbone and batched decoding, beside DART detections on COCO images
img_width: 1600
img_height: 900
img_caption: "SAM3 repeats its ViT-H backbone for every class. DART runs it once, decodes all prompts in one batch, and deploys both stages as TensorRT FP16 engines. Right: DART detections on COCO val2017."
thumb: assets/img/project_thumbnails/dart.webp
importance: 1
category: featured
topic: frontier vision
github: https://github.com/mkturkcan/DART
huggingface: https://huggingface.co/mehmetkeremturkcan/DART
related_publications: turkcan2026dart
facts:
  - label: Role
    value: Creator and maintainer
  - label: Adoption
    value: 300+ GitHub stars and 43 forks as of July 2026
  - label: Paper
    value: arXiv preprint, 2026
links:
  - label: GitHub
    url: https://github.com/mkturkcan/DART
    icon: github
  - label: arXiv
    url: https://arxiv.org/abs/2603.11441
    icon: arxiv
  - label: Hugging Face
    url: https://huggingface.co/mehmetkeremturkcan/DART
    icon: huggingface
keywords:
  - Open-vocabulary detection
  - Real-time inference
  - Backbone sharing
  - Batched multi-class decoding
  - TensorRT FP16 optimization
  - Adapter distillation
  - Release engineering
---

DART turns a promptable frontier vision model into a real-time multi-class open-vocabulary detector. The project targets a practical deployment gap: Strong promptable segmentation models can describe almost anything, but repeated per-class inference is too slow for many real-world systems.

The public release includes code, benchmarks, TensorRT deployment paths, distilled student backbones, and Hugging Face weights.
