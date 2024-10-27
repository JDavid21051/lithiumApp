import {textErrorStyles} from './text-error.style';
import {Text} from 'react-native-paper';

const TextError = ({text, bold}: { text: string, bold?: boolean }) => (
    <Text style={bold ? textErrorStyles.bold : textErrorStyles.text}>{text}</Text>
);

export default TextError;