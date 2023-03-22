<template>
  <div id="folder" class="card p-3 mb-3 me-4 bg-white" style="max-width: 18rem">
      <div class="folder-icon d-flex justify-content-between">
        <img
          src="https://img.icons8.com/color/512/mac-folder.png"
          alt="Logo"
          width="40"
          height="40"
          class="mt-2 ms-3" 
        />
        <div class="button"><button class="btn">⋮ </button></div>
      </div>
      <div class="d-flex ms-3 mt-2 mb-1">  <strong>{{ name }}</strong></div>
      <div class="d-flex ms-3 text-primary"  style="font-size: 12px;"> <strong>{{ projectNum }} projects</strong></div>
      <div class="d-flex ms-3 text-secondary" style="font-size: 12px;"> <strong>created on :  {{dateSet(date)  }}</strong></div>

  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: "FolderComp",
  props: {
    name: String,
    projectNum:Number,
    date:String,
  },
methods: {
dateSet (str) {
  return moment(str).format('MMMM Do YYYY')
    }

  },
};
</script>

<style>
#folder {
  min-width:250px ;
  cursor: pointer;
  transition: transform 250ms;
  border: none !important;
  box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.09);
-webkit-box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.09);
-moz-box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.09);
}
#folder:hover {
  box-shadow: 5px 5px 6px 0px rgba(0,0,0,0.15);
-webkit-box-shadow: 5px 5px 6px 0px rgba(0,0,0,0.15);
-moz-box-shadow: 5px 5px 6px 0px rgba(0,0,0,0.2);
  
  transform: translateY(-4px);
  
}
</style>
