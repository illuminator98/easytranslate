<template>
 <div id="project" class="card me-3 mb-3" style="width: 18rem;">
  <div style="height:60px;" class="card-header d-flex justify-content-center align-items-center">{{name}}</div>
  <div class="card-body">
    <div class="d-flex ms-3 text-secondary" style="font-size: 12px;"> <strong>DATE OF ORDER:</strong></div>
    <div class="d-flex mb-2 ms-3 " style="font-size: 12px;"> <strong>{{ orderDate }}</strong></div>
    <div class="d-flex ms-3 text-secondary" style="font-size: 12px;"> <strong> PRICE:</strong></div>
    <div class="d-flex ms-3 mb-2 " style="font-size: 12px;"> <strong> {{ price }} €</strong></div>
    <div class="d-flex justify-content-between">
      <div>
    <div class="d-flex ms-3 text-secondary" style="font-size: 12px;"> <strong> FROM:</strong></div>
    <div class="d-flex ms-3 " style="font-size: 12px;"> <strong>EN</strong></div>
  </div>
    <div>
    <div class="d-flex ms-3 text-secondary" style="font-size: 12px;"> <strong> TO:</strong></div>
    <div class="d-flex ms-3 " style="font-size: 12px;"> <strong>EN,DE,RU,RO,HU</strong></div>
  </div></div>
    
  </div>
  <div class="card-footer text-success">
    {{status}}
  </div>
</div>
</template>

<script>
export default {
  name: "SingleProject",
  props: {
    name: String,
    orderDate:String,
    price:Number,
    langFrom:String,
    langTo: String,
    progress:Number,
    status:String,



  },
};
</script>


<style>
#project {
  height: 300px;
}
.card-footer {
  background-color: rgb(183, 247, 225) !important;
}

</style>
