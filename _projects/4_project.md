---
layout: project
title: PAVE and Urban Safety Edge Analytics
permalink: /projects/pave-urban-safety/
description: Real-time video analytics for pedestrian safety over edge and end devices.
img: assets/img/project_media/pave.webp
img_alt: "A street camera view of Amsterdam Avenue and West 120th Street with tracked vehicles and pedestrians, a turning minivan's predicted danger zone reaching a pedestrian on the crosswalk, the same moment on a bird's-eye map, and per-frame latency of the edge pipeline"
img_width: 1600
img_height: 900
img_caption: "A moment from the COSMOS testbed camera at Amsterdam Avenue and West 120th Street, with danger zones recomputed for this figure: each moving vehicle's footprint swept along its predicted path for the next 2 seconds, and a pedestrian inside one. Phones compare their own position against the zones locally, so no personal data leaves the device. Bottom: per-frame latency of the edge pipeline on an NVIDIA A100, from Table 3 of the paper."
thumb: assets/img/project_thumbnails/pave.webp
importance: 4
category: urban ai
topic: edge ai
related_publications: ghasemi2025realtime
facts:
  - label: Role
    value: Co-author and applied AI contributor
  - label: Recognition
    value: Best Paper Award, ACM/IEEE Symposium on Edge Computing 2025
links:
  - label: Paper
    url: https://dl.acm.org/doi/10.1145/3769102.3770618
    icon: paper
  - label: Best Paper note
    url: https://wimnet.ee.columbia.edu/ghasemi-best-paper-award/
    icon: award
  - label: CS3 Situational Awareness
    url: https://cs3-erc.org/research/situational-awareness/
    icon: website
keywords:
  - Edge video analytics
  - Trajectory prediction
  - Privacy-preserving warning systems
  - Real-time deployment
  - Pedestrian safety
  - City-scale sensing
---

PAVE-style urban safety analytics combine street camera perception, edge computing, and end device alerts to support real-time pedestrian safety while preserving privacy.

The SEC 2025 paper received a Best Paper Award and demonstrates a scalable architecture for processing live video feeds, detecting pedestrians and vehicles, predicting vehicle trajectories, and sending anonymized danger-zone information to end-user devices.
