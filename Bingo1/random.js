
  
  $(document).ready(function () {
    var btn = document.getElementById('btn');// truy vấn đến thẻ có id btn

    btn.addEventListener('click', UpdateTable); // button click thì sẽ chạy function UpdateTable()

    // đây là hàm để random đang để random 1->100
     function CreateLottoValues() {
        return Math.floor(Math.random() * 100 + 1);
        
     }
    
    function UpdateTable() {
        var table1 = new Array();
        var table2 = new Array();
        var table3 = new Array();
        var table4 = new Array();
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                tmp = 'cell' + i + j;  
                random = CreateLottoValues();
                while(table1.indexOf(random) > -1 ){
                  random = CreateLottoValues();
                }
                document.querySelector('.item1 #' + tmp).innerHTML =  random;
                table1.push(random);
                 // đây là câu lệnh query đến những cell để gán giá trị và được gán bằng giá trị do hàm random.  
                
            }
        }
        for (var i = 0; i < 5; i++) {
          for (var j = 0; j < 5; j++) {
              tmp = 'cell' + i + j;  
              random = CreateLottoValues();
              while(table2.indexOf(random) > -1 ){
                random = CreateLottoValues();
              }
              document.querySelector('.item2 #' + tmp).innerHTML =  random;
              table2.push(random);
               // đây là câu lệnh query đến những cell để gán giá trị và được gán bằng giá trị do hàm random.  
              
          }
      }
      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            tmp = 'cell' + i + j;  
            random = CreateLottoValues();
            while(table3.indexOf(random) > -1 ){
              random = CreateLottoValues();
            }
            document.querySelector('.item3 #' + tmp).innerHTML =  random;
            table3.push(random);
             // đây là câu lệnh query đến những cell để gán giá trị và được gán bằng giá trị do hàm random.  
            
        }
    }
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
          tmp = 'cell' + i + j;  
          random = CreateLottoValues();
          while(table4.indexOf(random) > -1 ){
            random = CreateLottoValues();
          }
          document.querySelector('.item4 #' + tmp).innerHTML =  random;
          table4.push(random);
           // đây là câu lệnh query đến những cell để gán giá trị và được gán bằng giá trị do hàm random.  
          
      }
  }

        
    }
   

    UpdateTable(); // khi load lần đầu tiên của html, chúng ta phải chạy hàm này để nó random ra lần đầu tiên mà không cần đợi click
});