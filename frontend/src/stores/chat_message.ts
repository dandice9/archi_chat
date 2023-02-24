import type { ChatMessage } from '@/types/chat_message';
import { defineStore } from 'pinia'
import { io } from "socket.io-client";

const socket = io()

export const useChatMessageStore = defineStore('chat_message', {
  state: () => ({
    message_list: Array<ChatMessage>(),
    username: "",
    user_message: "",
    socket
  }),
  getters: {
    total_messages: (state) => state.message_list.length
  },
  actions: {
    incoming(message: ChatMessage){
      this.message_list.push(message)
    },
    setUsername(username : string){
      this.username = username
    },
    setMessage(message : string){
      this.user_message = message
    },
    sendMessage(message: ChatMessage){
      socket.emit('chat', message)
    }
  }
})

export type ChatMessageStore = ReturnType<typeof useChatMessageStore>
