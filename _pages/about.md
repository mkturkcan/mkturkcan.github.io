---
layout: about
title: About
permalink: /
subtitle: Associate Research Scientist in <a href="https://www.civil.columbia.edu/" target="_blank" rel="noopener noreferrer">Civil Engineering &amp; Engineering Mechanics</a> at <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer">Columbia University</a>
description: "Research scientist at Columbia University working on physical AI: sim-to-real transfer, digital twins, robot learning, vision-language models, and medical robotics."

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

I build AI systems that have to work outside the lab, where latency and reliability matter as much as accuracy. My research is on physical AI: models that perceive, simulate, and act in the physical world. It covers urban perception, simulation and robot learning, medical robotics, machine learning systems, and computational neuroscience. I release much of it for others to build on: real-time detectors, simulators, open datasets and models, and research platforms. I also make independent games and films.

At <a href="https://cs3-erc.org/" target="_blank" rel="noopener noreferrer">the Center for Smart Streetscapes (CS3)</a> and <a href="https://www.civil.columbia.edu/" target="_blank" rel="noopener noreferrer">Civil Engineering &amp; Engineering Mechanics</a> at <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer">Columbia University</a>, I lead machine learning projects from research prototype to deployed system. I created <a href="{{ '/projects/dart/' | relative_url }}">DART</a> for real-time open-vocabulary detection and led <a href="{{ '/projects/urbanomnidetect/' | relative_url }}">UrbanOmniDetect</a> and UrbanOmniView for calibration-free monocular 3D perception. For pedestrian and cyclist safety, I built <a href="{{ '/projects/bikeped/' | relative_url }}">bikeped</a> and contributed to <a href="{{ '/projects/pave-urban-safety/' | relative_url }}">PAVE</a>, and I led a <a href="{{ '/projects/congestion-pricing/' | relative_url }}">city-scale study of congestion pricing</a> using 910 public traffic cameras. This work also includes street-scale data pipelines, synthetic data generation, urban digital twins, and vision-language models on edge devices.

A thread through this work is sim-to-real transfer: training perception and robots for real streets in simulation. Our <a href="{{ '/projects/constellation/' | relative_url }}">Constellation</a> benchmark (IJCV 2026) showed that detectors trained on CARLA renders of the same camera fall far short on real images, and <a href="{{ '/projects/boundless/' | relative_url }}">Boundless</a> narrows that gap with photorealistic Unreal Engine 5 data. <a href="https://mehmetkeremturkcan.com/valdrada/">Valdrada</a> compiles New York City's public records into a real-time digital twin of all five boroughs. It simulates traffic and pedestrians, labels every frame with segmentation, depth, and 3D boxes, and can be driven from Python through an API modeled on CARLA's. With <a href="https://mehmetkeremturkcan.com/g1_patrol/">G1 Patrol</a>, I train a Unitree G1 humanoid in Isaac Lab to navigate crowded sidewalks, crosswalks, and construction zones modeled on New York City streets, as part of work toward a civic robot for CS3.

In <a href="{{ '/projects/medical-robotics-foundation-models/' | relative_url }}">medical robotics</a>, I lead our work on surgical world models and also work on Surgical SAM 3.1 for segmenting instruments and anatomy. I am a co-author of <a href="https://open-h.github.io/open-h-embodiment/" target="_blank" rel="noopener noreferrer">Open-H-Embodiment</a>, 780 hours of video and kinematics from 20 robotic platforms at 50 institutions, which trained GR00T-H, the first open vision-language-action model for medical robotics. This builds on my postdoc work with Northwell Health collaborators, where I applied computer vision to robotic surgery and endoscopy training.

<div class="home-work-samples my-4" aria-label="Examples of applied AI systems">
  <a class="home-work-sample" href="{{ '/projects/dart/' | relative_url }}">
    <img src="{{ '/assets/img/project_thumbnails/dart.webp' | relative_url }}" srcset="{{ '/assets/img/project_thumbnails/dart-240.webp' | relative_url }} 240w, {{ '/assets/img/project_thumbnails/dart-360.webp' | relative_url }} 360w, {{ '/assets/img/project_thumbnails/dart.webp' | relative_url }} 720w" sizes="(max-width: 575.98px) 96px, (max-width: 799.98px) 162px, 229px" alt="DART detections of pedestrians, a bus, and a taxi in Times Square at night" width="720" height="405" decoding="async">
    <span class="home-work-sample__label">DART</span>
    <span class="home-work-sample__detail">Open-vocabulary detection at deployment speed</span>
  </a>
  <a class="home-work-sample" href="{{ '/projects/urbanomnidetect/' | relative_url }}">
    <img src="{{ '/assets/img/project_thumbnails/urbanomni.webp' | relative_url }}" srcset="{{ '/assets/img/project_thumbnails/urbanomni-240.webp' | relative_url }} 240w, {{ '/assets/img/project_thumbnails/urbanomni-360.webp' | relative_url }} 360w, {{ '/assets/img/project_thumbnails/urbanomni.webp' | relative_url }} 720w" sizes="(max-width: 575.98px) 96px, (max-width: 799.98px) 162px, 229px" alt="UrbanOmniDetect 3D cuboids on cars, a bus, and pedestrians seen from above a New York avenue" width="720" height="405" loading="lazy" decoding="async">
    <span class="home-work-sample__label">UrbanOmniDetect</span>
    <span class="home-work-sample__detail">View-agnostic urban detection</span>
  </a>
  <a class="home-work-sample" href="{{ '/projects/medical-robotics-foundation-models/' | relative_url }}">
    <img src="{{ '/assets/img/project_thumbnails/openh.webp' | relative_url }}" srcset="{{ '/assets/img/project_thumbnails/openh-240.webp' | relative_url }} 240w, {{ '/assets/img/project_thumbnails/openh-360.webp' | relative_url }} 360w, {{ '/assets/img/project_thumbnails/openh.webp' | relative_url }} 720w" sizes="(max-width: 575.98px) 96px, (max-width: 799.98px) 162px, 229px" alt="Surgical SAM 3.1 masks of two graspers and a hook in a laparoscopic frame" width="720" height="405" loading="lazy" decoding="async">
    <span class="home-work-sample__label">Medical Robotics</span>
    <span class="home-work-sample__detail">World models and open datasets for medical robots</span>
  </a>
