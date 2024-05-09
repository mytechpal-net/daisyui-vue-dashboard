<script setup>
import { AdjustmentsHorizontalIcon, BellIcon } from '@heroicons/vue/24/outline';
</script>
<template>
  <!--Notification menu -->
  <button class="btn btn-ghost btn-circle">
    <BellIcon class="size-6" />
  </button>  
  <!-- settings menu -->
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
      <div class="rounded-full">
        <AdjustmentsHorizontalIcon class="size-6" />
      </div>
    </div>
    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Settings</a></li>
      <li><a>Logout</a></li>
    </ul>
  </div>
</template>