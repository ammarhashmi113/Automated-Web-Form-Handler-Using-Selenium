
# Automated Web Form Handler with Selenium

This is a web form automation project. I automated form filling on a practice web page using both javascript dom manipulation and python with selenium. The project demonstrates automated form filling, table data extraction, and human-like interactions using delays.

## Webpage Link

You can view and interact with the webpage used for this project [here](https://rahulshettyacademy.com/AutomationPractice/).

## Overview
This repository contains a project that automates web form interactions and data extraction from tables using both JavaScript (DOM manipulation) and Python (Selenium). The project is developed to practice automation techniques.

## Features
- Automated form filling based on JSON input
- Radio buttons, checkboxes, dropdown selection
- Data extraction from tables and conversion to JSON format
- Human-like delays to simulate real user interactions
- Example implementation using Selenium in Python for web automation

## Technologies Used
- JavaScript (DOM Manipulation)
- Python (Selenium WebDriver)

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/ammarhashmi113/Automated-Web-Form-Handler-Using-Selenium.git
   ```

2. Install Selenium and set up your WebDriver if using Python automation:
   ```bash
   pip install selenium
   ```

3. For JS automation, run the provided JavaScript code directly in the browser's developer console.

## Example JSON Inputs
```json
{
  "radio": "radio2",
  "country": "Pakistan",
  "dropdown": "option2",
  "checkboxArr": ["Option1", "Option3"],
  "name": "Ammar Hashmi",
  "hideShow": "I am good at DOM Manipulation :)"
}
```
