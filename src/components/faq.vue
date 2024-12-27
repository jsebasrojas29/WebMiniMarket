<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Preguntas frecuentes</h1>
  
      <div class="max-w-3xl mx-auto">
        <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
          <button
            @click="toggleFaq(index)"
            class="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200 ease-in-out"
            :aria-expanded="faq.isOpen"
            :aria-controls="`faq-answer-${index}`"
          >
            <span class="text-lg font-semibold text-gray-800">{{ faq.question }}</span>
            <ChevronDownIcon
              :class="['h-6 w-6 transition-transform duration-200', { 'transform rotate-180': faq.isOpen }]"
            />
          </button>
          <div
            v-show="faq.isOpen"
            :id="`faq-answer-${index}`"
            class="bg-white mt-2 p-4 rounded-lg shadow-md"
          >
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
  
      <!-- <div class="mt-12 text-center">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Still have questions?</h2>
        <p class="text-gray-600 mb-6">If you couldn't find the answer you were looking for, please contact us.</p>
        <button
          @click="goToContactPage"
          class="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out inline-flex items-center"
        >
          <MailIcon class="h-5 w-5 mr-2" />
          Contact Us
        </button>
      </div> -->
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { ChevronDownIcon, MailIcon } from 'lucide-vue-next'
  
  const faqs = ref([
    {
      question: "¿El minimarket ofrece servicio a domicilio?",
      answer: "No, por el momento no contamos con servicio a domicilio. Todas las compras deben realizarse directamente en el establecimiento.",
      isOpen: false
    },
    {
      question: "¿Cuál es el horario de cierre del minimarket?",
      answer: "El horario de cierre puede variar dependiendo de la afluencia de clientes. Si deseas confirmar el horario del día, te recomendamos comunicarte directamente con el minimarket.",
      isOpen: false
    },
    {
      question: " ¿Qué sucede si dejo un objeto olvidado en el establecimiento?",
      answer: "Los objetos olvidados se guardarán por un período máximo de 30 días. Pasado este tiempo, el minimarket no se hace responsable de los mismos.",
      isOpen: false
    },
    {
      question: "¿Qué ocurre si se causan daños en las instalaciones?",
      answer: "Cualquier daño ocasionado en las instalaciones deberá ser cubierto por el responsable, según el costo de reparación o reposición.",
      isOpen: false
    },
    {
      question: "¿Qué sucede si un cliente ensucia exageradamente los baños, por ejemplo, debido a vómito?",
      answer: "En casos donde el baño sea ensuciado de forma exagerada, como por vómito, el cliente deberá cubrir los costos de limpieza adicionales.",
      isOpen: false
    }
  ])
  
  const toggleFaq = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
  }
  
  const goToContactPage = () => {
    // This function would typically use Vue Router to navigate to the contact page
    console.log('Navigating to contact page...')
    // For demonstration, let's just show an alert
    alert('Navigating to contact page...')
  }
  </script>
  
  