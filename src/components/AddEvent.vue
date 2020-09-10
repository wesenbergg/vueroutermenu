<template>
    <div>
        <p class="homeText"> Syötä tapahtuma </p>
        
        <b-form-input size="lg" class="mb-3" v-model="title" placeholder="Tapahtuman nimi"></b-form-input>
        <b-form-input size="lg" class="mb-3" v-model="author" placeholder="Järjestäjä"></b-form-input>
        <b-button size="lg" @click="submit">Tallenna</b-button>
    </div>
</template>
<script>
    export default {
    name: 'AddEvent',
    data() {
        return {
            title: "",
            author: ""
        }
    },
    methods: {
        submit: function() {
            fetch('http://localhost:3001/posts', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        title: this.title,
                        author: this.author,
                        date: new Intl.DateTimeFormat('fi-FI').format(new Date()),
                        id: Math.floor(Math.random() * 99999) + 5
                    })
            })
            .then(() => {
                this.title = ""
                this.author = ""
            })
        }
    }
};
</script>
<style scoped>
    .homeText{
        font-size: 35px;
        text-align: left;
        font-size: 150%;
        padding-top: 1rem;
    }
</style>