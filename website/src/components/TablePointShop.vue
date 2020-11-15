<template>
    <table class="table" cellspacing="0">
        <thead>
            <tr>
                <th>Available Coupons</th>
                <th>Supplier</th>
                <th>Time</th>
                <th>Discount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="https://www.allbirds.com/products/mens-wool-runners">Wool Runner (shoes)</a></td>
                <td>Allbirds</td>
                <td>6 days remaining</td>
                <td>35%</td>
                <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-allbirds-modal-sm">Details</button></td>
            </tr>
            <tr>
                <td><a href="https://www.onyalife.com/product/coffee-cup-regular/">Sustainable Coffee Cup (335ml/12oz)</a></td>
                <td>Onya</td>
                <td>10 days remaining</td>
                <td>20%</td>
                <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-onya-modal-sm">Details</button></td>
            </tr>
            <tr>
                <td><a href="https://uk.whogivesacrap.org/products/recycled-3ply-toilet-paper">100% Recycled Toilet Paper</a></td>
                <td>Who Gives a Crap</td>
                <td>25 days remaining</td>
                <td>10%</td>
                <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-whogivesacrap-modal-sm">Details</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
table, a {
    color: white;
}
</style>