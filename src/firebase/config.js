import {initializeApp} from 'firebase/app'
import {collection, doc, getDocs, getFirestore, setDoc} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDAVjMaV1kIcyZWUVKqLWRWWOFevQAb1Rg",
    authDomain: "my-portfolio-1e685.firebaseapp.com",
    projectId: "my-portfolio-1e685",
    storageBucket: "my-portfolio-1e685.appspot.com",
    messagingSenderId: "222061442016",
    appId: "1:222061442016:web:3ef11de90a2177df197185",
    measurementId: "G-GNN50RZR1Q"
};

//init firebase
const app = initializeApp(firebaseConfig)

//init sevices
const db = getFirestore(app)

//collection ref
const colRef = collection(db,'Emails')

//get collection data
function getAllEmails(){
    getDocs(colRef).then((snapshot) => {
        let emails = []
        snapshot.docs.forEach(doc => {
            emails.push({...doc.data()})
        });
        return emails

    })
}

//send data to database
const sendNewEmail = async(sender, message, email) => {
    await setDoc(doc(db,"Emails",email),{
        sender: sender,
        message: message,
        email: email
    })
}

export {sendNewEmail}