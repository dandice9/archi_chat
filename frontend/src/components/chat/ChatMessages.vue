<script setup lang="ts">
import type { ChatMessageStore } from '@/stores/chat_message';

defineProps<{
    messageStore: ChatMessageStore
  }>()
</script>
<template>
    <div id="messages" class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        
        <div v-for="chat_message in messageStore.message_list">
            <div v-if="chat_message.name === messageStore.username">
                <div class="chat-message my-message">
                    <div class="flex items-end justify-end">
                        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                            <div>
                                <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                    {{ chat_message.message }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="chat-message other-message">
                    <div class="flex items-end">
                        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                            <div>
                                <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                    {{ chat_message.message }}
                                </span>
                            </div>
                        </div>
                        <div>user {{Math.ceil(Math.random() * 1000)}}</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>