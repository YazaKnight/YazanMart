<script>
    import { db } from "../lib/firebase";
    import { collection, doc, getDoc, setDoc } from "firebase/firestore"; 

    const productsRef = collection(db, "products");
    let products = [];

    export async function getProducts() {
        const docRef = doc(db, "products", "mobiles");
        products = await getDoc(docRef);
        products = products.data();
    }

    getProducts();
</script>

<h1>Welcome to SvelteKit</h1>
<p>From db: {products.name}, {products.price}</p>
