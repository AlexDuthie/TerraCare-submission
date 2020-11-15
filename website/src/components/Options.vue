<template>
    <main>
        <div class="background">
            <img alt="TerraScore Logo | Consumptions Made Easy" src="../assets/logos/logo_v3.png">
        </div>
        <div class="container">
            <div class="container-grid">
                <p class="options">Do you consent to the use of your Username and Score being displayed on our leaderboard?</p>
                <label class="switch"><input type="checkbox"><span class="optiontoggle rounded"></span></label>
            </div>
            <div class="container-grid">
                <p class="options">Do you consent to the use of your Country of residence being displayed on our leaderboard?</p>
                <label class="switch"><input type="checkbox"><span class="optiontoggle rounded"></span></label>
            </div>
            <div class="container-grid">
                <p class="options">Do you consent to the use of your County of residence being displayed on our leaderboard?</p>
                <label class="switch"><input type="checkbox"><span class="optiontoggle rounded"></span></label>
            </div>
            <div class="container-grid">
                <p class="options">Do you consent to the Storage of your Country of residence on our system?</p>
                <label class="switch"><input type="checkbox"><span class="optiontoggle rounded"></span></label>
            </div>
            <div class="container-grid">
                <p class="options">Do you consent to the Storage of your County of residence on our system?</p>
                <label class="switch"><input type="checkbox"><span class="optiontoggle rounded"></span></label>
            </div>
            <div class="container-grid">
            </div>
            <div class="container-grid">
            </div>
            <div class="container-grid">
            </div>
            <div class="container-grid">
            </div>
        </div>
    </main>
</template>

<style scoped>

p.options{
    color: white;
}

.container {
    background-color: rgba(157, 217, 148, 0.301);
    height: 500px;
    width: 800px;
    display: grid;
    position: relative;
    grid-template-columns: auto auto auto;
    grid-column-gap: 50px;
    grid-row-gap: 10px;
    overflow: hidden;
    border-radius: 10px;
    padding: 10px;
}

.container-grid {
    background-color: rgba(34, 24, 28, 0.979);
    border-radius: 10px;
    width: 225px;
    height: 150px; 
    overflow: hidden;
}

.switch {
    position: relative;
    width: 60px;
    height: 34px;
}

.optiontoggle {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(51, 51, 51);
    transition: 0.6s;
}

.optiontoggle:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 8px;
    transition: 0.6s;
}

input:checked + .optiontoggle {
    background-color: rgb(111, 181, 101);
}

input:focus + .optiontoggle {
    box-shadow: 0 0 1px  rgb(111, 181, 101);
}

input:checked + .optiontoggle:before {
    transform: translate(26px, 4px);
    border-radius: 50%;
    height: 26px;
    width: 26px;
    background-color: rgb(230, 230, 230);
}

.optiontoggle.rounded:before {
    border-radius: 10%;
    background-color: rgb(206, 11, 11);
}

</style>
