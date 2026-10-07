---
layout: project
title: Boundless
permalink: /projects/boundless/
description: Unreal Engine 5 synthetic data system for photorealistic urban object detection.
lede: A photorealistic synthetic data pipeline built on Unreal Engine 5 that replaces manual data collection and annotation for object detection in dense urban streetscapes.
img: assets/img/project_media/boundless.webp
img_alt: Boundless street scenes in fog, snow, rain, and at night, with 3D bounding boxes on vehicles and pedestrians
img_width: 1600
img_height: 900
img_caption: Boundless scenes under fog, snow, rain, and night conditions, with automatically exported 3D bounding boxes.
thumb: assets/img/project_thumbnails/boundless.webp
og_image: assets/img/og/boundless.jpg
importance: 7
category: urban ai
topic: synthetic data
github: https://github.com/mkturkcan/constellation-benchmarks
huggingface: https://huggingface.co/datasets/mehmetkeremturkcan/boundless-i2x
related_publications: turkcan2024boundlessgeneratingphotorealisticsynthetic
facts:
  - label: Role
    value: Lead author and system creator
  - label: Paper
    value: arXiv preprint, 2024
  - label: Engine
    value: Unreal Engine 5, built on the City Sample
links:
  - label: arXiv
    url: https://arxiv.org/abs/2409.03022
    icon: arxiv
  - label: Infrastructure dataset
    url: https://huggingface.co/datasets/mehmetkeremturkcan/boundless-i2x
    icon: huggingface
  - label: Aerial dataset
    url: https://huggingface.co/datasets/mehmetkeremturkcan/boundless-drone
    icon: huggingface
  - label: Benchmark code
    url: https://github.com/mkturkcan/constellation-benchmarks
    icon: github
artifacts: Synthetic datasets for infrastructure and aerial viewpoints, benchmark code, and a reproducible generation methodology
keywords:
  - Unreal Engine 5
  - Synthetic data
  - Object detection
  - Domain transfer
  - Procedural environments
  - 3D annotation
  - Urban perception
acknowledgement: >-
  This work began while I was a postdoc in the <a href="https://www.ee.columbia.edu/" target="_blank" rel="noopener noreferrer">Department of Electrical Engineering</a> (<a href="https://www.aidl.ee.columbia.edu/" target="_blank" rel="noopener noreferrer">AIDL Lab</a>) at Columbia University.
---

Boundless is a photorealistic synthetic data pipeline for training object detectors in dense urban streetscapes. It extends the Unreal Engine 5 City Sample into a configurable research system that exports accurately projected 3D annotations across lighting, weather, camera, and scene variations, replacing large-scale real-world data collection and manual labeling with an automated process.

The system connects interactive world building in Unreal Engine with reproducible data pipeline design for applied computer vision. Detectors trained on Boundless data were evaluated on real-world footage from medium-altitude intersection cameras. In this cross-domain setting, a detector trained on Boundless improved mean average precision by 7.8 points over one trained on CARLA data, supporting synthetic data generation as a credible way to train and fine-tune scalable detectors for urban scenes.

The public release includes datasets for two viewpoints, infrastructure cameras mounted above intersections and aerial drones, along with the benchmark code used for evaluation.
