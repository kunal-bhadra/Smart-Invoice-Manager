
# The LatePayCatcher: Predict Delay in Client Payments

My Capstone project, the LatePayCatcher is a web-app that would help the people working in the Accounts Receivable departments in their day-to-day activities. The users can view their invoice date, and also predict when the clients will pay their invoices. The ML model was built with **XGBoost** after processing 50k datapoints. For deployment, a webapp would be built with React.



## 🚀 Metrics

We experimented with various models and hypertuned them with Optuna to get the best performance, the result of which can be found below:
![alt text](https://github.com/kunal-bhadra/Payment-Delay-Forecaster/blob/master/final_metrics.jpg)

We see that CatBoost actually performs a little worse after hyperparameter tuning. This could be because CatBoost has a very good set of default values from the start and Optuna wasn't able to close in on the optimal parameters in the limited time and set.


## ✏ Tech Stack for Project Development

- Pandas
- Numpy
- Matplotlib
- Seaborn
- Optuna 
- Scikit-learn


## 🚶‍♂️ The Walkthrough
1. We worked with a fairly dense dataset of **50k records** and 19 columns containing multiple datetime features.
2. All categorical columns were encoded through a **One-Hot Encoder** since they work best with Tree algorithms.
3. Time Series Analysis was conducted with lag plots to check for possible relationships.
4. We utilized both our encoded dataframe and **categorical dataframe** based on the model we were using.
5. Models used were Linear Regression, XGBoost, CatBoost, LightGBM and Random Forests, hypertuned with **Optuna**.
6. After our experiments, we concluded that **LightGBM** gave us the best performance after hyperparameter tuning with a **8.5 RMSE** ( < delay column standard deviation of 10.8) and a **0.37 R2 Score**.
7. After a guided second approach with label-encoding and in-depth feature engineering, we achieved a **R2 Score of 0.74** on our Test Set with Vanilla XGBoost.
8. The null data was fed into the model giving us our delay predictions which was binned into 5 groups for easier comparison.


## 🧠 Some Resources I Used

- [Official XGBoost Parameter Docs](https://xgboost.readthedocs.io/en/stable/parameter.html)
- [Hyperparameter of XGBoost with Optuna](https://www.kaggle.com/hamzaghanmi/xgboost-hyperparameter-tuning-using-optuna)
- [Random Forests from Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html#sklearn.ensemble.RandomForestRegressor.score)




## 🔗 Connect with me:
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.polywork.com/kunal_bhadra)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kunal-bhadra-cs/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/kunal_kaun)

  