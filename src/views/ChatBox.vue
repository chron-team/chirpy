<template>
    <!-- Content -->
    <div class="relative w-full">
        <div class="lg:mt-8 lg:pb-20" style="min-height: calc(100vh - 250px);">
            <ul class="space-y-5 overflow-auto" id="conversation" ref="conversation_ref">
                <template v-for="message in messages">
                    <UserBubble :prompt="message.content" v-if="message.role == 'user'"></UserBubble>
                    <AIBubble :answer="message.content" v-if="message.role == 'assistant'"></AIBubble>
                </template>
            </ul>
        </div>

        <!-- Search -->
        <footer
            class="max-w-4xl mx-auto sticky bottom-0 z-10 p-3 sm:py-6 bg-gradient-to-t from-white dark:from-slate-800 to-transparent">
            <!-- Input -->
            <div class="relative">
                <textarea
                    class="p-4 pb-12 block w-full bg-gray-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Ask me anything..." v-model="prompt" @keydown.enter.native.prevent="send"></textarea>

                <!-- Toolbar -->
                <div class="absolute bottom-px inset-x-px p-2 rounded-b-md bg-gray-100 dark:bg-slate-800">
                    <div class="flex justify-between items-center">
                        <!-- Button Group -->
                        <div class="flex items-center">
                            <!-- Mic Button -->
                            <button type="button"
                                class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                <Microphone class="w-4"></Microphone>
                            </button>
                            <!-- End Mic Button -->

                            <!-- Attach Button -->
                            <button type="button"
                                class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                <Attachment class="w-4"></Attachment>
                            </button>
                            <!-- End Attach Button -->
                        </div>
                        <!-- End Button Group -->

                        <!-- Button Group -->
                        <div class="flex items-center gap-x-1">
                            <!-- Send Button -->
                            <button type="button"
                                class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                @click="send">
                                <SendDiagonal class="w-4 inline-block scale-x-[-1]"></SendDiagonal>
                            </button>
                            <!-- End Send Button -->
                        </div>
                        <!-- End Button Group -->
                    </div>
                </div>
                <!-- End Toolbar -->
            </div>
            <!-- End Input -->
        </footer>
        <!-- End Search -->
    </div>
    <!-- End Content -->
</template>

<script lang="ts" setup>
import { Microphone, Attachment, SendDiagonal } from '@iconoir/vue';
import UserBubble from "../components/UserBubble.vue";
import AIBubble from "../components/AIBubble.vue";
import OpenAI from "openai";
import { onMounted, ref } from 'vue';
import { api_key } from '../data/data';

const conversation_ref = ref()
let openai: any = null
const model_type = ref("gpt-3.5-turbo")

interface IMessage { role: "system" | "user" | "assistant"; content: string }
const messages = ref<IMessage[]>([]);
const prompt = ref("")

onMounted(() => {
    if (!api_key.value) { alert("Please enter your OpenAI API key in setting page.") }
    openai = new OpenAI({ apiKey: api_key.value, dangerouslyAllowBrowser: true });
})

async function send() {
    if (!api_key.value) {
        alert("Please enter your OpenAI API key in setting page.")
        return
    }
    if (!prompt.value) {
        alert("Please enter your question.")
        return
    }

    messages.value.push({ role: "user", content: prompt.value })
    prompt.value = ""

    const completion = await openai.chat.completions.create({
        model: model_type.value,
        messages: messages.value,
        stream: true,
    });
    messages.value.push({ role: "assistant", content: "" })

    for await (const chunk of completion) {
        messages.value[messages.value.length - 1].content += chunk.choices[0].delta.content || ''
    }
}
</script>