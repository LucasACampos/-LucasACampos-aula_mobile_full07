import { Text, View } from "react-native";
import { Planet } from "../../models/planet";
import styles from "./styles";

interface IProps{
    title: string;
    subTitle?: string;
    onPress?: () => void;
}

export default function ListItem(props : IProps) {
    return (
        <View 
            style={styles.container} 
            onTouchEnd={props.onPress}
        >
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subTitle}>{props.subTitle}</Text>
        </View>
    );
}