---
layout: page
title: FlyBrainLab
permalink: /projects/flybrainlab/
description: Open-source graph database, retrieval, simulation, and visualization platform for connectome-scale neuroscience.
img: assets/img/project_media/neuromynerva_example.webp
thumb: assets/img/project_thumbnails/flybrainlab.webp
importance: 12
category: open platforms
topic: research platform
github: https://github.com/FlyBrainLab/FlyBrainLab
related_publications: lazar2021accelerating, lazar2022programmable
---

FlyBrainLab is an open-source platform for exploring, querying, visualizing, and simulating fruit fly brain circuits at connectome and synaptome scale.

The <a href="https://elifesciences.org/articles/62362" target="_blank" rel="noopener noreferrer">eLife</a> and <a href="https://www.frontiersin.org/journals/neuroinformatics/articles/10.3389/fninf.2022.853098/full" target="_blank" rel="noopener noreferrer">Frontiers</a> contribution statements document my role in co-conceiving FlyBrainLab's architecture and developing the platform, user-side and utility libraries, validation workflows, visualizations, comparative circuit models, NeuroNLP++, and the FeedbackCircuits library.

<img class="img-fluid rounded z-depth-1 mb-3" src="{{ '/assets/img/project_media/neuromynerva_example.webp' | relative_url }}" alt="FlyBrainLab graph, simulation, and visualization interface" width="1080" height="1080" decoding="async">

FlyBrainLab can be understood as an early incarnation of the research-oriented AI workbenches now emerging around LLMs. Its NeuroNLP++ interface accepted free-form scientific questions and coordinated access to published research, programmable ontologies, and structured connectome data, then connected the results to executable graph queries, GPU-backed simulations, and interactive 3D visualizations. This system shape closely resembles tools such as <a href="https://www.anthropic.com/news/claude-science-ai-workbench" target="_blank" rel="noopener noreferrer">Claude Science</a>, with a natural language interface spanning literature, domain databases, computation, and scientific artifacts. FlyBrainLab predated modern general-purpose LLMs, so its language layer instead combined ontology-backed knowledge bases, literature-linked entity retrieval, dense passage retrieval, and biomedical BERT question answering. Building it gave me direct experience with many of the same grounding, retrieval, tool integration, and provenance problems that define current agentic research systems.

The platform combined a TypeScript/JupyterLab front end, an OrientDB-backed NeuroArch graph database, RPC APIs, and large-scale connectome and synaptome querying with the simulation and visualization stack.

- **Role:** Lead author
- **Keywords:** TypeScript/JupyterLab front-end development, OrientDB graph databases, NeuroArch APIs, large-scale graph querying, ontology-backed retrieval, dense passage retrieval, domain-specific QA, GPU simulation, 3D visualization

Links: <a href="https://github.com/FlyBrainLab/FlyBrainLab" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://flybrainlab.fruitflybrain.org/" target="_blank" rel="noopener noreferrer">platform</a>, <a href="https://doi.org/10.7554/eLife.62362" target="_blank" rel="noopener noreferrer">eLife paper</a>, <a href="https://doi.org/10.3389/fninf.2022.853098" target="_blank" rel="noopener noreferrer">programmable ontology paper</a>.
