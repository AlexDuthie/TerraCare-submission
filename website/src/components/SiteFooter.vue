<template>
    <main>
      <footer class="page-footer font-small">
        <div class="footer-copyright text-center py-3">What is EPREL?
          <a href="https://ec.europa.eu/info/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/energy-label-and-ecodesign/product-database_en"> EPREL DATABASE</a>
        </div>
      </footer>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
main {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
}
footer {
    background-color: rgba(15, 15, 15, 0.582);
    color: rgb(255, 255, 255);
    height: 60px;
    position: sticky;
}

a {
    color: rgb(255, 255, 255);
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.459);
    border-radius: 50px/50px;
}

a:hover {
    text-decoration: none;
    color: lightgreen;
}
</style>