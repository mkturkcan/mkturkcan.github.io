---
layout: about
title: About
permalink: /
subtitle: Associate Research Scientist in <a href="https://www.civil.columbia.edu/" target="_blank" rel="noopener noreferrer">Civil Engineering &amp; Engineering Mechanics</a> at <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer">Columbia University</a>
description: Applied AI research scientist building deployable computer vision, multimodal, and data systems for demanding real-world environments.
og_image: https://mkturkcan.github.io/assets/img/social-preview.jpg

profile:
  align: right
  image: prof_pic.webp
  image_alt: Portrait of Mehmet Kerem Turkcan
  image_width: 480
  image_height: 720
  image_circular: false
  more_info: >
    <p>Columbia University</p>
    <p>New York, NY</p>
    <p><a href="mailto:mkt2126@columbia.edu">mkt2126@columbia.edu</a></p>

news: true
latest_posts: false
selected_papers: true
social: true
---

I build and deploy AI systems for settings where latency, reliability, and real-world context matter, from city streets and surgical training workflows to complex scientific data. Across these domains, my work turns deep learning research into practical computer-vision, multimodal, and data systems that can be tested outside the lab.

At <a href="https://cs3-erc.org/" target="_blank" rel="noopener noreferrer">the Center for Smart Streetscapes (CS3)</a> and <a href="https://www.civil.columbia.edu/" target="_blank" rel="noopener noreferrer">Civil Engineering &amp; Engineering Mechanics</a> at <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer">Columbia University</a>, I lead machine learning efforts that move from research prototypes to fielded systems, including real-time video analytics, open-vocabulary perception, edge and vision-language model workflows, street-scale data pipelines, synthetic data generation, urban digital twins, and foundation-model workflows for medical robotics.

<div class="home-work-samples my-4" aria-label="Examples of applied AI systems">
  <a class="home-work-sample" href="{{ '/projects/dart/' | relative_url }}">
    <img src="{{ '/assets/img/project_thumbnails/dart.webp' | relative_url }}" srcset="{{ '/assets/img/project_thumbnails/dart-360.webp' | relative_url }} 360w, {{ '/assets/img/project_thumbnails/dart.webp' | relative_url }} 720w" sizes="(max-width: 575px) 96px, 240px" alt="DART qualitative detections in a crowded street scene" width="720" height="405" decoding="async">
    <span class="home-work-sample__label">DART</span>
    <span class="home-work-sample__detail">Open-vocabulary detection at deployment speed</span>
  </a>
  <a class="home-work-sample" href="{{ '/projects/urbanomnidetect/' | relative_url }}">
    <img src="{{ '/assets/img/project_thumbnails/urbanomni.webp' | relative_url }}" srcset="{{ '/assets/img/project_thumbnails/urbanomni-360.webp' | relative_url }} 360w, {{ '/assets/img/project_thumbnails/urbanomni.webp' | relative_url }} 720w" sizes="(max-width: 575px) 96px, 240px" alt="UrbanOmniView examples across urban camera viewpoints" width="720" height="405" loading="lazy" decoding="async">
    <span class="home-work-sample__label">UrbanOmniDetect</span>
    <span class="home-work-sample__detail">View-agnostic urban detection</span>
  </a>
  <a class="home-work-sample" href="{{ '/projects/medical-robotics-foundation-models/' | relative_url }}">
    <img src="{{ '/assets/img/project_thumbnails/openh.webp' | relative_url }}" srcset="{{ '/assets/img/project_thumbnails/openh-360.webp' | relative_url }} 360w, {{ '/assets/img/project_thumbnails/openh.webp' | relative_url }} 720w" sizes="(max-width: 575px) 96px, 240px" alt="Open-H-Embodiment dataset overview" width="720" height="405" loading="lazy" decoding="async">
    <span class="home-work-sample__label">Medical Robotics</span>
    <span class="home-work-sample__detail">Open datasets and world models for training</span>
  </a>
