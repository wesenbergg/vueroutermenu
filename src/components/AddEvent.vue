<template>
    <div>
        <b-alert v-if="message.type === 'success'" variant="success" show>{{message.text}}</b-alert>
        <b-alert v-if="message.type === 'error'" variant="danger" show>{{message.text}}</b-alert>

        <p class="homeText"> Syötä tapahtuma </p>

        <b-form-input size="lg" class="mb-3" v-model="title" placeholder="Tapahtuman nimi" :required="true" ref="title" ></b-form-input>
        <b-form-input size="lg" class="mb-3" v-model="author" placeholder="Järjestäjä" :required="true" ></b-form-input>
        <b-button size="lg" @click="submit">Tallenna</b-button>
    </div>
</template>
<script>
    export default {
    name: 'AddEvent',    
    data() {
        return {
            title: "",
            author: "",
            message: {
                type: '',
                text: ''
            },
        }
    },
    methods: {
        submit: function() {
            this.message = { type: "", text: "" }
            if (!this.title) this.message = { type: "error", text: "Korjaa otsikko: " + this.title }
            if (!this.author) this.message = { type: "error", text: "Korjaa järjestäjän nimi" + this.author }
            
            if(this.message.type === "") {
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
                    this.message = { type: "success", text: "Tapahtuma " + this.title + " lisätty kalenteriin" }
                    this.title = ""
                    this.author = ""
                    this.$refs.title.$el.focus()
                })
            }
            setTimeout(() => this.message = { type: "", text: "" }, 3500)

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