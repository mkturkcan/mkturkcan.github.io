---
layout: page
title: Boundless
permalink: /projects/boundless/
description: Unreal Engine 5 synthetic data system for photorealistic urban object detection.
img: assets/img/project_media/boundless.webp
thumb: assets/img/project_thumbnails/boundless.webp
importance: 7
category: urban ai
topic: synthetic data
github: https://github.com/mkturkcan/constellation-benchmarks
huggingface: https://huggingface.co/datasets/mehmetkeremturkcan/boundless-i2x
related_publications: turkcan2024boundlessgeneratingphotorealisticsynthetic
---

Boundless is a photorealistic synthetic data pipeline for training object detectors in dense urban streetscapes. It extends the Unreal Engine 5 City Sample into a configurable research system that exports accurately projected 3D annotations across lighting, weather, camera, and scene variations.

<img class="img-fluid rounded z-depth-1 mb-3" src="{{ '/assets/img/project_media/boundless.webp' | relative_url }}" alt="Photorealistic Boundless street scenes generated in Unreal Engine 5" width="984" height="876" decoding="async">

The system connects interactive world building in Unreal Engine with reproducible data pipeline design for applied computer vision. In cross-domain evaluation, a detector trained on Boundless improved mean average precision by 7.8 points over one trained on CARLA data.

- **Role:** Lead author and system creator
- **Artifacts:** Synthetic datasets for infrastructure and aerial viewpoints, benchmark code, and a reproducible generation methodology
- **Keywords:** Unreal Engine 5, synthetic data, object detection, domain transfer, procedural environments, 3D annotation, urban perception

Links: <a href="https://github.com/mkturkcan/constellation-benchmarks" target="_blank" rel="noopener noreferrer">GitHub benchmark code</a>, <a href="https://huggingface.co/datasets/mehmetkeremturkcan/boundless-i2x" target="_blank" rel="noopener noreferrer">Hugging Face infrastructure dataset</a>, <a href="https://huggingface.co/datasets/mehmetkeremturkcan/boundless-drone" target="_blank" rel="noopener noreferrer">Hugging Face aerial dataset</a>, <a href="https://arxiv.org/abs/2409.03022" target="_blank" rel="noopener noreferrer">arXiv</a>.
