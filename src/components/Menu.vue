<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Producer Menu</h1>
      
      <!-- Search input -->
      <div class="mb-6">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search producers..."
          class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <!-- Producer grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="producer in filteredProducers"
          :key="producer.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <img :src="producer.image" :alt="producer.name" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ producer.name }}</h2>
            <p class="text-gray-600 mb-2">{{ producer.location }}</p>
            <div class="flex items-center mb-2">
              <StarIcon class="h-5 w-5 text-yellow-400 mr-1" />
              <span class="text-gray-700">{{ producer.rating }}</span>
            </div>
            <p class="text-sm text-gray-500">{{ producer.description }}</p>
          </div>
          <div class="px-4 py-3 bg-gray-100">
            <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
              View Details
            </button>
          </div>
        </div>
      </div>
      
      <!-- No results message -->
      <div v-if="filteredProducers.length === 0" class="text-center text-gray-500 mt-8">
        No producers found matching your search.
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { StarIcon } from 'lucide-vue-next'
  
  // Sample producer data
  const producers = ref([
    {
      id: 1,
      name: "Green Fields Farm",
      location: "California, USA",
      rating: 4.5,
      description: "Organic vegetables and fruits",
      image: "../src/assets/cafe.png"
    },
    {
      id: 2,
      name: "Sunset Vineyards",
      location: "Tuscany, Italy",
      rating: 4.8,
      description: "Premium wines and grapes",
      image: "../src/assets/cafe.png"
    },
    {
      id: 3,
      name: "Mountain View Dairy",
      location: "Vermont, USA",
      rating: 4.3,
      description: "Fresh milk and artisanal cheeses",
      image: "../src/assets/cafe.png"
    },
    {
      id: 4,
      name: "Coastal Catch Seafood",
      location: "Maine, USA",
      rating: 4.6,
      description: "Sustainably sourced seafood",
      image: "../src/assets/cafe.png"
    },
    {
      id: 5,
      name: "Sunny Meadows Apiary",
      location: "New Zealand",
      rating: 4.7,
      description: "Organic honey and bee products",
      image: "../src/assets/cafe.png"
    },
    {
      id: 6,
      name: "Highland Cattle Co.",
      location: "Scotland, UK",
      rating: 4.4,
      description: "Premium beef and leather goods",
      image: "../src/assets/cafe.png"
    }
  ])
  
  const searchQuery = ref('')
  
  const filteredProducers = computed(() => {
    return producers.value.filter(producer => 
      producer.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      producer.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
  </script>