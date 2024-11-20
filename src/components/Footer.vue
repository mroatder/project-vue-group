<template>
  <footer class="footer bg-dark text-white py-4">
    <div class="p-4 d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 MOVFLIX, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
        </ul>
    </div>
  </footer>
  
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  margin-top: 30px;
}
</style>
