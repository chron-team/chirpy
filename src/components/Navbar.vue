<template>
    <div
        class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center py-4">
            <!-- Navigation Toggle -->
            <button type="button" class="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar"
                aria-controls="application-sidebar" aria-label="Toggle navigation">
                <span class="sr-only">Toggle Navigation</span>
                <Menu class="w-4"></Menu>
            </button>
            <!-- End Navigation Toggle -->

            <!-- Breadcrumb -->
            <ol class="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
                <li class="flex items-center text-sm text-gray-800 dark:text-gray-400">
                    toasto
                    <NavArrowRight class="ml-3 w-4 mr-3"></NavArrowRight>
                </li>
                <li class="text-sm text-gray-800 truncate dark:text-gray-400" aria-current="page">
                    {{ router.currentRoute.value.meta.title }}
                </li>
            </ol>
            <!-- End Breadcrumb -->
        </div>
    </div>

    <!-- Sidebar -->
    <div id="application-sidebar"
        class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-8 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
        <nav class="hs-accordion-group w-full h-full flex flex-col" data-hs-accordion-always-open>
            <div class="px-6">
                <RouterLink to="/">
                    <div class="flex justify-left items-center text-lg font-semibold dark:text-white" aria-label="Brand">
                        <BreadSlice class="mr-2"></BreadSlice>
                        toasto
                    </div>
                </RouterLink>
            </div>

            <div class="h-full">
                <ul class="space-y-1.5 p-4">
                    <li>
                        <RouterLink to="/">
                            <div class="flex items-center gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#">
                                <Plus class="w-4"></Plus>
                                New chat
                            </div>
                        </RouterLink>
                    </li>
                    <li>
                        <a class="flex items-center gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="#">
                            <Download class="w-4"></Download>
                            Save conversation
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Footer -->
            <div class="mt-auto">
                <div class="p-4 border-t border-gray-200 dark:border-gray-700">
                    <RouterLink to="/setting">
                        <div
                            class="flex items-center gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <Settings class="w-4"></Settings>
                            Settings
                        </div>
                    </RouterLink>
                </div>
            </div>
            <!-- End Footer -->
        </nav>
    </div>
    <!-- End Sidebar -->
</template>

<script lang="ts" setup>
import { BreadSlice, Download, Menu, NavArrowRight, Plus, Settings } from '@iconoir/vue';
import router from '../router';
</script>