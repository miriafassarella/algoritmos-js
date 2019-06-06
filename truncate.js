function truncateString(str, num) {
    'use strict'
    
    var result = "";
    var index = str.length;
   
    if (index > num && num > 11) { 
      result = str.slice(0, (num - 11)) + '...'; 
      return result;
    } else if (index > num && num <= 11) { 
      result = str.slice(0, num) + '...';
      return result;
    } else {                                
      return str;
    }
  
  }
  truncateString("A-tisket a-tasket A green and yellow basket", 8); // return A-tisket
  