$(function(){
    $('#main').hide();
    $("#submit").hide();
    $("#ram").hide();
    $('#start').click(function(){
      $('#start').hide()
      $('#main').show()
    var url="https://script.google.com/macros/s/AKfycbysyLBSEunpwB7KKH63_21bs42xAWWKXOyqdfArgGhskVGav6ta/exec";
   // https://script.google.com/macros/s/AKfycbysyLBSEunpwB7KKH63_21bs42xAWWKXOyqdfArgGhskVGav6ta/exec
    $.getJSON(url,function(data){

       var html = ''
       var i=0;
        var j=0;
        var p=[];
            $.each(data,function(key,val){
                
                                        html += '<div class="question" id="'+val[0]+'" data-question='+val[0]+'"><h3 class="questionForm">'+val[1] +'<xmp>'+val[7]+'</xmp>'+'</h3><ul style="list-style-type: none;">'
                                        html +='<li><input type="radio" name='+val[0]+' value="1">'+val[2]+'</li><li><input type="radio" name='+val[0]+' value="2">'
                                        html +=val[3]+'</li><li><input type="radio" name='+val[0]+' value="3">'
                                        html +=val[4]+'</li><li><input type="radio" name='+val[0]+' value="4">'
                                        html +=val[5]+'</li></ul></div>'
                       })
            html+='<div class="question" id="ram"><h4>Thanks for taking this test</h4><p> here is your result</p></div>'
            $('#dQuiz').html(html);
            // checking the result



            function ram(){
              var x=0;
              var y=0;
              var z=0;
              var htt='';
              for(var k=0;k<data.length;k++){
                p[k]=Number(p[k]);
                if(data[k][6]===p[k]){
                  x++;
                  htt+='<h4>'+data[k][1]+'</br>  Your answers =  '+p[k]+'  Status- Correct </h4>';
                }
                else if(!p[k]){
                  y++;
                  htt+='<h4>'+data[k][1]+ '</br> Status- Not attemped </h4>';
                }
                else{
                  z++;
                  htt+='<h4>'+data[k][1]+'</br> Your answers = '+p[k]+'  Status- wrong </h4>';
                }
                
              }

              htt +='<h2>Totel Unattempted question '+y+' </h2>'
              htt +='<h2 id="correct"> Correct Answers '+x+'</h2>'
              htt +='<h2 id="incorrect"> incorrect Answers ' +z+ '</h2>'
                $('#ram').html(htt);
            }


            $('.question').hide();
            $("#1").show();
            var i=1;
            //next button is pressed
             $("#next").click(function(){
              i=i+1;
              $('.question').hide();
              $('#'+i+'').show();
              
              //for last element
              if(i===data.length){
                $("#submit").show();
                $("#next").hide();
                  }
                else{
                $("#submit").hide();
                $("#next").show();
                }
                  })
             //when submit button is pressed
              var url2='https://script.google.com/macros/s/AKfycbxtL5d50-VsZ5HqxdcE_i65oqKl8jNiURXt8JT_cSFN6BjNb8g/exec'
               $("#submit").click(function(){
                if(confirm("Are you sure you want to submit"))
                {
                  //selected answers putting in array
                  for(var j=1;j<=data.length;j++){
                        var submited=$('input[name="'+j+'"]:checked').val();
                        p[j-1]=submited;
                      }
                      console.log(p);
                      ram();

                  alert('Thanking You');
                  $(".question").hide();
                  $("#ram").show();
                  $("#submit").hide()
                  $("#prev").hide();
                  
                }
              })
               //WHEN PREVIOUS BUTTON IS pressed
               $("#prev").click(function(){
              if(i>=2)
              {
                i=i-1;
              }
              $('.question').hide();
              $('#'+i+'').show();
              if(i===data.length){
                $("#submit").show();
                $("#next").hide();
                  }
                else{
                $("#submit").hide();
                $("#next").show();
                }
                  })
               


        });


    });            


});