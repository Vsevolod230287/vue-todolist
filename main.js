// Applicare l'autoplay allo slider: ogni 3 secondi,
// cambia immagine automaticamente.

var app = new Vue({
  el: '#root',
  data: {
    inputTxt: '',

    todos: []

  },
  computed: {
    todosComputed: function() {
      let todosDone = this.todos.filter((todo) => todo.status == 'done');
      let todosTodo = this.todos.filter((todo) => todo.status == 'todo');
      return [...todosTodo, ...todosDone]
    }
  },
  mounted: function() {
    document.getElementById("input").focus();
  },
  methods: {
    inserisci: function() {
      console.log(app.inserisci) // => 'eybdooG'
      if (this.inputTxt != '') {
        let obj = {
          title: this.inputTxt,
          status: 'todo'
        }
        this.todos.push(obj);
        this.inputTxt = '';
        document.getElementById('input').focus();
      }
    },
    barare: function(todo) {
      let index = this.todos.indexOf(todo);
      this.todos[index].status = 'done';
    },
    remove: function(todo) {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    edit: function(todo) {
      this.inputTxt = todo.title
      this.remove(todo);
      document.getElementById('input').focus();
    }


  }


})
