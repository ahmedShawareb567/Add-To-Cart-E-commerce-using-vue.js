<template>
  <div>
    <section class="loginSec">
      <div class="row">
        <div class="col"></div>
        <div class="col-lg-6 col-md-6 col-sm-8 col-9">
          <ValidationObserver ref="form" v-slot="{ invalid }">
            <form @submit.prevent="submitFunc">
              <h3>Login</h3>
              <div class="row">
                <div class="col-12 form-group">
                  <ValidationProvider
                    name="email"
                    rules="required|email"
                    v-slot="{ errors, classes }"
                  >
                    <div class="divForm" :class="classes">
                      <input
                        class="form-control inputXc"
                        v-model="email"
                        type="text"
                        placeholder="Username oR Email"
                      />
                      <span class="errorInput">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="col-12 form-group">
                  <ValidationProvider
                    name="password"
                    rules="required|min:6|max:50"
                    v-slot="{ errors, classes }"
                  >
                    <div class="divForm" :class="classes">
                      <input
                        type="password"
                        placeholder="Password"
                        class="form-control"
                        v-model="password"
                      />
                      <span class="errorInput">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="col-12 form-group">
                  <button type="submit" :disabled="invalid">Submit</button>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
        <div class="col"></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      successMessage: ""
    };
  },
  methods: {
    submitFunc() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }
        this.$toasted.success("<p>Success</p>");
        /*this.$toast.open({
          message: "Registration Success !!",
          type: "success",
          duration: 2000,
          dismissible: true,
          queue: false,
          position: "bottom-right"
        });
        this.email = this.password = "";
        this.$nextTick(() => {
          this.$refs.form.reset();
        });*/
      });
    },
    closeToast() {
      this.$toast.clear();
    }
  }
};
</script>
