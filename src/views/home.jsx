import React, { useRef } from "react";
import { firestore } from "../firebase.js";
import { addDoc, collection } from "@firebase/firestore";

export default function Home() {
    const messageRef = useRef();
    const collectionRef = collection(firestore, "messages");

    const handleSave = async(e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        let data = {
            message: messageRef.current.value
        }

        try {
            addDoc(collectionRef, data);
        } catch(e) {
            console.log(e);
        }
    }
    return (
        <div>
            <form onSubmit={handleSave}>
                <label>
                    Enter Message
                </label>
                <input type="text" ref={messageRef}></input>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}