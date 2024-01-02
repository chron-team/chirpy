<template>
    <!-- Chat Bubble -->
    <li class="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
        <span
            class="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-blue-600">
            <span class="text-sm font-medium text-white leading-none">
                <BreadSlice class="w-5"></BreadSlice>
            </span>
        </span>

        <div class="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
            <!-- Card -->
            <div class="space-y-3">
                <p class="text-sm text-gray-800 dark:text-white leading-loose">
                    {{ props.answer }}
                </p>
            </div>
            <!-- End Card -->

            <!-- Button Group -->
            <div>
                <div class="flex justify-between w-full">
                    <button type="button"
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-xs rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <PasteClipboard class="w-4"></PasteClipboard>
                        Copy
                    </button>
                    <button type="button"
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-xs rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <RefreshDouble class="w-4"></RefreshDouble>
                        New answer
                    </button>
                </div>
            </div>
            <!-- End Button Group -->
        </div>
    </li>
    <!-- End Chat Bubble -->
</template>

<script lang="ts" setup>
import { BreadSlice, PasteClipboard, RefreshDouble } from '@iconoir/vue';
const props = defineProps(['answer'])
</script>