function checkSpam(str) {
  if (!str) {
    return null;
  }
 return  (str.toUpperCase().includes('1xBet'.toUpperCase()) || str.toUpperCase().includes('XXX'.toUpperCase()));  
}
