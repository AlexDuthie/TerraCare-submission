<template>
    <table class="table" cellspacing="0">
        <thead>
            <tr>
                <th>Product History</th>
                <th>Energy Rating</th>
                <th>Awards</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="https://www.amazon.co.uk/AmazonBasics-Cylinder-Bagless-Vacuum-Cleaner/dp/B071L9QYTY/ref=sr_1_1_sspa?dchild=1&keywords=hoover&qid=1605180599&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQzVVREtXVzZUME84JmVuY3J5cHRlZElkPUEwMTY2OTA5MlZQSEI5RVVKMDQwVSZlbmNyeXB0ZWRBZElkPUEwMTQwODY3MzdFNjlEV08yU1BINSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">Amazonbasics Vacuum Cleaner</a></td>
                <td>A</td>
                <td>Gold 🥇</td>
                <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-vacuum-modal-sm">Score</button></td>
            </tr>
            <tr>
                <td><a href="https://www.amazon.co.uk/Pro-Breeze-Portable-Dehumidifier-Moisture/dp/B00NFRTVY6/ref=sr_1_5?crid=O6EGAC6NMJIR&dchild=1&keywords=dehumidifiers&qid=1605180725&sprefix=dehum%2Caps%2C173&sr=8-5">Pro Breeze Dehumidifier</a></td>
                <td>C</td>
                <td>Silver 🥈</td>
                <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-dehumidifier-modal-sm">Score</button></td>
            </tr>
            <tr>
                <td><a href="https://www.etsy.com/uk/listing/804590249/classic-personalised-nuhide-pu-leather?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=leather+bag&ref=sr_gallery-1-1&organic_search_click=1&frs=1">Nuhide PU Leather Holdall</a></td>
                <td>F</td>
                <td>Bronze 🥉</td>
                <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-nuhide-modal-sm">Score</button></td>
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