        
        var mybutton = document.getElementById("myBtn");
        
        
        // window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        function topFunction() {
            document.body.scrollTop = 0
          document.documentElement.scrollTop = 0;
        }



        