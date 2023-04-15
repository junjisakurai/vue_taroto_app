const TarotCardApp = {
  data() {
    return {
      cards: [
        {
          name: 'The Fool',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/330px-RWS_Tarot_00_Fool.jpg',
          meaning: 'New beginnings, optimism, trust in life',
        },
        {
          name: 'The Magician',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/RWS_Tarot_01_Magician.jpg/512px-RWS_Tarot_01_Magician.jpg',
          meaning: 'Manifestation, resourcefulness, power, skill',
        },
        {
          name: 'The High Priestess',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg',
          meaning: 'Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science. Reversed: Passion, moral or physical ardor, conceit, surface knowledge.',
        },
        {
          name: 'The Emperor',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg',
          meaning: '4. THE EMPEROR.--Stability, power, protection, logic, realization; a great person; aid, reason, conviction also authority and will. Reversed: Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.',
        },
        {
          name: ' The Hanged Man',
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg',
          meaning: '12. THE HANGED MAN.—Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy. Reversed: Selfishness, the crowd, body politic.',
        },
        {
          name: 'The Devil',
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg',
          meaning: '15. THE DEVIL.—Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil. Reversed: Evil fatality, weakness, pettiness, blindness.',
        },
        {
          name: 'Death',
          image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg',
          meaning: '13. DEATH.—End, mortality, destruction, corruption; also, for a man, the loss of a benefactor; for a woman, many contrarieties;',
        },
        // add more cards here
      ],
      history: [],
      showCard: false,
      flipped: false,
      card: {},
      mouseX: 0,
      mouseY: 0,
      timeout: null,
    };
  },
mounted() {
  this.showRandomCard();
},
  methods: {
	showRandomCard() {
	  const index = Math.floor(Math.random() * this.cards.length);
	  this.card = this.cards[index];
	  this.showCard = true;
	  this.history.unshift(this.card);
	},
    flipCard() {
      this.flipped = !this.flipped;
    },
	rotateCard(event) {
	  let card_front = event.currentTarget.querySelector('.card-front');
	  let card_back = event.currentTarget.querySelector('.card-back');
	  let container = event.currentTarget;
	  let windowX = window.innerWidth / 2;
	  let windowY = window.innerHeight / 2;
	  let rect = container.getBoundingClientRect();
	  let mouseX = event.clientX - rect.left - rect.width / 2;
	  let mouseY = event.clientY - rect.top - rect.height / 2;
	  
	  let transform_style = 0;
	  if (mouseX > -rect.width / 2 && mouseX < rect.width / 2 && mouseY > -rect.height / 2 && mouseY < rect.height / 2) {
	    transform_style = `rotateY(${-mouseX / 10}deg) rotateX(${mouseY / 10}deg)`;
	  } else {
	    transform_style = `rotateY(0deg) rotateX(0deg)`;
	  }
	  card_front.style.transform = transform_style;
	  card_back.style.transform = transform_style;
	},
  },
};

Vue.createApp(TarotCardApp).mount('#app');
