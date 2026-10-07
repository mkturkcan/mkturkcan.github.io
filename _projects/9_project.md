---
layout: project
title: NYC Congestion Pricing Analysis
permalink: /projects/congestion-pricing/
description: Vision-based analysis of New York City congestion pricing using public traffic camera observations.
lede: A citywide computer vision study of how congestion pricing changed street-level traffic in New York City, measured from 910 public traffic cameras before and after tolling began in January 2025.
img: assets/img/project_media/congestionpricing-map.webp
img_alt: Interactive map of New York City showing the change in peak observed car count at each traffic camera
img_width: 1200
img_height: 750
img_caption: The interactive map. Each circle is a traffic camera. Green marks a year-over-year reduction in peak observed car count, red an increase, and circle size the magnitude of the change.
thumb: assets/img/project_thumbnails/congestionpricing.webp
importance: 9
category: urban ai
topic: civic analytics
github: https://github.com/mkturkcan/congestionpricing
huggingface: https://huggingface.co/datasets/mehmetkeremturkcan/nyc-congestionpricing-cv
related_publications: turkcan2026congestionpricing
facts:
  - label: Role
    value: Lead author
  - label: Paper
    value: arXiv preprint, 2026
  - label: Status
    value: Ongoing, with regular data updates
links:
  - label: Interactive map
    url: https://mkturkcan.github.io/congestionpricing/interactive/index.html
    icon: map
  - label: Real-time map
    url: https://mkturkcan.github.io/congestionpricing/interactive/stream.html
    icon: live
  - label: arXiv
    url: https://arxiv.org/abs/2602.03015
    icon: arxiv
  - label: Dataset
    url: https://huggingface.co/datasets/mehmetkeremturkcan/nyc-congestionpricing-cv
    icon: huggingface
  - label: Code
    url: https://github.com/mkturkcan/congestionpricing
    icon: github
  - label: Project page
    url: https://mkturkcan.github.io/congestionpricing/
    icon: website
artifacts: arXiv preprint, public Hugging Face dataset, open-source analysis code, an interactive before-and-after map, and a real-time camera map
keywords:
  - Congestion pricing
  - Traffic cameras
  - City-scale computer vision
  - Traffic density
  - Public policy analysis
  - Urban mobility datasets
acknowledgement: >-
  This project was initially supported by compute from the <a href="https://advancedwireless.org/" target="_blank" rel="noopener noreferrer">PAWR</a> <a href="https://www.cosmos-lab.org/" target="_blank" rel="noopener noreferrer">COSMOS testbed</a> at <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer">Columbia University</a>.
  This work began while I was a postdoc in the <a href="https://www.ee.columbia.edu/" target="_blank" rel="noopener noreferrer">Department of Electrical Engineering</a> (<a href="https://www.aidl.ee.columbia.edu/" target="_blank" rel="noopener noreferrer">AIDL Lab</a>) at Columbia University.
  Currently the project continues using resources of the <a href="https://cs3-erc.org/" target="_blank" rel="noopener noreferrer">NSF ENG Center for Smart Streetscapes (CS3)</a>.
---

In January 2025, New York City began charging vehicles to enter Manhattan's Congestion Relief Zone (CRZ), the first program of its kind in the United States. This project measures the policy's effect directly from the street. A computer vision pipeline counts vehicles in footage from the city's public traffic cameras, and traffic in the same November 14 to January 4 window is compared before and after the policy, with anomalous periods such as holidays excluded from the baselines.

## Method

<figure class="project-figure">
  <img src="{{ '/assets/img/project_media/congestionpricing-pipeline.webp' | relative_url }}" alt="Four-stage method: the camera network, vehicle detection in each frame, hour-of-week traffic profiles, and a before-and-after scatter of peak observed cars per camera" width="1600" height="720" loading="lazy" decoding="async">
  <figcaption>From cameras to a before-and-after comparison. The map and scatter plot show the 670 cameras in the comparison; the detection frame and weekly profile are schematic.</figcaption>
</figure>

Each camera contributes instantaneous vehicle counts from object detection. The counts are aggregated into hourly averages across a typical week, so rush-hour peaks, weekday and weekend patterns, and the before-and-after difference can be compared at every camera and mapped across the city.

## Results

- **Traffic fell inside the zone.** Peak observed car count per frame dropped 15.8% at cameras within the CRZ.
- **Traffic also fell outside the zone.** Cameras outside the CRZ recorded a smaller 10.9% drop in peak observed car count per frame.
- **Changes are resolved camera by camera.** The <a href="https://mkturkcan.github.io/congestionpricing/interactive/index.html" target="_blank" rel="noopener noreferrer">interactive map</a> reports each camera's change as a percentage or an absolute count, for the whole week, weekdays only, or weekends only.

<figure class="project-figure">
  <img src="{{ '/assets/img/project_media/congestionpricing-results.webp' | relative_url }}" alt="Strip plot of the per-camera change in peak observed cars, inside and outside the Congestion Relief Zone, and the median change for all week, weekdays, and weekends" width="1600" height="700" loading="lazy" decoding="async">
  <figcaption>Left: change in peak observed cars per frame at each camera, with medians and interquartile ranges. Right: median change inside and outside the zone by day type.</figcaption>
</figure>

## Live view

The analysis is ongoing, with regular updates to track how traffic evolves under the policy over the long term. A companion real-time map shows the camera network as the pipeline processes it.

<figure class="project-figure">
  <a href="https://mkturkcan.github.io/congestionpricing/interactive/stream.html" target="_blank" rel="noopener noreferrer">
    <img src="{{ '/assets/img/project_media/congestionpricing-live.webp' | relative_url }}" alt="Real-time map of New York City showing the current vehicle count at each traffic camera" width="1200" height="750" loading="lazy" decoding="async">
  </a>
  <figcaption>The real-time map shows current vehicle counts at each camera, with separate views for cars, bikes, buses, and trucks.</figcaption>
</figure>

## Limitations

Camera-based vehicle counts are a proxy for traffic, not a direct measure of travel times or congestion. The current pipeline includes stationary vehicles, which can raise measured density on streets with heavy parking, and it measures aggregate flow without separating individual lanes or travel directions.
