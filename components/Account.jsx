import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { StyleSheet, View, Alert, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Session } from '@supabase/supabase-js';
import Avatar from './Avatar';
import tw from 'tailwind-react-native-classnames';

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
        console.log(avatarUrl)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const updates = {
        id: session?.user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={tw`p-4`}>
  <View style={tw`my-5`}>
    <Text style={tw`text-lg font-bold text-gray-700`}>Profile</Text>
    <Avatar
        size={200}
        url={avatarUrl}
        onUpload={(url) => {
          setAvatarUrl(url)
          updateProfile({ username, website, avatar_url: url })
        }}
      />

    {/* Email Field */}
    <View>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={session?.user?.email}
        editable={false}
      />
    </View>

    {/* Username Field */}
    <View>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
    </View>

    {/* Website Field */}
    <View>
      <Text style={styles.label}>Website</Text>
      <TextInput
        style={styles.input}
        placeholder="Website"
        value={website}
        onChangeText={setWebsite}
      />
    </View>

    <TouchableOpacity
      style={tw`bg-purple-500 py-3 px-6 rounded-lg mt-4`}
      onPress={() => updateProfile({ username, website, avatar_url: avatarUrl })}
      disabled={loading}
    >
      <Text style={tw`text-white font-bold text-center`}>
        {loading ? 'Loading ...' : 'Update'}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={tw`py-3 px-6 mt-4 rounded-lg border border-gray-400`}
      onPress={() => {
        supabase.auth.signOut()
      }}
    >
      <Text style={tw`text-center text-gray-800`}>Sign Out</Text>
    </TouchableOpacity>
  </View>
</View>
  );
}


const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    marginTop: 8,
    borderRadius: 6,
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 4,
  }
});
