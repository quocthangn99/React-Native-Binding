/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import EmojiScreen from './screen/emoji/EmojiScreen';
import NewFeedScreen from './screen/newfeed/NewFeedScreen';

AppRegistry.registerComponent(appName, () => NewFeedScreen);

// AppRegistry.registerComponent(appName, () => EmojiScreen);
