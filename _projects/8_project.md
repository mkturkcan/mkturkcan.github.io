---
layout: project
title: bikeped
permalink: /projects/bikeped/
description: Real-time bicycle and pedestrian safety system and evaluation testbed for urban intersections.
img: assets/img/project_media/bikeped.webp
img_alt: bikeped fisheye detection output with bird's-eye-view radar
img_width: 1200
img_height: 675
thumb: assets/img/project_thumbnails/bikeped.webp
importance: 3
category: urban ai
topic: urban safety
github: https://github.com/mkturkcan/bikeped
huggingface: https://huggingface.co/datasets/mehmetkeremturkcan/bikeped
related_publications: turkcan2026bikeped
facts:
  - label: Role
    value: Creator and maintainer
  - label: Paper
    value: arXiv preprint, 2026
links:
  - label: GitHub
    url: https://github.com/mkturkcan/bikeped
    icon: github
  - label: arXiv
    url: https://arxiv.org/abs/2604.17046
    icon: arxiv
  - label: Documentation
    url: https://mkturkcan.github.io/bikeped/
    icon: docs
  - label: Simulator
    url: https://mkturkcan.github.io/bikeped/simulator/
    icon: demo
  - label: Dataset
    url: https://huggingface.co/datasets/mehmetkeremturkcan/bikeped
    icon: huggingface
artifacts: GitHub implementation, documentation, simulator, conformance scenarios, and Hugging Face dataset
keywords:
  - Bicycle and pedestrian safety
  - Fisheye perception
  - Edge AI
  - Real-time alerts
  - Ground-plane projection
  - CARLA scenarios
  - Conformance testing
---

bikeped is a real-time pedestrian and cyclist safety system built around wide-angle perception, edge inference, and reproducible scenario testing for urban intersections.

The system combines fisheye calibration, fisheye-aware object detection, ground-plane projection, a decision layer for alerts, and a conformance testbed with paired schematic and simulator videos. The public materials include code, replication scripts, documentation, a simulator, and a companion dataset.
