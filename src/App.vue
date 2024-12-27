<template>
  <div class="min-h-screen bg-warm-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex-shrink-0 flex items-center">
            <CoffeeIcon class="h-8 w-8 text-red-600" />
            
            <router-link
                  to="/"
                  class="ml-2 text-xl font-bold text-gray-800"
                >Porvenir Mini Market</router-link>
          </div>
          <div class="flex items-center">
            <div>
              <nav class="flex items-center">
                <router-link to="/" class="text-red-600 px-3 py-2"
                  >Inicio</router-link
                >
                <!-- <router-link to="/menu" class="text-red-600 px-3 py-2"
                  >Menu</router-link
                > -->
                <router-link to="/about" class="text-red-600 px-3 py-2"
                  >Nosotros</router-link
                >
                <!-- <router-link
                  :to="isDisabled ? '' : '/collection'"
                  class="text-red-600 px-3 py-2"
                  :class="{ 'opacity-50 pointer-events-none': isDisabled }"
                >
                  Colección
                </router-link> -->

                <router-link to="/policy" class="text-red-600 px-3 py-2"
                  >Politicas de uso</router-link
                >
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Aquí se mostrarán las vistas según la ruta activa -->
    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  CoffeeIcon,
  UtensilsIcon,
  ArmchairIcon,
  SmileIcon,
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-vue-next";

const menuHighlights = ref([
  {
    name: "Cafe artezanal",
    description: "cafe de alta calidad",
    price: "$4.500.00",
    imageSrc: "../src/assets/cafe.png",
  },
  {
    name: "Cervezas nacionales",
    description: "Cerveza en lata de todo tipo",
    price: "$4.000.00 +",
    imageSrc: "../src/assets/cerveza.jpeg",
  },
  {
    name: "Confiteria",
    description: "dulces y chucherias",
    price: "$2.000.00 +",
    imageSrc: "../src/assets/cerveza.jpeg",
  },
]);

const ambianceFeatures = ref([
  {
    name: "Comfortable Seating",
    description: "Plush chairs and cozy corners for ultimate relaxation.",
    icon: ArmchairIcon,
  },
  {
    name: "Ambient Lighting",
    description: "Soft, warm lighting to create a welcoming atmosphere.",
    icon: SmileIcon,
  },
  {
    name: "Free Wi-Fi",
    description: "Stay connected while you unwind.",
    icon: CoffeeIcon,
  },
  {
    name: "Quiet Zones",
    description: "Designated areas for those seeking peace and quiet.",
    icon: UtensilsIcon,
  },
  {
    name: "Outdoor Patio",
    description: "Enjoy fresh air and sunshine in our garden seating area.",
    icon: SmileIcon,
  },
  {
    name: "Board Games",
    description: "A selection of games for a fun time with friends.",
    icon: CoffeeIcon,
  },
]);
</script>
