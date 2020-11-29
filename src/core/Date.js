// React Native Get Current Date Time
// https://aboutreact.com/react-native-get-current-date-time/

// import React in our code
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/fr.js'




const Date2 = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    moment.locale("fr")
    setCurrentDate(
      moment().add(3, 'days').format("D MMM")      
    );
  }, []);

  return (
    <div>
       <p style={{margin:'0'}}>Livré: <b>{currentDate} </b></p> 

    </div>
  );
};

{/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
});*/}

export default Date2;