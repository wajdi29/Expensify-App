import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCrk3__tKfoFoN1iyyWPZ3-w22wGWq9JHA",
    authDomain: "expensify-9a53e.firebaseapp.com",
    databaseURL: "https://expensify-9a53e.firebaseio.com",
    projectId: "expensify-9a53e",
    storageBucket: "expensify-9a53e.appspot.com",
    messagingSenderId: "2815567488",
    appId: "1:2815567488:web:ae94ef42906fe5226ae865",
    measurementId: "G-DPEKY0KFQG"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database()

export { firebase, database as default }








































// Chiled -removed
// database.ref('Expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// // child_changed
// database.ref('Expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// // Child added 
// database.ref('Expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// database.ref('Expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnaphot) => {
//         expenses.push({
//             id: childSnaphot.key,
//             ...childSnaphot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('Expenses').once('value').then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnaphot) => {
//         expenses.push({
//             id: childSnaphot.key,
//             ...childSnaphot.val()
//         })
//     })
//     console.log(expenses)
// })
// database.ref('Expenses').push({
//     description: 'Playstation 5',
//     amount: 500,
//     note: 'I need it bro',
//     createdAt: 566556623222555
// })
// database.ref('notes/-MKa4nJC7iYsfL6Y0JFp').remove()
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React, Angular, python'
// })
// database.ref('notes').set(notes)
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })
// database.ref().update({
//     'job/company': 'Microsoft',
//     'job/title': 'Gardner'
// })
// database
//     .ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data: ', e)
//     })
// database.ref().set({
//     name: 'wajdi',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'google'
//     },
//     location: {
//         city: 'El Mourouj ',
//         country: 'Tunisia'
//     }
// }).then(() => {
//     console.log('data is saved for now')
// }).catch((e) => {
//     console.log('this failed bro: ', e)
// })
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
// })
// database.ref().remove().then(() => {
//     console.log('is single was removed')
// }).catch((e) => {
//     console.log(e, 'failed to removce')
// })