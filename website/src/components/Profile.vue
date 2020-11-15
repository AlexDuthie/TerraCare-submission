<template>
    <main class="container-fluid m-0 p-0">
        <div id="home-page" class="full-height p-4">
            <img alt="TerraScore Logo | Consumptions Made Easy" src="../assets/logos/logo_v3.png">
            <h1 class="card container">User Profile</h1>
            <section id="tabs" class="project-tab pt-2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <nav>
                                <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Footprint Details</a>
                                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Point Shop</a>
                                    <a class="nav-item nav-link" id="nav-leaderboard-tab" data-toggle="tab" href="#nav-leaderboard" role="tab" aria-controls="nav-profile" aria-selected="false">Leaderboard</a>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <TableFootprint/>
                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                   <TablePointShop/>
                                </div><div class="tab-pane fade" id="nav-leaderboard" role="tabpanel" aria-labelledby="nav-leaderboard-tab">
                                    <TableLeaderboard/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div> 
        <div class="modal fade bd-vacuum-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="card">
                        <img src="https://bixoloneu.com/wp-content/uploads/2019/07/Energy-Efficiency-250x461.png" class="img-fluid" style="margin-left: 20%; width: 60%; height: 600px;">
                        <h5>AmazonBasics Vacuum Cleaner</h5>
                        <p>Item Lifecycle: 4 years</p>
                        <p>Energy class: A (very good, efficient)</p>
                        <p>Points: 5</p>
                    </div>
                </div>
            </div>
        </div>
                <div class="modal fade bd-dehumidifier-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="card">
                        <img src="https://www.olino.org/wp-content/uploads/2010/10/2010_10_energielabel_C_with_h1.png" class="img-fluid" style="max-height:500px;">
                        <h5>Pro Breeze Dehumidifier</h5>
                        <p>Item Lifecycle: 3 years</p>
                        <p>Energy class: c (Poor, very inefficient)</p>
                        <p>Points: 0</p>
                    </div>
                </div>
            </div>
        </div>
                <div class="modal fade bd-nuhide-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="card">
                        <img src="https://www.olino.org/wp-content/uploads/2010/10/2010_10_energielabel_F_with_h.png" class="img-fluid" style="max-height:500px;">
                        <h5>Nuhide PU Leather Holdall</h5>
                        <p>Item Lifecycle: 2 years</p>
                        <p>Energy class: F (Very Poor, very inefficient, unsustainable)</p>
                        <p>Points: 0</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade bd-allbirds-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="card">
                        <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_LAT_53edc24b-7a8c-415a-b71b-096bb67420ac.png?v=1600891257" class="img-fluid" style="max-height:500px;">
                        <h5>All birds: Wool Runners</h5>
                        <p>Fully sustainable: ✔️ </p>
                        <p>Coupon Point cost: 250</p>
                        <p>Discount %: 35%</p>
                        <a href="https://www.allbirds.com/pages/help?a=What-is-your-commitment-to-sustainability---id--VgduE8-cRha9y5QqVrFguw">All Birds sustainability commitment</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade bd-onya-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="card">
                        <img src="https://www.onyalife.com/wp-content/uploads/Coffee-Aqua-Freshcoat-Pic.jpg" class="img-fluid" style="max-height:500px;">
                        <h5>Onya: Regular Coffee Cup 335ml / 12oz</h5>
                        <p>Fully sustainable: ✔️ </p>
                        <p>Coupon Point cost: 75</p>
                        <p>Discount %: 20%</p>
                        <a href="https://onyalife.co.uk/b-corp-products/">Onya's sustainability commitment</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade bd-whogivesacrap-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="card">
                        <img src="https://cdn.shopify.com/s/files/1/1502/3454/products/WGAC_ProductPhotos_2018Packaging_TransparentBG_DLGroupShot_1024x1024.png?v=1531168094" class="img-fluid" style="max-height:500px;">
                        <h5>Who Gives A Crap: 100% Recycled Toilet Paper</h5>
                        <p>Fully sustainable: ✔️ </p>
                        <p>Coupon Point cost: 50</p>
                        <p>Discount %: 10%</p>
                        <a href="https://support.whogivesacrap.org/hc/en-gb/sections/360005450894-ABOUT-OUR-IMPACT">Who gives a crap's: sustainability commitment</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import TableFootprint from '@/components/TableFootprint.vue';
import TablePointShop from '@/components/TablePointShop.vue';
import TableLeaderboard from '@/components/TableLeaderboard.vue';

export default {
    name: 'tables',
    components: {
        TableFootprint,
        TablePointShop,
        TableLeaderboard
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#browser-img {
    border: 1px solid #4f6f3f;
}

.text-muted {
    color: white !important;
}
</style>
