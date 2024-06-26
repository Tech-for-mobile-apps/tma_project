import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://ctvvsnhjiznsubcgtxux.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dnZzbmhqaXpuc3ViY2d0eHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwNTgxNTksImV4cCI6MjAyODYzNDE1OX0.iyRjFp_w2EOXc5YuH0L4Hl-RMCD7Q9Z6yzuRyDMdw5o';
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})