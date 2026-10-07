---
layout: project
title: UrbanOmniDetect
permalink: /projects/urbanomnidetect/
description: Monocular 3D object detection with the UrbanOmniDetect system and UrbanOmniView dataset.
lede: Calibration-free, view-agnostic monocular 3D object detection. One model recovers 3D boxes from ego-vehicle, infrastructure, and aerial cameras without camera intrinsics.
img: assets/img/project_media/urbanomni.webp
img_alt: 3D cuboids predicted on cars, pedestrians, and bikes in New York street photos from an elevated view, a street-level view, and a telephoto view, beside a bird's-eye view of the elevated scene
img_width: 1600
img_height: 900
img_caption: The released UrbanOmniDetect model (YOLO11x-P2) on New York street photos from the TLoNY dataset, with no camera intrinsics and one model for every viewpoint. The bird's-eye view on the right is recovered from the predicted ground corners alone.
thumb: assets/img/project_thumbnails/urbanomni.webp
importance: 2
category: featured
topic: urban perception
github: https://github.com/mkturkcan/urbanomnidetect
huggingface: https://huggingface.co/mehmetkeremturkcan/UrbanOmniDetect
related_publications: turkcan2026urbanomnidetect
facts:
  - label: Role
    value: Lead author; creator of UrbanOmniDetect-2
  - label: Recognition
    value: Oral presentation, CVPR 2026 DriveX workshop
  - label: Latest release
    value: UrbanOmniDetect-2, September 2026
links:
  - label: Paper
    url: https://openaccess.thecvf.com/content/CVPR2026W/DriveX/papers/Turkcan_Calibration-Free_View-Agnostic_Monocular_3D_Object_Detection_for_Urban_Scenes_CVPRW_2026_paper.pdf
    icon: paper
  - label: Code
    url: https://github.com/mkturkcan/urbanomnidetect
    icon: github
  - label: Models
    url: https://huggingface.co/mehmetkeremturkcan/UrbanOmniDetect
    icon: huggingface
  - label: UrbanOmniView dataset
    url: https://huggingface.co/datasets/mehmetkeremturkcan/UrbanOmniView
    icon: dataset
  - label: DriveX workshop
    url: https://drivex-workshop.github.io/cvpr2026/
    icon: website
artifacts: CVPR workshop paper, open-source code, the UrbanOmniView dataset, pretrained models across YOLOv8, YOLOv9, YOLO11, and YOLO12, five UrbanOmniDetect-2 checkpoints, and a real-time bird's-eye-view pipeline
keywords:
  - Monocular 3D detection
  - Calibration-free perception
  - Ordered 3D box-vertex projection
  - Heterogeneous camera viewpoints
  - Synthetic data
  - Infrastructure sensing
  - Bird's-eye-view tracking
acknowledgement: >-
  This work began while I was a postdoc in the <a href="https://www.ee.columbia.edu/" target="_blank" rel="noopener noreferrer">Department of Electrical Engineering</a> (<a href="https://www.aidl.ee.columbia.edu/" target="_blank" rel="noopener noreferrer">AIDL Lab</a>) at Columbia University.
---

UrbanOmniDetect targets a common deployment bottleneck in V2X and infrastructure sensing: camera intrinsics may be unavailable, imprecise, or drifting. Instead of lifting 2D detections through a calibrated camera model, a single network predicts the eight projected corners of each object's 3D box directly from a raw RGB image, with no intrinsics, depth estimation, or ground-plane priors.

The work was presented as an oral paper at the CVPR 2026 DriveX workshop and is paired with UrbanOmniView, a dataset that combines real-world driving data from KITTI, infrastructure camera data from DAIR-V2X, and high-fidelity synthetic data rendered in Unreal Engine 5, which is released as part of the project.

## Results

- **Invariant to calibration error.** Calibration-dependent methods lose more than 80% of their accuracy with a 5% focal-length error. UrbanOmniDetect takes no camera intrinsics as input and is invariant to such errors by construction.
- **Strongest on the harder KITTI splits.** Without calibration, it reaches 30.71 AP<sub>3D</sub> and 35.19 AP<sub>BEV</sub> on the Moderate split at IoU ≥ 0.7, ahead of the calibration-dependent baselines below on Moderate and Hard.
- **Real-time inference.** A single forward pass takes under 11 ms per image on an A100 with TensorRT at 640 × 640.

| Method | AP<sub>3D</sub> Easy | AP<sub>3D</sub> Mod. | AP<sub>3D</sub> Hard | AP<sub>BEV</sub> Easy | AP<sub>BEV</sub> Mod. | AP<sub>BEV</sub> Hard |
|:--|--:|--:|--:|--:|--:|--:|
| MonoDGP | 30.76 | 22.34 | 19.02 | 39.40 | 28.20 | 24.42 |
| MonoCon | 26.33 | 19.01 | 15.98 | 34.65 | 25.39 | 21.93 |
| MonoLSS | 25.91 | 18.29 | 15.94 | 34.70 | 25.36 | 21.84 |
| DEVIANT | 24.63 | 16.54 | 14.52 | 32.60 | 23.04 | 19.99 |
| **UrbanOmniDetect** | 29.61 | **30.71** | **27.76** | 33.86 | **35.19** | **31.38** |

<p class="table-caption">Monocular 3D detection on KITTI at IoU ≥ 0.7. The baselines use camera calibration. UrbanOmniDetect does not.</p>

<section class="project-release" aria-labelledby="urbanomnidetect-2">
  <span class="project-release__eyebrow">Latest release&emsp;September 2026</span>
  <h2 id="urbanomnidetect-2">UrbanOmniDetect-2</h2>
  <p>I have since released UrbanOmniDetect-2, my independent follow-up to the paper. It turns the pose-only detector into a single hybrid network for detection and 3D cuboids. One forward pass detects all 80 COCO classes and, for every road user, regresses the eight projected corners of its 3D box, on any viewpoint and still without calibration. The same output feeds tracking, a bird's-eye view, and an offline refinement stage that turns per-frame detections into rigid, physically consistent trajectories.</p>
  <p>Training mixes 2D and 3D supervision. COCO and VisDrone ground the detector, while KITTI, DAIR-V2X, CDrone, and rendered vehicles teach the cuboids through a masked pose loss. The release includes five model scales from 2.6M to 57.6M parameters, along with training code, a real-time bird's-eye-view pipeline, and tools for producing labels and demo reels from raw footage.</p>
  <div class="project-actions">
    <a class="project-action" href="https://github.com/mkturkcan/urbanomnidetect#urbanomnidetect-2" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i><span>UrbanOmniDetect-2 on GitHub</span></a>
    <a class="project-action" href="https://huggingface.co/mehmetkeremturkcan/UrbanOmniDetect-2" target="_blank" rel="noopener noreferrer"><img src="{{ '/assets/img/icons/huggingface.svg' | relative_url }}" alt="" width="17" height="16" aria-hidden="true"><span>UrbanOmniDetect-2 models</span></a>
  </div>
</section>
