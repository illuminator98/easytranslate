<template>
  <div id="folder" class="card  border-success mb-3" style="max-width: 18rem">
    <div class="card-header bg-transparent border-success">
      {{ name }}
      <img
        src="https://img.icons8.com/color/512/mac-folder.png"
        class="img-fluid"
        alt="Responsive image"
      />
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
  name: "FolderComp",
  props: {
    name: String,
  },
};
</script>

<style>

#folder {
  cursor: pointer;
  transition: transform 250ms;
}
#folder:hover {
  transform: translateY(-10px);
}
</style>
