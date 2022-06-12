
# LatePayCatcher: Fullstack Smart Invoice Manager

Built as my Capstone project, this webapp helps people working in the B2B Finance working environment to create and manage their invoices. Users would be able to:
- View the invoice data from various buyers
- See various attributes of the invoices from a particular buyer
- Perform Data Pre-processing on the invoice data.
- Get account-level analytics to easily visualize and interpret data
- Get a prediction of when the invoice is going to get paid



## 🚀 Result

A fully responsive webapp built using a ReactJS frontend, Java backend, MySQL database, fueled by XGBoost regression and Flask API:

![alt text](https://github.com/kunal-bhadra/Smart_Invoice_Manager/blob/master/demo.jpg)



## ✏ Tech Stack for Project Development

- Python
- Flask
- JavaScript
- ReactJS
- MUI 5.0
- Java
- JDBC
- Servlets
- MySQL



## 🚶‍♂️ Project Walkthrough

### 1. ML Regression

- A dense tabular dataset of 50k records was pre-processed
- Categorical features were label encoded and output values were binned
- XGBoost was chosen after comparing multiple models, later tuned by Optuna and the model was saved

### 2. JavaScript Frontend
- A responsive Accounts Dashboard was built, which visualized data as grids and graphs
- CRUD operations, soft refresh and an extensive Search was also added for better UX
- User gets the predicted binned value at a click of a button

### 3. Java, SQL & Flask Backend
- A MySQL database was used for data loading and CRUD functionality
- Flask API was the python backend to communicate with the frontend and return results from our ML model
- Java, JDBC and Servlets were used to receive the GET/POST requests and communicate with MySQL



## 🔗 Connect with me:
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.polywork.com/kunal_bhadra)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kunal-bhadra-cs/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/kunal_kaun)