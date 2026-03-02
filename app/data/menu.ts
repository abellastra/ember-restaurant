import { StaticImageData } from "next/image"
import ribs from "@/public/ribs.jpg"
import stake from "@/public/stake.jpg"
import burrata from "@/public/burrata.jpg"
import carpaccio from "@/public/carpaccio.jpg"
import lavacake from "@/public/lavacake.jpg"
import tiramisu from "@/public/tiramisu.jpg"

export interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: StaticImageData
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Costillas BBQ",
    description: "Costillas ahumadas 12 horas con salsa de la casa",
    price: 2800,
    category: "Principales",
    image: ribs
  },
  {
    id: 2,
    name: "Entraña a la parrilla",
    description: "Entraña prime con chimichurri y papas rústicas",
    price: 3200,
    category: "Principales",
    image: stake
  },
  {
    id: 3,
    name: "Burrata con tomates",
    description: "Burrata fresca con tomates cherry y albahaca",
    price: 1800,
    category: "Entradas",
    image: burrata
  },
  {
    id: 4,
    name: "Carpaccio de res",
    description: "Láminas finas de res con rúcula y parmesano",
    price: 1600,
    category: "Entradas",
    image: carpaccio
  },
  {
    id: 5,
    name: "Lava cake de chocolate",
    description: "Bizcochuelo tibio con centro líquido y helado de vainilla",
    price: 1200,
    category: "Postres",
    image: lavacake
  },
  {
    id: 6,
    name: "Tiramisú",
    description: "Clásico italiano con café espresso y mascarpone",
    price: 1100,
    category: "Postres",
    image: tiramisu
  }
]
