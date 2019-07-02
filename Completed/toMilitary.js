
function toMilitary(time) {
    //variable assignment through array destructuring
      var [oldFormat, meridiem] = time.split(' ');
      //console.log(oldFormat);
      //console.log(meridiem);
      //console.log([oldFormat, meridiem]);
      var [hours, minutes] = oldFormat.split(':');
      //console.log(hours);
      //console.log(minutes);
      //console.log([hours, minutes]);
      if (hours === '12') {
        hours = '00';
      }
    
      if (meridiem === 'PM') {
        hours = parseInt(hours, 10) + 12;
      }
    
      return hours + ':' + minutes;
    }
    
    //*does not automatically add zero in front of numbers ie "1:25AM" converts to "1:25" not "01:25"


    console.log(toMilitary('01:02 PM'));
    console.log(toMilitary('05:06 PM'));
    console.log(toMilitary('12:00 PM'));
    console.log(toMilitary('12:00 AM'));
    console.log(toMilitary('11:45 PM'));
    
    console.log(`Test1 expected ${toMilitary('12:00am')} to be 00:00`);
    console.log(`Test2 expected ${toMilitary('7:47pm')} to be 19:47`);
    console.log(`Test3 expected ${toMilitary('12:01am')} to be 00:01`);
    console.log(`Test4 expected ${toMilitary('9:15am')} to be 09:15`);
    console.log(`Test5 expected ${toMilitary('1:23am')} to be 01:23`);
    console.log(`Test6 expected ${toMilitary('3:00pm')} to be 15:00`);
    console.log(`Test7 expected ${toMilitary('12:00pm')} to be 12:00`);
    console.log(`Test8 expected ${toMilitary('04:00')} to be 04:00`);