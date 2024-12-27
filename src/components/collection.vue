<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Clothing Collection</h1>
  
      <div class="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <!-- Filter dropdown -->
        <div class="relative">
          <select
            v-model="selectedCategory"
            @change="filterClothes"
            class="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
          <ChevronDownIcon class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
  
        <!-- Sort dropdown -->
        <div class="relative">
          <select
            v-model="sortOption"
            @change="sortClothes"
            class="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Sort by Name</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
          <ChevronDownIcon class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="item in displayedClothes"
          :key="item.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <img :src="item.image" :alt="item.name" class="w-full h-64 object-cover" />
          <div class="p-4">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">{{ item.name }}</h2>
            <p class="text-gray-600 mb-2">{{ item.category }}</p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-green-600">${{ item.price.toFixed(2) }}</span>
              <button
                @click="addToCart(item)"
                class="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out flex items-center"
              >
                <ShoppingCartIcon class="h-4 w-4 mr-1" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <div v-if="displayedClothes.length === 0" class="text-center text-gray-500 mt-8">
        No items found in this category.
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { ChevronDownIcon, ShoppingCartIcon } from 'lucide-vue-next'
  
  const clothes = ref([
    { id: 1, name: "Classic White T-Shirt", category: "T-Shirts", price: 19.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Slim Fit Jeans", category: "Pants", price: 49.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 3, name: "Floral Summer Dress", category: "Dresses", price: 39.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 4, name: "Leather Jacket", category: "Jackets", price: 99.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 5, name: "Striped Polo Shirt", category: "T-Shirts", price: 29.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 6, name: "Khaki Chino Pants", category: "Pants", price: 44.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 7, name: "Maxi Skirt", category: "Skirts", price: 34.99, image: "/placeholder.svg?height=300&width=300" },
    { id: 8, name: "Denim Jacket", category: "Jackets", price: 59.99, image: "/placeholder.svg?height=300&width=300" },
  ])
  
  const categories = computed(() => {
    return [...new Set(clothes.value.map(item => item.category))]
  })
  
  const selectedCategory = ref('')
  const sortOption = ref('name')
  
  const filterClothes = () => {
    // This function is called when the category filter changes
    // The actual filtering is done in the displayedClothes computed property
  }
  
  const sortClothes = () => {
    // This function is called when the sort option changes
    // The actual sorting is done in the displayedClothes computed property
  }
  
  const displayedClothes = computed(() => {
    let filtered = selectedCategory.value
      ? clothes.value.filter(item => item.category === selectedCategory.value)
      : clothes.value
  
    switch (sortOption.value) {
      case 'priceLow':
        return filtered.sort((a, b) => a.price - b.price)
      case 'priceHigh':
        return filtered.sort((a, b) => b.price - a.price)
      default:
        return filtered.sort((a, b) => a.name.localeCompare(b.name))
    }
  })
  
  const addToCart = (item) => {
    // This function would typically add the item to a shopping cart
    console.log('Adding to cart:', item)
    // For demonstration, let's just show an alert
    alert(`Added ${item.name} to cart!`)
  }
  </script>
  
  