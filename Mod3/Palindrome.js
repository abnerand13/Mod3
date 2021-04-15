function validate(){
  var word= document.forms["form"]["word"].value;
  var number= document.forms["form"]["number"].value;
  if (word==""){
      alert("Please enter a Palindrome");
      return false;
  }
  else if ((number != 1) && (number != 2)){
      alert("Please enter a 1 or a 2 for the Algorithm.");
      document.forms["form"]["number"].value = "";
      return false;
  }
  else {
      if(number==1){
          for(var i=0; word.length/2 > i; i++){
              if(word.charAt(i) != word.charAt(word.length-i-1)){
                  var tableRef = document.getElementById("List1");
                  (tableRef.insertRow(tableRef.rows.length)).innerHTML = word + "=False";
                  return;
              }
          }
                  var tableRef = document.getElementById("List1");
                  (tableRef.insertRow(tableRef.rows.length)).innerHTML = word + "=True";
          }
         
          else{
              var word = document.forms["form"]["word"].value;
              var opposite = word.split("").reverse().join("");
              var palindrome = true;
              if(opposite != word){
                  palindrome = false;
                      var tableRef = document.getElementById("List2");
                      (tableRef.insertRow(tableRef.rows.length)).innerHTML = word + "=False";
                      return;

              }
                      var tableRef = document.getElementById("List2");
                      (tableRef.insertRow(tableRef.rows.length)).innerHTML = word + "=True";
                      return;
      }
  }
}
  function clearlist1(){
      var tableRef = document.getElementById("List1");
      tableRef.innerHTML = " ";
  }
  function clearlist2(){
      var tableRef = document.getElementById("List2");
      tableRef.innerHTML = " ";
  }