---
layout: project
title: GPTune
permalink: /projects/gptune/
description: Early GPT-2 fine-tuning tooling with practical presets for custom text generation.
img: assets/img/project_media/gptune.webp
img_alt: GPTune workflow from a plain-text corpus through GPT-2 fine-tuning and sampling to pretrained models, with example commands
img_width: 1600
img_height: 900
img_caption: "The GPTune workflow: point it at a text corpus, fine-tune GPT-2 on a single GPU, and sample from the result."
thumb: assets/img/project_thumbnails/gptune.webp
og_image: assets/img/og/gptune.jpg
importance: 11
category: language systems
topic: language models
github: https://github.com/mkturkcan/GPTune
facts:
  - label: Role
    value: Creator and maintainer
  - label: Model
    value: GPT-2, up to 774M parameters
links:
  - label: GitHub
    url: https://github.com/mkturkcan/GPTune
    icon: github
artifacts: GitHub implementation, training script, sampling modes, and fine-tuning presets
keywords:
  - GPT-2 fine-tuning
  - Language model adaptation
  - Custom text generation
  - Command-line tooling
  - Single-GPU training
  - Early LLM systems
---

GPTune is an early GPT-2 fine-tuning repository built soon after OpenAI's GPT-2 release. It packaged a practical command-line workflow for training and sampling custom text generators before today's LLM tooling had become standardized.

The project demonstrates hands-on experience with large language model adaptation under the constraints of the time, including single-GPU training, dataset preparation, sampling modes, optimizer choices, and reproducible scripts for fine-tuning the 774M-parameter GPT-2 model.
