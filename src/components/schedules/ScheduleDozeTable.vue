<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center pl-0">
            Дни
          </th>
          <th
            class="text-center"
            v-for="recipeName in Object.keys(daysQuotas)"
            :key="recipeName"
          >
            {{ recipeName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(day, index) in daysTotal"
          :key="day"
        >
          <td class="pl-0 text-center">
            <span style="text-transform: capitalize;">{{ datesColumn[index].weekday }}</span>,
            <span class="text-secondary">{{ datesColumn[index].date }}</span>
          </td>
          <td
            v-for="(quotas, recipeName, idx) in daysQuotas"
            class="text-center"
            :class="{'pr-0': idx === Object.keys(daysQuotas).length - 1}"
            :key="recipeName + day"
          >
            <v-checkbox
              v-if="!isNaN(quotas[index])"
              color="primary"
              dense
              v-model="selected[recipeName][index]"
              hide-details="auto"
              class="mt-0"
              :disabled="isOverview"
              style="display: inline-block;"
            >
              <template v-slot:label>
                <span class="mt-0">
                  {{ quotas[index].toFixed(2) }}
                </span>
              </template>
            </v-checkbox>
            <span v-else> - </span>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'ScheduleDoseTable',
  props: {
    isOverview: {
      type: Boolean,
      default: false,
    },
    daysTotal: {
      type: Number,
      default: 1,
    },
    datesColumn: {
      type: Array,
      default: () => [],
    },
    recipesSelected: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    daysQuotas() {
      const quotas = {};
      this.recipesSelected.forEach((recipe) => {
        const result = [];
        const selectedList = this.selected[recipe.name];
        const excludedTotal = selectedList.filter((x) => x === false).length;
        const daysLeft = this.daysTotal - excludedTotal;
        const { amount } = recipe;
        let currentDay = amount / (this.daysTotal - excludedTotal);
        Object.keys([...Array(this.daysTotal)]).forEach((index) => {
          if (!selectedList[index]) {
            currentDay = 0;
          } else {
            currentDay = amount / daysLeft;
          }
          result.push(currentDay);
        });
        quotas[recipe.name] = result;
      });
      return quotas;
    },
  },
};
</script>

<style scoped>

</style>