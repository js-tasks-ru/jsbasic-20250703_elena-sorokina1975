function getMinMax(str) { 
    let arr = []; 
    let result = { min: null, max: null, }; 
    arr = str.split(" "); 
    result.min = arr.reduce((min, current) => {if (!!Number(current)) {return Math.min(min,Number(current))} else {return min}},0); 
    result.max = arr.reduce((max, current) => {if (!!Number(current)) {return Math.max(max,Number(current))} else {return max}},0); 
    return result}