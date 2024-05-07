<script setup>
import Navbar from '@/components/Navbar.vue'
import SideMenu from '@/components/SideMenu.vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'
</script>
<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar bg-base-300">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <Bars3Icon class="size-6" />
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">Navbar Title</div>
        <div class="flex-none hidden lg:block">
          <!-- Navbar menu -->
          <Navbar />
        </div>
      </div>
      <!-- Page content here -->
      Content
      <router-view></router-view>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <!-- Sidebar Menu -->
      <SideMenu />
    </div>
  </div>
</template>