# Webpage Link: https://rahulshettyacademy.com/AutomationPractice/
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.service import Service

import time
import json

# Delay function to mimic human behavior
def delay(seconds):
    time.sleep(seconds)

# Automating form inputs based on the JSON data
def automate_form(driver, inputs):
    # Clicking on the radio button
    radio_button = driver.find_element(By.CSS_SELECTOR, f'input[value="{inputs["radio"]}"]')
    radio_button.click()
    delay(1.5)
    
    # Setting Country value
    country_input = driver.find_element(By.ID, 'autocomplete')
    country_input.clear()
    country_input.send_keys(inputs['country'])
    delay(1.5)

    # Selecting from Dropdown
    dropdown = Select(driver.find_element(By.ID, 'dropdown-class-example'))
    dropdown.select_by_value(inputs['dropdown'])
    delay(1.5)

    # Unchecking all checkboxes
    checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type="checkbox"]:checked')
    for checkbox in checkboxes:
        if checkbox.is_selected():
            checkbox.click()
    delay(1.5)

    # Selecting checkboxes based on input
    for option in inputs['checkboxArr']:
        checkbox = driver.find_element(By.ID, f'checkBox{option}')
        if not checkbox.is_selected():
            checkbox.click()
    delay(1.5)

    # Setting name value
    name_input = driver.find_element(By.ID, 'name')
    name_input.clear()
    name_input.send_keys(inputs['name'])
    delay(1.5)

    # Set value for the Hide/Show example field
    hide_show_input = driver.find_element(By.ID, 'displayed-text')
    hide_show_input.clear()
    hide_show_input.send_keys(inputs['hideShow'])
    delay(1.5)

    # Hiding and showing the value
    driver.find_element(By.ID, 'hide-textbox').click()
    delay(1.5)
    driver.find_element(By.ID, 'show-textbox').click()
    delay(1.5)

# Function to extract table data in JSON format
def extract_table_data(driver, table_num):
    if table_num == 1:
        table = driver.find_element(By.CSS_SELECTOR, 'fieldset > table')
    elif table_num == 2:
        table = driver.find_element(By.CSS_SELECTOR, 'fieldset > div > table')
    else:
        return {}

    rows = table.find_elements(By.TAG_NAME, 'tr')[1:]  # Skip header
    data = []

    for row in rows:
        cells = row.find_elements(By.TAG_NAME, 'td')
        if table_num == 1:
            row_data = {
                "Instructor": cells[0].text,
                "Course": cells[1].text,
                "Price": int(cells[2].text)
            }
        elif table_num == 2:
            row_data = {
                "Name": cells[0].text,
                "Position": cells[1].text,
                "City": cells[2].text,
                "Amount": int(cells[3].text)
            }
        data.append(row_data)

    return data

# User inputs
user_inputs = {
    "radio": "radio2",
    "country": "Pakistan",
    "dropdown": "option2",
    "checkboxArr": ["Option1", "Option3"],
    "name": "Ammar Hashmi",
    "hideShow": "I am good at Selenium Automation :)"
}

# Setting up Selenium WebDriver
service = Service(executable_path="chromedriver.exe")
driver = webdriver.Chrome(service=service)
driver.get('https://rahulshettyacademy.com/AutomationPractice/')
driver.maximize_window()
delay(2)

# Automate form
automate_form(driver, user_inputs)

# Extracting data from both tables
first_table_data = extract_table_data(driver, 1)
second_table_data = extract_table_data(driver, 2)

# Display the extracted data
print("First Table Data:")
print(json.dumps(first_table_data, indent=2))

print("\nSecond Table Data:")
print(json.dumps(second_table_data, indent=2))

# Closing the driver
driver.quit()
