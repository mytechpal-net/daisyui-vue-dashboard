<script setup>
import NavbarMenu from '@/components/NavbarMenu.vue'
import SideMenu from '@/components/SideMenu.vue'
import { Bars3Icon, ComputerDesktopIcon } from '@heroicons/vue/24/outline'
</script>
<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <div class="w-full navbar bg-base-100 h-16 shadow-md">
          <div class="navbar-start">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                <Bars3Icon class="size-6" />
              </label>
            </div>
          </div>

          <div class="navbar-end">
            <div class="flex-none hidden lg:block align-top">
              <!-- Navbar menu -->
              <NavbarMenu />
            </div>
          </div>
      </div>
      <!-- Page content here -->
      <div class="max-w-[100vw] p-6 pb-16 xl:pr-2">
        <router-view></router-view>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <aside class="bg-base-100 min-h-screen w-80">
        <div class="base-100 sticky top-0 z-20 h-16 items-center gap-2 px-4 py-2 lg:flex justify-center  shadow-md">
          <a class="btn btn-ghost">
            <ComputerDesktopIcon class="size-6" />
            app name
          </a>
          <div class="text-xs">v0.0.1 - test</div>
        </div>
        <!-- Sidebar Menu -->
        <SideMenu />
      </aside>
    </div>
  </div>
</template>