const products = [
    {
      id: 1,
      nombre: "Intel Core i9-11900K",
      precio: 805.654,
      stock: 10,
      descripcion: "Procesador Intel Core i9-11900K de 8 núcleos y 16 hilos con velocidad de reloj de hasta 5.3 GHz.",
      categoria: "Microprocesadores",
      imagen: "https://cdn-reichelt.de/bilder/web/xxl_ws/E200/BX8070811900K_01.png",
    },
    {
      id: 2,
      nombre: "AMD Ryzen 7 5800X",
      precio: 550.049,
      stock: 15,
      descripcion: "Procesador AMD Ryzen 7 5800X de 8 núcleos y 16 hilos con una frecuencia base de 3.8 GHz.",
      categoria: "Microprocesadores",
      imagen: "https://logg.api.cygnus.market/static/logg/Global/Procesador%20AMD%20Ryzen%207%205800X%204.7GHz%2032MB%20Zen3%20AM4/113632935e5149029426a0c61d8a8a6e.webp",
    },
    {
      id: 3,
      nombre: "Intel Core i5-11600K",
      precio: 330.999,
      stock: 20,
      descripcion: "Procesador Intel Core i5-11600K de 6 núcleos y 12 hilos con velocidad de reloj de hasta 4.9 GHz.",
      categoria: "Microprocesadores",
      imagen: "https://i0.wp.com/www.mastertech.com.py/wp-content/uploads/2022/10/0-2022-10-15T125833.486.png?fit=1080%2C1080&ssl=1",
    },
    {
      id: 4,
      nombre: "NVIDIA GeForce RTX 3080",
      precio: 636.429,
      stock: 8,
      descripcion: "Tarjeta gráfica NVIDIA GeForce RTX 3080 con 10 GB de memoria GDDR6X, ideal para gaming en 4K.",
      categoria: "Placas de Video",
      imagen: "https://static.gigabyte.com/StaticFile/Image/Global/1f7a4b7372688a9959a997aa486252e1/Product/25956/Png",
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
      imagen: "https://asset.msi.com/resize/image/global/product/product_16231384255f9127429228f84f47be3ae5725fdbe7.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    },
    {
      id: 7,
      nombre: "NZXT H510",
      precio: 999.999,
      stock: 25,
      descripcion: "Gabinete NZXT H510 ATX Mid Tower con un diseño minimalista y excelente flujo de aire.",
      categoria: "Gabinetes",
      imagen: "https://nzxt.com/assets/cms/34299/1632172731-h510flowwhite-1.png?auto=format&fit=crop&h=1000&w=1000",
    },
    {
      id: 8,
      nombre: "Corsair iCUE 4000X RGB",
      precio: 290.999,
      stock: 10,
      descripcion: "Gabinete Corsair iCUE 4000X RGB Mid Tower con iluminación RGB personalizable y panel lateral de vidrio templado.",
      categoria: "Gabinetes",
      imagen: "https://www.invidcomputers.com/images/000000000041308876573-base-4000x-rgb-config-Gallery-4000X-BLACK-01.png",
    },
    {
      id: 9,
      nombre: "Cooler Master MasterBox TD500",
      precio: 242.539,
      stock: 15,
      descripcion: "Gabinete Cooler Master MasterBox TD500 Mid Tower con iluminación ARGB y amplio espacio para gestión de cables.",
      categoria: "Gabinetes",
      imagen: "https://a.storyblok.com/f/281110/0784b7eca1/td500-mesh-black-gallery-1.png/m/960x0/smart",
    },
  ];
  
  export const fetchProducts = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };