
const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
  
    let userButtons = document.querySelectorAll('.button-portfolio');
    let  lightbox = document.querySelector('.lightbox');
  
  
    function parseUserData(portfolio) {
      let targetDiv = document.querySelector('.lb-content');
    //   let targetImg = lightbox.querySelector('img');
  
          let bioContent = `
          <h3>${portfolio.header}</h3>
          <img src="../images/${portfolio.image}">
          <p>${portfolio.text}</p>
          
          `
          ;
          
          //person is the database result 
  
          console.log(bioContent);
  
          targetDiv.innerHTML = bioContent;
        //    targetImg.src = person.imgsrc;
          lightbox.classList.add('show-lb');
  
  
    }
    
  
    function getUserData(event) {
      event.preventDefault();
  
    //   let imgSrc = this.previousElementSibling.getAttribute('src');
  
      let url = `/things/${this.getAttribute('href')}`;
  
    
      fetch(url) // go get the data
          .then(res => res.json()) // parse the json resulr into a plain object
          .then(data => {
              console.log("my database result is: ", data)
  
            //   data[0].imgsrc = imgSrc;
              parseUserData(data[0]);
        
          })
          .catch((err) => {
              console.log(err)
          });
  
  
  
  
  
    }
  
    userButtons.forEach(button => button.addEventListener('click', getUserData));
  if(lightbox) {
      lightbox.querySelector('.close').addEventListener('click', function() {
      lightbox.classList.remove('show-lb');
  });
}
  })();


// mobile, about navigation

var buttonsOpen = document.querySelector('.mobile-navigation-button');
var navOpen = document.querySelector('.opened-menu');
var closeMenu = document.querySelector('.close-btn');




//navigation

function openMobileNav() {
  navOpen.classList.toggle('open');
}

function closeNav() {
  navOpen.classList.remove('open');

}



buttonsOpen.addEventListener('click', openMobileNav);
closeMenu.addEventListener('click', closeNav);


// portfolio page mobile

const leftBtn = document.querySelector(".circle-1");
const rightBtn = document.querySelector(".circle-2");
const sliderContainer = document.querySelector(".projects");


let count = 1;
let amt = 0;
let addition = document.querySelector(".project-wrapper").offsetWidth;


function animate() {
    if(count < 6){
        amt = amt + addition;
        sliderContainer.style.right = amt + 'px';
        count++;
        console.log(count);
        console.log(addition)
    } else {
        amt = 0;
        sliderContainer.style.right = amt + 'px';
        count = 1;
    }


}

function returnQuestion() {
    if(count > 1){
        count--;
        amt = amt - addition;
        sliderContainer.style.right = amt + 'px';
        console.log(count);
    } else {
        amt = addition*5;
        sliderContainer.style.right = amt + 'px';
        count = 6;
    }
    
}

rightBtn.addEventListener('click', animate);
leftBtn.addEventListener('click',returnQuestion);


//mail form


console.log('fired');

    const form = document.querySelector('form'), submit = form.querySelector('.submit-button');
    var formLightbox = document.querySelector('.lightbox-form');
    var closeBtnForm = document.querySelector('.close-btn-form');


    function handleMail(event) {
        event.preventDefault();

        // formdata will be the values of the fields the user fills out (the inputs)
        // maildata is an object we'll build and send through with those values

        let formdata = new FormData(form),
            maildata = {};

        // parse the form data (it's an iterable, so you have to do it this way)
        // and populate the maildata object with the input values (the formdata entries)
        for (let [key, value] of formdata.entries()) {
            maildata[key] = value;
        }

        let url = `/mail`;

        // use the POST superglobal which is more secure than GET, and hit the /mail route in index.js
        // inside the routes folder. this will take in the formdata we're sending, and use that to send our email
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },

            body: JSON.stringify(maildata)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.response.includes("OK")) {
                    // we successfully sent an email via gmail and nodemailer!
                    // flash success here, reset the form
                    form.reset();
                    formLightbox.classList.add('show-lb-form');
                    closeBtnForm.addEventListener('click', function() {
                        formLightbox.classList.remove('show-lb-form');
                    });
                }
            }) // this will be a success or fail message from the server
            .catch((err) => console.log(err));

        console.log('tried sending mail');
    }

    form.addEventListener('submit', handleMail);
   


    // lightbox for video

    var buttonVideo = document.querySelector('.button-video');
    var videoLightbox = document.querySelector('.lightbox-video');
    var closeBtnVideo = document.querySelector('.close-btn-video');


    function openLightboxvideo() {
        videoLightbox.classList.add('show-lb-video');

    }

    buttonVideo.addEventListener('click', openLightboxvideo);
    closeBtnVideo.addEventListener('click', function() {
        videoLightbox.classList.remove('show-lb-video');
    });

//btn home page animation 

var ButTwoHome = document.querySelector('.arrow-down');

function animateHomeBtn() {
    window.scrollTo({
    top: window.innerHeight / 1,
    behavior: 'smooth',
  
  });
  
    };

ButTwoHome.addEventListener('click', animateHomeBtn);



