function highlight(table)  {
    const rows = table.rows;
    for (let i=1; i < rows.length; i++){
        let age = rows[i].cells[1].textContent;        
        let gender = rows[i].cells[2].textContent;
        let status = rows[i].cells[3].hasAttribute("data-available"); 

        if (age < 18) {rows[i].style.textDecoration = "line-through"};

        if (gender == 'f') {rows[i].classList.add("female")}
          else  {rows[i].classList.add("male")};

        if (status) {
          if (rows[i].cells[3].getAttribute("data-available") == "true") {rows[i].classList.add("available")}
          else {rows[i].classList.add("unavailable")};
      }
        else {rows[i].hidden = "true"};          
    
    }}