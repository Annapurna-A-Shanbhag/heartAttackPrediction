# -*- coding: utf-8 -*-
"""
Created on Sun Apr 11 12:29:42 2021

@author: Anjali
"""


import numpy as np
import pandas as pd
import pickle

heart=pd.read_csv('heart.csv')

categorical_val = []
continous_val = []
for column in heart.columns:
    #(f"{column} : {df[column].unique()}")
    if len(heart[column].unique()) <= 10:
        categorical_val.append(column)
    else:
        continous_val.append(column)
        
categorical_val.remove('target')

dummydf = pd.DataFrame()
for i in categorical_val:
    dummy=pd.get_dummies(heart[i], drop_first=True,prefix=i)
    dummydf=pd.concat([dummydf, dummy], axis=1)  

heart1=pd.concat([heart,dummydf],axis=1)
heart1.drop(columns=categorical_val,inplace=True)

onecol=pd.DataFrame()
onecol['target']=heart1.iloc[:,5]
onecol['target']
heart1.drop(columns=['target'],inplace=True)  
heart1=pd.concat([heart1,onecol],axis=1)

heart1.to_csv('heart_database.csv',index=False)
sub=pd.read_csv('heart_database.csv')    

X=sub.iloc[:,:-1].values
y=sub.iloc[:,-1].values 

from sklearn.preprocessing import StandardScaler
sc_X=StandardScaler()
X=sc_X.fit_transform(X)

from sklearn.linear_model import LogisticRegression
model=LogisticRegression(random_state=0)
model.fit(X,y)

pickle.dump(model,open('model.pkl','wb'))