import { db } from "../lib/firebase.js";
import { collection, query, getDocs } from "firebase/firestore";

const q = query(collection(db, "products"));

export async function load() {
    const querySnapshot = await getDocs(q);

    let categories = ["pasta", "fruits and vegetables", "stationary"];
    let nestedProducts = {};

    categories.forEach(category => {
        nestedProducts[category] = querySnapshot.docs
            .filter(doc => doc.data().category === category)
            .map(doc => ({
                name: doc.data().name,
                price: doc.data().price,
                inStock: doc.data().inStock,
                image: doc.data().image,
                category: doc.data().category
            }));
    });

    return {
        products: nestedProducts
    };
}