// const joke = require('./joke')
import {joke} from './joke';
import $ from 'jquery';
import fs from 'fs';

joke.getOne().then(joke => {
    console.log(joke)
    $('#joke').text(joke)
    // document.getElementById("joke").innerHTML = joke
})

const copy = fs.readFileSync(__dirname + "/copyright.txt", 'utf8')

$("#copy").text(copy)
