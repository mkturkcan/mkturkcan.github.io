---
layout: project
title: Constellation
permalink: /projects/constellation/
description: High-altitude urban object detection dataset, benchmarks, and deployment evaluation.
lede: A 13,000-image benchmark for detecting pedestrians and vehicles from a camera mounted high above a Manhattan intersection, with detector, domain transfer, drift, and edge deployment evaluations.
img: assets/img/project_media/constellation.webp
img_alt: High-altitude Constellation view of an urban intersection
img_width: 832
img_height: 468
img_caption: A frame from the Constellation camera. At this height, pedestrians cover only a few pixels, and faces and license plates cannot be resolved.
thumb: assets/img/project_thumbnails/constellation.webp
importance: 8
category: urban ai
topic: visual datasets
github: https://github.com/mkturkcan/constellation-benchmarks
huggingface: https://huggingface.co/datasets/mehmetkeremturkcan/constellation_urban_intersection_dataset
related_publications: turkcan2024constellationdatasetbenchmarkinghighaltitude
facts:
  - label: Role
    value: Lead author and dataset lead
  - label: Published
    value: International Journal of Computer Vision, 2026
  - label: Access
    value: Open-access paper, public dataset, and pretrained models
links:
  - label: Paper
    url: https://doi.org/10.1007/s11263-026-03029-1
    icon: paper
  - label: arXiv
    url: https://arxiv.org/abs/2404.16944
    icon: arxiv
  - label: Dataset
    url: https://huggingface.co/datasets/mehmetkeremturkcan/constellation_urban_intersection_dataset
    icon: huggingface
  - label: Code
    url: https://github.com/zk2172-columbia/constellation-dataset
    icon: github
  - label: Benchmarks
    url: https://github.com/mkturkcan/constellation-benchmarks
    icon: github
  - label: Project page
    url: https://mkturkcan.github.io/constellation-web/
    icon: website
artifacts: Open-access journal paper, public dataset in YOLO format, training and evaluation code, seven pretrained models, cross-dataset evaluations, and hardware latency benchmarks
keywords:
  - High-altitude vision
  - Small object detection
  - Urban datasets
  - Model drift
  - Domain transfer
  - Open-vocabulary detection
  - Edge benchmarking
  - Privacy-preserving sensing
acknowledgement: >-
  This data was collected at the <a href="https://advancedwireless.org/" target="_blank" rel="noopener noreferrer">PAWR</a> <a href="https://www.cosmos-lab.org/" target="_blank" rel="noopener noreferrer">COSMOS testbed</a> at <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer">Columbia University</a>.
  This work began while I was a postdoc in the <a href="https://www.ee.columbia.edu/" target="_blank" rel="noopener noreferrer">Department of Electrical Engineering</a> (<a href="https://www.aidl.ee.columbia.edu/" target="_blank" rel="noopener noreferrer">AIDL Lab</a>) at Columbia University.
---

Constellation was recorded by a single camera mounted high above a busy intersection in Manhattan. Its 13,314 annotated frames span 28 time intervals between 2019 and 2023, covering dawn, daylight, rain, fog, and night, as well as physical changes to the street itself: faded markings, an unpaved surface, and repaving. The training and test sets are separated in time, so no interval appears in both.

The camera is deliberately placed high enough that faces and license plates cannot be resolved. The same privacy-preserving vantage point makes pedestrians very small, which puts the benchmark squarely in the small-object regime where contemporary detectors are weakest.

<figure class="project-figure">
  <img src="{{ '/assets/img/project_media/constellation-conditions.webp' | relative_url }}" alt="Eight views of the same intersection: dawn, daytime, rain, night, old pavement from 2019, faded pavement, unpaved, and repaved" width="1295" height="680" loading="lazy" decoding="async">
  <figcaption>The same camera under different conditions. Top row: weather and time of day. Bottom row: changes to the street surface between 2019 and 2023.</figcaption>
</figure>

## Findings

- **Small pedestrians are the bottleneck.** Vehicle AP is close to saturation for most architectures, while pedestrian AP varies by more than 25 points between them.
- **Off-the-shelf models transfer poorly.** The strongest zero-shot open-vocabulary detector, SAM3, reaches 64.6 pedestrian AP. A YOLOv8x trained on VisDrone reaches 27.3, compared with 87.4 when trained on Constellation.
- **Domain-aware training closes the gap.** Scene-specific augmentations such as synthetic shadows, combined with VisDrone pretraining, raise YOLOv8x to 92.0 pedestrian AP and 95.4 mAP@0.5.
- **Intersections drift over time.** A model trained only on 2020 data loses 7.1 mAP@0.5 on 2023 footage, and heavy snow (73.7) and heavy rain (82.7) remain the hardest conditions.

| Model | Training | Pedestrian | Vehicle | Mean |
|:--|:--|--:|--:|--:|
| SAM3 | Zero-shot | 64.6 | 97.8 | 81.2 |
| YOLOv8x | VisDrone only | 27.3 | 88.6 | 57.9 |
| YOLOv8x | Constellation | 87.4 | 98.6 | 93.0 |
| YOLOv8x | + domain-specific augmentations | 90.7 | 98.6 | 94.7 |
| YOLOv8x | + VisDrone pretraining | 92.0 | 98.8 | 95.4 |

<p class="table-caption">AP@0.5 on the Constellation test set, as reported in the IJCV paper.</p>

## Edge deployment

The camera is meant to process video on site, so the paper also measures latency on embedded and mobile hardware. On a Jetson Orin Nano with TensorRT, a VisDrone-pretrained YOLOv8n reaches 94.5 mAP@0.5 at 27.5 ms per frame, within a point of the best server model.

| Platform | Runtime | YOLOv8n | YOLOv8x |
|:--|:--|--:|--:|
| NVIDIA A100 | TensorRT | 3.4 ms | 7.1 ms |
| Jetson Orin Nano | TensorRT | 27.5 ms | 111.6 ms |
| Rubik Pi 3 | LiteRT | 55.1 ms | 819.0 ms |
| Raspberry Pi 5 | NCNN | 353.2 ms | 2,325.7 ms |
| iPhone 13 Pro Max | WebAssembly | 372.6 ms | 10,233.1 ms |

<p class="table-caption">Mean inference latency per frame over 100 Constellation images.</p>

## Release

The dataset is available in YOLO format on <a href="https://huggingface.co/datasets/mehmetkeremturkcan/constellation_urban_intersection_dataset" target="_blank" rel="noopener noreferrer">Hugging Face</a> under CC BY-NC-SA 3.0, together with the training and evaluation scripts and a <a href="https://github.com/zk2172-columbia/constellation-dataset#model-zoo" target="_blank" rel="noopener noreferrer">model zoo</a> of seven pretrained detectors, including the 95.4 mAP YOLOv8x and the edge-ready YOLOv8n. The <a href="https://github.com/mkturkcan/constellation-benchmarks" target="_blank" rel="noopener noreferrer">benchmark toolkit</a> reproduces the latency measurements across GPU, embedded, and mobile runtimes.
