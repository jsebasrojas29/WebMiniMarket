<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="bg-red-100 py-20">
      <div class="container mx-auto px-4">
        <h1
          class="text-4xl md:text-5xl font-bold text-center text-red-800 mb-6"
        >
          Acerca de Porvenir Minimarket
        </h1>
        <p class="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          La tienda única de su vecindario para obtener productos frescos,
          artículos esenciales de uso diario y una cálida experiencia
          comunitaria.
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">
          Nuestra misión
        </h2>
        <p class="text-lg text-center text-gray-600 max-w-3xl mx-auto">
          En Porvenir Minimarket, nos comprometemos a brindar a nuestra
          comunidad productos de alta calidad en un entorno acogedor. Nuestro
          objetivo es ser más que una simple tienda: somos un centro para que
          los vecinos se conecten, descubran productos y disfruten de un
          servicio excepcional.
        </p>
      </div>
    </section>

    <!-- Key Features Section -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center text-gray-800 mb-12">
          ¿Qué nos hace especiales?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">
              Ambiente relajado, cerveza fría
            </h3>
            <p class="text-gray-600">
              Disfruta un momento de tranquilidad en un lugar pensado para ti.
              Escoge tu música, relájate con aire acondicionado y acompaña la
              charla con nuestras cervezas bien frías.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">
              Tu rincón para desconectar
            </h3>
            <p class="text-gray-600">
              Más que un mini market: un espacio donde puedes relajarte,
              disfrutar de buena compañía y elegir tus snacks favoritos. Música
              personalizada y aire fresco incluidos.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">
              Sabor y buena vibra
            </h3>
            <p class="text-gray-600">
              Desde cervezas hasta confitería, tenemos todo lo que necesitas
              para un rato agradable. Ven, elige tus productos favoritos y
              quédate a disfrutar en un ambiente cómodo y relajado.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">
          Contáctenos
        </h2>
        <div class="max-w-xl mx-auto">
          <p class="text-center text-gray-600 mb-6">
            ¿Tienes preguntas o comentarios? ¡Nos encantaría saber de ti!
          </p>
          <div class="flex justify-center space-x-4">
            <!-- <a
              href="#"
              class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              contáctenos
            </a> -->
            <router-link
              to="/faq"
              class="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300"
            >
              Preguntas frecuentes
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
