<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxFileUploader from 'devextreme-vue/file-uploader';
</script>
<template>
  <div class="demo-container">
    <div class="file-uploader-block">
      <DxFileUploader
        id="file-uploader"
        :multiple="true"
        upload-mode="useButtons"
        :allow-canceling="true"
        accept="image/*"
        label-text="Drop Images Below to Upload..."
        :max-file-size="32000000"
        drop-zone=".file-uploader-block"
      />
    </div>
  </div>
</template>
