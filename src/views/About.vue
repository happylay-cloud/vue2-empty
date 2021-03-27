<template>
  <div class="about">
    <h1>关于页面</h1>
    <div v-permission="['system:user:add']">
      超级管理员用户
    </div>
    <div v-permission="['system:user:delete']">
      普通用户
    </div>
  </div>
</template>
