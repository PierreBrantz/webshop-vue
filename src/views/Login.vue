<template>
<b-container>
  <b-row class="justify-content-md-center">  
  <div class="login">
    <b-card style="max-width: 40rem;">
    <b-form>
        <b-form-input
          id="userName"
          v-model="form.userName"
          required
          placeholder="Entrez votre e-mail"
        ></b-form-input>

        <b-form-input
          id="password"
          v-model="form.password"
          required
          placeholder="Entrez votre mot de passe"
          class="mt-3"
          ></b-form-input>
          <div class="mt-2">
            
            <b-button class="mr-2 mb-2" variant="primary" @click="login()">Se connecter</b-button>
            <b-button class="mr-2 mb-2" variant="primary" @click="subscribe()">S'inscrire</b-button>
            <b-button class="mr-2 mb-2" variant="primary" @click="recoverPassord()">Mot de passe perdu</b-button>
          </div>

    </b-form>
    </b-card>
  </div>
  </b-row>
</b-container>
</template>
<script>
export default{
  data(){
    return {
      form: {
        userName: "",
        password: ""
      }
    }
  }
}
</script>
