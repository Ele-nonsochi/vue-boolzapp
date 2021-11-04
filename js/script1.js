Vue.config.devtools = true

new Vue({
    el: "#root",
    data: {
        contacts: [
            {
                name: "Giorgio",
                avatar: "img/avatar_1.jpg",
                messages: "ciao",
                lastdate: "09/09/2021",
            },
            {
                name: "David",
                avatar: "img/avatar_2.jpg",
                messages: "Arrivo tardi",
                lastdate: "23/09/2021",
            },
            {
                name: "Jack",
                avatar: "img/avatar_3.jpg",
                messages: "Domani ti chiamo",
                lastdate: "27/09/2021",
            },
            {
                name: "Emanuele",
                avatar: "img/avatar_4.jpg",
                messages: "Andiamo a prendere una birra?",
                lastdate: "31/09/2021",
            },

        ],
        newMessage: ""

    }
});