</div>

## Work and leadership

- **Fielded AI systems:** I lead multimodal perception projects for sensing models intended to scale across 900+ New York City intersections and CS3's three urban testbeds: <a href="https://www.cosmos-lab.org/" target="_blank" rel="noopener noreferrer">COSMOS PAWR</a> in New York City, <a href="https://cait.rutgers.edu/datacity/" target="_blank" rel="noopener noreferrer">DataCity</a> in New Brunswick, and <a href="https://www.mobintel.org/" target="_blank" rel="noopener noreferrer">FAU MobIntel</a> in West Palm Beach.
- **Work at leading venues:** Publications and preprints across CVPR, ICML, ACM UIST, ACM/IEEE SEC, IEEE INFOCOM, IEEE PerCom, EDM, eLife, and medical AI venues.
- **Open-source systems:** Public AI systems including <a href="https://github.com/mkturkcan/DART" target="_blank" rel="noopener noreferrer">DART</a> and <a href="https://github.com/mkturkcan/generative-agents" target="_blank" rel="noopener noreferrer">generative-agents</a>, with 1,200+ combined GitHub stars.
- **Sponsored research:** Proposal development, technical reporting, sponsor reviews, and engineering delivery across approximately $30M in institutional research supported by NSF, DARPA, AFOSR, and Con Edison, with additional project support from NVIDIA and EmpireAI.
- **Teaching and mentorship:** Graduate deep-learning courses at Columbia, mentoring of Master's and high-school researchers, and service as the main engineering instructor for the <a href="{{ '/teaching/' | relative_url }}">CS3 Research Experience for Teachers</a> in 2024, 2025, and 2026.

My current systems include <a href="{{ '/projects/dart/' | relative_url }}">DART</a> for real-time open-vocabulary detection, <a href="{{ '/projects/urbanomnidetect/' | relative_url }}">UrbanOmniDetect</a> and UrbanOmniView for calibration-free monocular 3D perception, <a href="{{ '/projects/pave-urban-safety/' | relative_url }}">PAVE</a> and <a href="{{ '/projects/bikeped/' | relative_url }}">bikeped</a> for urban safety, <a href="{{ '/projects/congestion-pricing/' | relative_url }}">city-scale traffic analysis</a>, <a href="{{ '/projects/loom/' | relative_url }}">Loom</a> for analytical neural computing, and <a href="{{ '/projects/medical-robotics-foundation-models/' | relative_url }}">world models and open datasets for medical robotics</a>.

Earlier language-system work includes <a href="{{ '/projects/gptune/' | relative_url }}">GPTune</a>, a GPT-2 fine-tuning toolkit from the early public LLM era, and <a href="{{ '/projects/flybrainlab/' | relative_url }}">FlyBrainLab</a>, an early prototype of today's research-oriented AI workbenches. FlyBrainLab's natural-language interface coordinated access to papers, programmable ontologies, and an OrientDB-backed connectome knowledge graph, linking retrieved evidence to large-scale queries, GPU simulation, and interactive 3D visualization. Although it predated general-purpose LLMs, the platform addressed the grounding, retrieval, tool-integration, and provenance problems now central to agentic scientific systems.

My independent game and film work also feeds back into my research practice. Through <a href="https://wisedawn.itch.io/" target="_blank" rel="noopener noreferrer">Wisedawn</a> and <a href="https://www.kedikatstudios.com/" target="_blank" rel="noopener noreferrer">KEDIKAT</a>, I work with real-time engines, visual storytelling, and production constraints that inform simulation work such as <a href="{{ '/projects/boundless/' | relative_url }}">Boundless</a>. KEDIKAT's film <em>FLEA</em> received four festival accolades in 2026, including Best Storytelling Runner-Up at the <a href="https://www.metamorph-award.com/winners-2026" target="_blank" rel="noopener noreferrer">MetaMorph AI Award</a>.
