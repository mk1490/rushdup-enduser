<template>
  <v-container
      fluid
      class="row">
    <div class="col">
      <v-card>
        <v-card-text>
          <div class="row">
            <div class="col-12 d-inline-flex align-center">
              <strong>
                {{ $t('accountInformation.nameAndFamily') + ' ' + ':' }}
              </strong>
              <div class="mr-2">
            <span
                v-if="!isEdit.nameAndFamily"
            >
              {{ model.nameAndFamily }}
            </span>
                <v-text-field
                    v-if="isEdit.nameAndFamily"
                    hide-details
                    dense
                    v-model="modelForUpdate.nameAndFamily">
                </v-text-field>
              </div>


              <v-btn
                  v-if="!isEdit.nameAndFamily"
                  @click="nameAndFamilyEdit"
                  icon>
                <v-icon
                    small>
                  mdi-pen
                </v-icon>
              </v-btn>


              <div class="d-inline-flex">
                <v-btn
                    v-if="isEdit.nameAndFamily"
                    @click="nameAndFamilySubmit"
                    icon>
                  <v-icon
                      small>
                    mdi-check
                  </v-icon>
                </v-btn>
                <v-btn
                    v-if="isEdit.nameAndFamily"
                    @click="isEdit.nameAndFamily = false"
                    icon>
                  <v-icon
                      small>
                    mdi-close
                  </v-icon>
                </v-btn>
              </div>
            </div>
            <div class="col-12 d-inline-flex align-center">
              <strong>
                {{ $t('accountInformation.phoneNumber') + ' ' + ':' }}
              </strong>
              <div class="mr-2">
                <span>
              {{ model.phoneNumber }}
            </span>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AccountInformation",
  data() {
    return {
      model: {
        nameAndFamily: 'متین کفش دوز',
        phoneNumber: null,
      },
      modelForUpdate: {
        nameAndFamily: null,
      },
      isEdit: {
        nameAndFamily: false,
      }
    }
  },
  methods: {
    nameAndFamilyEdit() {
      this.modelForUpdate.nameAndFamily = this.model.nameAndFamily;
      this.isEdit.nameAndFamily = true;
    },
    nameAndFamilySubmit() {
      this.isEdit.nameAndFamily = false;
    }
  }
}
</script>

<style scoped>
strong {
  font-family: IranYekanRegular;
  font-size: 1.1rem;
}

span {
  font-family: "IRAN Sans";
  font-size: 1.1rem;
}

</style>