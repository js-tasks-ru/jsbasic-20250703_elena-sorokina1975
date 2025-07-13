function checkSpam(str) {
  if (str !== undefined && str !== null) {
          return  (str.toUpperCase().includes('1xBet'.toUpperCase()) || str.toUpperCase().includes('XXX'.toUpperCase()));  
  }
  else {
    return null; 
  };  
}
