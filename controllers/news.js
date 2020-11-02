const fetch = require('node-fetch');
const {response} = require('express')

const getNews = async (req, res = response) => {
    let totalPages;
    const maxPages = 50;
    const pageSize = 10;
    const baseUrl = 'https://newsapi.org/v2/top-headlines';
    const NEWS_API_KEY = process.env.NEWS_API_KEY;

    const {page = 1, country = 'mx'} = req.query; //GET

    const url = `${baseUrl}?country=${country}&pageSize=${pageSize}&page=${page}&apiKey=${NEWS_API_KEY}`;

    try {
        const response = await fetch(url)
        const result = await response.json();

        totalPages = result.totalResults < maxPages ? result.totalResults : maxPages;

        // res.locals.news = {
        res.json({
            ok: true,
            articles: result.articles,
            totalPages,
            pageSize
        });

    } catch (err) {
        res.status(500).json({
            ok: false,
            msg: 'Fail news api'
        });
        console.log(err)
    }
}


module.exports = {
    getNews
};
