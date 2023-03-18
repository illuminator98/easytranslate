<template>
    <div class="card border-success mb-3" style="max-width: 18rem">
      <div class="card-header bg-transparent border-success">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          class="img-fluid"
          alt="Responsive image"
        />{{ name }}
      </div>
      <div class="card-body text-success">
        <h5 class="card-title">Success card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </p>
      </div>
      <div class="card-footer bg-transparent border-success">Footer</div>
    </div>
  </template>
  
<script>
  export default {
    name: "SingleProject",
    props: {
      name: String,
    },
  };
</script>
  