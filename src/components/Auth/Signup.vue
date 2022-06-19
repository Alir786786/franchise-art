<template>
  <div class="card register" v-bind:class="{ error: emptyFields }">
    <h1>Sign Up</h1>
    <form class="form-group">
      <input
        v-model="emailReg"
        type="email"
        class="form-control"
        placeholder="Email"
        required
      />
      <input
        v-model="passwordReg"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      />
      <input
        v-model="confirmReg"
        type="password"
        class="form-control"
        placeholder="Confirm Password"
        required
      />
      <input type="submit" class="btn btn-primary" @click="doRegister" />
      <p>
        Already have an account?
        <a
          href="#"
          @click="(registerActive = !registerActive), (emptyFields = false)"
          >Sign in here</a
        >
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerActive: false,
      emailLogin: "",
      passwordLogin: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>