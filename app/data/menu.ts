export interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Costillas BBQ",
    description: "Costillas ahumadas 12 horas con salsa de la casa",
    price: 2800,
    category: "Principales",
    image: "/images/ribs.jpg"
  },
  {
    id: 2,
    name: "Entraña a la parrilla",
    description: "Entraña prime con chimichurri y papas rústicas",
    price: 3200,
    category: "Principales",
    image: "/images/steak.jpg"
  },
  {
    id: 3,
    name: "Burrata con tomates",
    description: "Burrata fresca con tomates cherry y albahaca",
    price: 1800,
    category: "Entradas",
    image: "/images/burrata.jpg"
  },
  {
    id: 4,
    name: "Carpaccio de res",
    description: "Láminas finas de res con rúcula y parmesano",
    price: 1600,
    category: "Entradas",
    image: "/images/carpaccio.jpg"
  },
  {
    id: 5,
    name: "Lava cake de chocolate",
    description: "Bizcochuelo tibio con centro líquido y helado de vainilla",
    price: 1200,
    category: "Postres",
    image: "/images/lavacake.jpg"
  },
  {
    id: 6,
    name: "Tiramisú",
    description: "Clásico italiano con café espresso y mascarpone",
    price: 1100,
    category: "Postres",
    image: "/images/tiramisu.jpg"
  }
]