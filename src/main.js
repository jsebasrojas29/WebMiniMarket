import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as lucideIcons from 'lucide-vue-next';
import router from './router';  // Importa el archivo de configuración del router


const app = createApp(App);

// Registrar todos los íconos globalmente
Object.entries(lucideIcons).forEach(([name, icon]) => {
  app.component(name, icon);
});

app.use(router); // Usa Vue Router en la app
app.mount('#app');