<template>
    <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div class="p-6">
          <h1 class="text-3xl font-bold text-gray-900 mb-6">Políticas de Uso del Minimarket: Consumo de Alcohol</h1>
          
          <div class="mb-4">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar políticas..."
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div v-for="(policy, index) in filteredPolicies" :key="index" class="mb-4">
            <div
              @click="togglePolicy(index)"
              class="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-t-md"
            >
              <h2 class="text-lg font-semibold text-gray-700">{{ policy.title }}</h2>
              <svg
                :class="{ 'transform rotate-180': openPolicies[index] }"
                class="w-5 h-5 text-gray-500 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div v-show="openPolicies[index]" class="p-4 bg-white border border-t-0 border-gray-200 rounded-b-md">
              <ul class="list-disc pl-5 space-y-2">
                <li v-for="(subPolicy, subIndex) in policy.subPolicies" :key="subIndex" class="text-gray-700">
                  {{ subPolicy }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const policies = [
    {
      title: '1. Responsabilidad y Cumplimiento Legal',
      subPolicies: [
        '1.1. Edad mínima para comprar alcohol: La venta de alcohol está estrictamente limitada a personas mayores de edad, conforme a las leyes locales. Será obligatorio presentar una identificación oficial válida al momento de la compra.',
        '1.2. Normativa local: El minimarket cumplirá con todas las regulaciones locales relacionadas con la venta y consumo de bebidas alcohólicas.'
      ]
    },
    {
      title: '2. Horarios de Venta',
      subPolicies: [
        '2.1. Restricciones de horario: La venta de alcohol está permitida únicamente durante los horarios establecidos por la legislación local.',
        '2.2. Días restringidos: En caso de prohibiciones específicas en ciertos días (como elecciones o festividades religiosas), la venta de alcohol será suspendida.'
      ]
    },
    {
      title: '3. Conducta de los Clientes',
      subPolicies: [
        '3.1. Prohibición de fumar: No se permite fumar dentro del minimarket ni en las inmediaciones, en cumplimiento de las normativas locales de salud y seguridad.',
        '3.2. Conducta adecuada: Se reserva el derecho de admisión y permanencia. Clientes que muestren conductas inapropiadas, como estar visiblemente intoxicados o generar molestias, podrán ser retirados del lugar.'
      ]
    },
    {
      title: '4. Promociones y Publicidad',
      subPolicies: [
        '4.1. Consumo responsable: Toda publicidad y promociones de bebidas alcohólicas incluirán mensajes que fomenten el consumo responsable.',
        '4.2. Limitaciones en promociones: Las promociones no podrán incentivar el consumo excesivo de alcohol.'
      ]
    },
    {
      title: '5. Venta Responsable',
      subPolicies: [
        '5.1. Negativa a vender: El minimarket se reserva el derecho de negar la venta de alcohol si se considera que la transacción podría resultar en un uso indebido o ilegal.',
        '5.2. Venta limitada: Se podrán establecer límites en la cantidad de alcohol que un cliente puede adquirir en una sola compra.'
      ]
    },
    {
      title: '6. Capacitación del Personal',
      subPolicies: [
        '6.1. Entrenamiento obligatorio: El personal del minimarket será capacitado regularmente en la legislación vigente y en prácticas de venta responsable.',
        '6.2. Identificación de riesgos: Se enseñará a los empleados a identificar signos de intoxicación y a manejar situaciones conflictivas de manera profesional.'
      ]
    },
    {
      title: '7. Devoluciones y Cambios',
      subPolicies: [
        '7.1. Restricciones: No se aceptarán devoluciones ni cambios de bebidas alcohólicas, salvo en caso de defectos de fabricación debidamente comprobados.',
        '7.2. Conservación adecuada: Los productos devueltos deberán cumplir con los estándares de conservación y no haber sido abiertos.'
      ]
    },
    {
      title: '8. Responsabilidad Social',
      subPolicies: [
        '8.1. Prevención de consumo indebido: El minimarket se compromete a colaborar con iniciativas que fomenten la prevención del consumo de alcohol en menores y conductores.',
        '8.2. Apoyo a la comunidad: Se buscará fomentar una relación positiva con la comunidad promoviendo actividades educativas y preventivas relacionadas con el alcohol.'
      ]
    },
    {
      title: '9. Seguridad y Privacidad',
      subPolicies: [
        '9.1. Protección de datos: Los datos personales recopilados, como identificación, se manejarán conforme a las leyes de protección de datos.',
        '9.2. Seguridad en el establecimiento: El minimarket contará con medidas de seguridad para garantizar un entorno seguro para clientes y empleados.'
      ]
    },
    {
      title: '10. Resolución de Conflictos',
      subPolicies: [
        '10.1. Atención al cliente: Los clientes podrán comunicarse con el minimarket para resolver cualquier duda o disputa relacionada con estas políticas.',
        '10.2. Mediación: En caso de desacuerdos, se buscará una resolución justa y conforme a la ley.'
      ]
    }
  ]
  
  const openPolicies = ref(Array(policies.length).fill(false))
  const searchQuery = ref('')
  
  const togglePolicy = (index) => {
    openPolicies.value[index] = !openPolicies.value[index]
  }
  
  const filteredPolicies = computed(() => {
    if (!searchQuery.value) return policies
    const query = searchQuery.value.toLowerCase()
    return policies.filter(policy => 
      policy.title.toLowerCase().includes(query) || 
      policy.subPolicies.some(subPolicy => subPolicy.toLowerCase().includes(query))
    )
  })
  </script>