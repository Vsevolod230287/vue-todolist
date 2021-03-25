// Applicare l'autoplay allo slider: ogni 3 secondi,
// cambia immagine automaticamente.

var app = new Vue({
  el: '#root',
  data: {
    inputTxt: '',

    todos: [{
        title: 'Fare la spesa',
        status: 'todo'
      },
      {
        title: 'Fare una chiamata',
        status: 'todo'
      },
      {
        title: 'Fare i compiti',
        status: 'todo'
      }
    ]

  },
  computed: {

  },
  methods: {
    inserisci: function() {
      if (this.inputTxt != '') {
        let obj = {
          title: this.inputTxt,
          status: 'todo'
        }

        this.todos.push(obj);
        this.inputTxt = ''
      }
    },
    barare: function (i) {
    this.todos[i].status = 'done'
  },
  remove: function (i) {
   this.todos.splice(i, 1)
 },
 edit: function (todo, i) {
  this.inputTxt = todo.title
  this.remove(i);
 }

  }

})
