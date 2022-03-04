// for animation of bar and cross in mobile view
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


$('#header_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-header_carousel .owl-nav-prev'), $('.owl-navigation-header_carousel .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 3.15
        }
    }
});

$('#services_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-services_carousel .owl-nav-prev'), $('.owl-navigation-services_carousel .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 3
        }
    }
});

$('#taxi_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-taxi_carousel .owl-nav-prev'), $('.owl-navigation-taxi_carousel .owl-nav-next')],
    responsive: {
        0: {
            items: 4
        },
        960: {
            items: 10.5
        }
    }
});

$('#testimonial_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-testimonial_carousel .owl-nav-prev'), $('.owl-navigation-testimonial_carousel .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 1
        }
    }
});


function headerForm(element) {
    $('.landing_page_form .col-3').removeClass('active');
    $(element).addClass('active');
    if (element.id == 'd_packagedelivery' || element.id == 'm_packagedelivery') {
        try{
            document.getElementById('bike_search_dropdown').innerHTML = `<option>Scooty</option>
                <option>Scooty EV</option>
                <option>Bike</option>`;
        }
        catch{}
        document.getElementById('landing_page_form_fields_desktop').innerHTML = `<div class="text-center">
                        <span class="fo-14 fw-700">Your everyday travel partner</span>
                        <br>
                        <span class="fo-12"> Package Service only applicable for bike ride</span>
                     </div>
                     <div class="landing_page_form_fields mt-3">
                        <div class="row m-0">
                           <div>PICKUP</div>
                           <input type="text" placeholder="Current location" name="">
                        </div>
                        <div class="row m-0 mt-2">
                           <div>DROP</div>
                           <input type="text" placeholder="Enter drop for ride estimate" name="">
                        </div>
                        <div class="row m-0 mt-2">
                           <div>DEPART</div>
                           <select>
                              <option>Today</option>
                           </select>
                           <select>
                              <option>1:45AM</option>
                           </select>
                        </div>
                        <div class="row m-0 mt-2">
                           <div>WEIGHT</div>
                           <input type="text" placeholder="Enter package weight here ( Max Weight 20 kg )" name="">
                        </div>
                        <button class="btn search_button mt-2 text-dark" onclick="search_bikes('delivery');">Search Bikes</button>
                     </div>`;
        document.getElementById('landing_page_form_fields_mobile').innerHTML = `<div class="text-center">
               <span class="fo-14 fw-700">Your everyday travel partner</span>
               <br>
               <span class="fo-12">Package Service only applicable for bike ride</span>
            </div>
            <div class="landing_page_form_fields mt-3">
               <div class="row m-0">
                  <div>PICKUP</div>
                  <input type="text" placeholder="Current location" name="">
               </div>
               <div class="row m-0 mt-2">
                  <div>DROP</div>
                  <input type="text" placeholder="Enter drop for ride estimate" name="">
               </div>
               <div class="row m-0 mt-2">
                  <div>DEPART</div>
                  <select>
                     <option>Today</option>
                  </select>
                  <select>
                     <option>1:45AM</option>
                  </select>
               </div>
               <div class="row m-0 mt-2">
                  <div>WEIGHT</div>
                  <input type="text" placeholder="Enter package weight here ( Max Weight 20 kg )" name="">
               </div>
               <button class="btn search_button mt-2 text-dark" onclick="search_bikes('delivery');">Search Bikes</button>
            </div>`;
    } else if (element.id == 'd_bike' || element.id == 'm_bike') {
        try{
            document.getElementById('bike_search_dropdown').innerHTML = `<option>Bike CC100</option>
                <option>Bike CC150</option>
                <option>Bike CC200</option>
                <option>Scooty</option>
                <option>Scooty EV</option>`;
        }
        catch{}
        document.getElementById('landing_page_form_fields_desktop').innerHTML = `<div class="text-center">
                        <span class="fo-14 fw-700">Your everyday travel partner</span>
                        <br>
                        <span class="fo-12">Travel with full safety</span>
                     </div>
                     <div class="landing_page_form_fields mt-3">
                        <div class="row m-0">
                           <div>PICKUP</div>
                           <input type="text" placeholder="Current location" name="">
                        </div>
                        <div class="row m-0 mt-2">
                           <div>DROP</div>
                           <input type="text" placeholder="Enter drop for ride estimate" name="">
                        </div>
                        <div class="row m-0 mt-2">
                           <div>DEPART</div>
                           <select>
                              <option>Today</option>
                           </select>
                           <select>
                              <option>1:45AM</option>
                           </select>
                        </div>
                        <button class="btn search_button mt-2 text-dark" onclick="search_bikes('bike');">Search Bikes</button>
                     </div>`;
        document.getElementById('landing_page_form_fields_mobile').innerHTML = `<div class="text-center">
               <span class="fo-14 fw-700">Your everyday travel partner</span>
               <br>
               <span class="fo-12">Travel with full safety</span>
            </div>
            <div class="landing_page_form_fields mt-3">
               <div class="row m-0">
                  <div>PICKUP</div>
                  <input type="text" placeholder="Current location" name="">
               </div>
               <div class="row m-0 mt-2">
                  <div>DROP</div>
                  <input type="text" placeholder="Enter drop for ride estimate" name="">
               </div>
               <div class="row m-0 mt-2">
                  <div>DEPART</div>
                  <select>
                     <option>Today</option>
                  </select>
                  <select>
                     <option>1:45AM</option>
                  </select>
               </div>
               <button class="btn search_button mt-2 text-dark" onclick="search_bikes('bike');">Search Bikes</button>
            </div>`;
    }
    else if (element.id == 'd_car' || element.id == 'm_car') {
        try{
            document.getElementById('bike_search_dropdown').innerHTML = `<option>Mini</option>
                <option>Micro</option>
                <option>Prime Sedan/SUV</option>
                <option>Prime XUV</option>
                <option>Cab EV</option>`;
        }
        catch{}
    }
    else if (element.id == 'd_auto' || element.id == 'm_auto') {
        try{
            document.getElementById('bike_search_dropdown').innerHTML = `<option>Auto Diesel</option>
                <option>Auto CNG</option>
                <option>Auto EV</option>`;
        }
        catch{}
    }
}

