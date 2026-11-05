---
layout: page
permalink: /teaching/
title: Teaching & Speaking
nav_title: Teaching
description: Graduate teaching, engineering instruction, curriculum development, and invited presentations in applied AI.
nav: true
nav_order: 6
---

I teach machine learning as an engineering discipline. I begin with the mathematical foundations, then carry models through data design, evaluation, deployment, and communication with the people who will use them.

## CS3 Research Experience for Teachers

<div class="teaching-lead">
  <div>
    <span class="teaching-eyebrow">2024-2026</span>
    <h3>Main engineering instructor</h3>
  </div>
  <p>For three annual cohorts of the NSF Center for Smart Streetscapes Research Experience for Teachers (RET), I have designed and led the core engineering curriculum for K-12 STEM educators. The four-week program turns current work in computer vision, urban data, and generative AI into material that teachers can adapt for their own classrooms. In 2026, the program introduced the CS3 AI Teaching Kit, and teachers worked with me to build their own kits that pair browser-based lessons with an offline NVIDIA Jetson Orin Nano Super kit.</p>
</div>

<div class="curriculum-map" aria-label="RET engineering curriculum">
  <div class="curriculum-stage">
    <span>01</span>
    <h3>ML foundations</h3>
    <p>Neural networks, circuits, loss and backpropagation, the arithmetic of training, validation, and model evaluation.</p>
  </div>
  <div class="curriculum-stage">
    <span>02</span>
    <h3>Computer vision</h3>
    <p>Convolutional networks, object detection and segmentation, tracking, depth estimation, annotation, and dataset design.</p>
  </div>
  <div class="curriculum-stage">
    <span>03</span>
    <h3>Language and generative models</h3>
    <p>Tokens and Markov chains, recurrent networks and transformers, attention, embeddings, diffusion, and responsible classroom use.</p>
  </div>
  <div class="curriculum-stage">
    <span>04</span>
    <h3>Deployable and agentic AI</h3>
    <p>YOLO training, edge deployment on Jetson and Raspberry Pi, agents and tool use, and publishing web applications.</p>
  </div>
</div>

<div class="resource-row" aria-label="RET program resources">
  <a class="resource-link" href="https://cs3-erc.org/research-experience-for-teachers/"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Program</a>
  <a class="resource-link" href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> 2026 course site</a>
  <a class="resource-link" href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/calendar/"><i class="fa-regular fa-calendar" aria-hidden="true"></i> 2026 curriculum</a>
  <a class="resource-link" href="https://cs3-erc.org/ret-2026/"><i class="fa-regular fa-newspaper" aria-hidden="true"></i> 2026 cohort</a>
  <a class="resource-link" href="https://center-for-smart-streetscapes-cs3.github.io/ret2025/calendar/"><i class="fa-regular fa-calendar" aria-hidden="true"></i> 2025 curriculum</a>
  <a class="resource-link" href="{{ '/assets/pdf/archive/cs3-ret-2025-calendar.pdf' | relative_url }}"><i class="fa-regular fa-file-pdf" aria-hidden="true"></i> 2025 archive</a>
  <a class="resource-link" href="https://center-for-smart-streetscapes-cs3.github.io/ret2024/calendar/"><i class="fa-regular fa-calendar" aria-hidden="true"></i> 2024 curriculum</a>
  <a class="resource-link" href="{{ '/assets/pdf/archive/cs3-ret-2024-calendar.pdf' | relative_url }}"><i class="fa-regular fa-file-pdf" aria-hidden="true"></i> 2024 archive</a>
  <a class="resource-link" href="{{ '/assets/pdf/archive/cs3-ret-program-2026.pdf' | relative_url }}"><i class="fa-regular fa-file-pdf" aria-hidden="true"></i> Program archive</a>
</div>

### CS3 AI Teaching Kit

The kit introduced in 2026 has two parts that teach the same ideas: browser lessons that run on any computer, and an offline kit that carries them to cameras and sensors on an NVIDIA Jetson Orin Nano Super. Coding agents help teachers read each program, change it, and build their own extensions.

