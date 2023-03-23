import { StyleSheet, Platform } from 'react-native';
import { moderateScale, moderateScaleVertical } from '../../config/responsiveSize';

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderRadius: moderateScale(5),
        borderColor: '#222',
        paddingVertical: Platform.OS === 'ios' ? moderateScaleVertical(16) : null,
        paddingHorizontal: moderateScale(15),
    }
});

export default styles;