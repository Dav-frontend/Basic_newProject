$(window).on('scroll', function() {
           var st = $(this).scrollTop();
           var wh = $(document).height();
           var ww = $(document).width();

        // st : wh = X : 100
        // x = (st*100)/wh

        var perc = (st*100)/wh
        var logo = document.getElementById('logoBasic')
        var topBar = document.getElementById('scrollsdown')
        var logoPerson = document.getElementById("logoPerson")
        var logoSearch = document.getElementById('logoSearch')
        var phoneNumber = document.getElementById('phoneNumber')
        var logoMenu = document.querySelectorAll('.bar1 , .bar2 , .bar3');
        // Your percentage is contained in perc variable

        console.log('The percentage is '+perc);
        console.log(ww);
        console.log(st);
        if(perc >=0 && perc < 14.5 && ww <= 767){
              topBar.classList.remove("remove");
              topBar.classList.remove("active");
              logo.src = 'img/logo/logoBasic1.png';
              logoSearch.src = 'img/logo/search copy 2.png';
              logoPerson.src = 'img/logo/person 1_ white.png';
              phoneNumber.style.color = '#e7e8ea';
              for (var i = 0; i < logoMenu.length; i++) {
                  logoMenu[i].style.backgroundColor = "#e7e8ea";
              }

        }else if(perc >= 14.5 && perc < 31.9 && ww <= 767){
              topBar.classList.remove("remove");
              topBar.classList.add("active");
              logo.src = 'img/logo/logoBasic2.png';
              logoSearch.src = 'img/logo/search copy 4.png';
              logoPerson.src = 'img/logo/person 2_ white.png';
              phoneNumber.style.color = 'black';
              for (var i = 0; i < logoMenu.length; i++) {
                  logoMenu[i].style.backgroundColor = "black";
              }
        }else if(perc >= 31.9 && perc < 46.7 && ww <= 767){
          topBar.classList.remove("remove");
          logo.src = 'img/logo/logoBasic1.png';
          logoSearch.src = 'img/logo/search copy 2.png';
          logoPerson.src = 'img/logo/person 1_ white.png';
          phoneNumber.style.color = '#e7e8ea';
          for (var i = 0; i < logoMenu.length; i++) {
              logoMenu[i].style.backgroundColor = "#e7e8ea";
          }
        }else if(perc >= 46.7 && perc < 61.8 && ww <= 767){
          topBar.classList.remove("remove");
          logo.src = 'img/logo/logoBasic2.png';
          logoSearch.src = 'img/logo/search copy 4.png';
          logoPerson.src = 'img/logo/person 2_ white.png';
          phoneNumber.style.color = 'black';
          for (var i = 0; i < logoMenu.length; i++) {
              logoMenu[i].style.backgroundColor = "black";
          }
        }else if(perc >= 61.8 && perc < 75.4 && ww <= 767){
          topBar.classList.remove("remove");
          logo.src = 'img/logo/logoBasic1.png';
          logoSearch.src = 'img/logo/search copy 2.png';
          logoPerson.src = 'img/logo/person 1_ white.png';
          phoneNumber.style.color = '#e7e8ea';
          for (var i = 0; i < logoMenu.length; i++) {
              logoMenu[i].style.backgroundColor = "#e7e8ea";
          }

        }else if(perc >= 71 ){
          topBar.classList.add("remove");
        }



        if(perc >=0 && perc < 13.7 && ww >= 768){
              topBar.classList.remove("remove");
              topBar.classList.remove("active");
              logo.src = 'img/logo/logoBasic1.png';
              logoSearch.src = 'img/logo/search copy 2.png';
              logoPerson.src = 'img/logo/person 1_ white.png';
              phoneNumber.style.color = '#e7e8ea';
              for (var i = 0; i < logoMenu.length; i++) {
                  logoMenu[i].style.backgroundColor = "#e7e8ea";
              }

        }else if(perc >= 13.7 && perc < 27.8 && ww >= 768){
              topBar.classList.remove("remove");
              topBar.classList.add("active");
              logo.src = 'img/logo/logoBasic2.png';
              logoSearch.src = 'img/logo/search copy 4.png';
              logoPerson.src = 'img/logo/person 2_ white.png';
              phoneNumber.style.color = 'black';
              for (var i = 0; i < logoMenu.length; i++) {
                  logoMenu[i].style.backgroundColor = "black";
              }
        }else if(perc >= 27.8 && perc < 42 && ww >= 768){
          topBar.classList.remove("remove");
          logo.src = 'img/logo/logoBasic1.png';
          logoSearch.src = 'img/logo/search copy 2.png';
          logoPerson.src = 'img/logo/person 1_ white.png';
          phoneNumber.style.color = '#e7e8ea';
          for (var i = 0; i < logoMenu.length; i++) {
              logoMenu[i].style.backgroundColor = "#e7e8ea";
          }
        }else if(perc >= 42 && perc < 56 && ww > 768){
          topBar.classList.remove("remove");
          logo.src = 'img/logo/logoBasic2.png';
          logoSearch.src = 'img/logo/search copy 4.png';
          logoPerson.src = 'img/logo/person 2_ white.png';
          phoneNumber.style.color = 'black';
          for (var i = 0; i < logoMenu.length; i++) {
              logoMenu[i].style.backgroundColor = "black";
          }
        }else if(perc >= 56 && perc < 71 && ww >= 768){
          topBar.classList.remove("remove");
          logo.src = 'img/logo/logoBasic1.png';
          logoSearch.src = 'img/logo/search copy 2.png';
          logoPerson.src = 'img/logo/person 1_ white.png';
          phoneNumber.style.color = '#e7e8ea';
          for (var i = 0; i < logoMenu.length; i++) {
              logoMenu[i].style.backgroundColor = "#e7e8ea";
          }

        }else if(perc >= 71 ){
          topBar.classList.add("remove");
        }
        });
