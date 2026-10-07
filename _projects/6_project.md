---
layout: project
title: FlyBrainLab
permalink: /projects/flybrainlab/
description: Open-source graph database, retrieval, simulation, and visualization platform for connectome-scale neuroscience.
img: assets/img/project_media/flybrainlab.svg
img_alt: "The NeuroMynerva workspace in JupyterLab with NeuroNLP, NeuroGFX, and notebook windows; the FlyBrainLab Client linked through the FFBO Processor to the NeuroArch, NeuroNLP, and Neurokernel servers; and four fly brain circuits built with English queries, each beside its connectivity matrix"
img_width: 1600
img_height: 900
img_caption: "FlyBrainLab's NeuroMynerva workspace reaches the FFBO servers through the FlyBrainLab Client and the FFBO Processor, a Crossbar.io router. Bottom: four circuits built with English queries, with their connectivity matrices, from Figure 3 of the eLife paper."
thumb: assets/img/project_thumbnails/flybrainlab.webp
og_image: assets/img/og/flybrainlab.jpg
importance: 12
category: open platforms
topic: research platform
github: https://github.com/FlyBrainLab/FlyBrainLab
related_publications: lazar2021accelerating, lazar2022programmable
facts:
  - label: Role
    value: Lead author
  - label: Published
    value: eLife, 2021; Frontiers in Neuroinformatics, 2022
links:
  - label: GitHub
    url: https://github.com/FlyBrainLab/FlyBrainLab
    icon: github
  - label: Platform
    url: https://flybrainlab.fruitflybrain.org/
    icon: website
  - label: eLife paper
    url: https://doi.org/10.7554/eLife.62362
    icon: paper
  - label: Programmable ontology paper
    url: https://doi.org/10.3389/fninf.2022.853098
    icon: paper
keywords:
  - TypeScript/JupyterLab front-end development
  - OrientDB graph databases
  - NeuroArch APIs
  - Large-scale graph querying
  - Ontology-backed retrieval
  - Dense passage retrieval
  - Domain-specific QA
  - GPU simulation
  - 3D visualization
---

FlyBrainLab is an open-source platform for exploring, querying, visualizing, and simulating fruit fly brain circuits at connectome and synaptome scale.

The <a href="https://elifesciences.org/articles/62362" target="_blank" rel="noopener noreferrer">eLife</a> and <a href="https://www.frontiersin.org/journals/neuroinformatics/articles/10.3389/fninf.2022.853098/full" target="_blank" rel="noopener noreferrer">Frontiers</a> contribution statements document my role in co-conceiving FlyBrainLab's architecture and developing the platform, user-side and utility libraries, validation workflows, visualizations, comparative circuit models, NeuroNLP++, and the FeedbackCircuits library.

FlyBrainLab can be understood as an early incarnation of the research-oriented AI workbenches now emerging around LLMs. Its NeuroNLP++ interface accepted free-form scientific questions and coordinated access to published research, programmable ontologies, and structured connectome data, then connected the results to executable graph queries, GPU-backed simulations, and interactive 3D visualizations. This system shape closely resembles tools such as <a href="https://www.anthropic.com/news/claude-science-ai-workbench" target="_blank" rel="noopener noreferrer">Claude Science</a>, with a natural language interface spanning literature, domain databases, computation, and scientific artifacts. FlyBrainLab predated modern general-purpose LLMs, so its language layer instead combined ontology-backed knowledge bases, literature-linked entity retrieval, dense passage retrieval, and biomedical BERT question answering. Building it gave me direct experience with many of the same grounding, retrieval, tool integration, and provenance problems that define current agentic research systems.

The platform combined a TypeScript/JupyterLab front end, an OrientDB-backed NeuroArch graph database, RPC APIs, and large-scale connectome and synaptome querying with the simulation and visualization stack.
