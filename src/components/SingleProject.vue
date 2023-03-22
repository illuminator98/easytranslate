<template >
 <div id="project" class="card me-3 mb-3" style="width: 18rem;">
  <div style="height:auto;" class="crad-header my-4 d-flex justify-content-center align-items-center"> <strong>{{name}}</strong></div>
  <div class="card-body">
    <div class="d-flex ms-3 text-secondary" style="font-size: 11px;"> <strong>DATE OF ORDER:</strong></div>
    <div class="d-flex mb-2 ms-3 " style="font-size: 11px;"> <strong>{{ dateSet(orderDate) }}</strong></div>
    <div class="d-flex ms-3 text-secondary" style="font-size: 11px;"> <strong> PRICE:</strong></div>
    <div class="d-flex ms-3 mb-2 " style="font-size: 11px;"> <strong> {{ price }} €</strong></div>
    <div class="d-flex justify-content-between">
      <div>
    <div class="d-flex ms-3 text-secondary" style="font-size: 11px;"> <strong> FROM:</strong></div>
    <div class="d-flex ms-3 " style="font-size: 11px;"> <strong>EN</strong></div>
  </div>
    <div>
    <div class="d-flex ms-3 text-secondary" style="font-size: 11px;"> <strong> TO:</strong></div>
    <div class="d-flex ms-3 " style="font-size: 11px;"> <strong>EN,DE,RU,RO,HU</strong></div>
  </div></div>
    
  </div>
  <div class="card-footer d-flex justify-content-center align-items-center p-3  text-success" style="font-weight:500;">
     {{status}}
  </div>
</div>
</template>

<script>
import moment from 'moment';
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
methods:{
    dateSet (str) {
  return moment(str).format('MMMM Do YYYY, h:mm:ss a')
    }
  }
};
</script>


<style>
#project {
  height: 300px;
  box-shadow: 1px 1px 5px 3px rgba(0,0,0,0.11);
-webkit-box-shadow: 1px 1px 5px 3px rgba(0,0,0,0.11);
-moz-box-shadow: 1px 1px 5px 3px rgba(0,0,0,0.11);
border-radius: 0%;
border: none;

}
.card-footer {
  background-color: rgb(183, 247, 225) !important;
  border-radius: 0% !important;
  border: none;
}




</style>
