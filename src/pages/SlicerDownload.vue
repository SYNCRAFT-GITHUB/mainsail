<template>
  <div id="app">
    <div v-if="isLoading" class="loading-screen">
      <div class="spinner"></div>
    </div>
    <iframe
      :src="pageUrl"
      frameborder="0"
      @load="onIframeLoad"
      v-show="!isLoading"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageUrl: 'http://syncraft.com.br/slicer/',
      isLoading: true
    }
  },
  methods: {
    onIframeLoad() {
      this.isLoading = false;
    }
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 1000;
}

.spinner {
  border: 16px solid #808080;
  border-top: 16px solid #23eded;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
}
</style>