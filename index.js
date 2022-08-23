'use strict'

const newspaper = {
    title: 'Header',
    articles: [
        {
        author: '1 article',
        date: '23-08-2022',
        text: 'lorem'
    },
    {
        author: '2 article',
        date: '23-08-2022',
        text: 'lorem'
    },
    {
        author: '3 article',
        date: '23-08-2022',
        text: 'lorem'
    },
    {
        author: '4 article',
        date: '23-08-2022',
        text: 'lorem'
    },
],
    showArticles: function() {
        this.articles.forEach(newPaperLog.bind(this))
    }
}

newspaper.showArticles();


function newPaperLog(article, index) {
    console.log(`${this.title} ${index} - ${article.author}`); // Втрата контексту this
}