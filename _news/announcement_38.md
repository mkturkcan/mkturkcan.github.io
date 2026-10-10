---
layout: post
date: 2026-09-23 09:10:00-0400
inline: true
related_posts: false
---

Our preprint, <em>Surgical Kinematics from Monocular Video with Learned Articulated Motion Constraints</em>, is now on <a href="https://arxiv.org/abs/2609.27227" target="_blank" rel="noopener noreferrer">arXiv</a>. It reconstructs the position, orientation, and jaw angle of robotic surgical instruments from monocular video, pooling frozen DINOv3 features globally and at instrument landmarks from fine-tuned SAM 3.1 masks. Evaluated on 2,802 <a href="{{ '/projects/medical-robotics-foundation-models/' | relative_url }}">Open-H-Embodiment</a> episodes, it lowers path-length error on the main benchmark from 0.45 to 0.34 cm compared with LiveMAE.