function showRegister() {
    document.getElementById('register_section').style.display = "block";
    document.getElementById('login_section').style.display = "none";
    document.getElementsByTagName("body")[0].setAttribute('style', 'overflow-y: hidden');
}

function showLogin() {
    document.getElementById('register_section').style.display = "none";
    document.getElementById('login_section').style.display = "block";
    document.getElementsByTagName("body")[0].setAttribute('style', 'overflow-y: hidden');
}

function showRegister_mobile() {
    document.getElementById('register_section_mobile').style.display = "block";
    document.getElementById('login_section_mobile').style.display = "none";
    document.getElementsByTagName("body")[0].setAttribute('style', 'overflow-y: hidden');
}

function showLogin_mobile() {
    document.getElementById('register_section_mobile').style.display = "none";
    document.getElementById('login_section_mobile').style.display = "block";
    document.getElementsByTagName("body")[0].setAttribute('style', 'overflow-y: hidden');
}

function handleModal() {
    document.getElementsByTagName("body")[0].setAttribute('style', 'overflow-y: hidden');
}

$(".close").click(function () {
    document.getElementsByTagName("body")[0].setAttribute('style', 'overflow-y: visible');
});

$(".profile_option").click(function () {
    $(".profile_option").removeClass('active');
    $(this).addClass('active');

    $(".profile_container").removeClass('d-block');
    $("#" + $(this).attr('id') + "_section").addClass('d-block');
});

function showEditDetails() {
    $(".profile_container").removeClass('d-block');
    $("#edit_details").addClass('d-block');
}

$("#accordion .card-link").click(function () {
    $(this).children().children().toggleClass("fa-minus");
});

function search_bikes(type){
    document.getElementById('non_selected').style.display = "none";
    document.getElementById('is_selected').style.display = "block";
    if(type == 'bike'){
        headerForm('d_bike');
    }
    else if(type == 'car'){
        headerForm('d_car');
    }
    else if(type == 'auto'){
        headerForm('d_auto');
    }
    if(type == 'delivery'){
        headerForm('d_packagedelivery');
    }
}