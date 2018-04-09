$(window).on('scroll', function() {
           var st = $(this).scrollTop();
           var wh = $(document).height();

        // st : wh = X : 100
        // x = (st*100)/wh

        var perc = (st*100)/wh
        var logo = document.getElementById('logoBasic')
        var topBar = document.getElementById('scrollsdown')
        var logoPerson = document.getElementById("logoPerson")
        var logoSearch = document.getElementById('logoSearch')
        var phoneNumber = document.getElementById('phoneNumber')
        var logoMenu1 = document.querySelector('.bar1');
        var logoMenu2 = document.querySelector('.bar2');
        var logoMenu3 = document.querySelector('.bar3')
        // Your percentage is contained in perc variable

        console.log('The percentage is '+perc);
        console.log(wh);
        console.log(st);
        if(perc >=0 && perc < 13.7){
              topBar.classList.remove("remove");
              topBar.classList.remove("active");
              logo.src = 'img/logo/logoBasic1.png';
              logoSearch.src = 'img/logo/search copy 2.png';
              logoPerson.src = 'img/logo/person 1_ white.png';
              phoneNumber.style.color = '#e7e8ea';
              logoMenu1.style.backgroundColor = '#e7e8ea';
              logoMenu2.style.backgroundColor = '#e7e8ea';
              logoMenu3.style.backgroundColor = '#e7e8ea'
        }else if(perc >= 13.7 && perc < 27.8){
          topBar.classList.remove("remove");
          topBar.classList.add("active");
              logo.src = 'img/logo/logoBasic2.png';
              logoSearch.src = 'img/logo/search copy 4.png';
              logoPerson.src = 'img/logo/person 2_ white.png';
              phoneNumber.style.color = 'black';
              logoMenu1.style.backgroundColor = 'black';
              logoMenu2.style.backgroundColor = 'black';
              logoMenu3.style.backgroundColor = 'black';
        }else if(perc >= 27.8 && perc < 42){
          topBar.classList.remove("remove");
          logo.src = 'img/logo/logoBasic1.png';
          logoSearch.src = 'img/logo/search copy 2.png';
          logoPerson.src = 'img/logo/person 1_ white.png';
          phoneNumber.style.color = '#e7e8ea';
          logoMenu1.style.backgroundColor = '#e7e8ea';
          logoMenu2.style.backgroundColor = '#e7e8ea';
          logoMenu3.style.backgroundColor = '#e7e8ea'
        }else if(perc >= 42 && perc < 56){
          topBar.classList.remove("remove");
          logo.src = 'img/logo/logoBasic2.png';
          logoSearch.src = 'img/logo/search copy 4.png';
          logoPerson.src = 'img/logo/person 2_ white.png';
          phoneNumber.style.color = 'black';
          logoMenu1.style.backgroundColor = 'black';
          logoMenu2.style.backgroundColor = 'black';
          logoMenu3.style.backgroundColor = 'black';
        }else if(perc >= 56 && perc < 71){
          topBar.classList.remove("remove");
          logo.src = 'img/logo/logoBasic1.png';
          logoSearch.src = 'img/logo/search copy 2.png';
          logoPerson.src = 'img/logo/person 1_ white.png';
          phoneNumber.style.color = '#e7e8ea';
          logoMenu1.style.backgroundColor = '#e7e8ea';
          logoMenu2.style.backgroundColor = '#e7e8ea';
          logoMenu3.style.backgroundColor = '#e7e8ea'
        }else if(perc >= 71 ){
          topBar.classList.add("remove");
        }
        });
