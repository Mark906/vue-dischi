var app = new Vue ({
    el: "#wrapper",
    data: {
        music: [],
        genere: [],
        title: 'Elenco canzoni:',
        selected: ''
    },
    mounted(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((risposta) => {
            console.log(risposta);
            this.music = risposta.data.response;

            this.music.forEach((item) => {
                if(!this.genere.includes(item.genre)){
                    this.genere.push(item.genre)
                }
            });


            console.log(this.music);
        });
    },
    methods: {
        risposta(){
            console.log(this.music);
            console.log(this.genere);
        }

    }

})
