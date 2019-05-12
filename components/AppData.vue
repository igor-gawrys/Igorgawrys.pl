<template>
  <section class="container">
        
        <div class='border-mail' >

           <i class="far fa-envelope"></i>

        </div>

         <div class=' border-github' >

           <i class="fab fa-github"></i>

        </div>

         <div class='border-facebook' >

           <i class="fab fa-facebook"></i>

        </div>

        <div class='border-youtube' >

           <i class="fab fa-youtube"></i>

        </div>

  </section>
</template>

<style scoped>

.container {
  min-height: 30vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: linear-gradient( 
      to right top, 
      #282b2e, 
      #2c2f31, 
      #303234, 
      #353638, 
      #393a3b 
 );

}

.col-md-3 {

  flex: 1 30%;

}

.ml2 {

  margin-left: 20px;


}

.mt2 {

  margin-top: 20px;

}

.mb2 {

  margin-bottom: 20px;

}

.mt5 {

  margin-top: 50px;

}

.border-mail {

  font-size: 180px;

  color: white;

  background-color: #dc4e41;

  height: 30vh;

  width: 25%;

}

.border-github {

  font-size: 180px;

  color: white;

  background-color: #35465c;

  height: 30vh;

  width: 25%;

}

.border-facebook {

  font-size: 180px;

  color: white;

  background-color: #3b5998;

  height: 30vh;

  width: 25%;

}

.border-youtube {

  font-size: 180px;

  color: white;

  background-color: #b31217;

  height: 30vh;

  width: 25%;

}

</style>