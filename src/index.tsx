/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent, useState} from 'react';
import {
  FlatList,
  Image,
  ImageProps,
  ImageStyle,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Fonts} from './assets/fonts';

export type Props = {
  /**
   * screen heading (by default it is FAQ's)
   **/
  title?: string;
  /**
   * this style Effect to title View
   **/
  titleContainerStyle?: ViewStyle;
  /**
   * this style Effect to title (you can customize title according to your requirements)
   **/
  titleStyle?: TextStyle;
  /**
   * this style Effect to title border (by default it's green you can customize according to your requirements)
   **/
  titleBorderStyle?: ViewStyle;
  /**
   * this value for title bottomLine shown or not (by default it's true)
   **/
  titleBottomLine?: boolean;
  /**
   * this value for data of contain.
   **/
  data: Required<Array<{question: string; answer: string}>>;
  /**
   * this style Effect to your listContainer
   **/
  contentContainerStyle?: ViewStyle;
  /**
   * this style Effect to your list item Container
   **/
  itemContainerStyle?: ViewStyle;
  /**
   * this style Effect to your active list item Container
   **/
  activeBackgroundColor?: string;
  /**
   * this style Effect to your inActive list item Container
   **/
  inActiveBackgroundColor?: string;
  /**
   * this style Effect to your list item Questions
   **/
  questionStyle?: TextStyle;
  /**
   * this icon use for your list item collapseIcon
   **/
  collapseIcon?: ImageProps;
  /**
   * this icon use for your list item expandIcon
   **/
  expandIcon?: ImageProps;
  /**
   * this style use for your list item icons
   **/
  iconStyle?: ImageStyle;
  /**
   * this style use for your list item answer
   **/
  answerStyle?: TextStyle;
  /**
   * this value use for your list item arrow shown or not
   * by default it's true
   **/
  isShowIcon?: boolean;
  /**
   * this value use for search functionlity shown or not
   * by default it's true
   **/
  isSearchable?: boolean;
  /**
   * this style use for your search Container
   **/
  searchContainerStyle?: ViewStyle;
  /**
   * this style use for your search textInput
   **/
  searchInputStyle?: ViewStyle;
  /**
   * this style use for your search Icon
   **/
  searchIconStyle?: ImageStyle;
  /**
   * this icon use for your search icon
   **/
  searchIcon?: ImageProps;
};

const FAQs: FunctionComponent<Props> = ({
  contentContainerStyle = {paddingBottom: 100},
  collapseIcon = require('./assets/down.png'),
  searchIcon = require('./assets/search.png'),
  expandIcon = require('./assets/up.png'),
  activeBackgroundColor = '#e9fff3',
  inActiveBackgroundColor = 'white',
  titleBottomLine = true,
  isShowIcon = true,
  isSearchable = true,
  searchContainerStyle,
  titleContainerStyle,
  itemContainerStyle,
  titleBorderStyle,
  searchInputStyle,
  searchIconStyle,
  questionStyle,
  title = "FAQ's",
  titleStyle,
  data,
  iconStyle,
  answerStyle,
}) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const [input, setInput] = useState<string>('');
  const [filterData, setFilterData] = useState([] as any[]);

  const handleActiveIndex = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: {question: string; answer: string};
    index: number;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => handleActiveIndex(index)}
        style={[
          styles.renderContainerStyle,
          itemContainerStyle,
          {
            backgroundColor:
              activeIndex === index
                ? activeBackgroundColor
                : inActiveBackgroundColor,
          },
        ]}>
        <View style={styles.buttonStyle}>
          <Text style={[styles.questionStyle, questionStyle]}>
            {item.question}
          </Text>
          {isShowIcon && (
            <Image
              source={activeIndex === index ? expandIcon : collapseIcon}
              style={[styles.iconStyle, iconStyle]}
              resizeMode="contain"
            />
          )}
        </View>
        {activeIndex !== null && activeIndex === index && (
          <Text style={[styles.answerStyle, answerStyle]}>{item.answer}</Text>
        )}
      </TouchableOpacity>
    );
  };

  const handleSearch = () => {
    if (input.length > 0) {
      const filteredResults = data.filter(item =>
        item.answer.toLowerCase().includes(input.toLowerCase()),
      );
      setFilterData(filteredResults);
    } else {
      setFilterData([]);
    }
    Keyboard.dismiss();
  };

  return (
    <View style={[styles.titleContainer, titleContainerStyle]}>
      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      {titleBottomLine && (
        <View style={[styles.titleBorderStyle, titleBorderStyle]} />
      )}
      {isSearchable && (
        <View style={[styles.searchContainerStyle, searchContainerStyle]}>
          <TextInput
            placeholder="you can search here"
            onChangeText={setInput}
            onSubmitEditing={handleSearch}
            style={[styles.searchInputStyle, searchInputStyle]}
          />
          <TouchableOpacity onPress={handleSearch}>
            <Image
              source={searchIcon}
              style={[styles.searchIconStyle, searchIconStyle]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={filterData.length > 0 ? filterData : data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={contentContainerStyle}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FAQs;

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 10,
  },
  titleStyle: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 20,
    marginLeft: 20,
    color: 'black',
  },
  titleBorderStyle: {
    backgroundColor: '#14a95d',
    height: 3,
    width: 40,
    marginLeft: 20,
  },
  searchContainerStyle: {
    marginHorizontal: 15,
    backgroundColor: '#d2d4d2',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInputStyle: {
    color: 'black',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
    flex: 1,
  },
  searchIconStyle: {
    width: 22,
    height: 22,
    tintColor: 'black',
  },
  renderContainerStyle: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    marginVertical: 2,
  },
  questionStyle: {
    color: '#14a95d',
    flex: 1,
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 14,
  },
  answerStyle: {
    color: 'black',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: '#14a95d',
  },
});