<div class="lesson-plan-columns">
  <section>
    <h3>Online: AI Training Toolkit</h3>
    <p>A browser application that needs no installation. Four sets of guided lessons lead from fitting weights by hand, through decision boundaries, hidden layers, optimizers, and generalization in the Model Playground, to tokens, Markov chains, recurrent networks, masked attention, and a small GPT trained in the browser in the Text Lab.</p>
    <p><a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/toolkit/">Open the toolkit</a></p>
  </section>
  <section>
    <h3>Offline: Jetson teaching kit</h3>
    <p>Thirteen camera lessons, from OpenCV basics and color recognition to face tracking, QR codes, and car recognition; twenty-five sensor lessons, from LEDs and buttons to ultrasonic ranging, NFC, and an accelerometer; and advanced programs such as a smart doorbell, a pose game, vision-based parking, and a TensorRT benchmark. Each lesson ships with an HTML deck, a printable PDF, notes, and the programs it teaches.</p>
    <p><a href="https://huggingface.co/datasets/mehmetkeremturkcan/cs3-ai-teaching-kit">Download from Hugging Face</a>&emsp;<a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/cs3-teaching-kit/">Kit overview and Ubuntu setup</a></p>
  </section>
</div>

### Intro to AI lecture series

Self-contained HTML decks written for the 2026 cohort. Each one opens in any browser and carries its figures inside itself.

<div class="material-list material-list--decks">
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part1_tokens_and_markov_chains.html">Part 1: Tokens and Markov Chains</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part2_rnns_and_transformers.html">Part 2: RNNs and Transformers</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part3_classifiers_and_embeddings.html">Part 3: Classifiers and Embeddings</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part4_loss_and_backpropagation.html">Part 4: Loss and Backpropagation</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part5_arithmetic_of_training.html">Part 5: The Arithmetic of Training</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part6_training_at_scale.html">Part 6: Training at Scale</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part7_agents_and_tool_use.html">Part 7: Agents and Tool Use</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part7_appendix_i_web_applications.html">Part 7, Appendix I: Building and Serving Web Applications</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part7_appendix_iii_github_to_live_page.html">Part 7, Appendix III: From a GitHub Repository to a Live Page</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part8_vision.html">Part 8: Vision</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part8_appendix_i_detection_and_segmentation.html">Part 8, Appendix I: Detection and Segmentation</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part9_attention.html">Part 9: Attention</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part9_appendix_i_attention_as_a_soft_lookup.html">Part 9, Appendix I: Attention as a Soft Lookup</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/intro_to_ai_part10_diffusion.html">Part 10: Diffusion</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/week1_overview.html">Week 1 Overview</a>
  <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/ret2026_nyc_daylighting_hypotheses.html">Intersection Daylighting: NYC Hypotheses</a>
</div>

Companion material: the <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/cs3_ret_github_fresh_static_website_install.pdf">visual slide set</a> for publishing a static website from GitHub, sample agent instruction files (<a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/GUIDELINES.md"><code>GUIDELINES.md</code></a> and <a href="https://center-for-smart-streetscapes-cs3.github.io/ret2026/assets/lectures/REVIEW_AGENTS.md"><code>REVIEW_AGENTS.md</code></a>), and the <a href="https://mkturkcan.github.io/daylightinganalysis/explorer.html">Daylighting Explorer</a> and <a href="https://mkturkcan.github.io/daylightinganalysis/analysis.html">analysis</a> used in the daylighting lecture.

### Lecture notes and handouts

Notes, handouts, and tutorials from the 2024 and 2025 cohorts, which continued in the 2026 curriculum.

