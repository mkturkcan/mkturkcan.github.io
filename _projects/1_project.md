---
layout: project
title: DART
permalink: /projects/dart/
description: Real-time open-vocabulary object detection from frontier vision models.
img: assets/img/project_media/dart.webp
img_alt: "DART detections with masks on three New York street photos: taxis, cars, pedestrians, traffic lights, and street signs on Fifth Avenue, an FDNY fire truck, and pedestrians, a bus, and a taxi in Times Square at night"
img_width: 1600
img_height: 900
img_caption: DART on New York street photos from the TLoNY dataset, with all nine prompts decoded in one batch. Fine-grained prompts separate taxis and fire trucks from generic cars and trucks, by day and at night. Masks are shown for illustration; the real-time path predicts boxes only.
thumb: assets/img/project_thumbnails/dart.webp
importance: 1
category: featured
topic: frontier vision
github: https://github.com/mkturkcan/DART
huggingface: https://huggingface.co/mehmetkeremturkcan/DART
related_publications: turkcan2026dart
facts:
  - label: Role
    value: Creator and maintainer
  - label: Adoption
    value: 300+ GitHub stars and 43 forks as of July 2026
  - label: Paper
    value: arXiv preprint, 2026
links:
  - label: GitHub
    url: https://github.com/mkturkcan/DART
    icon: github
  - label: arXiv
    url: https://arxiv.org/abs/2603.11441
    icon: arxiv
  - label: Hugging Face
    url: https://huggingface.co/mehmetkeremturkcan/DART
    icon: huggingface
keywords:
  - Open-vocabulary detection
  - Real-time inference
  - Backbone sharing
  - Batched multi-class decoding
  - TensorRT FP16 optimization
  - Adapter distillation
  - Release engineering
---

DART turns a promptable frontier vision model into a real-time multi-class open-vocabulary detector. The project targets a practical deployment gap: Strong promptable segmentation models can describe almost anything, but repeated per-class inference is too slow for many real-world systems.

## How it works

SAM3 runs its ViT-H backbone once for every class it is asked to find. DART runs the backbone once per image, caches a text embedding for each prompt, and decodes all prompts together in a single batched pass through the encoder-decoder. Both stages are deployed as TensorRT FP16 engines. On video, the backbone encodes the next frame while the current one is decoded.

<figure class="project-figure">
  <img src="{{ '/assets/img/project_media/dart-architecture.webp' | relative_url }}" alt="DART architecture: the ViT-H backbone encodes the image once, cached text embeddings for each class prompt are decoded in one batched encoder-decoder pass, class-wise NMS merges the per-class outputs, and on video the two TensorRT engines run on separate CUDA streams" width="1600" height="900" loading="lazy" decoding="async">
  <figcaption>The DART pipeline. Feature maps, text embeddings, and per-class outputs are DART's own intermediates for the Fifth Avenue photo above. Timings are for one RTX 4080 at 1008 px.</figcaption>
</figure>

## Results

- **55.8 AP on COCO val2017** across all 80 classes, with no training: DART uses the SAM3 weights as released.
- **15.8 FPS with four classes at 1008 px** on a single RTX 4080, against 13.8 FPS when the two stages run back to back.
- **Distilled student backbones for tighter budgets.** ViT-H pruned to 16 blocks keeps 53.6 AP with a 26.6 ms backbone, and RepViT-M2.3 reaches 38.7 AP with an 8.2M-parameter backbone that runs in 13.9 ms.

The public release includes code, benchmarks, TensorRT deployment paths, distilled student backbones, and Hugging Face weights.
