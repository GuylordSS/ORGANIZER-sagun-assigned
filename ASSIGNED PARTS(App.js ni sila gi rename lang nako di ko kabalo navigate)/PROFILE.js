import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const App = () => {
  const [profile, setProfile] = useState({
    name: 'Organizer',
    username: 'Organizer',
    email: 'eventO@example.com',
    phoneNumber: '123-456-7890',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [editing, setEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleSaveProfile = () => {
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  const handleProfileImageChange = () => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source);
      }
    });
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.profilePictureContainer} onPress={handleProfileImageChange}>
        {profileImage ? (
          <Image source={profileImage} style={styles.profilePicture} />
        ) : (
          <Image
            source={require('./assets/profile-picture.jpg')}
            style={styles.profilePicture}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.nameText}>{profile.name}</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={profile.username}
          onChangeText={(text) => setProfile({ ...profile, username: text })}
          editable={false}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={profile.email}
          onChangeText={(text) => setProfile({ ...profile, email: text })}
          editable={editing}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={profile.phoneNumber}
          onChangeText={(text) => setProfile({ ...profile, phoneNumber: text })}
          editable={editing}
        />
      </View>
      {editing && (
        <>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Current Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Current Password"
              value={profile.currentPassword}
              onChangeText={(text) => setProfile({ ...profile, currentPassword: text })}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>New Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              value={profile.newPassword}
              onChangeText={(text) => setProfile({ ...profile, newPassword: text })}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Confirm New Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm New Password"
              value={profile.confirmNewPassword}
              onChangeText={(text) => setProfile({ ...profile, confirmNewPassword: text })}
              secureTextEntry={true}
            />
          </View>
        </>
      )}
      <View style={styles.buttonContainer}>
        {editing ? (
          <>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancelEdit}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={() => setEditing(true)}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  profilePictureContainer: {
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  fieldContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFC42B',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    color: '#fff',
    backgroundColor: '#09090B',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  editButton: {
    backgroundColor: '#FFC42B',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  editButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#FFC42B',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  saveButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#666',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
