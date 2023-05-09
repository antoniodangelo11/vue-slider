const app = Vue.createApp({
  data() {
    return {
      activeIndex: 0,
      sliderDirection: 1,
      isAutorun: true,
      idAutorun: null,
      autorunTime: 3000,
      arrImages: [
        {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        }, 
        {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        }, 
        {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        }, 
        {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        }, 
        {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        },
      ],
    };
  },
  methods: {
    // Per accedere ad una funzione o un data, usare sempre "THIS."
    prevSlide() {
      this.activeIndex--;
      if (this.activeIndex < 0) {
        this.activeIndex = this.arrImages.length - 1;
      }
    },
    
    nextSlide() {
      this.activeIndex++;
      if (this.activeIndex >= this.arrImages.length) {
        this.activeIndex = 0;
      }
    },

    clickActiveImg(index) {
      this.activeIndex = index;
    },

    runSlider() {
      if (this.isAutorun) {
        this.idAutorun = setInterval(
          () => this.sliderDirection == 1 ? this.nextSlide() : this.prevSlide(), this.autorunTime
        );
      }
      else {
        clearInterval(this.idAutorun);
      }
    },

    stopAutorun() {
      clearInterval(this.idAutorun);
    }
  },
  
  mounted() {
    this.runSlider();
  },
});
  
app.mount(".carousel");