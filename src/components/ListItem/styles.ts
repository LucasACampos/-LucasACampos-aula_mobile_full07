import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "gray"
    },

    title: {
        fontSize: 22
    },

    subTitle: {
        color: "gray"
    },

});