---
layout: project
title: "Cardiovascular Disease Prediction Using Lifestyle and Health Data"
summary: "A machine learning system predicting cardiovascular disease risk from lifestyle and clinical health data using Decision Tree, Logistic Regression, and Random Forest classifiers."
category: "Machine Learning"
technologies: [Python, Pandas, Scikit-learn, Random Forest, Decision Tree, Logistic Regression, Seaborn, Matplotlib, Joblib]
github_url: "https://github.com/asim-raza665/cardiovascular-disease-prediction"
demo_url: ""
featured: true
status: "Completed"
project_order: 3
images:
  - "/assets/images/projects/cardiovascular-disease-prediction/screenshot1.png"
  - "/assets/images/projects/cardiovascular-disease-prediction/screenshot2.png"
  - "/assets/images/projects/cardiovascular-disease-prediction/screenshot3.png"
---

## Overview
This project predicts the presence of cardiovascular disease using lifestyle and clinical health data such as age, blood pressure, cholesterol, glucose level, and physical activity.

## Problem
Cardiovascular disease is a leading cause of death worldwide, and early risk identification from routine health data can help with preventive care.

## Solution
The dataset was cleaned (missing values removed, unrealistic blood pressure values filtered out) and engineered (age converted from days to years, age groups created). Categorical features were one-hot encoded, and three models — Decision Tree, Logistic Regression, and Random Forest — were trained and compared.

## Results
The Random Forest model was selected as the best-performing classifier. Performance was evaluated using accuracy, a classification report, and a confusion matrix, alongside visual analysis of actual vs. predicted probabilities.

## What I Learned
Practiced end-to-end ML workflow: data cleaning, feature engineering, exploratory visualization with Seaborn/Matplotlib, training multiple classifiers, model comparison, and evaluation metrics.
