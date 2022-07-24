!<template>
  <div class="perfil w-25 mt-0 me-3 ms-3 mb-3">
    <div class="perfil-box w-100 h-100 box p-3">
      <div class="perfil-box-image box d-flex justify-content-center">
        <img
          src="../../assets/profile-picture-man.png"
          alt="profile-picture"
          style="width: 40%; height: 25%"
          v-if="user.gender == 'male'"
        />
        <img
          src="../../assets/profile-picture-woman.png"
          alt="profile-picture"
          style="width: 40%; height: 25%"
          v-else
        />
      </div>
      <h5 class="d-flex justify-content-center pt-1">{{ user.name }}</h5>
      <h6 class="d-flex justify-content-center">
        <p class="text-muted box">@{{ profileName }}</p>
      </h6>
      <div class="perfil-seguidores d-flex justify-content-center">
        <div
          class="
            perfil-seguidores-following
            text-center
            w-50
            d-flex
            justify-content-center
            box
          "
        >
          6,490 Following
        </div>
        <div
          class="
            perfil-seguidores-followers
            text-center
            w-50
            d-flex
            justify-content-center
            box
          "
        >
          4,227 Followers
        </div>
      </div>
      <div
        class="
          perfil-visualizar
          d-flex
          justify-content-center
          mt-3
          box
          text-decoration-none
        "
      >
        <router-link
          class="box w-100 text-center text-decoration-none"
          :to="{ name: 'profile', params: { id: `${user.id}` } }"
          >Meu Perfil</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { getUser } from "../../Api.js";

export default {
  name: "AppPerfil",
  data() {
    return {
      user: null,
      profileName: null,
    };
  },
  methods: {
    ...mapActions(["addLoggedUser"]),
    getUser() {
      getUser().then((response) => {
        console.log(response[0]);
        this.user = response[0];
        const vector = this.user.email.split("@");
        this.profileName = vector[0];
        this.addLoggedUser(this.user);
        localStorage.setItem("user", JSON.stringify(this.user));
      });
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style>
img,
.perfil-box,
.perfil-visualizar,
.perfil-visualizar a {
  border-radius: 20px;
}

.perfil {
  height: 25.4em;
  color: white;
}

.perfil-seguidores {
  border: 1px solid #64707c;
}

.perfil-seguidores-following,
.perfil-seguidores-followers {
  color: white;
  padding: 5% 27.2%;
}

.perfil-visualizar,
.perfil-visualizar a {
  line-height: 4.8em;
  color: #5193bc;
  font-weight: 700;
  cursor: pointer;
  transition: 0.5s;
}

.perfil-visualizar a:hover {
  background: #324858;
  color: #6bc3f9;
}

.text-muted {
  text-transform: lowercase;
}
</style>