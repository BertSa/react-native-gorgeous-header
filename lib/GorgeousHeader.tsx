import * as React from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./GorgeousHeader.style";

interface IProps {
  menuImageStyle?: any;
  menuImageSource: any;
  menuImageOnPress: () => void;
  profileImageStyle?: any;
  profileImageSource: any;
  profileImageOnPress: () => void;
  title?: string;
  subtitle?: string;
  titleTextStyle?: any;
  subtitleTextStyle?: any;
}

interface IState {}

class GorgeousHeader extends React.Component<IProps, IState> {
  renderTopBar = () => {
    const {
      menuImageStyle,
      menuImageSource,
      menuImageOnPress,
      profileImageStyle,
      profileImageSource,
      profileImageOnPress,
    } = this.props;
    return (
      <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.floatLeft} onPress={menuImageOnPress}>
          <Image
            source={menuImageSource}
            style={menuImageStyle || styles.menuImageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.floatRight}
          onPress={profileImageOnPress}
        >
          <Image
            source={profileImageSource}
            style={profileImageStyle || styles.profileImageStyle}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderContent = () => {
    const {
      title = "Order",
      subtitle = "Healthy food can keep you fit.",
      titleTextStyle,
      subtitleTextStyle,
    } = this.props;

    if (!title){
      return null;
    }

    return (
      <View style={styles.contentContainer}>
        <Text style={titleTextStyle || styles.titleTextStyle}>{title}</Text>
        {subtitle && <Text style={subtitleTextStyle || styles.subtitleTextStyle}>
          {subtitle}
        </Text>}
      </View>
    );
  };

  render() {
    return (
      <View>
        {this.renderTopBar()}
        {this.renderContent()}
      </View>
    );
  }
}

export default GorgeousHeader;
