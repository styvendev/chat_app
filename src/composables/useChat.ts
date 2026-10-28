import type { ChatMessage } from "@/interfaces/chat-message.interface"
import { sleep } from "@/helpers/sleep"
import { ref } from "vue"

export const useChat = () => {

  const messages = ref<ChatMessage[]>([])

  const api = async () => {
    const resp = await fetch('https://yesno.wtf/api')
    const data = await resp.json()
    return data
  }

  const onMessage = async (text:string) => {
    messages.value.push({
      id: (messages.value.length + 1),
      text,
      isSentByUser: true
    })

    if(!text.endsWith('?')) return

    await sleep(1.5)
    try{
      const { answer, image } = await api()
      messages.value.push({
        id: (messages.value.length + 1),
        text: answer,
        isSentByUser: false,
        imageUrl: image
      })
    } catch (error) {
      console.log(error)
      messages.value.push({
        id: (messages.value.length + 1),
        text: 'Error - Intente mas tarde',
        isSentByUser: false
      })
    }

  }

  return {
    // Properties
    messages,

    // Methods
    onMessage
  }
}
