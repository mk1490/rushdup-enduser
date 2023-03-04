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
                {{ $t('accountInformation.name') + ' ' + ':' }}
              </strong>
              <div class="mr-2">
            <span
                v-if="!isEdit.name"
            >
              {{ model.name }}
            </span>
                <v-text-field
                    v-if="isEdit.name"
                    hide-details
                    dense
                    v-model="modelForUpdate.name">
                </v-text-field>
              </div>


              <v-btn
                  v-if="!isEdit.name"
                  @click="nameEdit"
                  icon>
                <v-icon
                    small>
                  mdi-pen
                </v-icon>
              </v-btn>


              <div class="d-inline-flex">
                <v-btn
                    v-if="isEdit.name"
                    @click="nameSubmit"
                    icon>
                  <v-icon
                      small>
                    mdi-check
                  </v-icon>
                </v-btn>
                <v-btn
                    v-if="isEdit.name"
                    @click="isEdit.name = false"
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
                {{ $t('accountInformation.family') + ' ' + ':' }}
              </strong>
              <div class="mr-2">
            <span
                v-if="!isEdit.family"
            >
              {{ model.family }}
            </span>
                <v-text-field
                    v-if="isEdit.family"
                    hide-details
                    dense
                    v-model="modelForUpdate.family">
                </v-text-field>
              </div>


              <v-btn
                  v-if="!isEdit.family"
                  @click="familyEdit"
                  icon>
                <v-icon
                    small>
                  mdi-pen
                </v-icon>
              </v-btn>


              <div class="d-inline-flex">
                <v-btn
                    v-if="isEdit.family"
                    @click="familySubmit"
                    icon>
                  <v-icon
                      small>
                    mdi-check
                  </v-icon>
                </v-btn>
                <v-btn
                    v-if="isEdit.family"
                    @click="isEdit.family = false"
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
              {{ model.mobileNumber }}
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
  async created() {
    const [err, data] = await this.to(this.http.get(`profile/current-profile`));
    if (!err) {
      this.model.name = data.name;
      this.model.family = data.family;
      this.model.mobileNumber = data.mobileNumber;
    }
  },
  data() {
    return {
      model: {
        name: null,
        family: null,
        mobileNumber: null,
      },
      modelForUpdate: {
        name: null,
        family: null,
      },
      isEdit: {
        name: false,
        family: false,
      }
    }
  },
  methods: {
    nameEdit() {
      this.modelForUpdate.name = this.model.name;
      this.isEdit.name = true;
    },
    familyEdit() {
      this.modelForUpdate.family = this.model.family;
      this.isEdit.family = true;
    },
    async nameSubmit() {
      const fd = new FormData();
      fd.append('name', this.modelForUpdate.name);
      const [err, data] = await this.to(this.http.put(`profile/update-name`, fd));
      if (!err) {
        this.isEdit.name = false;
        this.model.name = this.modelForUpdate.name;
      }
    },
    async familySubmit() {
      const fd = new FormData();
      fd.append('family', this.modelForUpdate.family);
      const [err, data] = await this.to(this.http.put(`profile/update-family`, fd));
      if (!err) {
        this.isEdit.family = false;
        this.model.family = this.modelForUpdate.family;
      }

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