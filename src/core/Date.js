// React Native Get Current Date Time
// https://aboutreact.com/react-native-get-current-date-time/

// import React in our code
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/fr.js'




const Date2 = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDay(); //Current Date
    var date1 = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var weekday=new Array(7);
    weekday[0]="Dimanche";
    weekday[1]="Lundi";
    weekday[2]="Mardi";
    weekday[3]="Mercredi";
    weekday[4]="Jeudi";
    weekday[5]="Vendredi";
    weekday[6]="Samedi";
    var months =new Array(12);
    months[1]="Janv.";
    months[2]="Fev.";
    months[3]="Mars";
    months[4]="Avr.";
    months[5]="Mai";
    months[6]="Juin";
    months[7]="Juill.";
    months[8]="Aout";
    months[9]="Sep.";
    months[10]="Oct.";
    months[11]="Nov.";
    months[12]="Dec.";
    moment.locale("fr")



    const tme = moment().add(3, 'days')
    console.log(tme._d)
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