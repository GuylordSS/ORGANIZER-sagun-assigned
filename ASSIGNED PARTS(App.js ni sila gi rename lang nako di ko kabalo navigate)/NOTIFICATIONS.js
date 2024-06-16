import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

const initialNotifications = [
  {
    id: '1',
    source: 'Event Update',
    description: 'Buffet Party has ended.',
    read: false
  },
  {
    id: '2',
    source: 'Event Update',
    description: 'Kate and Mark`s wedding has started.',
    read: false
  },
  {
    id: '3',
    source: 'Billing',
    description: 'The total cost of the event has been updated.',
    read: false
  },
  {
    id: '4',
    source: 'Admin Feedback',
    description: 'Admin suggested Service Provider for your event.',
    read: false
  },
  {
    id: '5',
    source: 'Billing',
    description: 'The total cost of the event has been updated.',
    read: false
  },
  {
    id: '6',
    source: 'Event Update',
    description: 'This event has ended. Thank you for participating!',
    read: false
  },
  {
    id: '7',
    source: 'Participants Feedback',
    description: '10 people sent feedback for the event.',
    read: false
  },
  {
    id: '8',
    source: 'Participants Feedback',
    description: '12 people sent feedback for the event.',
    read: false
  }
];

const NotificationList = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleNotificationPress = (item) => {
    setSelectedNotification(item);
    const updatedNotifications = notifications.map(notification =>
      notification.id === item.id ? { ...notification, read: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  const renderNotification = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.notificationItem,
        item.read && styles.notificationRead 
      ]}
      onPress={() => handleNotificationPress(item)}
    >
      <Text style={styles.notificationSource}>{item.source}</Text>
      <Text style={styles.notificationDescription}>
        {item.description.split(' ').slice(0, 10).join(' ')}...
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
      />
      {selectedNotification && (
        <Modal
          visible={true}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setSelectedNotification(null)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <TouchableHighlight
                style={styles.closeButton}
                onPress={() => setSelectedNotification(null)}
                underlayColor='#ccc'
              >
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableHighlight>
              <Text style={styles.modalTitle}>{selectedNotification.source}</Text>
              <Text style={styles.modalDescription}>{selectedNotification.description}</Text>
              <TouchableOpacity style={styles.goToButton} onPress={() => {}}>
                <Text style={styles.goToButtonText}>Go to Notification</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  notificationItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
  },
  notificationRead: {
    opacity: 0.6,
  },
  notificationSource: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#333',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFC42B',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
    color: '#000',
  },
  goToButton: {
    backgroundColor: '#FFC42B',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  goToButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default NotificationList;
