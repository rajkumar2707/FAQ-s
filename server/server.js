/* eslint-disable radix */
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  const data = [
    {
      answer: 'Research credits are the number of Profit Calls',
      question: 'What are Research Credits?',
    },
    {
      answer:
        'Credits are charged only when there is a Profit in the given trade/investment call',
      question: 'How credits are deducted?',
    },
    {
      answer:
        'No, if the given trade ends in Loss, the credit balance remains unchanged',
      question: 'Do my credits deduct even on Loss Calls?',
    },
    {
      answer:
        'Similar to that of Research on timeframes (monthly, quarterly, etc.,), but here we are keen only on Research Credits and not Months.',
      question: 'How to subscribe to Research Credits?',
    },
    {
      answer:
        'Your services will be active till you have at least ONE Credit for your Service, the moment your Credit balance becomes Zero, your service is expired.',
      question: 'What is the validity of my services opted?',
    },
    {
      answer:
        'You can view your Research Credits for each service you have subscribed to in your PROFILE section of both the Website and the Mobile App',
      question: 'How do I check my Research Credits balance?',
    },
    {
      answer:
        'Similar to that of subscription, go to Subscribe section on your App or Website and you can avail the services',
      question: 'How to renew or add Research Credits to my service?',
    },
    {
      answer: 'You will be notified once your Credits balance hits 5 or less',
      question: 'When do I get a notice that my Research Credits are low?',
    },
    {
      answer:
        'Kindly text our official WhatsApp @ 9900391006 and allow us some time to look into and solve alternatively you can raise a ticket in the Mobile app',
      question:
        'How to get support if I find any issues related to Research Credits?',
    },
    {
      answer:
        'Service modifications are not allowed on Basic Plans and however it is allowed on Premium plans',
      question: 'Can I pause my services?',
    },
    {
      answer:
        'It is highly recommended not to do so because once the service is activated, it is linked to the Mobile number you provided or used to download Mobile App. Since there is no requirement of changing your Mobile number as the Mobile App notifies of availability on the Internet',
      question: 'Can I change my mobile number in between?',
    },
    {
      answer:
        'Yes, but delivery depends on your Network and the Operator. So, alternatively, App Notifications are given.',
      question: 'Do I get research through SMSs also?',
    },
    {
      answer:
        'Your Mobile App notifies on top of the mobile screen, kindly ensure the settings of your mobile are allowed to receive notifications. The notification makes a notification tone for every update from Streetgains',
      question:
        'How do I get to know that there is a new trade or a recommendation?',
    },
    {
      answer:
        'Yes, you can update your profile details in the PROFILE section of the App',
      question: 'Can I change my profile details?',
    },
    {
      answer:
        'Not necessarily, unless you are logged out from the App manually.',
      question: 'Should I login to the App every time?',
    },
  ];
  // const limit = req.query.limit ? parseInt(req.query.limit) : 5;
  // const limitedData = data.slice(0, limit);

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
