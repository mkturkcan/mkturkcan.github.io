---
layout: page
title: Constellation
permalink: /projects/constellation/
description: High-altitude urban object-detection dataset, benchmarks, and deployment evaluation.
img: assets/img/project_media/constellation.webp
thumb: assets/img/project_thumbnails/constellation.webp
importance: 8
category: urban ai
topic: visual datasets
github: https://github.com/mkturkcan/constellation-benchmarks
huggingface: https://huggingface.co/datasets/mehmetkeremturkcan/constellation_urban_intersection_dataset
related_publications: turkcan2024constellationdatasetbenchmarkinghighaltitude
---

Constellation is a 13,000-image benchmark for detecting pedestrians and vehicles in dense urban streetscapes viewed from high-elevation infrastructure cameras.

<img class="img-fluid rounded z-depth-1 mb-3" src="{{ '/assets/img/project_media/constellation.webp' | relative_url }}" alt="High-altitude Constellation view of an urban intersection" width="832" height="468" decoding="async">

The dataset captures lighting, weather, shadow, seasonal, and scene changes that are easy to miss in conventional driving datasets. The accompanying evaluations study small-object accuracy, domain-specific pretraining and augmentation, pseudo-labeling, model drift, and inference latency across deployment hardware.

- **Role:** Lead author and dataset lead
- **Artifacts:** Public dataset, model benchmarks, cross-dataset evaluation, and hardware latency tools
- **Keywords:** High-altitude vision, small-object detection, urban datasets, model drift, domain transfer, edge benchmarking

Links: <a href="https://github.com/mkturkcan/constellation-benchmarks" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://huggingface.co/datasets/mehmetkeremturkcan/constellation_urban_intersection_dataset" target="_blank" rel="noopener noreferrer">Hugging Face dataset</a>, <a href="https://arxiv.org/abs/2404.16944" target="_blank" rel="noopener noreferrer">arXiv</a>, <a href="https://mkturkcan.github.io/constellation-web/" target="_blank" rel="noopener noreferrer">project page</a>.
