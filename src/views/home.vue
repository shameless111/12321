
<template>
    <el-container>
        <el-aside width="200px"><el-menu :default-active="$route.path" router>
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>工作台</span>
                    </template>
                    <el-menu-item index="1-1">工作台</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>行车管理</span>
                    </template>
                    <el-menu-item index="2-2">月卡管理</el-menu-item>
                </el-sub-menu>
            </el-menu>

        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

</script>

<style lang="scss" scoped></style>