<template>
  <!-- Hero Section -->
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">Relájese y disfrute en </span>
              <span class="block text-red-600 xl:inline"
                >Porvenir Mini Market</span
              >
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Descubre un espacio acogedor donde podrás relajarte, disfrutar de
              deliciosas bebidas y saborear deliciosos bocados. Tu lugar
              perfecto para un descanso relajante.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <router-link
                  href="https://www.instagram.com/p/DEDzJ12pQvK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                >
                  Ganador de navidad
                </router-link>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <router-link
                  to="/about"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-amber-100 hover:bg-amber-200 md:py-4 md:text-lg md:px-10"
                >
                  Sobre nosotros
                </router-link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        :src="FondoImage"
        alt="Cozy minimarket interior"
      />
    </div>
  </div>

  <!-- Features Section -->
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-base text-red-600 font-semibold tracking-wide uppercase"
        >
          Nuestra promesa
        </h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          ¿Por qué elegir Porvenir MM?
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        >
          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white"
              >
                <CoffeeIcon class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Bebidas de calidad
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Disfrute de una amplia selección de cafés, cervezas y otras
              bebidas de primera calidad.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white"
              >
                <UtensilsIcon class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Bocadillos deliciosos
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Saboree nuestra selección de sabrosos bocados y comidas ligeras
              perfectas para cualquier momento del día.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white"
              >
                <ArmchairIcon class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Ambiente acogedor
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Relájese en nuestras cómodas áreas de estar, diseñadas para su
              comodidad y disfrute, con aire acondicionado y un ambiente
              agradable que invita al descanso.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white"
              >
                <SmileIcon class="h-6 w-6" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                Servicio amigable
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Nuestro personal está dedicado a garantizar que usted tenga una
              experiencia agradable y relajante.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <!-- Menu Highlights -->
  <div class="bg-warm-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center mb-8"
      >
        Aspectos destacados del menú
      </h2>
      <div
        class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8"
      >
        <div
          v-for="item in menuHighlights"
          :key="item.name"
          class="group relative"
        >
          <div
            class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
          >
            <img
              :src="item.imageSrc"
              :alt="item.name"
              class="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ item.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Special Offers -->
  <div class="bg-red-600">
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        <span class="block">¿Listo para ahorrar?</span>
        <span class="block">Consulte nuestras ofertas semanales.</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/sale"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-green-50"
          >
            Ver ofertas
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact/Location -->
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div
        class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8"
      >
        <div>
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Contáctenos
          </h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500">
              ¿Tienes preguntas? Nuestro equipo está aquí para ayudarte.
            </p>
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <PhoneIcon class="h-6 w-6 text-gray-400" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>+57 (310) 7971825</p>
              </div>
            </div>
            <div class="mt-6 flex">
              <div class="flex-shrink-0">
                <MailIcon class="h-6 w-6 text-gray-400" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>jstrguro@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 md:mt-0">
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Ubicación
          </h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500">
              Visítenos en nuestra conveniente ubicación.
            </p>
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <MapPinIcon class="h-6 w-6 text-gray-400" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>calle 14A-11</p>
                <p class="mt-1">Barrio el porvenir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div
        class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex space-x-6 md:order-2">
          <!-- <a href="#" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Facebook</span>
            <FacebookIcon class="h-6 w-6" />
          </a> -->
          <a
            href="https://www.instagram.com/porvenir_mm/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-300"
          >
            <span class="sr-only">Instagram</span>
            <InstagramIcon class="h-6 w-6" />
          </a>

          <!-- <a href="#" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Twitter</span>
            <TwitterIcon class="h-6 w-6" />
          </a> -->
        </div>
        <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
          &copy; 2024 Porvenir Mini Market. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
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
import FondoImage from "../assets/fondo.jpeg";
import Fotocerveza from "../assets/cerveza.jpeg";
import FotoCafe from "../assets/cafe.png";
import FotoConfiteria from "../assets/confiteria.png";

const news = ref([
  {
    id: 1,
    title: "Local Community Organizes Christmas Charity Drive",
    summary:
      "Residents come together to support families in need during the holiday season.",
    content:
      "In a heartwarming display of community spirit, local residents of Florencia, Caqueta have organized a Christmas charity drive to support families in need. The initiative, spearheaded by the Porvenir Mini Market, aims to collect food, toys, and essential items for distribution before December 25th. 'We want to ensure that every family in our community can enjoy a festive holiday season,' said Maria Gonzalez, the event organizer. Donation points have been set up across the city, and volunteers are working tirelessly to sort and package the items. The charity drive has already received overwhelming support, with many local businesses contributing generously.",
    author: "Carlos Rodriguez",
    date: "2023-12-15",
    category: "Local News",
    readTime: "3 min",
  },
  {
    id: 2,
    title: "Annual Christmas Parade Scheduled for Next Weekend",
    summary:
      "The beloved holiday tradition returns with new floats and performances.",
    content:
      "The annual Florencia Christmas Parade is set to dazzle residents next weekend, promising a spectacular display of holiday cheer. This year's parade will feature new, elaborately decorated floats, local school marching bands, and a special appearance by Santa Claus himself. The event, scheduled for December 18th, will begin at 7 PM and follow a route through the city center. 'We've been working hard to make this year's parade the best one yet,' said Event Coordinator Juan Perez. 'We have some surprises in store that we think will delight both children and adults.' Residents are advised to arrive early to secure the best viewing spots along the parade route.",
    author: "Ana Martinez",
    date: "2023-12-14",
    category: "Events",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Local Artisans Showcase Christmas Crafts at Weekend Market",
    summary:
      "Handmade decorations and gifts take center stage at the festive bazaar.",
    content:
      "This weekend, the Florencia Central Plaza will transform into a winter wonderland as local artisans gather to showcase their Christmas crafts. The festive bazaar will feature a wide array of handmade decorations, unique gifts, and holiday-themed treats. Visitors can expect to find intricate ornaments, hand-knitted scarves, scented candles, and much more. 'This market is a great opportunity for our local artists to share their talents and for residents to find one-of-a-kind gifts,' said Luisa Fernandez, the market organizer. The event will run from 10 AM to 8 PM on both Saturday and Sunday, with live music and food stalls adding to the festive atmosphere.",
    author: "Diego Sanchez",
    date: "2023-12-13",
    category: "Culture",
    readTime: "3 min",
  },
]);

const selectedArticle = ref(null);
const menuHighlights = ref([
  {
    name: "Cafe artezanal",
    description: "cafe de alta calidad",
    price: "$4.500.00",
    imageSrc: FotoCafe,
  },
  {
    name: "Cervezas nacionales",
    description: "Cerveza en lata de todo tipo",
    price: "$4.000.00 +",
    imageSrc: Fotocerveza,
  },
  {
    name: "Confiteria",
    description: "dulces y chucherias",
    price: "$2.000.00 +",
    imageSrc: FotoConfiteria,
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
