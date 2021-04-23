const menuOpen = document.querySelector('.menu__open')
const ulList = document.querySelector('.nav__list')
const menuClose = document.querySelector('.menu__close')
const statistics = document.querySelectorAll('.statistics__tools')

window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4

  statistics.forEach(stat=>{
    const statTop = stat.getBoundingClientRect().top

    if(statTop < triggerBottom){
      stat.classList.add('show')
    }else{
      stat.classList.remove('show')
    }
  })
}

menuOpen.addEventListener('click', ()=>{
  ulList.classList.add('active')
})

menuClose.addEventListener('click', ()=>{
  ulList.classList.remove('active')
})

class Typing{
  constructor(props) {
    this.el = document.querySelector(props.el)
    if(this.el.querySelector('*'))
    throw new Error('Element includes Anpther Thml elements')
    this.text = this.el.innerHTML.trim();
    this.el.innerHTML = "";
    this.time = props.interval;
    setTimeout(() => this.writeLetter(), props.delay);
  }

  writeLetter(i = 0) {
    this.el.innerHTML += this.text[i]
    if (this.el.innerHTML === this.text) return;
    setTimeout(() => this.writeLetter(i + 1), this.time);
  }
}
new Typing ({
  el: '.section__intro-title',
  interval: 200,
  delay: 1000,
});