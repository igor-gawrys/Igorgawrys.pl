<template>
  <section class="container">

      <div class='overlay-image' />

      <div class='overlay container'>

        <div>

         <h1 class='title'> Igor Gawryś </h1>

         <p class='subtitle'> Full Stack Developer live in Gdynia, Poland </p>

          <div class='row mt2'>

            <button class='btn btn-outline' >
                Projects
            </button>

            <button class='btn btn-outline ml2' >
                Skills
            </button>

          </div>

        </div>

      </div>

  </section>
</template>

<style scoped>

.overlay {

  background:
     linear-gradient(
       90deg, rgba(36,0,6,0.3) 0%, 
       rgba(121,9,9,0.3) 35%, 
       rgba(108,31,39,0.3) 42%, 
       rgba(255,0,86,0.3) 100%);

   background-size: cover;

   position: absolute;

   z-index: 1;

   height: 100vh;

   width: 100%;
    
}

.overlay-image {

  z-index: -1;

  background-image: url( '~assets/images/background.jpg' );

  height: 100vh;

  width: 100%;

  position: absolute;
  
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.row {
  flex-flow: row wrap;
}

.col-md-3 {

  flex: 1 30%;

}

.btn {

  padding: 3%;

  padding-left: 12%;

  padding-right: 12%;
  

}

.btn-outline {

   background: none;

   border: 2px solid white;

   font-size: 20px;

   color: #ffff;

   font-weight: bold;

}

.btn-outline:hover {

  background-color: white;

  color:  #000;

  cursor: pointer;

}

.ml2 {

  margin-left: 20px;


}

.mt2 {

  margin-top: 20px;

}

</style>