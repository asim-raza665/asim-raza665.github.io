---
layout: project
title: "10-Year Coronary Heart Disease Risk Prediction"
summary: "A supervised machine learning system that predicts 10-year coronary heart disease risk using the real-world Framingham Heart Study dataset, served through a FastAPI backend and a professional web-based user interface."
category: "Machine Learning"
technologies: [Python, FastAPI, Scikit-learn, Random Forest, SMOTE, Pandas, Seaborn, Joblib, HTML, CSS, JavaScript]
github_url: "https://github.com/asim-raza665/heart-disease-prediction"
demo_url: "https://huggingface.co/spaces/asim138/heart-disease-prediction"
featured: true
status: ""
project_order: 1
images:
  - "/assets/images/projects/heart-disease/ss1.jpeg"
  - "/assets/images/projects/heart-disease/ss2.jpeg"
---

### Overview

This project is a full-stack machine learning application that predicts 
whether a patient is at risk of developing coronary heart disease within 
the next 10 years. It uses the Framingham Heart Study dataset — a 
real-world longitudinal cardiovascular study conducted over decades on 
real patients in Framingham, Massachusetts — to train a Random Forest 
classifier.

The trained model is served through a FastAPI backend and presented 
through a professional dark-themed web interface where a user can enter 
15 patient health parameters and receive an instant risk prediction.

Supervised by **Dr. Bilal Ahmad** and presented by **Asim Raza and Tahir Yaqoob** as a semester Machine Learning project.

### Dataset

One of the most important and challenging parts of this project was 
finding an approved real-world dataset.

Our instructor **required a genuine real-world dataset** — synthetic 
or artificially generated datasets were not accepted. Over the course 
of **two weeks**, we researched and proposed more than 05 datasets 
from various medical and research sources. Each one was reviewed and 
rejected by our teacher for reasons including data quality, ethical 
concerns, licensing issues, or insufficient real-world validity.

After this extensive search, our teacher approved the **Framingham 
Heart Study dataset** — one of the most respected longitudinal 
cardiovascular studies in medical history, containing real patient 
records collected over decades. This approval was a significant 
milestone in the project and validated the quality and seriousness 
of our data foundation.

This experience taught us that in real ML projects, finding the 
right dataset is often harder than building the model itself.

### Problem

Heart disease is one of the leading causes of death globally. Early 
identification of at-risk patients based on measurable health 
indicators can support timely medical decisions. The challenge this 
project addresses is: given a set of 15 patient clinical and lifestyle 
features, can a machine learning model accurately predict whether that 
patient will develop coronary heart disease within 10 years?

The Framingham dataset presents an additional technical challenge — 
the target classes are heavily imbalanced, with significantly more 
healthy patients than at-risk ones, which makes naive classification 
models unreliable.

### Solution

The project is structured across three Python modules:

**ml.py — Model Training Pipeline:**
- Loaded and explored the Framingham Heart Study CSV dataset 
  (4,238 real patient records, 15 features)
- Handled missing values using median imputation for numeric columns
- Applied One-Hot Encoding for categorical features
- Used SMOTE (Synthetic Minority Oversampling Technique) to fix 
  class imbalance in the training set
- Trained a Random Forest Classifier with balanced class weights
- Evaluated using Accuracy, F1 Score, ROC-AUC Score, and 
  Confusion Matrix
- Generated data visualizations including bar plots, scatter plots, 
  box plots, and confusion matrix heatmaps
- Saved the complete model bundle using Joblib

**inference.py — ML Inference Engine:**
- Loads the saved model bundle at startup
- Accepts raw patient input as a dictionary
- Applies One-Hot Encoding and feature alignment to match 
  training format exactly using reindex()
- Returns prediction label and class probabilities

**app.py — FastAPI Web Application:**
- Serves the web interface using Jinja2 templates
- Exposes a POST /predict endpoint that accepts patient 
  data as JSON
- Returns prediction result and probability scores to 
  the frontend instantly

### Results

- **Model:** Random Forest Classifier with SMOTE oversampling
- **Dataset:** 4,238 real patient records, 15 features
- **Overall Accuracy:** 82%
- **Weighted F1 Score:** 0.79
- **ROC-AUC Score:** 0.53
- **No Risk Detection (Class 0):** Precision 86%, Recall 94%
- **CHD Risk Detection (Class 1):** Precision 26%, Recall 13%

The dataset is heavily imbalanced — 725 no-risk vs 123 
at-risk patients in the test set. SMOTE was applied to 
training data only to address this imbalance. The model 
performs excellently at identifying healthy patients. 
Further tuning of the classification threshold could 
improve CHD risk recall in future iterations.

### Most Important Risk Features

Based on Random Forest feature importance analysis on the 
Framingham dataset, these features influence the prediction most:

1. **Age** — Older patients carry significantly higher risk
2. **Systolic Blood Pressure** — Strongest cardiovascular indicator
3. **Total Cholesterol** — Elevated levels increase plaque buildup
4. **Cigarettes Per Day** — Smoking directly damages arterial walls
5. **Glucose Level** — Elevated glucose correlates strongly with CHD
6. **BMI** — Higher BMI increases cardiac workload
7. **Diastolic Blood Pressure** — Secondary BP indicator
8. **Heart Rate** — Elevated resting rate signals cardiac stress

### What I Learned

- How to find and evaluate real-world datasets — a process that 
  took two weeks and over 100 rejected candidates before 
  receiving approval. This taught me that data quality is the 
  foundation of any serious ML project.
- How to handle real-world class imbalance using SMOTE — 
  critical for medical datasets where positive cases are rare
- How to build a complete ML pipeline from raw CSV to a live 
  web prediction endpoint using FastAPI
- How to separate concerns across training, inference, and 
  serving — a production-style architecture pattern
- How to align features between training and inference using 
  reindex() to prevent silent prediction errors
- How to evaluate a binary classifier using multiple metrics — 
  accuracy alone is misleading on imbalanced medical data
- The importance of applying SMOTE only to training data — 
  applying it to test data gives falsely optimistic results
- How to work as a team on a technical project under academic 
  supervision and present results professionally
