import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import {
    CircleChevronLeft,
} from "lucide-react-native";

export default function ForgotPassword() {
    return (
        <SafeAreaView>
            <View style={{ flex: 1, paddingHorizontal: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <TouchableOpacity style={{ flex:1}}>
                    <CircleChevronLeft/>
                </TouchableOpacity>
                    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{ fontSize: 13, fontWeight: '600', color: '#000'}}>
                            Forgot Password Page
                        </Text>
                    </View>
                    <View style={{ flex:1}}/>
            </View>
            </SafeAreaView>
    );
}

const styles = {

}