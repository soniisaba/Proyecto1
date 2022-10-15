const { createApp } = Vue

createApp({
  data() {
    return {
      cafes: []
    }
  },
  methods: {
    fetchData(url) {

        fetch(url)
            .then(response => response.json())
            .then(data => { 
                this.cafes=data  // guarda en  array drinks  obtenido del json dl a tributo drikk
                console.log(this.cafes)
            })

    }
  },
  created(){

    this.fetchData("https://api.sampleapis.com/coffee/hot") 
  }

}).mount('#app')