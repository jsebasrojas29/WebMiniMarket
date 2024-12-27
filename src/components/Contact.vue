<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold mb-4">Send us a message</h2>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                v-model="form.message"
                id="message"
                rows="4"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <!-- Contact Information and Map -->
        <div>
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
            <div class="space-y-3">
              <div class="flex items-center">
                <MapPinIcon class="h-5 w-5 text-blue-500 mr-2" />
                <span>123 Producer Street, Farmville, AG 12345</span>
              </div>
              <div class="flex items-center">
                <PhoneIcon class="h-5 w-5 text-blue-500 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div class="flex items-center">
                <MailIcon class="h-5 w-5 text-blue-500 mr-2" />
                <span>contact@producermarket.com</span>
              </div>
              <div class="flex items-center">
                <ClockIcon class="h-5 w-5 text-blue-500 mr-2" />
                <span>Mon-Fri: 9am-5pm, Sat: 10am-2pm</span>
              </div>
            </div>
          </div>
          
          <!-- Map Placeholder -->
          <div class="bg-gray-200 rounded-lg shadow-md p-4 h-64 flex items-center justify-center">
            <MapIcon class="h-16 w-16 text-gray-400" />
            <span class="ml-2 text-gray-600">Map placeholder</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, MapIcon } from 'lucide-vue-next'
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  })
  
  const submitForm = () => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value)
    // Reset form after submission
    form.value = { name: '', email: '', message: '' }
    // You could also show a success message to the user here
    alert('Thank you for your message. We will get back to you soon!')
  }
  </script>