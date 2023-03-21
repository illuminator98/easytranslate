<template>
  <div id="folder" class="card mb-3 me-4 bg-white" style="max-width: 18rem">
      <div class="folder-icon d-flex justify-content-between">
        <img
          src="https://img.icons8.com/color/512/mac-folder.png"
          alt="Logo"
          width="40"
          height="40"
          class="mt-2 ms-3"
        />
        <div class="button"><button class="btn mt-2 me-3">⋮</button></div>
      </div>
      <div class="d-flex ms-3 mt-2"><h5>{{ name }}</h5></div>
      <div class="d-flex ms-3 text-primary"  style="font-size: 12px;"><strong>{{ projectNum }} projects</strong></div>
      <div class="d-flex ms-3 text-secondary" style="font-size: 12px;"> <strong>created on :{{ date }}</strong></div>

  </div>
</template>

<script>
export default {
  name: "FolderComp",
  props: {
    name: String,
    projectNum:Number,
    date:String,
  },
};
</script>

<style>
#folder {
  cursor: pointer;
  transition: transform 350ms;
  width: 270px;
  height: 135px;
  border: none !important;
  box-shadow: 4px 3px 2px 3px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 5px 3px 2px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 3px 2px 3px rgba(0, 0, 0, 0.1);
}
#folder:hover {
  border: 1px solid rgb(197, 193, 193) !important;
  transform: translateY(-4px);
  
}
</style>
