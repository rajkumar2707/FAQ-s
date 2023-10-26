import React, {useEffect, useState} from 'react';
import FAQs from './src';
import storage from '@react-native-firebase/storage';

const URL = 'http://192.168.0.100:3000/api/data/';

const App = () => {
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    (async () => {
      // const reference = await storage().ref('data/DATA.json');
      // const downloadUrl = await reference.getDownloadURL();
      // const response = await fetch(downloadUrl);
      // const data = await response.json();
      // setData(data);
      const request = await fetch(URL);
      const response = await request.json();
      if (request.status === 200) {
        setData(response);
      }
    })();
  }, []);

  return <FAQs data={data} />;
};
export default App;
