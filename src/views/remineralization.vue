<!--
  Samomes

  Copyright (C) 2021 Mikhail Lapshin

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->

<template>
  <v-container class="mb-10">
    <v-row>
      <page-title>
        Реминерализация
      </page-title>
      <guide>
        На этой странице можно рассчитать Gh/Kh в аквариуме в зависимости от исходной воды, разбавления осмосом,
        реминерализатора и дозировок удобрений.
      </guide>
      <v-col
        v-if="recipes.length > 0"
        cols="12"
        sm="8"
        offset-sm="2"
      >
        <v-combobox
          :items="tanks"
          :value="tankVolume"
          @input="inputTankVolume"
          item-text="name"
          item-value="volume"
          label="Объем аквариума"
          hide-selected
          hide-details="auto"
          hint="Выберите аквариум или введите объем (это может быть объем подмены)"
          persistent-hint
          suffix="л"
          :return-object="false"
        />
        <v-expand-transition>
          <div v-if="tankVolume">
            <div class="text-subtitle-1 mt-4 mt-sm-8">
              Подмена
            </div>
            <div class="d-flex flex-column flex-sm-row align-sm-center">
              <base-text-field
                :value="waterChangeVolume"
                @input="inputWaterChangeVolume"
                type="number"
                label="Объем"
                hint="Введите объем подмены"
                persistent-hint
                single-line
                suffix="л"
                class="pt-0 mt-0"
                :precision="1"
                append-icon="mdi-arrow-up-bold-circle-outline"
                @click:append="inputWaterChangeVolume(tankVolume)"
              />
              <base-text-field
                :value="waterChange"
                @input="inputWaterChange"
                type="number"
                label="Процент"
                hint="или процент подмены от общего объема"
                persistent-hint
                single-line
                suffix="%"
                class="pt-0 mt-0 ml-sm-3"
                :precision="1"
                append-icon="mdi-arrow-up-bold-circle-outline"
                @click:append="inputWaterChange(100)"
              />
              <base-text-field
                :value="osmosisChange"
                @input="inputOsmosisChange"
                type="number"
                label="Процент"
                :hint="`
                  Осмос: ${osmosisChangeVolume.toFixed(1)} л.
                  Водопровод: ${(waterChangeVolume - osmosisChangeVolume).toFixed(1)} л.
                `"
                persistent-hint
                class="mt-0 pt-0 ml-sm-3"
                single-line
                suffix="%"
                :precision="0"
                append-icon="mdi-arrow-up-bold-circle-outline"
                @click:append="inputOsmosisChange(100)"
              />
            </div>
            <div class="text-headline mt-8">
              Значения жесткости
            </div>
            <div class="d-flex">
              <v-text-field
                v-model.number="ghInit"
                type="number"
                label="Gh в аквариуме"
                suffix="dGh"
                hide-details="auto"
              />
              <v-text-field
                v-model.number="ghWaterChange"
                type="number"
                label="Gh водопровода"
                suffix="dGh"
                hide-details="auto"
                class="ml-3"
              />
            </div>
            <div class="d-flex">
              <v-text-field
                v-model.number="khInit"
                type="number"
                label="Kh в аквариуме"
                suffix="dKh"
                hide-details="auto"
              />
              <v-text-field
                v-model.number="khWaterChange"
                type="number"
                label="Kh водопровода"
                suffix="dKh"
                hide-details="auto"
                class="ml-3"
              />
            </div>
          </div>
        </v-expand-transition>
        <v-expand-transition>
          <div v-if="ghInit !== null">
            <div class="text-subtitle-1 mt-8">
              Реминерализатор и удобрения
            </div>
            <div class="d-flex flex-column flex-sm-row mb-8">
              <v-combobox
                :items="REMINERALS"
                v-model="remineralsSelected"
                label="Реминерализатор"
                hint="Выберите готовый реминерализатор"
                item-text="name"
                :return-object="true"
                persistent-hint
                multiple
              />
              <v-combobox
                :items="items"
                v-model="recipesSelected"
                label="Удобрение"
                hint="и/или удобрение из списка"
                item-text="name"
                :return-object="true"
                persistent-hint
                multiple
                class="ml-sm-3"
              />
            </div>
            <div class="mb-8">
              <div class="d-flex align-center mb-2">
                <v-divider />
                <v-btn
                  center
                  text
                  @click="isOwnRemineral = !isOwnRemineral"
                  class="px-4"
                >
                  Свой состав
                  <v-icon>{{ isOwnRemineral ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
                <v-divider />
              </div>
              <v-expand-transition>
                <div v-if="isOwnRemineral">
                  <div class="d-flex flex-wrap mb-2">
                    <v-text-field
                      v-model.number="ownRemineral.gh"
                      label="Gh"
                      suffix="dGh"
                      hide-details="auto"
                      style="min-width: 40%;"
                    />
                    <v-text-field
                      v-model.number="ownRemineral.kh"
                      label="Kh"
                      suffix="dKh"
                      hide-details="auto"
                      style="min-width: 40%;"
                      class="ml-sm-3"
                    />
                    <v-text-field
                      v-model.number="ownRemineral.mass"
                      label="Масса"
                      hint="Масса, которая повышает Gh и Кh в n объеме на m градусов"
                      suffix="г"
                      hide-details="auto"
                      style="min-width: 40%;"
                    />
                    <v-text-field
                      v-model.number="ownRemineral.volume"
                      label="Объем"
                      hint="Объем, на который рассчитан состав"
                      suffix="л"
                      hide-details="auto"
                      style="min-width: 40%;"
                      class="ml-sm-3"
                    />
                  </div>
                  <div class="d-flex justify-end">
                    <v-btn
                      color="primary"
                      @click="addOwnRemineral"
                    >
                      Добавить
                    </v-btn>
                  </div>
                </div>
              </v-expand-transition>
            </div>
          </div>
        </v-expand-transition>
        <v-text-field
          v-for="(remineral, index) in remineralsSelected"
          v-model.number="remineral.amount"
          type="number"
          :label="remineral.name"
          hint="Введите массу реминерализатора"
          suffix="г"
          hide-details="auto"
          :key="`rem_${index}`"
        />
        <fertilizers-dose-table
          v-if="recipesSelected.length > 0"
          :fertilization-type="FERTILIZATION_IN_TAP_WATER"
          :is-fertilization-types="false"
          :is-water-change="false"
          :recipes-selected="recipesSelected"
          :days="7"
          @input="inputDose"
        />
        <v-expand-transition>
          <div
            v-if="ghInit !== null"
            class="mt-8"
          >
            <div class="text-subtitle-1 mb-2">
              {{ hardnessHint('Kh') }}
            </div>
            <div class="d-flex">
              <v-text-field
                :value="totalGh.toFixed(2)"
                label="Общая жесткость"
                suffix="dGh"
                hide-details="auto"
                readonly
                outlined
                persistent-hint
              />
              <v-text-field
                :value="totalKh.toFixed(2)"
                label="Карбонатная жесткость"
                suffix="dKh"
                hide-details="auto"
                readonly
                outlined
                persistent-hint
                class="ml-3"
              />
            </div>
          </div>
        </v-expand-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import ELEMENTS from '@/constants/elements';
import FORMULAS from '@/constants/formulas';
import HARDNESS from '@/constants/hardness';
import REMINERALS from '@/constants/remineral';
import {
  convertIonName,
  convertIonRatio,
  countPercent,
  countTotalIonConcentration,
  isRecipe,
  isFertilizer,
} from '@/helpers/funcs';
import FertilizersDoseTable, { FERTILIZATION_IN_TAP_WATER } from '@/components/FertilizersDoseTable.vue';

export default {
  name: 'Remineralization',
  components: {
    FertilizersDoseTable,
  },
  data() {
    return {
      FORMULAS,
      ELEMENTS,
      HARDNESS,
      REMINERALS,
      FERTILIZATION_IN_TAP_WATER,
      dialog: true,
      tankVolume: null,
      tank: null,
      waterChange: 0,
      waterChangeVolume: 0,
      osmosisChange: 0,
      ghInit: null,
      khInit: null,
      ghWaterChange: 0,
      khWaterChange: 0,
      recipesSelected: [],
      remineralsSelected: [],
      isOwnRemineral: false,
      ownRemineral: {
        kh: 0,
        gh: 0,
        mass: 0,
        volume: 0,
      },
    };
  },
  computed: {
    ...mapState([
      'tanks',
      'recipes',
      'fertilizers',
    ]),
    items() {
      return [...this.recipes, ...this.fertilizers];
    },
    osmosisChangeVolume() {
      return (this.tankVolume * this.waterChange * this.osmosisChange) / (100 * 100);
    },
    totalElements() {
      const result = {};
      this.recipesSelected.forEach((recipe) => {
        Object.keys(recipe.concentration).forEach((reagent) => {
          Object.keys(recipe.concentration[reagent]).forEach((ion) => {
            if (!(ion in result)) {
              result[ion] = 0;
            }
            if (recipe.amount) {
              result[ion] += (recipe.amount * recipe.concentration[reagent][ion]) / this.tankVolume;
              if ((!recipe.volume) && isRecipe(recipe)) {
                result[ion] *= 1000;
              }
            }
          });
        });
      });
      return result;
    },
    totalGh() {
      const ca = this.totalElements.Ca;
      const mg = this.totalElements.Mg;
      const ghLeft = this.ghInit * (1 - this.waterChange / 100);
      let ghRem = 0;
      if (ca) {
        ghRem += ca / this.HARDNESS.Ca;
      }
      if (mg) {
        ghRem += mg / this.HARDNESS.Mg;
      }
      this.remineralsSelected.forEach((rem) => {
        if (rem.amount) {
          ghRem += rem.gh * rem.amount * rem.volume / ((this.waterChange / 100) * this.tankVolume * rem.mass)
            * (this.waterChange / 100);
        }
      });
      const ghFromChangeWater = (this.ghWaterChange * (1 - this.osmosisChange / 100) * this.waterChange) / 100;
      return ghLeft + ghFromChangeWater + ghRem;
    },
    totalKh() {
      const khLeft = this.khInit * (1 - this.waterChange / 100);
      let khRem = 0;
      this.remineralsSelected.forEach((rem) => {
        if (rem.amount) {
          khRem += rem.kh * rem.amount * rem.volume / ((this.waterChange / 100) * this.tankVolume * rem.mass)
            * (this.waterChange / 100);
        }
      });
      const khFromChangeWater = (this.khWaterChange * (1 - this.osmosisChange / 100) * this.waterChange) / 100;
      return khLeft + khFromChangeWater + khRem;
    },
  },
  watch: {
    recipesSelected() {
      this.recipesSelected.forEach((recipe) => {
        if (!recipe.amount) {
          recipe.amount = '';
        }
        if (!recipe.amountDay) {
          recipe.amountDay = '';
        }
      });
    },
  },
  methods: {
    isRecipe,
    isFertilizer,
    convertIonName,
    convertIonRatio,
    countPercent,
    countTotalIonConcentration,
    inputDose(index, value) {
      Vue.set(this.recipesSelected, index, value);
    },
    inputTankVolume(value) {
      this.tankVolume = +value;
      if (this.waterChangeVolume > +value) {
        this.waterChangeVolume = +value;
      }
      this.waterChange = (this.waterChangeVolume / value) * 100;
    },
    inputWaterChange(value) {
      if (value <= 100) {
        this.waterChange = +value;
        this.waterChangeVolume = (this.tankVolume * value) / 100;
      }
    },
    inputWaterChangeVolume(value) {
      if (value <= this.tankVolume) {
        this.waterChangeVolume = +value;
        this.waterChange = (value / this.tankVolume) * 100;
      }
    },
    inputOsmosisChange(value) {
      if (value <= 100) {
        this.osmosisChange = +value;
      }
    },
    hardnessHint() {
      let text = 'Жесткость после подмены воды';
      if (this.totalElements.Ca || this.totalElements.Mg || this.remineralsSelected.length > 0) {
        text += ', внесения удобрений и реминерализатора';
      }
      return text;
    },
    addOwnRemineral() {
      this.remineralsSelected.push({
        name: 'Свой',
        ...this.ownRemineral,
      });
      this.ownRemineral = {
        kh: 0,
        gh: 0,
        mass: 0,
        volume: 0,
      };
    },
  },
};
</script>

<style lang="sass">
</style>
