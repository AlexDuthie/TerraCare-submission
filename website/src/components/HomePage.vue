<template>
    <main class="container-fluid m-0 p-0">
        <div class="full-height p-4">
            <img id="logo" alt="TerraScore Logo | Consumptions Made Easy" src="../assets/logos/logo_v3.png">
            <div class="container pt-3">
                <div class="row pb-5">
                    <div class="col-lg-6 my-auto">
                        <small class="text-muted"> See it in action.</small>
                        <img id="browser-img" src="../assets/browser.png" class="img-fluid">
                    </div>
                    <div class="col-lg-6">
                        <div class="text-center mb-3">
                            <small class="text-muted" color="white"> Download now & save your world.</small>
                        </div>
                        <div class="border p-3 p-md-5 bg-white rounded shadow" id="comingsoon">
                            <h2>Coming soon</h2>
                            <button type="button" class="btn btn-outline-success">Download now 🌎</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data () {
        return {
            title: 'TerraCare'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-muted {
    color: white !important;
}

#comingsoon {
    background-color: #000 !important;
}
h2 {
    color: white !important;
}
</style>
