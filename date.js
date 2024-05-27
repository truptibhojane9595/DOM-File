// 1. Instantiating a Date.

// var date = new Date();
// var date = new Date(milliseconds);
// var date = new Date(dateString);
// var date = new Date(year, month, day, hours, minutes, seconds, milliseconds);

// var date = new Date();

// console.log(date);

// var milliseconds = 1625097600000; 
// var date = new Date(milliseconds);

// var dateString = "2021-07-01T12:00:00Z"; 
// var date = new Date(dateString);

// var year = 2024;
// var month = 6; 
// var day = 1;
// var hours = 12;
// var minutes = 0;
// var seconds = 0;
// var milliseconds = 0;
// var dateFromComponents = new Date(year, month, day, hours, minutes, seconds, milliseconds);
// console.log(dateFromComponents);
//.......................................................................................................................................

// 2. Date Object Properties.


// date.constructor;  // Returns the function that created the Date object's prototype.
// date.prototype;    // Allows you to add properties and methods to an object.

//.......................................................get() method...................................................................................

// 3. Date Object Methods.


// date.getDate();             // Returns the day of the month (from 1-31).
// date.getDay();              // Returns the day of the week (from 0-6).
// date.getFullYear();         // Returns the year (four digits).
// date.getHours();            // Returns the hour (from 0-23).
// date.getMilliseconds();     // Returns the milliseconds (from 0-999).
// date.getMinutes();          // Returns the minutes (from 0-59).
// date.getMonth();            // Returns the month (from 0-11).
// date.getSeconds();          // Returns the seconds (from 0-59).
// date.getTime();             // Returns the number of milliseconds since midnight Jan 1, 1970.
// date.getTimezoneOffset();   // Returns the time difference between UTC time and local time, in minutes.

// var date = new Date();
// console.log(date.getDate()); 

// var date = new Date();
// console.log(date.getDay()); 

// var date = new Date();
// console.log(date.getFullYear()); 

// var date = new Date();
// console.log(date.getHours());

// var date = new Date();
// console.log(date.getMilliseconds()); 

// var date = new Date();
// console.log(date.getMinutes());

// var date = new Date();
// console.log(date.getMonth()); 

// var date = new Date();
// console.log(date.getSeconds()); 

// var date = new Date();
// console.log(date.getTime()); 

// var date = new Date();
// console.log(date.getTimezoneOffset()); 

//..........................................................get() UTC method.............................................................................................................................

// date.getUTCDate();          // Returns the day of the month, according to universal time (from 1-31).
// date.getUTCDay();           // Returns the day of the week, according to universal time (from 0-6).
// date.getUTCFullYear();      // Returns the year, according to universal time (four digits).
// date.getUTCHours();         // Returns the hour, according to universal time (from 0-23).
// date.getUTCMilliseconds();  // Returns the milliseconds, according to universal time (from 0-999).
// date.getUTCMinutes();       // Returns the minutes, according to universal time (from 0-59).
// date.getUTCMonth();         // Returns the month, according to universal time (from 0-11).
// date.getUTCSeconds();       // Returns the seconds, according to universal time (from 0-59).

// var date = new Date();
// console.log(date.getUTCDate()); 

// var date = new Date();
// console.log(date.getUTCDay()); 

// var date = new Date();
// console.log(date.getUTCFullYear()); 

// var date = new Date();
// console.log(date.getUTCHours()); 

// var date = new Date();
// console.log(date.getUTCMilliseconds()); 

// var date = new Date();
// console.log(date.getUTCMinutes()); 


// var date = new Date();
// console.log(date.getUTCMonth()); 

// var date = new Date();
// console.log(date.getUTCSeconds()); 

//.....................................................set() method...............................................

// date.setDate(day);                           // Sets the day of the month of a date object.
// date.setFullYear(year, month, day);          // Sets the year (four digits) of a date object.
// date.setHours(hour, min, sec, millisec);     // Sets the hour of a date object.
// date.setMilliseconds(millisec);              // Sets the milliseconds of a date object.
// date.setMinutes(min, sec, millisec);         // Set the minutes of a date object.
// date.setMonth(month, day);                   // Sets the month of a date object.
// date.setSeconds(sec, millisec);              // Sets the seconds of a date object.
// date.setTime(millisec);                      // Sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.

// var date = new Date();
// date.setDate(15); 
// console.log(date); 

// var date = new Date();
// date.setFullYear(2023); 
// console.log(date); 

// var date = new Date();
// date.setHours(10, 30, 0); 
// console.log(date); 

// var date = new Date();
// date.setMilliseconds(500); 
// console.log(date); 

// var date = new Date();
// date.setMinutes(45); 
// console.log(date); 

// var date = new Date();
// date.setMonth(11); 
// console.log(date); 

// var date = new Date();
// date.setSeconds(30); 
// console.log(date); 

// var date = new Date();
// date.setTime(1621950000000); 
// console.log(date);

//.........................................................set() UTC method ................................................

// date.setUTCDate(day);                        // Sets the day of the month of a date object, according to universal time.
// date.setUTCFullYear(year, month, day);       // Sets the year of a date object, according to universal time (four digits).
// date.setUTCHours(hour, min, sec, millisec);  // Sets the hour of a date object, according to universal time.
// date.setUTCMilliseconds(millisec);           // Sets the milliseconds of a date object, according to universal time.
// date.setUTCMinutes(min, sec, millisec);      // Set the minutes of a date object, according to universal time.
// date.setUTCMonth(month, day);                // Sets the month of a date object, according to universal time.
// date.setUTCSeconds(sec, millisec);           // Set the seconds of a date object, according to universal time.

// var date = new Date();
// date.setUTCDate(15); 
// console.log(date); 

// var date = new Date();
// date.setUTCFullYear(2023); 
// console.log(date); 

// var date = new Date();
// date.setUTCHours(10, 30, 0); 
// console.log(date); 

// var date = new Date();
// date.setUTCMilliseconds(500); 
// console.log(date); 

// var date = new Date();
// date.setUTCMinutes(45); 
// console.log(date); 

// var date = new Date();
// date.setUTCMonth(11); 
// console.log(date); 

// var date = new Date();
// date.setUTCSeconds(30); 
// console.log(date); 

//........................................................string() method.............................................................

// date.toDateString();        // Converts the date portion of a Date object into a readable string.
// date.toISOString();         // Returns the date as a string, using the ISO standard.
// date.toJSON();              // Returns the date as a string, formatted as a JSON date.
// date.toLocaleDateString();  // Returns the date portion of a Date object as a string, using locale conventions.
// date.toLocaleTimeString();  // Returns the time portion of a Date object as a string, using locale conventions.
// date.toLocaleString();      // Converts a Date object to a string, using locale conventions.
// date.toString();            // Converts a Date object to a string.
// date.toTimeString();        // Convert the time portion of a Date object to a string.
// date.toUTCString();         // Converts a Date object to a string, according to universal time.
// date.valueOf();             // Returns the primitive value of a Date object.

// var date = new Date();
// console.log(date.toDateString()); 

// var date = new Date();
// console.log(date.toISOString()); 

// var date = new Date();
// console.log(date.toJSON()); 

// var date = new Date();
// console.log(date.toLocaleDateString()); 

// var date = new Date();
// console.log(date.toLocaleTimeString()); 

// var date = new Date();
// console.log(date.toLocaleString()); 

// var date = new Date();
// console.log(date.toString());

// var date = new Date();
// console.log(date.toTimeString()); 

// var date = new Date();
// console.log(date.toUTCString()); 

// var date = new Date();
// console.log(date.valueOf()); 