<div class="material-list">
  <a href="{{ '/assets/pdf/ret/materials/01-neural-networks.pdf' | relative_url }}">Neural Networks</a>
  <a href="{{ '/assets/pdf/ret/materials/02-concepts-in-deep-learning.pdf' | relative_url }}">Concepts in Deep Learning</a>
  <a href="{{ '/assets/pdf/ret/materials/03-model-evaluation.pdf' | relative_url }}">Model Evaluation</a>
  <a href="{{ '/assets/pdf/ret/materials/04-introduction-to-cnns.pdf' | relative_url }}">Introduction to CNNs</a>
  <a href="{{ '/assets/pdf/ret/materials/05-object-detection-and-segmentation.pdf' | relative_url }}">Object Detection &amp; Segmentation</a>
  <a href="{{ '/assets/pdf/ret/materials/06-object-detection.pdf' | relative_url }}">Object Detection</a>
  <a href="{{ '/assets/pdf/ret/materials/07-object-tracking.pdf' | relative_url }}">Object Tracking</a>
  <a href="{{ '/assets/pdf/ret/materials/08-introduction-to-language-models.pdf' | relative_url }}">Introduction to Language Models</a>
  <a href="{{ '/assets/pdf/ret/materials/09-history-of-ai.pdf' | relative_url }}">History of AI</a>
  <a href="{{ '/assets/pdf/ret/materials/10-cvat-tutorial.pdf' | relative_url }}">CVAT Tutorial</a>
  <a href="{{ '/assets/pdf/ret/materials/11-google-colab-and-yolo-training.pdf' | relative_url }}">Colab &amp; YOLO Training</a>
  <a href="{{ '/assets/pdf/ret/materials/12-perspectives-in-philosophy-of-science.pdf' | relative_url }}">Perspectives in Philosophy of Science</a>
</div>

### Classroom outcomes

Participating teachers developed complete lesson plans that connect AI engineering to science, mathematics, civics, and career education.

<div class="lesson-plan-columns">
  <section>
    <h3>2025 lesson plans</h3>
    <ul>
      <li><a href="{{ '/assets/pdf/ret/2025/01-raspberry-pi-object-detection.pdf' | relative_url }}">Raspberry Pi AI object detection</a></li>
      <li><a href="{{ '/assets/pdf/ret/2025/02-oyster-population-analysis.pdf' | relative_url }}">Oyster-population data analysis</a></li>
      <li><a href="{{ '/assets/pdf/ret/2025/03-hurricane-response-mapping.pdf' | relative_url }}">Hurricane-response mapping</a></li>
      <li><a href="{{ '/assets/pdf/ret/2025/04-graffiti-computer-vision.pdf' | relative_url }}">Graffiti and computer vision</a></li>
      <li><a href="{{ '/assets/pdf/ret/2025/05-nyc-ebike-crash-data.pdf' | relative_url }}">NYC e-bike crash data</a></li>
      <li><a href="{{ '/assets/pdf/ret/2025/06-job-skills-and-ai.pdf' | relative_url }}">Job skills and AI</a></li>
    </ul>
    <p><a href="https://cs3-erc.org/ret-2025-lesson-plans/">Official collection</a>&emsp;<a href="{{ '/assets/pdf/archive/cs3-ret-2025-lesson-plans.pdf' | relative_url }}">local archive</a></p>
  </section>
  <section>
    <h3>2024 lesson plans</h3>
    <ul>
      <li><a href="{{ '/assets/pdf/ret/2024/01-traffic-statistics.pdf' | relative_url }}">Traffic statistics and cumulative frequency</a></li>
      <li><a href="{{ '/assets/pdf/ret/2024/02-neural-network-training.pdf' | relative_url }}">Training neural networks</a></li>
      <li><a href="{{ '/assets/pdf/ret/2024/03-household-object-detection.pdf' | relative_url }}">Household object detection</a></li>
      <li><a href="{{ '/assets/pdf/ret/2024/04-ai-bias-analysis.pdf' | relative_url }}">AI bias analysis</a></li>
      <li><a href="{{ '/assets/pdf/ret/2024/05-bike-nyc-data.pdf' | relative_url }}">Bike NYC data analysis</a></li>
    </ul>
    <p><a href="https://cs3-erc.org/ret-2024-lesson-plans/">Official collection</a>&emsp;<a href="{{ '/assets/pdf/archive/cs3-ret-2024-lesson-plans.pdf' | relative_url }}">local archive</a></p>
  </section>
