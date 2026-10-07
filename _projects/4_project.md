---
layout: project
title: PAVE and Urban Safety Edge Analytics
permalink: /projects/pave-urban-safety/
description: Real-time video analytics for pedestrian safety over edge and end devices.
img: assets/img/project_media/pave.webp
img_alt: "PAVE architecture: intersection cameras stream video to an edge server that predicts vehicle paths and danger zones, which reach pedestrians' phones through an MQTT broker"
img_width: 1600
img_height: 900
img_caption: PAVE processes live intersection video on an edge server and publishes danger zones over MQTT. Phones compare their own position against the zones locally, so no personal data leaves the device.
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
