  $(document).ready(function () {
  $('.box-1').on('mouseover', function () {
    // console.log('mouseover on box')
    $('.overlay').addClass('d-block');

  });

  $('.box-1').on('mouseover', function () {
    $('.box-2 .overlay ,.box-3 .overlay').removeClass('d-block')
  });

  $('.box-2').on('mouseover', function () {
    // console.log('mouseover on box')
    $('.overlay').addClass('d-block');

  });

  $('.box-2').on('mouseover', function () {
    $('.box-1 .overlay ,.box-3 .overlay').removeClass('d-block')
  });

  $('.box-3').on('mouseover', function () {
    // console.log('mouseover on box')
    $('.overlay').addClass('d-block');

  });

  $('.box-3').on('mouseover', function () {
    $('.box-2 .overlay ,.box-1 .overlay').removeClass('d-block')
  });

  $('.box').on('mouseout', function () {
    // console.log('mouse out from box')
    $('.overlay').removeClass('d-block')
  })

  $('.slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });




  function hero() {
    let title = $('#hero-title');
    let heroPara = $('#hero-content');

    let data = [{
      title: "First I wanted to be a vetrinarian",
      paragraph: "Lorem Ipsum available but the majority have suffered alteration in some form, by injected human randomised words."
    }]

    title.append(data[0].title)
    heroPara.append(data[0].paragraph)
    console.log(data)
  }
  hero();


  function love_animals() {
    let title = $('#love_animals-title');
    let love_animalsPara = $('#love_animals-content');

    let data = [{
      title: "As a veterinarian and lover of animals.",
      paragraph: "Lorem Ipsum available but the majority have suffered alteration in some form, by injected human randomised words."
    }]

    title.append(data[0].title)
    love_animalsPara.append(data[0].paragraph)
    console.log(data)
  }
  love_animals();

  function care_services() {
    let title = $('#care_services-title');
    let care_servicesPara = $('#care_services-content');

    let data = [{
      title: 'Title Here',
      paragraph: 'Lorem Ipsum available but the majority have suffered alteration in some.'
    }]

    title.append(data[0].title)
    care_servicesPara.append(data[0].paragraph)

    let itemContent = [{
        imgName: 'vetrinarian4',
        title: 'Veterinarian',
        content: 'Lorem Ipsum available but the majority have suffered alteration in some.'
      },
      {
        imgName: 'vetrinarian3',
        title: 'Veterinarian',
        content: 'Lorem Ipsum available but the majority have suffered alteration in some.'
      },
      {
        imgName: 'vetrinarian2',
        title: 'Veterinarian',
        content: 'Lorem Ipsum available but the majority have suffered alteration in some.'
      },
      {
        imgName: 'vetrinarian1',
        title: 'Veterinarian',
        content: 'Lorem Ipsum available but the majority have suffered alteration in some.'
      },
      {
        imgName: 'vetrinarian5',
        title: 'Veterinarian',
        content: 'Lorem Ipsum available but the majority have suffered alteration in some.'
      },
      {
        imgName: 'vetrinarian6',
        title: 'Veterinarian',
        content: 'Lorem Ipsum available but the majority have suffered alteration in some.'
      },
    ]
    let itemWrapper = $(".care-service-wrapper");
    $.each(itemContent, function (index, item) {
      itemWrapper.append(`
    <div class="col-lg-4 col-md-4">
    <div class="card bg-transparent border-0 text-white text-center" >
        <div class="card-image">
            <img src="../images/${item.imgName}.png">
        </div>
        <div class="content pt-lg-4">
            <h4>${item.title}</h4>
            <p>${item.content}</p>
        </div>
    </div>
</div>
    `)
    })



  }
  care_services();

 function earcheck(){
   let title = $('#earcheck-title');
   let earcheckPara = $('#earcheck-content');

 let data = [{
   title:"As a Veterinarian and lover of animals",
   paragraph: "Lorem Ipsum available but the majority have suffered alteration in some form, by injected human randomised words."
      
 }]

 title.append(data[0].title)
 earcheckPara.append(data[0].paragraph)
 }
 earcheck()

 function dogs(){
  let title = $('#dogs-title');
  let dogsPara = $('#dogs-content'); 

  let data =[{
    title:"Title Here",
    paragraph: "Lorem Ipsum available but the majority have suffered alteration in some form, by injected human randomised words."

  }]
   title.append(data[0].title)
   dogsPara.append(data[0].paragraph)
   console.log(data)

   let itemContent = [{
    title: '$50',
    imgName:'standing-pug'
  },
  {
    title: '$40',
    imgName:'random-one'
  },
  {
    title: '$45',
    imgName:'labra'
  },
]

 let itemWrapper= $("#content-wrapper");
  $.each(itemContent, function (index, item){
    itemWrapper.append(`
    <div class="col-lg-4 col-md-12">
    <div class="card bg-warning border-0">
        <div class="card-image">
            <img src="images/${item.imgName}.png" class="img-fluid">
        </div>
        <div class="content">
            <div class="content d-flex justify-content-center">
                <h4 class="my-4 mx-3">${item.title}</h4>
            </div>
            <button class="btn bg-primary text-white custom-btn">Buy Now</button>
        </div>
    </div>
</div>
    `)
  })
 }
 dogs()

 function team(){
   let title = $('#team-title');
   let teamPara = $('#team-content');

   let data=[{
     title:"The vetcare team",
     paragraph:"Lorem Ipsum available but the majority have suffered alteration in some form, by injected human randomised words."
   }]

   title.append(data[0].title);
   teamPara.append(data[0].paragraph)

   let itemContent=[{
      title:"Jennifer Mullen",
      content:"VETERINARY",
      imgName:"jennifer_mullen",
   },
   {
    title:"Sheeran Collins",
    content:"ADMINISTRATION",
    imgName:"sheeran",
   },
   {
    title:"Jennifer Mullen",
    content:"VETERINARY",
    imgName:"mullen",
  }
  ]

  let itemWrapper= $("#team-wrapper");
  $.each(itemContent, function(index ,item){
    itemWrapper.append(`
    <div class="col-lg-4 col-md-12 ">
    <div class="card border-0">
        <div class="card-image">
            <img src="images/${item.imgName}.png" class="img-fluid">
        </div>
        <div class="content my-4">
            <h4>${item.title}</h4>
            <p>${item.content}</p>
            <ul class="d-flex justify-content-center">    
                <li><a href="" class="text-warning"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="" class="text-warning"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                <li><a href="" class="text-warning"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                <li><a href=""><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>
</div>
    `)
  })
 }
 team()

 function services_provide(){

  let itemContent=[{

    title:"+34793",
    content:"Happy Clients",
    imgName:"heart"
  },
  {
    title:"+45382",
    content:"Departments",
    imgName:"stethoscope"
  },
  {
    title:"+54762",
    content:"Vaccinations",
    imgName:"injection"
  }
]

let itemWrapper = $("#servicesprovide-wrapper")
  $.each(itemContent , function( index, item){
    itemWrapper.append(`
    <div class="col-lg-4 col-md-12">
    <div class="card bg-transparent border-0">
        <div class="card-image">
            <img src="images/${item.imgName}.png" class="img-fluid">
            <p class="my-md-3 my-lg-5">${item.title}</p>
            <h4>${item.content}</h4>
        </div>
    </div>
</div>
    `)
  })
 }
 services_provide()

 function recent_posts(){
  let title = $("#recent-title");
  let recentpostsPara= $("#recent-content")

  let data=[{
    title:"Recent Posts",
    paragraph:"Lorem Ipsum available but the mojo rity have suffered alteration in some form ."
  }]

  title.append(data[0].title);
  recentpostsPara.append(data[0].paragraph)

  let itemContent = [{
    title:"As a veterinarian and lover of animals.",
    date:"FEBRUARY 9 ,2020",
    content:"Lorem Ipsum available but the mojo rity have suffered alteration in some words which look.",
    imgName:"dog w nurse"
  },
  {
    title:"As a veterinarian and lover of animals.",
    date:"FEBRUARY 10,2020",
    content:"Lorem Ipsum available but the mojo rity have suffered alteration in some words which look.",
    imgName:"d-n"
  },
  {
    title:"As a veterinarian and lover of animals.",
    date:"FEBRUARY 11 ,2020",
    content:"Lorem Ipsum available but the mojo rity have suffered alteration in some words which look.",
    imgName:"eat"
  }
]

  let itemWrapper = $("#recent-wrapper");
  $.each(itemContent, function(index ,item){
    itemWrapper.append(`
    <div class="col-lg-4 col-md-12  ">
    <div class="box position-relative box-1">
        <img src="images/${item.imgName}.png">
        <div class="overlay  bg-transparent text-black-white d-none">
            <h3 class="my-4">${item.title}</h3>
            <h4 class= "text-info">${item.date}</h4>
            <p>${item.content}</p>
            <a href="">Read More</a>
        </div>
    </div>   
</div>
    `)
  }) 
 }
 recent_posts()
 
  function footer(){
    let itemContent=[{
      title :"About",
      content:"<li></li>"
              
    }
  ]
  }
  footer()

})