</div>

## Columbia courses

<section class="course-record">
  <div class="course-record__heading">
    <div>
      <span class="teaching-eyebrow">EECS E6691&emsp;Spring 2023</span>
      <h3>Advanced Deep Learning</h3>
    </div>
    <a class="course-download" href="{{ '/assets/pdf/E6691_Syllabus.pdf' | relative_url }}"><i class="fa-regular fa-file-pdf" aria-hidden="true"></i> Syllabus</a>
  </div>
  <p>An advanced course on modern visual recognition, centered on implementation. Students moved from evaluation and segmentation through two-stage and one-stage detection, tracking, transformers, vision-language models, diffusion, and open-vocabulary systems.</p>
  <div class="course-facts">
    <span><strong>Format</strong> Weekly lectures and coding assignments</span>
    <span><strong>Capstone</strong> Conference-style project, reproducible code, and poster</span>
    <span><strong>Assessment</strong> Assignments 30%&emsp;exam 30%&emsp;project 40%</span>
  </div>
  <p class="course-sequence"><strong>Sequence:</strong> Metrics and segmentation&emsp;R-CNN, FPN, Mask R-CNN, PointRend&emsp;SSD and YOLO&emsp;graph embeddings&emsp;SORT, ByteTrack, BoT-SORT, DeepSORT&emsp;ViT, DETR, Swin, Segmenter&emsp;CLIP&emsp;diffusion and ControlNet&emsp;OWL-ViT&emsp;Segment Anything&emsp;Generative Agents</p>
</section>

<section class="course-record">
  <div class="course-record__heading">
    <div>
      <span class="teaching-eyebrow">ECBM E4040&emsp;Fall 2023</span>
      <h3>Neural Networks &amp; Deep Learning</h3>
    </div>
    <a class="course-download" href="{{ '/assets/pdf/E4040_Syllabus.pdf' | relative_url }}"><i class="fa-regular fa-file-pdf" aria-hidden="true"></i> Syllabus</a>
  </div>
  <p>An introduction to deep learning from theory to practice, covering mathematical foundations, implementation, model design, and the empirical habits needed to train and evaluate neural networks well.</p>
  <div class="course-facts">
    <span><strong>Format</strong> Lectures, assignments, exam, and team project</span>
    <span><strong>Coverage</strong> Core architectures and modern generative models</span>
    <span><strong>Assessment</strong> Assignments 40%&emsp;exam 25%&emsp;project 35%</span>
  </div>
  <p class="course-sequence"><strong>Sequence:</strong> Machine learning review&emsp;feedforward networks and backpropagation&emsp;optimization&emsp;convolutional networks&emsp;regularization&emsp;recurrent networks&emsp;autoencoders&emsp;GANs&emsp;VAEs&emsp;current research directions</p>
</section>

I also co-taught Columbia Video Network's VOAI 0003E: Neural Networks and Deep Learning for the AI Executive Certificate in Fall 2022 and Summer 2023, and previously supported Columbia courses in neural computation and computational neuroscience.

## Selected presentations

