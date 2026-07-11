---
layout: page
title: DART
permalink: /projects/dart/
description: Real-time open-vocabulary object detection from frontier vision models.
img: assets/img/project_media/dart.webp
thumb: assets/img/project_thumbnails/dart.webp
importance: 1
category: featured
topic: frontier vision
github: https://github.com/mkturkcan/DART
huggingface: https://huggingface.co/mehmetkeremturkcan/DART
related_publications: turkcan2026dart
---

DART turns a promptable frontier vision model into a real-time multi-class open-vocabulary detector. The project targets a practical deployment gap: Strong promptable segmentation models can describe almost anything, but repeated per-class inference is too slow for many real-world systems.

<img class="img-fluid rounded z-depth-1 mb-3" src="{{ '/assets/img/project_media/dart.webp' | relative_url }}" alt="DART qualitative detections in a crowded street scene" width="640" height="453" decoding="async">

The public release includes code, benchmarks, TensorRT deployment paths, distilled student backbones, and Hugging Face weights.

- **Role:** Creator and maintainer
- **Adoption:** 300+ GitHub stars and 43 forks as of July 2026
- **Keywords:** Open-vocabulary detection, real-time inference, backbone sharing, batched multi-class decoding, TensorRT FP16 optimization, adapter distillation, release engineering

Links: <a href="https://github.com/mkturkcan/DART" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://arxiv.org/abs/2603.11441" target="_blank" rel="noopener noreferrer">arXiv</a>, <a href="https://huggingface.co/mehmetkeremturkcan/DART" target="_blank" rel="noopener noreferrer">Hugging Face</a>.
