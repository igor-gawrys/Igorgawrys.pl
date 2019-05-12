<template>
  <footer>

    <div>

      <span> Wszelkie prawa zastrzeżone &copy; {{ new Date().getFullYear() }} </span>
    </div>

  </footer>
</template>

<style scoped>

 footer {

     height: 7vh;

     width: 100%;

     background:  linear-gradient(
         to right top, 
         #121011, 
         #161415, 
         #191718, 
         #1c1a1b, 
         #1f1d1e
    );

    display: flex;
    justify-content: center;
    align-items: center;

 }

 footer > div {

    margin-left: 10%;

    margin-right: 10%;

    color: white;

 }

</style>