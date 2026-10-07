---
layout: project
title: Traffic Volume Estimation
permalink: /projects/traffic-volume-estimation/
description: Traffic volume estimation framework combining floating car data, traffic cameras, and network flow analysis.
img: assets/img/project_media/trafficvolume.svg
img_alt: Maps of the Manhattan study network with every road segment colored by estimated traffic volume at 8 AM, 3 PM, 6 PM, and 10 PM, beside the probe-vehicle counts used as input
img_width: 1600
img_height: 900
img_caption: Calibrated traffic volume on every road segment of the Manhattan study network through the day, beside the 8 AM probe-vehicle counts that feed the model. Re-rendered from the estimates in Fig. 9 of the paper.
thumb: assets/img/project_thumbnails/trafficvolume.webp
og_image: assets/img/og/traffic-volume-estimation.jpg
importance: 6
category: urban ai
topic: urban analytics
related_publications: kosikova2026trafficvolume
facts:
  - label: Role
    value: Co-author
  - label: Published
    value: Discover Civil Engineering, 2026 (accepted)
links:
  - label: arXiv
    url: https://arxiv.org/abs/2605.09891
    icon: arxiv
keywords:
  - Floating car data
  - Traffic cameras
  - Graph neural networks
  - Network flow
  - Data assimilation
  - Manhattan traffic
  - Urban sensing
---

This project estimates network-wide traffic volumes by combining floating car data, municipal traffic camera observations, and traffic flow modeling.

The paper, accepted for publication in Discover Civil Engineering, frames the problem as a hybrid urban sensing system: Cellular transmission model features, graph neural networks, topology-informed propagation, and ensemble square-root filtering are combined to estimate and forecast traffic volumes across a Manhattan road network.
