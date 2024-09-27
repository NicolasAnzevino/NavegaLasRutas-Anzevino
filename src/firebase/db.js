import { getFirestore, collection, getDocs, doc, getDoc, setDoc, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export async function obtenerProductos() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];

  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });

  return products;
}

export async function obtenerProducto(id) {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Producto no encontrado");
  }
}

export async function crearOrden(order){
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
  } catch (error) {
    console.log(error);
  }
}
