import React from 'react';
import {ScrollView, Text, Image} from 'react-native';
import { Header} from './common';
import { Card } from 'react-native-elements';

const whatIsNASH = () => {
  return (
      <ScrollView>
          <Card title="What is fatty liver disease?">
            <Text>Non-alcoholic fatty liver disease (NAFLD) is the buildup of excess fat in the liver that is NOT caused by alcohol. If more than 10% of the liver’s weight is made up of fat, it is considered a fatty liver.</Text>
          </Card>
          <Card>
            <Text>While we don’t know the exact cause, NAFLD tends to develop in people who are overweight or have diabetes or prediabetes (insulin resistance), high cholesterol or high triglycerides.</Text>
          </Card>
          <Card>
            <Text>The more severe form of non-alcoholic fatty liver disease is called non-alcoholic steatohepatitis (NASH). NASH causes the liver to swell and become  inflamed and damaged.</Text>
          </Card>  
          <Card>
            <Text>NASH is one of the leading causes of cirrhosis(a fully scarred liver) in adults in the United States. Up to 25% of adults with non-alcoholic steatohepatitis may have cirrhosis.</Text>
          </Card>  
          <Card>
            <Text>The disease is mostly silent and often discovered through incidentally elevated liver enzyme levels although 40% of patients may have normal ALT/AST (liver enzymes)</Text>
          </Card> 
          <Card>
            <Text>Strongly associated with OBESITY and insulin resistance and is currently considered by many as the hepatic component of the metabolic syndrome.</Text>
          </Card>  
          <Card>
            <Text>NASH cirrhosis is now one of the leading indications for liver transplantation in the United States.</Text>
          </Card>                                                                               
      </ScrollView>
  );
};

const styles ={
  cardStyle:{
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,   
  }
}

export default whatIsNASH;

