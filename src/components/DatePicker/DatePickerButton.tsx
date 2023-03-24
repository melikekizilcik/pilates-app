import React, {FC, useState} from "react";
import { SafeAreaView, Text, View, TouchableWithoutFeedback } from "react-native";
import styles from "./DatePickler.styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface IDatePickerButton{
    title : string,
    onPress : () => void,
}

const DatePickerButton: FC<IDatePickerButton> = ({title, onPress}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: unknown) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };

    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
    </TouchableWithoutFeedback>
    );
}

export default DatePickerButton;