<div class="speaking-list">
  <article class="speaking-item">
    <img src="{{ '/assets/img/presentations/pawr-pi-meeting-2026.jpg' | relative_url }}" srcset="{{ '/assets/img/presentations/pawr-pi-meeting-2026.jpg' | image_srcset: '540,810,1080' }}" sizes="(max-width: 799.98px) calc(100vw - 30px), 261px" alt="Mehmet Kerem Turkcan presenting a poster on congestion pricing in New York City to two attendees at the 2026 PAWR PI Meeting" width="2000" height="2000" loading="lazy" decoding="async" style="object-position: 50% 25%">
    <div>
      <span class="teaching-eyebrow">September 28, 2026&emsp;Washington, DC</span>
      <h3>A Vision-Based Analysis of Congestion Pricing in New York City</h3>
      <p>Poster at the 2026 PAWR PI Meeting on how traffic changed at 910 public cameras after New York City began congestion pricing. Photo: PAWR Project Office.</p>
      <p><a href="https://advancedwireless.org/outreach/highlights-and-materials-from-the-pawr-pi-meeting-2026/">Meeting highlights</a>&emsp;<a href="https://advancedwireless.org/wp-content/uploads/2026/10/Mehmet-Turkcan_Poster_COSMOS.pdf">Abstract</a>&emsp;<a href="{{ '/projects/congestion-pricing/' | relative_url }}">Project</a></p>
    </div>
  </article>

  <article class="speaking-item">
    <img src="{{ '/assets/img/presentations/cs3-innovation-summit-2026.webp' | relative_url }}" srcset="{{ '/assets/img/presentations/cs3-innovation-summit-2026.webp' | image_srcset: '540,810,1080' }}" sizes="(max-width: 799.98px) calc(100vw - 30px), 261px" alt="Mehmet Kerem Turkcan speaking on the real-time traffic analysis panel at the 2026 CS3 Innovation Summit" width="1950" height="1097" loading="lazy" decoding="async">
    <div>
      <span class="teaching-eyebrow">February 5, 2026&emsp;Columbia University</span>
      <h3>From Sensors to Systems: Real-Time Traffic Analysis for Faster Decision-Making</h3>
      <p>Panelist at the CS3 Innovation Summit, discussing how camera, mobility, and model outputs become operational urban intelligence.</p>
      <p><a href="https://cs3-erc.org/event/innovation-summit-2026/">Event</a>&emsp;<a href="https://www.engineering.columbia.edu/about/news/how-ai-improving-daily-life-cities">Columbia Engineering coverage</a>&emsp;<a href="{{ '/assets/pdf/archive/cs3-innovation-summit-2026.pdf' | relative_url }}">local event archive</a></p>
    </div>
  </article>

  <article class="speaking-item">
    <img src="{{ '/assets/img/portauth.webp' | relative_url }}" srcset="{{ '/assets/img/portauth.webp' | image_srcset: '540,810' }}" sizes="(max-width: 799.98px) calc(100vw - 30px), 261px" alt="Mehmet Kerem Turkcan presenting at the Port Authority Tomorrow Summit" width="940" height="600" loading="lazy" decoding="async">
    <div>
      <span class="teaching-eyebrow">January 7, 2026&emsp;World Trade Center</span>
      <h3>Port Authority Tomorrow Summit workshop</h3>
      <p>I hosted a technical workshop at the Port Authority of New York and New Jersey headquarters as part of its annual Tomorrow Summit, which recognizes technology pilots demonstrated during the previous year.</p>
    </div>
  </article>

  <article class="speaking-item speaking-item--slide">
    <img src="{{ '/assets/img/presentations/vision-zero-2025.webp' | relative_url }}" srcset="{{ '/assets/img/presentations/vision-zero-2025.webp' | image_srcset: '540,810,1080' }}" sizes="(max-width: 799.98px) calc(100vw - 30px), 261px" alt="Title slide for Evaluating Micromobility and Dangerous Riding Behaviors" width="2400" height="1350" loading="lazy" decoding="async">
    <div>
      <span class="teaching-eyebrow">November 19, 2025&emsp;New York City DOT</span>
      <h3>Evaluating Micromobility &amp; Dangerous Riding Behaviors</h3>
      <p>Presentation at the Eighth Annual Vision Zero Research on the Road event on using street camera analytics to study micromobility and risky riding behavior.</p>
      <p><a href="https://www.nyc.gov/assets/ddc/downloads/town-and-gown/ROTR8/ROTR2025AgendaBio.pdf">Agenda and bio</a>&emsp;<a href="https://www.nyc.gov/assets/ddc/downloads/town-and-gown/ROTR8/4_MehmetTurkcan.Micromobility.Public.pdf">slides</a>&emsp;<a href="{{ '/assets/pdf/presentations/vision-zero-micromobility-slides.pdf' | relative_url }}">local slides</a></p>
    </div>
  </article>
</div>