</div>

## Work and leadership

- **Fielded AI systems:** I lead multimodal perception projects whose sensing models are built to scale across 900+ New York City intersections and CS3's three urban testbeds: <a href="https://www.cosmos-lab.org/" target="_blank" rel="noopener noreferrer">COSMOS PAWR</a> in New York City, <a href="https://cait.rutgers.edu/datacity/" target="_blank" rel="noopener noreferrer">DataCity</a> in New Brunswick, and <a href="https://www.mobintel.org/" target="_blank" rel="noopener noreferrer">FAU MobIntel</a> in West Palm Beach.
- **Publications:** My papers appear at CVPR, ICML, ACM UIST, ACM/IEEE SEC, IEEE INFOCOM, IEEE PerCom, and EDM, and in IJCV, eLife, and Surgical Endoscopy. Our paper on real-time video analytics for urban safety received the Best Paper Award at SEC 2025.
- **Open-source systems:** <a href="https://github.com/mkturkcan/DART" target="_blank" rel="noopener noreferrer">DART</a>, <a href="https://github.com/mkturkcan/generative-agents" target="_blank" rel="noopener noreferrer">generative-agents</a>, and <a href="https://github.com/mkturkcan/valdrada" target="_blank" rel="noopener noreferrer">Valdrada</a>, three of my public AI systems, have 2,000+ GitHub stars combined.
- **Sponsored research:** I have contributed proposals, technical reports, sponsor reviews, and engineering to about $30M in research funded by NSF, DARPA, AFOSR, and Con Edison, with additional project support from NVIDIA and EmpireAI.
- **Teaching and mentorship:** I taught graduate deep learning courses at Columbia and have mentored Master's, undergraduate, and high school researchers, six of whom went on to Ph.D. programs at Princeton, Toronto, UC Santa Cruz, and Columbia. I was also the main engineering instructor for the <a href="{{ '/teaching/' | relative_url }}">CS3 Research Experience for Teachers</a> in 2024, 2025, and 2026.

My work on machine learning systems includes <a href="{{ '/projects/loom/' | relative_url }}">Loom</a>, an analytical neural computer that runs compiled C programs inside a looped transformer, and <a href="https://arxiv.org/abs/2609.30578" target="_blank" rel="noopener noreferrer">TalkMesh</a>, a mesh of small language models that learns through reinforcement learning when and what to communicate. With students I mentored, I have also published on adaptive data collection for robust learning (ICML 2025), vision-language models split between cloud and edge, and the security of edge-cloud systems (USENIX VehicleSec 2026), and a recent preprint applies the same approach to robust post-training of large language models. Earlier, I wrote <a href="{{ '/projects/gptune/' | relative_url }}">GPTune</a>, a GPT-2 fine-tuning toolkit from the early public LLM era.

Before my current role, I was a postdoc at the <a href="https://www.aidl.ee.columbia.edu/" target="_blank" rel="noopener noreferrer">AIDL Lab</a> in Columbia's <a href="https://www.ee.columbia.edu/" target="_blank" rel="noopener noreferrer">Department of Electrical Engineering</a>, where I also earned my Ph.D. My doctoral research was on the fruit fly brain: I co-designed and built <a href="{{ '/projects/flybrainlab/' | relative_url }}">FlyBrainLab</a>, an open platform for exploring its circuits and an early prototype of today's AI research workbenches. Its natural language interface linked papers, ontologies, and a connectome knowledge graph to GPU simulation and interactive 3D visualization.

My game and film work with <a href="https://wisedawn.itch.io/" target="_blank" rel="noopener noreferrer">Wisedawn</a> and <a href="https://www.kedikatstudios.com/" target="_blank" rel="noopener noreferrer">KEDIKAT</a> also feeds my research: experience with real-time engines and visual storytelling shaped simulation projects such as <a href="{{ '/projects/boundless/' | relative_url }}">Boundless</a>. KEDIKAT's film <em>FLEA</em> received four festival accolades in 2026, including Best Storytelling Runner-Up at the <a href="https://www.metamorph-award.com/winners-2026" target="_blank" rel="noopener noreferrer">MetaMorph AI Award</a>.
