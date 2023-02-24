<script setup lang="ts">

import '../assets/chat.css'
import Messages from '../components/chat/ChatMessages.vue'
import Input from '../components/chat/ChatInput.vue'
import { useChatMessageStore } from '@/stores/chat_message'
import type { ChatMessage } from '@/types/chat_message';

const chatMessageStore = useChatMessageStore()
const generateUsername = () => `Member ${Math.ceil(Math.random() * 1000)}`

chatMessageStore.setUsername(generateUsername())
chatMessageStore.socket.on('chat', (message: ChatMessage) => chatMessageStore.incoming(message))

</script>

<template>
    <div class="container mx-auto">
        <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
            <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                <div class="relative flex items-center space-x-4">
                    <div class="flex flex-col leading-tight">
                        <div class="text-2xl mt-1 flex items-center">
                        <span class="text-gray-700 mr-3">{{ chatMessageStore.username }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Messages :messageStore="chatMessageStore" />
            <Input :messageStore="chatMessageStore" />
        </div>
    </div>
</template>