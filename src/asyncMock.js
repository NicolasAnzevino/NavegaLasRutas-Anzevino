const products = [
    {
      id: 1,
      nombre: "Intel Core i9-11900K",
      precio: 805.654,
      stock: 10,
      descripcion: "Procesador Intel Core i9-11900K de 8 núcleos y 16 hilos con velocidad de reloj de hasta 5.3 GHz.",
      categoria: "Microprocesadores",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_677183-MLA54812400475_042023-O.webp",
    },
    {
      id: 2,
      nombre: "AMD Ryzen 7 5800X",
      precio: 550.049,
      stock: 15,
      descripcion: "Procesador AMD Ryzen 7 5800X de 8 núcleos y 16 hilos con una frecuencia base de 3.8 GHz.",
      categoria: "Microprocesadores",
      imagen: "https://s3-sa-east-1.amazonaws.com/saasargentina/0fzD0uu3OJ7jrxYrBkEf/imagen",
    },
    {
      id: 3,
      nombre: "Intel Core i5-11600K",
      precio: 330.000,
      stock: 20,
      descripcion: "Procesador Intel Core i5-11600K de 6 núcleos y 12 hilos con velocidad de reloj de hasta 4.9 GHz.",
      categoria: "Microprocesadores",
      imagen: "https://s3-sa-east-1.amazonaws.com/saasargentina/JCW8sCBDvIH2QxSosGzw/imagen",
    },
    {
      id: 4,
      nombre: "NVIDIA GeForce RTX 3080",
      precio: 636.429,
      stock: 8,
      descripcion: "Tarjeta gráfica NVIDIA GeForce RTX 3080 con 10 GB de memoria GDDR6X, ideal para gaming en 4K.",
      categoria: "Placas de Video",
      imagen: "https://i.ebayimg.com/images/g/ChsAAOSwXrpfbI4~/s-l500.jpg",
    },
    {
      id: 5,
      nombre: "AMD Radeon RX 6800 XT",
      precio: 649.999,
      stock: 12,
      descripcion: "Tarjeta gráfica AMD Radeon RX 6800 XT con 16 GB de memoria GDDR6, diseñada para un rendimiento máximo.",
      categoria: "Placas de Video",
      imagen: "https://static.gigabyte.com/StaticFile/Image/Global/c8cc80789047a6bf1672bf22d108e7e9/Product/26757/Png",
    },
    {
      id: 6,
      nombre: "NVIDIA GeForce RTX 3060 Ti",
      precio: 859.999,
      stock: 18,
      descripcion: "Tarjeta gráfica NVIDIA GeForce RTX 3060 Ti con 8 GB de memoria GDDR6, excelente para juegos en 1440p.",
      categoria: "Placas de Video",
      imagen: "https://static.gigabyte.com/StaticFile/Image/Global/eb7b608094523857a3194d646362386e/Product/26894/Png",
    },
    {
      id: 7,
      nombre: "NZXT H510",
      precio: 999.999,
      stock: 25,
      descripcion: "Gabinete NZXT H510 ATX Mid Tower con un diseño minimalista y excelente flujo de aire.",
      categoria: "Gabinetes",
      imagen: "https://i.ebayimg.com/images/g/z7EAAOSwpr9hui-Q/s-l500.jpg",
    },
    {
      id: 8,
      nombre: "Corsair iCUE 4000X RGB",
      precio: 290.000,
      stock: 10,
      descripcion: "Gabinete Corsair iCUE 4000X RGB Mid Tower con iluminación RGB personalizable y panel lateral de vidrio templado.",
      categoria: "Gabinetes",
      imagen: "https://spacegamer.com.ar/img/Public/1058-producto-d-nq-np-933100-mla43569764717-092020-w-6130.jpg",
    },
    {
      id: 9,
      nombre: "Cooler Master MasterBox TD500",
      precio: 242.539,
      stock: 15,
      descripcion: "Gabinete Cooler Master MasterBox TD500 Mid Tower con iluminación ARGB y amplio espacio para gestión de cables.",
      categoria: "Gabinetes",
      imagen: "https://http2.mlstatic.com/D_721344-MLA77588329914_072024-C.jpg",
    },
  ];
  
  export const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };