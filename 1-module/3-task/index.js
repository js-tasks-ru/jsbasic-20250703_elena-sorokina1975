function ucFirst(str) {
  if (str !== undefined && str !== null && str.length > 0 ) {
    let strFirst = str[0].toUpperCase() + str.slice(1);
      return strFirst;  
  }
  else {
     return ''; 
  };  
}
