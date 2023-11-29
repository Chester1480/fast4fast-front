<template>
    <v-table theme="dark">
        <thead>
            <tr>
                <th v-for="(column,index) in mainTable.columns"  class="text-left">
                    {{ column }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in mainTable.data" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
    export default {
        data() {
            return {
                mainTable: {
                    columns:[],
                    data: []
                }
            }
        },
        async mounted() {
            this.tableSetting();
        },
        methods: {
            tableSetting() {
                this.mainTable.columns = ["Name", "Calories"]
                this.mainTable.data = [
                        {
                            name: 'Frozen Yogurt',
                            calories: 159,
                        },
                        {
                            name: 'Ice cream sandwich',
                            calories: 237,
                        },
                ]
            }
        }
    }
</script>