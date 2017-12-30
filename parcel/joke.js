// module.exports = {
//     name: "joke doe",
//     getOne: function () {
//         return new Promise((resolve, reject) => {
//
//             fetch("http://api.icndb.com/jokes/random")
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data)
//                     resolve(data.value.joke )
//                 })
//
//         })
//     }
// }

import axios from 'axios'

export const joke = {
    getOne: function () {
        return new Promise((resolve, reject) => {

            axios.get("http://api.icndb.com/jokes/random")
                .then(res => {
                    console.log(res)
                    resolve(res.data.value.joke)
                })

        })
    }
}