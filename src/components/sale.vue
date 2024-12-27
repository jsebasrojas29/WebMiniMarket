<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Ofertas actuales</h1>
  
      <div v-if="offers.length === 0" class="bg-white rounded-lg shadow-md p-8 text-center">
        <ShoppingBagIcon class="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h2 class="text-2xl font-semibold text-gray-700 mb-2">No hay ofertas disponibles</h2>
        <p class="text-gray-600 mb-4">
          Actualmente no hay ofertas activas. ¡Vuelva a visitarnos más tarde para ver ofertas interesantes!
        </p>
        <button 
          @click="refreshOffers" 
          class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out flex items-center justify-center mx-auto"
        >
          <RefreshCwIcon class="h-5 w-5 mr-2" />
         refrescar ofertas
        </button>
      </div>
  
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="offer in offers" 
          :key="offer.id" 
          class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <img :src="offer.image" :alt="offer.title" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ offer.title }}</h2>
            <p class="text-gray-600 mb-2">{{ offer.description }}</p>
            <div class="flex items-center justify-between mb-2">
              <span class="text-2xl font-bold text-green-600">${{ offer.price.toFixed(2) }}</span>
              <span class="text-sm text-gray-500">Valid until: {{ offer.validUntil }}</span>
            </div>
            <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
              Claim Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { ShoppingBagIcon, RefreshCwIcon } from 'lucide-vue-next'
  
  const offers = ref([
    // Sample offer data
    // Uncomment and modify these to show offers
    /*
    {
      id: 1,
      title: "Summer Vegetable Bundle",
      description: "Get a variety of fresh summer vegetables at a discounted price!",
      price: 24.99,
      validUntil: "2023-08-31",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 2,
      title: "Organic Fruit Box",
      description: "A selection of seasonal organic fruits delivered to your doorstep.",
      price: 34.99,
      validUntil: "2023-09-15",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 3,
      title: "Farm-Fresh Egg Carton",
      description: "One dozen farm-fresh eggs from free-range chickens.",
      price: 5.99,
      validUntil: "2023-08-20",
      image: "/placeholder.svg?height=200&width=300"
    }
    */
  ])
  
  const refreshOffers = () => {
    // This function would typically fetch new offers from an API
    console.log('Refreshing offers...')
    // For demonstration, let's just show an alert
    alert('Checking for new offers... None available at this time.')
  }
  </script>