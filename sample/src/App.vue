<template>
  <div id="app">
    <BreadcrumbNav :path="currentPath" @navigate="updatePath" />
    <div>
      <ul>
        <li v-for="item in array" v-bind:key="item.id">{{ item.name }}</li>
      </ul>
      <h2>Current Path: {{ currentPath }}</h2>
      <input type="file" @change="handleFileUpload" />
      <p>Hello</p>
      <label class="upload-button">
        <font-awesome-icon icon="upload" />
        <input type="file" @change="handleFileUpload" multiple />
      </label>

      <button @click="navigate('subfolder1')">Go to Subfolder 1</button>
      <button @click="navigate('subfolder2')">Go to Subfolder 2</button>

      <div v-if="images.length">
        <h3>Uploaded Images:</h3>
        <div class="images-container">
          <div v-for="(image, index) in images" :key="index" class="image-item">
            <img :src="image.url" :alt="image.name" class="uploaded-image" width="580px"  />
            <p>{{ image.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbNav from './components/BreadcrumbNav.vue';

export default {
  name: 'App',
  components: {
    BreadcrumbNav,
  },
  data() {
    return {
      currentPath: '/usr/local/etc',
      files: [],
      images: [],
    };
  },
  methods: {
    updatePath(newPath) {
      this.currentPath = '/' + newPath;
    },
    navigate(subfolder) {
      this.currentPath = `${this.currentPath}/${subfolder}`;
    },
    handleFileUpload(event) {
     
      const uploadedFiles = Array.from(event.target.files);
      this.files = [...this.files, ...uploadedFiles];
      console.log(this.files)
      
      const imageFiles = uploadedFiles.filter(file => file.type.startsWith('image/'));
      imageFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push({ name: "Image", url: e.target.result });
        };
        reader.readAsDataURL(file);
        prompt("Image is sucessfully uploaded")
      });

      console.log('Uploaded files:', this.files);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.upload-button {
  display: inline-block;
  cursor: pointer;
  color: blue;
  padding: 10px;
}
.upload-button input[type="file"] {
  display: none;
}
.images-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.image-item {
  margin: 10px;
  height: 100px;
  text-align: center;
}
.uploaded-image {
  max-width: 150px;
  max-height: 150px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
}
</style>
