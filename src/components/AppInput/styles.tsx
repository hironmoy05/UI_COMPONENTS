import { StyleSheet, Platform } from 'react-native';
import { moderateScale, moderateScaleVertical } from '../../config/responsiveSize';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: moderateScaleVertical(5),
    },
    inputLabel: {
        marginBottom: moderateScaleVertical(2),
    },
    input: {
        borderWidth: 1,
        borderRadius: moderateScale(5),
        borderColor: '#222',
        paddingVertical: Platform.OS === 'ios' ? moderateScaleVertical(16) : null,
        paddingHorizontal: moderateScale(15),
    },
    iconContainer: {
        position: 'absolute',
        top: moderateScaleVertical(10),
        right: moderateScale(10),
        bottom: 0,
    },
    placeholderText: {
        position: 'absolute',
        left: moderateScale(45),
    }
});

export default styles;