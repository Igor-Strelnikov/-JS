let images = [{
    img: "../Images/2-projects.jpg",
    title: "Rostov-on-Don, Admiral"
    //city: "Rostov-on-Don LCD admiral",
    //apartment_area: "81 m2",
    //repair_time: "3.5 months",
    //repair_cost: "Upon request"
  }, {
    img: "../Images/2-projects-2.jpg",
    title: "Sochi Thieves"
    //city: "Sochi Thieves",
    //apartment_area: "105 m2",
    //repair_time: "4 months",
    //repair_cost: "Upon request"
  }, {
    img: "../Images/2-projects-3.jpg",
    title: "Rostov-on-Don Patriotic"
    //city: "Rostov-on-Don Patriotic",
    //apartment_area: "93 m2",
    //repair_time: "3 months",
    //repair_cost: "Upon request"
  }];

const title = document.querySelectorAll('.projects__right-part__title')
const img = document.querySelectorAll('.projects__photo')
  
const setEntity = (index) => {
  title.innerText = images[index].title
  img.style.backgroundImage = `url(${images[index].img})`
}

const prev = document.querySelector('.projects__nav-button-left')
const next = document.querySelector('.projects__nav-button-right')
let currentIndex = 0

next.addEventListener('click', () => {
  setEntity(currentIndex + 1);
  currentIndex += 1;
}