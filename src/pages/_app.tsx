import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Script from "next/script";
import React, {createContext, useState} from "react";
import {NotificationsBar} from "@/components";

export type NotificationsContextType = {
  notifications: { title: string, type: string, text: string, id: string }[],
  sendNotification: (title: string, type: string, text: string) => void,
  deleteNotification: (id: string) => void,
}

export const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [],
  sendNotification: () => {
  },
  deleteNotification: () => {
  },
})

export default function App({Component, pageProps}: AppProps) {
  const [notifications, setNotifications] = useState<{ title: string, type: string, text: string, id:string }[]>([])

  function sendNotification(title: string, type: string, text: string) {
    const id = (Date.now() + Math.random()).toString()
    setNotifications([...notifications, {title, type, text, id}])
  }

  function deleteNotification(id: string) {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  return <>
    <NotificationsContext.Provider value={{
      notifications,
      sendNotification,
      deleteNotification
    }}>
      <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/4217917e45.js" crossOrigin="anonymous"/>
      <NotificationsBar/>
    </NotificationsContext.Provider>
  </>
}
